<script lang="ts">
    import type {PageData} from "./$types";
    import {onMount} from "svelte";
    import {languageTag} from "$lib/paraglide/runtime.js";
    import {
        ExternalLink,
        Lightbulb,
        ThumbsUp,
        ArrowRight,
    } from "@lucide/svelte";
    import * as m from "$lib/paraglide/messages.js";

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
    <title>{m.features_meta_title()}</title>
    <meta name="description" content={m.features_meta_description()} />
</svelte:head>

<div class="container mx-auto px-4 py-6 md:py-8">
    <!-- Hero Section -->
    <header class="mb-8 text-center md:mb-12 lg:mb-16">
        <h1
            class="text-primary-600 dark:text-primary-400 mb-3 text-2xl !leading-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl"
        >
            {m.features_hero_title()}
        </h1>
        <p
            class="text-surface-800 dark:text-surface-200 mx-auto mb-4 max-w-2xl text-base leading-relaxed md:mb-6 md:text-lg"
        >
            {m.features_hero_subtitle()}
        </p>
        <div
            class="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium md:px-4 md:py-2 md:text-sm"
        >
            <Lightbulb class="h-3 w-3 md:h-4 md:w-4" />
            <span class="hidden sm:inline">
                {m.features_hero_badge_text()}
            </span>
            <span class="sm:hidden">
                {m.features_hero_badge_text_mobile()}
            </span>
        </div>
    </header>

    {#if data.features && data.features.length > 0}
        <!-- Priority Features Section -->
        {#if priorityFeatures.length > 0}
            <section class="mb-12 md:mb-16 lg:mb-20">
                <h2
                    class="text-surface-900 dark:text-surface-100 mb-6 text-center text-lg font-bold md:mb-8 md:text-xl lg:text-2xl"
                >
                    {m.features_priority_title()}
                </h2>
                <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                    {#each priorityFeatures as feature (feature.url)}
                        <a
                            href={feature.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="card group from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 border-primary-200 dark:border-primary-800 border bg-gradient-to-br p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg md:p-6"
                            aria-label={m.features_priority_card_ariaLabel({
                                featureName:
                                    feature.name[languageTag()] ||
                                    feature.name.en,
                            })}
                        >
                            <div
                                class="mb-3 flex items-start justify-between gap-2 md:mb-4"
                            >
                                <h3
                                    class="text-surface-900 dark:text-surface-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 text-sm font-semibold transition-colors md:text-base"
                                >
                                    {feature.name[languageTag()] ||
                                        feature.name.en}
                                </h3>
                                {#if feature.upvotes !== undefined && feature.upvotes !== null}
                                    <div
                                        class="bg-primary-500 flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium text-white"
                                    >
                                        <ThumbsUp
                                            class="h-2.5 w-2.5 md:h-3 md:w-3"
                                        />
                                        {feature.upvotes}
                                    </div>
                                {/if}
                            </div>
                            <p
                                class="text-surface-700 dark:text-surface-300 mb-3 text-xs leading-relaxed md:mb-4 md:text-sm"
                            >
                                {truncateDescription(
                                    feature.description[languageTag()] ||
                                        feature.description.en,
                                    2
                                )}
                            </p>
                            <div
                                class="text-primary-600 dark:text-primary-400 flex items-center gap-1 text-xs font-medium md:text-sm"
                            >
                                <span class="hidden sm:inline"
                                    >{m.features_priority_card_cta_text()}</span
                                >
                                <span class="sm:hidden"
                                    >{m.features_priority_card_cta_text_mobile()}</span
                                >
                                <ExternalLink
                                    class="h-2.5 w-2.5 md:h-3 md:w-3"
                                />
                            </div>
                        </a>
                    {/each}
                </div>
            </section>
        {/if}

        <!-- All Features Section -->
        <section class="mb-12 md:mb-16 lg:mb-20">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-6 text-center text-lg font-bold md:mb-8 md:text-xl lg:text-2xl"
            >
                {m.features_all_title()}
            </h2>
            <div class="grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
                {#each data.features as feature (feature.url)}
                    <a
                        href={feature.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="card group border-surface-200 dark:border-surface-700 hover:border-primary-500/50 dark:hover:border-primary-500/70 p-3 transition-all duration-200 hover:shadow-md md:p-4"
                        aria-label={m.features_all_card_ariaLabel({
                            featureName:
                                feature.name[languageTag()] || feature.name.en,
                        })}
                    >
                        <div
                            class="mb-2 flex items-start justify-between gap-2 md:mb-3"
                        >
                            <h3
                                class="text-surface-900 dark:text-surface-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 text-sm font-semibold transition-colors md:text-base"
                            >
                                {feature.name[languageTag()] || feature.name.en}
                            </h3>
                            {#if feature.upvotes !== undefined && feature.upvotes !== null && feature.upvotes > 0}
                                <div
                                    class="bg-surface-200 dark:bg-surface-700 text-surface-700 dark:text-surface-300 flex shrink-0 items-center gap-1 rounded px-1.5 py-0.5 text-xs"
                                >
                                    <ThumbsUp
                                        class="h-2.5 w-2.5 md:h-3 md:w-3"
                                    />
                                    {feature.upvotes}
                                </div>
                            {/if}
                        </div>
                        <p
                            class="text-surface-600 dark:text-surface-400 mb-2 text-xs leading-relaxed md:mb-3 md:text-sm"
                        >
                            {truncateDescription(
                                feature.description[languageTag()] ||
                                    feature.description.en,
                                1
                            )}
                        </p>
                        <div
                            class="text-primary-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 flex items-center gap-1 text-xs font-medium"
                        >
                            <span class="hidden sm:inline"
                                >{m.features_all_card_cta_text()}</span
                            >
                            <span class="sm:hidden"
                                >{m.features_all_card_cta_text_mobile()}</span
                            >
                            <ExternalLink class="h-2.5 w-2.5 md:h-3 md:w-3" />
                        </div>
                    </a>
                {/each}
            </div>
        </section>
    {:else}
        <!-- Empty State -->
        <section class="py-12 text-center md:py-16">
            <div
                class="bg-surface-100 dark:bg-surface-800 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full md:mb-6 md:h-16 md:w-16"
            >
                <Lightbulb
                    class="text-surface-600 dark:text-surface-400 h-6 w-6 md:h-8 md:w-8"
                />
            </div>
            <h2
                class="text-surface-900 dark:text-surface-100 mb-2 text-lg font-semibold md:mb-3 md:text-xl lg:text-2xl"
            >
                {m.features_emptyState_title()}
            </h2>
            <p
                class="text-surface-600 dark:text-surface-400 mx-auto max-w-lg text-sm leading-relaxed md:text-base"
            >
                {m.features_emptyState_description()}
            </p>
        </section>
    {/if}

    <!-- Feature Request CTA -->
    <section
        class="card from-secondary-50 to-surface-50 dark:from-secondary-950/20 dark:to-surface-900/30 border-secondary-200 dark:border-secondary-800 border bg-gradient-to-br p-6 text-center md:p-8 lg:p-12"
    >
        <div
            class="bg-secondary-100 dark:bg-secondary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full md:mb-6 md:h-16 md:w-16"
        >
            <Lightbulb
                class="text-secondary-600 dark:text-secondary-400 h-6 w-6 md:h-8 md:w-8"
            />
        </div>
        <h2
            class="text-surface-900 dark:text-surface-100 mb-3 text-lg font-bold md:mb-4 md:text-xl lg:text-2xl"
        >
            {m.features_cta_title()}
        </h2>
        <p
            class="text-surface-700 dark:text-surface-300 mx-auto mb-6 max-w-2xl text-sm leading-relaxed md:mb-8 md:text-base"
        >
            {m.features_cta_description()}
        </p>
        <div class="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
                href="https://github.com/axonotes/AxonotesCore/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                class="btn dark:preset-tonal-primary preset-filled-primary-500 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white md:px-6 md:py-3 md:text-base"
            >
                {m.features_cta_button_suggest()}
                <ArrowRight class="h-3 w-3 md:h-4 md:w-4" />
            </a>
            <a
                href="/community"
                class="btn dark:preset-outlined-primary-200-800 preset-outlined-primary-400-600 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium md:px-6 md:py-3 md:text-base"
            >
                {m.features_cta_button_community()}
                <ExternalLink class="h-3 w-3 md:h-4 md:w-4" />
            </a>
        </div>
    </section>
</div>
