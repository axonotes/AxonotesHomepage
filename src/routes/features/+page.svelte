<script lang="ts">
    import type {PageData} from "./$types";
    import {onMount} from "svelte";
    import {
        ExternalLink,
        Lightbulb,
        ThumbsUp,
        ArrowRight,
    } from "@lucide/svelte";

    export let data: PageData;

    onMount(() => {
        if (data.error) {
            console.error(data.error);
        }
    });

    // Get top 6 features by upvotes for priority section
    $: priorityFeatures = data.features
        ? [...data.features]
              .sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0))
              .slice(0, 6)
        : [];

    /**
     * Truncates text to a specified number of sentences and adds an ellipsis if truncated.
     */
    function truncateDescription(
        text: string | null,
        sentenceLimit: number
    ): string {
        if (!text) return "";
        const sentences = text.match(/[^.!?]+[.!?]+\s*|[^.!?]+$/g);

        if (!sentences || sentences.length === 0) {
            return text;
        }

        if (sentences.length <= sentenceLimit) {
            return sentences.join("").trim();
        }

        const truncatedContent = sentences
            .slice(0, sentenceLimit)
            .join("")
            .trim();
        return truncatedContent + "...";
    }
</script>

<svelte:head>
    <title>Features - Axonotes</title>
    <meta
        name="description"
        content="Explore Axonotes features designed for academic success. Help us prioritize what matters most to students and educators."
    />
</svelte:head>

<div class="container mx-auto px-4 py-8">
    <!-- Hero Section -->
    <header class="mb-12 text-center md:mb-16">
        <h1
            class="text-primary-600 dark:text-primary-400 mb-4 text-3xl !leading-tight font-bold sm:text-4xl md:text-5xl"
        >
            Features Built for Academic Success
        </h1>
        <p
            class="text-surface-800 dark:text-surface-200 mx-auto mb-6 max-w-2xl text-lg"
        >
            Help us prioritize what matters most to you. Vote on features and
            share your ideas for the ultimate academic platform.
        </p>
        <div
            class="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mx-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
        >
            <Lightbulb class="h-4 w-4" />
            Currently in development - your feedback shapes our priorities
        </div>
    </header>

    {#if data.features && data.features.length > 0}
        <!-- Priority Features Section -->
        {#if priorityFeatures.length > 0}
            <section class="mb-20 md:mb-24">
                <h2
                    class="text-surface-900 dark:text-surface-100 mb-8 text-center text-xl font-bold md:text-2xl"
                >
                    Most Requested Features
                </h2>
                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {#each priorityFeatures as feature (feature.url)}
                        <a
                            href={feature.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="card group from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 border-primary-200 dark:border-primary-800 border bg-gradient-to-br p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                            aria-label={`View ${feature.name} on GitHub`}
                        >
                            <div class="mb-4 flex items-start justify-between">
                                <h3
                                    class="text-surface-900 dark:text-surface-100 text-md group-hover:text-primary-600 dark:group-hover:text-primary-400 font-semibold transition-colors"
                                >
                                    {feature.name}
                                </h3>
                                {#if feature.upvotes !== undefined && feature.upvotes !== null}
                                    <div
                                        class="bg-primary-500 flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium text-white"
                                    >
                                        <ThumbsUp class="h-3 w-3" />
                                        {feature.upvotes}
                                    </div>
                                {/if}
                            </div>
                            <p
                                class="text-surface-700 dark:text-surface-300 mb-4 text-sm leading-relaxed"
                            >
                                {truncateDescription(feature.description, 2)}
                            </p>
                            <div
                                class="text-primary-600 dark:text-primary-400 flex items-center gap-1 text-sm font-medium"
                            >
                                View on GitHub
                                <ExternalLink class="h-3 w-3" />
                            </div>
                        </a>
                    {/each}
                </div>
            </section>
        {/if}

        <!-- All Features Section -->
        <section class="mb-20 md:mb-24">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-8 text-center text-xl font-bold md:text-2xl"
            >
                All Planned Features
            </h2>
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {#each data.features as feature (feature.url)}
                    <a
                        href={feature.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="card group border-surface-200 dark:border-surface-700 hover:border-primary-500/50 dark:hover:border-primary-500/70 p-4 transition-all duration-200 hover:shadow-md"
                        aria-label={`View ${feature.name} on GitHub`}
                    >
                        <div class="mb-3 flex items-start justify-between">
                            <h3
                                class="text-surface-900 dark:text-surface-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 text-md font-semibold transition-colors"
                            >
                                {feature.name}
                            </h3>
                            {#if feature.upvotes !== undefined && feature.upvotes !== null && feature.upvotes > 0}
                                <div
                                    class="bg-surface-200 dark:bg-surface-700 text-surface-700 dark:text-surface-300 flex items-center gap-1 rounded px-2 py-0.5 text-xs"
                                >
                                    <ThumbsUp class="h-3 w-3" />
                                    {feature.upvotes}
                                </div>
                            {/if}
                        </div>
                        <p
                            class="text-surface-600 dark:text-surface-400 mb-3 text-sm"
                        >
                            {truncateDescription(feature.description, 1)}
                        </p>
                        <div
                            class="text-primary-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 flex items-center gap-1 text-xs font-medium"
                        >
                            Vote & Discuss
                            <ExternalLink class="h-3 w-3" />
                        </div>
                    </a>
                {/each}
            </div>
        </section>
    {:else}
        <!-- Empty State -->
        <section class="py-16 text-center">
            <div
                class="bg-surface-100 dark:bg-surface-800 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
            >
                <Lightbulb
                    class="text-surface-600 dark:text-surface-400 h-8 w-8"
                />
            </div>
            <h2
                class="text-surface-900 dark:text-surface-100 mb-3 text-xl font-semibold md:text-2xl"
            >
                Features Coming Soon
            </h2>
            <p class="text-surface-600 dark:text-surface-400 mx-auto max-w-lg">
                We're currently gathering feedback and planning our feature
                roadmap. Check back soon for updates!
            </p>
        </section>
    {/if}

    <!-- Feature Request CTA -->
    <section
        class="card from-secondary-50 to-surface-50 dark:from-secondary-950/20 dark:to-surface-900/30 border-secondary-200 dark:border-secondary-800 border bg-gradient-to-br p-8 text-center lg:p-12"
    >
        <div
            class="bg-secondary-100 dark:bg-secondary-900/30 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
        >
            <Lightbulb
                class="text-secondary-600 dark:text-secondary-400 h-8 w-8"
            />
        </div>
        <h2
            class="text-surface-900 dark:text-surface-100 mb-4 text-xl font-bold md:text-2xl"
        >
            Don't See What You Need?
        </h2>
        <p
            class="text-surface-700 dark:text-surface-300 mx-auto mb-8 max-w-2xl"
        >
            Help us build the features that matter most to you. Share your
            ideas, vote on existing proposals, or join our community to discuss
            what would make your academic life easier.
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <a
                href="https://github.com/axonotes/AxonotesCore/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                class="btn dark:preset-tonal-primary preset-filled-primary-500 inline-flex items-center gap-2 text-white"
            >
                Suggest a Feature
                <ArrowRight class="h-4 w-4" />
            </a>
            <a
                href="/community"
                class="btn dark:preset-outlined-primary-200-800 preset-outlined-primary-400-600 inline-flex items-center gap-2"
            >
                Join Community
                <ExternalLink class="h-4 w-4" />
            </a>
        </div>
    </section>
</div>
