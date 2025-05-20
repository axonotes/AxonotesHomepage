import {GITHUB_TOKEN} from "$env/static/private";
import NodeCache from "node-cache";
import type {PageServerLoad} from "./$types";
import {devLog} from "$lib/devLog";

// Cache settings
const CACHE_TTL_SECONDS = 30 * 60; // 30 minutes
const CACHE_CHECK_PERIOD_SECONDS = 1 * 60; // 1 minute
const PREFETCH_BEFORE_EXPIRY_MS = 2 * 60 * 1000; // 2 minutes

// GitHub API
const GITHUB_API_VERSION = '2022-11-28';
const GITHUB_ACCEPT_HEADER = 'application/vnd.github.v3+json';

// GitHub API constants
const OWNER = 'axonotes';
const REPO = 'AxonotesCore';
const LABEL = 'feature';
const CACHE_KEY = `github-features-${OWNER}-${REPO}`;
const PAGE_SIZE = 100;

// Initialze cache:
const cache = new NodeCache({
    stdTTL: CACHE_TTL_SECONDS,
    checkperiod: CACHE_CHECK_PERIOD_SECONDS
});


interface Feature {
    name: string;
    description: string | null;
    short_description: string | null;
    upvotes: number;
    url: string;
    // id is added for Svelte's #each key, even though it's not used
    id: number;
}

interface CachedData {
    features: Feature[];
    timestamp: string;
}

interface GitHubIssue {
    id: number;
    title: string;
    body: string | null;
    html_url: string;
    reactions?: {
        '+1': number;
        [key: string]: any;
    };
}

interface LoadOutput {
    features: Feature[];
    lastFetched: string | null;
    error: Error | null;
}

export const load: PageServerLoad<LoadOutput> = async ({fetch}) => {
    const cachedData = cache.get<CachedData>(CACHE_KEY);
    if (cachedData) {
        devLog(
            `[${new Date().toISOString()}] Serving features from cache for ${CACHE_KEY}`
        )

        const expirationTime = cache.getTtl(CACHE_KEY);
        if (
            expirationTime &&
            expirationTime - Date.now() < PREFETCH_BEFORE_EXPIRY_MS
        ) {
            devLog(
                `[${new Date().toISOString()}] Cache for ${CACHE_KEY} expiring soon. Prefetching features.`
            );
            fetchFeatures(fetch); // This is fire-and-forget, which is fine for prefetch
        }

        return {
            features: cachedData.features,
            lastFetched: cachedData.timestamp,
            error: null
        }
    }

    return fetchFeatures(fetch);
}

function parseLinkHeader(header: string | null): { [key: string]: string } {
    if (!header) {
        return {};
    }

    const links: { [key: string]: string } = {};
    const parts = header.split(",");

    parts.forEach((part) => {
        const section = part.split(";");
        if (section.length < 2) {
            return;
        }

        const urlMatch = section[0].match(/<(.*)>/);
        if (!urlMatch) {
            return;
        }
        const url = urlMatch[1];

        const relMatch = section[1].match(/rel="(.*)"/);
        if (!relMatch) {
            return;
        }
        const rel = relMatch[1];
        links[rel] = url;
    });

    return links;
}

function bodyToShortDescription(body: string | null): string | null {
    if (!body) {
        return null;
    }

    /*
    * For a short description, we just take the first line that doesn't start with a formatting like **
    * */

    const lines = body.split("\n");
    let shortDescription = null;
    for (const line of lines) {
        if (!line.startsWith("**") && line.trim() !== "") {
            shortDescription = line.trim();
            break;
        }
    }

    return shortDescription;
}

async function fetchFeatures(
    fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>,
): Promise<LoadOutput> {
    devLog(
        `[${new Date().toISOString()}] Fetching features from GitHub for ${CACHE_KEY}`,
    );

    if (!GITHUB_TOKEN) {
        console.warn(
            "No GitHub token found. Features will not be fetched from GitHub.",
        );
        return {
            features: [],
            lastFetched: null,
            error: {
                name: "MISSING_GITHUB_TOKEN",
                message:
                    "No GitHub token found. Features will not be fetched from GitHub.",
            },
        };
    }

    let allIssues: GitHubIssue[] = [];
    let nextPageUrl = `https://api.github.com/repos/${OWNER}/${REPO}/issues?labels=${LABEL}&state=open&per_page=${PAGE_SIZE}`;
    const headers: HeadersInit = {
        Accept: GITHUB_ACCEPT_HEADER,
        "X-GitHub-Api-Version": GITHUB_API_VERSION,
        Authorization: `Bearer ${GITHUB_TOKEN}`,
    };

    try {
        while (nextPageUrl) {
            devLog(
                `[${new Date().toISOString()}] Fetching page: ${nextPageUrl}`,
            );
            const response = await fetch(nextPageUrl, { headers });

            if (!response.ok) {
                let errorMessage = `GitHub API error: ${response.status} ${response.statusText}. URL: ${nextPageUrl}`;
                try {
                    const errorBody = await response.json();
                    errorMessage += ` Message: ${errorBody.message || "No specific message."}`;
                    if (errorBody.documentation_url) {
                        errorMessage += ` See: ${errorBody.documentation_url}`;
                    }
                } catch (e) {
                    const textError = await response.text();
                    errorMessage += ` Response: ${textError}`;
                }
                console.error(`[${new Date().toISOString()}] ${errorMessage}`);
                // Return partial data if some pages were fetched, or error if first page failed
                if (allIssues.length > 0) {
                    console.warn(
                        `[${new Date().toISOString()}] Returning partially fetched data due to API error on a subsequent page.`,
                    );
                    break; // Exit loop and process what we have
                }
                return {
                    features: [],
                    lastFetched: null,
                    error: {
                        name: "GITHUB_API_FETCH_ERROR",
                        message: "Failed to fetch features from GitHub.",
                    },
                };
            }

            const issuesOnPage = (await response.json()) as GitHubIssue[];

            if (!Array.isArray(issuesOnPage)) {
                console.error(
                    `[${new Date().toISOString()}] GitHub API did not return an array for issues. URL: ${nextPageUrl}. Response:`,
                    issuesOnPage,
                );
                if (allIssues.length > 0) {
                    console.warn(
                        `[${new Date().toISOString()}] Returning partially fetched data due to invalid API response on a subsequent page.`,
                    );
                    break;
                }
                return {
                    features: [],
                    lastFetched: null,
                    error: {
                        name: "GITHUB_API_INVALID_RESPONSE",
                        message: "GitHub API did not return an array for issues.",
                    },
                };
            }

            allIssues = allIssues.concat(issuesOnPage);

            const linkHeader = response.headers.get("Link");
            const links = parseLinkHeader(linkHeader);
            nextPageUrl = links.next; // If 'next' link doesn't exist, this will be undefined and loop will terminate
        }

        const features: Feature[] = allIssues.map((issue) => ({
            id: issue.id,
            name: issue.title,
            description: issue.body,
            short_description: bodyToShortDescription(issue.body),
            url: issue.html_url,
            upvotes: issue.reactions ? issue.reactions["+1"] : 0,
        }));

        features.sort((a, b) => b.upvotes - a.upvotes);

        const dataToCache: CachedData = {
            features,
            timestamp: new Date().toISOString(),
        };

        cache.set(CACHE_KEY, dataToCache);
        devLog(
            `[${new Date().toISOString()}] Cached ${features.length} features for ${CACHE_KEY}`,
        );

        return {
            features,
            lastFetched: dataToCache.timestamp,
            error: null,
        };
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : "An unknown error occurred";
        console.error(
            `[${new Date().toISOString()}] Critical error fetching features for ${CACHE_KEY}:`,
            errorMessage,
        );

        return {
            features: [],
            lastFetched: null,
            error: {
                name: "GITHUB_API_FETCH_ERROR",
                message: "Failed to fetch features from GitHub.",
            },
        };
    }
}
