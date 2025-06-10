<script lang="ts">
    import type {PageData} from "./$types";
    import {onMount} from "svelte";

    export let data: PageData;

    onMount(() => {
        if (data.error) {
            console.error(data.error);
        }

        console.log(data.features)
    });

    /**
     * Truncates text to a specified number of sentences and adds an ellipsis if truncated.
     * @param text The text to truncate.
     * @param sentenceLimit The maximum number of sentences to keep.
     * @returns The truncated text.
     */
    function truncateDescription(
        text: string | null,
        sentenceLimit: number
    ): string {
        if (!text) return "";
        // This regex attempts to split by sentences, capturing terminators and subsequent spaces.
        const sentences = text.match(/[^.!?]+[.!?]+\s*|[^.!?]+$/g);

        if (!sentences || sentences.length === 0) {
            return text; // Return original if no sentences found (e.g., single word or empty)
        }

        if (sentences.length <= sentenceLimit) {
            return sentences.join("").trim(); // Join all sentences and trim any trailing space
        }

        // Slice to the sentence limit, join them, trim, and add ellipsis.
        const truncatedContent = sentences
            .slice(0, sentenceLimit)
            .join("")
            .trim();
        return truncatedContent + "...";
    }
</script>

<div class="mb-12 text-center md:mb-16">
    <h1
        class="text-primary-600 dark:text-primary-400 text-4xl !leading-tight font-bold sm:text-5xl"
    >
        Axonotes Features
    </h1>
    <h3
        class="text-surface-800 dark:text-surface-200 mx-auto mt-4 max-w-xl text-lg font-light"
    >
        Explore the innovative features planned for Axonotes, designed to
        revolutionize your learning and note-taking experience.
    </h3>
</div>

{#if data.features && data.features.length > 0}
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {#each data.features as feature (feature.url)}
            {@const truncated_description = truncateDescription(
                feature.description,
                2
            )}
            <a
                href={feature.url}
                class="group dark:bg-surface-800/10 dark:hover:shadow-primary-500/10 border-surface-200 dark:border-surface-700 hover:border-primary-500/50 dark:hover:border-primary-500/70 focus-visible:border-primary-500/50 dark:focus-visible:border-primary-500/70 focus-visible:ring-primary-500 dark:focus-visible:ring-offset-surface-900 block rounded-xl border bg-white/10 p-6 shadow-lg transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl focus-visible:shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label={`Read more about ${feature.name}`}
            >
                <div class="flex h-full flex-col justify-between">
                    <div>
                        <h3
                            class="text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 text-xl font-semibold transition-colors duration-300"
                        >
                            {feature.name}
                        </h3>
                        {#if truncated_description}
                            <p
                                class="text-surface-800 dark:text-surface-200 mt-3 text-sm leading-relaxed"
                            >
                                {truncated_description}
                            </p>
                        {/if}
                    </div>

                    <div class="mt-6 flex items-center justify-between">
                        <span
                            class="text-primary-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-flex items-center text-sm font-medium transition-colors duration-300"
                        >
                            Read more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                        {#if feature.upvotes !== undefined && feature.upvotes !== null}
                            <span class="badge variant-soft-primary">
                                👍 {feature.upvotes}
                            </span>
                        {/if}
                    </div>
                </div>
            </a>
        {/each}
    </div>
{:else}
    <div class="text-surface-500 dark:text-surface-400 py-12 text-center">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="text-surface-400 dark:text-surface-500 mx-auto mb-4 h-12 w-12"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75S9.75 9.336 9.75 9.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
        </svg>
        <p class="text-xl font-medium">No features to display yet.</p>
        <p class="mt-2 text-sm">
            Check back soon for updates on upcoming Axonotes features!
        </p>
    </div>
{/if}
