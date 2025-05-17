import {GITHUB_TOKEN} from "$env/static/private";
import NodeCache from "node-cache";
import type {PageServerLoad} from "./$types";
import {devLog} from "$lib/devLog";

// Initialze cache:
const cache = new NodeCache({
    stdTTL: 300,     // Standard time-to-live: 5 minutes
    checkperiod: 60  // 1 minute
});

const OWNER = 'axonotes';
const REPO = 'AxonotesCore';
const CACHE_KEY = `github-features-${OWNER}-${REPO}`;

interface Feature {
    name: string;
    description: string | null;
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
        return {
            features: cachedData.features,
            lastFetched: cachedData.timestamp,
            error: null
        }
    }

    devLog(
        `[${new Date().toISOString()}] Fetching features from GitHub for ${CACHE_KEY}`
    )

    const apiUrl = `https://api.github.com/repos/${OWNER}/${REPO}/issues?labels=feature&state=open&per_page=100`;

    try {
        const headers: HeadersInit = {
            Accept: 'application/vnd.github.v3+json',
            'X-GitHub-Api-Version': '2022-11-28',
        }

        if (GITHUB_TOKEN) {
            headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
        } else {
            console.warn('No GitHub token found. Features will not be fetched from GitHub.');
        }

        const response = await fetch(apiUrl, {headers});

        if (!response.ok) {
            let errorMessage = `GitHub API error: ${response.status} ${response.statusText}.`;
            try {
                const errorBody = await response.json();
                errorMessage += ` Message: ${errorBody.message || 'No specific message.'}`;
                if (errorBody.documentation_url) {
                    errorMessage += ` See: ${errorBody.documentation_url}`;
                }
            } catch (e) {
                const textError = await response.text();
                errorMessage += ` Response: ${textError}`;
            }
            console.error(`[${new Date().toISOString()}] ${errorMessage}`);
            return {
                features: [],
                lastFetched: null,
                error: {
                    name: "GITHUB_API_FETCH_ERROR",
                    message: "Failed to fetch features from GitHub.",
                }
            }
        }

        const issues = (await response.json()) as GitHubIssue[];

        if (!Array.isArray(issues)) {
            console.error(
                `[${new Date().toISOString()}] GitHub API did not return an array for issues. Response:`,
                issues,
            );
            return {
                features: [],
                lastFetched: null,
                error: {
                    name: "GITHUB_API_INVALID_RESPONSE",
                    message: "GitHub API did not return an array for issues.",
                }
            }
        }

        const features: Feature[] = issues.map((issue) => ({
            id: issue.id,
            name: issue.title,
            description: issue.body,
            url: issue.html_url,
            upvotes: issue.reactions ? issue.reactions['+1'] : 0,
        }))

        features.sort((a, b) => b.upvotes - a.upvotes);

        const dataToCache: CachedData = {
            features,
            timestamp: new Date().toISOString(),
        }

        cache.set(CACHE_KEY, dataToCache);
        devLog(
            `[${new Date().toISOString()}] Cached features for ${CACHE_KEY}`
        )

        return {
            features,
            lastFetched: dataToCache.timestamp,
            error: null
        }
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : 'An unknown error occurred';
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


