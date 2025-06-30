<script lang="ts">
    import {
        ExternalLink,
        MessageCircle,
        Github,
        Heart,
        Lightbulb,
        Bug,
        Code,
        Share2,
    } from "@lucide/svelte";
    import * as m from "$lib/paraglide/messages.js";

    let heartClicked = $state(false);

    // Reconstruct structured data for "How You Can Help" section
    const waysToHelp = [
        {
            icon: Lightbulb,
            title: m.community_howToHelp_item1_title(),
            description: m.community_howToHelp_item1_description(),
            colorClass: "bg-primary-100 dark:bg-primary-900/30",
            iconColorClass: "text-primary-600 dark:text-primary-400",
        },
        {
            icon: Bug,
            title: m.community_howToHelp_item2_title(),
            description: m.community_howToHelp_item2_description(),
            colorClass: "bg-warning-100 dark:bg-warning-900/30",
            iconColorClass: "text-warning-600 dark:text-warning-400",
        },
        {
            icon: Code,
            title: m.community_howToHelp_item3_title(),
            description: m.community_howToHelp_item3_description(),
            colorClass: "bg-secondary-100 dark:bg-secondary-900/30",
            iconColorClass: "text-secondary-600 dark:text-secondary-400",
        },
        {
            icon: Share2,
            title: m.community_howToHelp_item4_title(),
            description: m.community_howToHelp_item4_description(),
            colorClass: "bg-tertiary-100 dark:bg-tertiary-900/30",
            iconColorClass: "text-tertiary-600 dark:text-tertiary-400",
        },
    ];

    // Reconstruct structured data for "Community Guidelines" section
    const communityGuidelines = [
        {
            title: m.community_guidelines_item1_title(),
            description: m.community_guidelines_item1_description(),
        },
        {
            title: m.community_guidelines_item2_title(),
            description: m.community_guidelines_item2_description(),
        },
        {
            title: m.community_guidelines_item3_title(),
            description: m.community_guidelines_item3_description(),
        },
        {
            title: m.community_guidelines_item4_title(),
            description: m.community_guidelines_item4_description(),
        },
    ];
</script>

<svelte:head>
    <title>{m.community_meta_title()}</title>
    <meta name="description" content={m.community_meta_description()} />
</svelte:head>

<div class="container mx-auto px-4 py-6 md:px-6 md:py-8">
    <!-- Hero Section -->
    <header class="mb-16 text-center sm:mb-24 md:mb-32">
        <h1
            class="text-primary-600 dark:text-primary-400 mb-3 text-2xl !leading-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl"
        >
            {m.community_hero_title()}
        </h1>
        <p
            class="text-surface-800 dark:text-surface-200 mx-auto mb-4 max-w-2xl text-base md:mb-6 md:text-lg"
        >
            {m.community_hero_subtitle()}
        </p>
        <div
            class="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium md:px-4 md:py-2 md:text-sm"
        >
            <button
                onclick={() => (heartClicked = true)}
                class={heartClicked ? "cursor-default" : ""}
            >
                <Heart
                    class="h-3 w-3 md:h-4 md:w-4 {heartClicked
                        ? 'fill-red-500 text-transparent'
                        : 'hover:scale-110'} transition-all duration-200"
                />
            </button>
            {m.community_hero_badge()}
        </div>
    </header>

    <!-- Main Connection Paths -->
    <section class="mb-16 sm:mb-32 md:mb-48">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-6 text-center text-lg font-bold md:mb-16 md:text-xl lg:text-2xl"
        >
            {m.community_connect_title()}
        </h2>
        <div class="grid gap-6 md:gap-8 lg:grid-cols-2">
            <!-- Discord Community -->
            <div
                class="card border-primary-200 dark:border-primary-700 group hover:border-primary-500 border-2 p-6 transition-all md:p-8"
            >
                <div class="flex h-full flex-col justify-between">
                    <div>
                        <div
                            class="mb-4 flex items-center gap-3 md:mb-6 md:gap-4"
                        >
                            <div
                                class="bg-primary-100 dark:bg-primary-900/30 flex h-12 w-12 items-center justify-center rounded-xl md:h-16 md:w-16"
                            >
                                <MessageCircle
                                    class="text-primary-600 dark:text-primary-400 h-6 w-6 md:h-8 md:w-8"
                                />
                            </div>
                            <div>
                                <h3
                                    class="text-surface-900 dark:text-surface-100 text-sm font-bold md:text-base"
                                >
                                    {m.community_discord_title()}
                                </h3>
                                <p
                                    class="text-surface-600 dark:text-surface-400 text-xs md:text-sm"
                                >
                                    {m.community_discord_subtitle()}
                                </p>
                            </div>
                        </div>
                        <p
                            class="text-surface-700 dark:text-surface-300 mb-4 text-sm leading-relaxed md:mb-6 md:text-base"
                        >
                            {m.community_discord_description()}
                        </p>
                    </div>
                    <a
                        href="https://discord.gg/myBMaaDeQu"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn dark:preset-tonal-primary preset-filled-primary-500 inline-flex w-full items-center justify-center gap-2 text-sm text-white md:text-base"
                    >
                        {m.community_discord_cta()}
                        <ExternalLink class="h-3 w-3 md:h-4 md:w-4" />
                    </a>
                </div>
            </div>

            <!-- GitHub Community -->
            <div
                class="card border-surface-200 dark:border-surface-700 group hover:border-surface-400 border-2 p-6 transition-all md:p-8"
            >
                <div class="flex h-full flex-col justify-between">
                    <div>
                        <div
                            class="mb-4 flex items-center gap-3 md:mb-6 md:gap-4"
                        >
                            <div
                                class="bg-surface-100 dark:bg-surface-800 flex h-12 w-12 items-center justify-center rounded-xl md:h-16 md:w-16"
                            >
                                <Github
                                    class="text-surface-700 dark:text-surface-300 h-6 w-6 md:h-8 md:w-8"
                                />
                            </div>
                            <div>
                                <h3
                                    class="text-surface-900 dark:text-surface-100 text-sm font-bold md:text-base"
                                >
                                    {m.community_github_title()}
                                </h3>
                                <p
                                    class="text-surface-600 dark:text-surface-400 text-xs md:text-sm"
                                >
                                    {m.community_github_subtitle()}
                                </p>
                            </div>
                        </div>
                        <p
                            class="text-surface-700 dark:text-surface-300 mb-4 text-sm leading-relaxed md:mb-6 md:text-base"
                        >
                            {m.community_github_description()}
                        </p>
                    </div>
                    <a
                        href="https://github.com/axonotes/AxonotesCore"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn dark:preset-outlined-primary-200-800 preset-outlined-primary-400-600 inline-flex w-full items-center justify-center gap-2 text-sm md:text-base"
                    >
                        {m.community_github_cta()}
                        <ExternalLink class="h-3 w-3 md:h-4 md:w-4" />
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Ways to Contribute -->
    <section class="mb-16 sm:mb-32 md:mb-48">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-6 text-center text-lg font-bold md:mb-16 md:text-xl lg:text-2xl"
        >
            {m.community_howToHelp_title()}
        </h2>
        <div
            class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4"
        >
            {#each waysToHelp as item (item.title)}
                {@const Icon = item.icon}
                <div class="card p-4 text-center md:p-6">
                    <div
                        class="{item.colorClass} mx-auto mb-3 flex h-10 w-10
                        items-center justify-center rounded-lg md:mb-4 md:h-12
                        md:w-12"
                    >
                        <Icon
                            class="{item.iconColorClass} h-5 w-5 md:h-6 md:w-6"
                        />
                    </div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 mb-2 text-sm font-semibold md:text-base"
                    >
                        {item.title}
                    </h3>
                    <p
                        class="text-surface-600 dark:text-surface-400 text-xs md:text-sm"
                    >
                        {item.description}
                    </p>
                </div>
            {/each}
        </div>
    </section>

    <!-- Community Guidelines -->
    <section
        class="card from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 mb-16 bg-gradient-to-br p-6 sm:mb-32 md:mb-48 md:p-12"
    >
        <h2
            class="text-surface-900 dark:text-surface-100 mb-4 text-center text-lg font-bold md:mb-16 md:text-xl lg:text-2xl"
        >
            {m.community_guidelines_title()}
        </h2>
        <div class="mx-auto max-w-4xl">
            <div class="grid gap-4 md:grid-cols-2 md:gap-6">
                {#each communityGuidelines as item (item.title)}
                    <div class="flex items-start gap-2 md:gap-3">
                        <div
                            class="bg-primary-500 mt-2.5 h-1.5 w-1.5
                            flex-shrink-0 rounded-full md:mt-3 md:h-2 md:w-2"
                        ></div>
                        <div>
                            <h3
                                class="text-surface-800 dark:text-surface-200 mb-1
                                text-sm font-medium md:text-base"
                            >
                                {item.title}
                            </h3>
                            <p
                                class="text-surface-600 dark:text-surface-400
                                text-xs md:text-sm"
                            >
                                {item.description}
                            </p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="mt-12 text-center md:mt-16 lg:mt-20">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-3 text-lg font-bold md:mb-8 md:text-xl lg:text-2xl"
        >
            {m.community_finalCta_title()}
        </h2>
        <p
            class="text-surface-600 dark:text-surface-400 mx-auto mb-6 max-w-xl text-sm md:mb-12 md:text-base"
        >
            {m.community_finalCta_description()}
        </p>
        <div class="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
                href="https://discord.gg/myBMaaDeQu"
                target="_blank"
                rel="noopener noreferrer"
                class="btn dark:preset-tonal-primary preset-filled-primary-500 inline-flex items-center justify-center gap-2 text-sm text-white md:text-base"
            >
                <MessageCircle class="h-3 w-3 md:h-4 md:w-4" />
                {m.community_finalCta_discord()}
            </a>
            <a
                href="https://github.com/axonotes/AxonotesCore"
                target="_blank"
                rel="noopener noreferrer"
                class="btn dark:preset-outlined-primary-200-800 preset-outlined-primary-400-600 inline-flex items-center justify-center gap-2 text-sm md:text-base"
            >
                <Github class="h-3 w-3 md:h-4 md:w-4" />
                {m.community_finalCta_github()}
            </a>
        </div>
    </section>
</div>
