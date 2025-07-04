<script lang="ts">
    import {
        ArrowRight,
        BookOpen,
        Users,
        Zap,
        MessageCircle,
        Github,
        ExternalLink,
        ChevronRight,
        Play,
        Palette,
        Brain,
        Clock,
        Shield,
        Sparkles,
        Coffee,
    } from "@lucide/svelte";
    import * as m from "$lib/paraglide/messages.js";

    // Reconstruct the structured data from the flat message strings
    const coreValues = [
        {
            icon: Brain,
            title: m.home_coreValues_item1_title(),
            description: m.home_coreValues_item1_description(),
        },
        {
            icon: Users,
            title: m.home_coreValues_item2_title(),
            description: m.home_coreValues_item2_description(),
        },
        {
            icon: Sparkles,
            title: m.home_coreValues_item3_title(),
            description: m.home_coreValues_item3_description(),
        },
    ];

    const problemSolution = {
        before: [
            m.home_problemSolution_before_item_1(),
            m.home_problemSolution_before_item_2(),
            m.home_problemSolution_before_item_3(),
            m.home_problemSolution_before_item_4(),
            m.home_problemSolution_before_item_5(),
        ],
        after: [
            m.home_problemSolution_after_item_1(),
            m.home_problemSolution_after_item_2(),
            m.home_problemSolution_after_item_3(),
            m.home_problemSolution_after_item_4(),
            m.home_problemSolution_after_item_5(),
        ],
    };
</script>

<svelte:head>
    <title>{m.home_meta_title()}</title>
    <meta name="description" content={m.home_meta_description()} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
    <!-- Hero Section -->
    <section class="mb-16 sm:mb-16 md:mb-20 mt-16 sm:mt-16 lg:mt-20">
        <div class="mx-auto max-w-5xl text-center">
            <!-- Main Headline -->
            <h1
                class="text-primary-600 dark:text-primary-400 mb-4 text-5xl leading-tight font-bold sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl"
            >
                {@html m.home_hero_title()}
            </h1>

            <!-- Subheadline -->
            <p
                class="text-surface-800 dark:text-surface-200 mx-auto mb-6 max-w-2xl px-2 text-base leading-relaxed sm:mb-8 sm:px-0 sm:text-lg md:text-xl"
            >
                {m.home_hero_subtitle()}
            </p>

            <!-- Status Badge -->
            <div
                class="bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 mb-6 inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium sm:mb-8 sm:px-4 sm:text-sm"
            >
                <Coffee class="h-3 w-3 sm:h-4 sm:w-4" />
                <span class="xs:inline hidden">{m.home_hero_badge_text()}</span>
                {m.home_hero_badge_text_mobile()}
            </div>

            <!-- Primary CTA -->
            <div
                class="flex flex-col gap-3 px-2 sm:flex-row sm:justify-center sm:gap-4 sm:px-0"
            >
                <a
                    href="https://discord.gg/myBMaaDeQu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn preset-filled-primary-500 inline-flex min-h-[44px] items-center justify-center gap-2 px-4 text-sm text-white sm:px-6 sm:text-base"
                >
                    <MessageCircle class="h-4 w-4 sm:h-5 sm:w-5" />
                    <span class="xs:inline hidden"
                        >{m.home_hero_cta_primary()}</span
                    >
                    {m.home_hero_cta_primary_mobile()}
                    <ArrowRight class="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
                <a
                    href="/about"
                    class="btn dark:preset-outlined-primary-200-800 preset-outlined-primary-400-600 inline-flex min-h-[44px] items-center justify-center gap-2 px-4 text-sm sm:px-6 sm:text-base"
                >
                    {m.home_hero_cta_secondary()}
                    <ChevronRight class="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
            </div>
        </div>
    </section>

    <!-- Product Demo Placeholder -->
    <section class="mb-16 sm:mb-32 md:mb-48">
        <div class="mx-auto max-w-4xl">
            <div
                class="card border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 border-2 border-dashed p-6 text-center sm:p-8 lg:p-12"
            >
                <div
                    class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full sm:mb-6 sm:h-16 sm:w-16"
                >
                    <Play
                        class="text-primary-600 dark:text-primary-400 h-6 w-6 sm:h-8 sm:w-8"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 mb-2 text-lg font-bold sm:mb-3 sm:text-xl"
                >
                    {@html m.home_demo_title()}
                </h3>
                <p
                    class="text-surface-700 dark:text-surface-300 mx-auto mb-4 max-w-lg text-sm leading-relaxed sm:mb-6 sm:text-base"
                >
                    {@html m.home_demo_description()}
                </p>
                <a
                    href="https://discord.gg/myBMaaDeQu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn dark:preset-outlined-primary-200-800 preset-outlined-primary-400-600 inline-flex min-h-[44px] items-center gap-2 px-4 text-sm sm:px-6 sm:text-base"
                >
                    {m.home_demo_cta()}
                    <MessageCircle class="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
            </div>
        </div>
    </section>

    <!-- Problem/Solution Section -->
    <section class="mb-16 sm:mb-32 md:mb-48">
        <div class="mx-auto max-w-6xl">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-6 px-2 text-center text-lg font-bold sm:mb-16 sm:px-0 sm:text-xl md:text-2xl"
            >
                {m.home_problemSolution_title()}
            </h2>

            <div class="grid gap-6 sm:gap-8 lg:grid-cols-2">
                <!-- Before: The Problem -->
                <div
                    class="card border-warning-200 dark:border-warning-800 bg-warning-50 dark:bg-warning-950/20 border p-4 sm:p-6 motion-safe:hover:-m-2 motion-safe:hover:p-8 transition-ease duration-300"
                >
                    <div class="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-sm font-semibold sm:text-base"
                        >
                            {m.home_problemSolution_before_title()}
                        </h3>
                    </div>
                    <ul class="space-y-2 sm:space-y-3">
                        {#each problemSolution.before as item (item)}
                            <li
                                class="text-surface-800 dark:text-surface-200 flex items-start gap-2 text-xs leading-relaxed sm:text-sm"
                            >
                                <span
                                    class="text-warning-500 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-current"
                                ></span>
                                <span>{item}</span>
                            </li>
                        {/each}
                    </ul>
                </div>

                <!-- After: The Solution -->
                <div
                    class="card border-success-200 dark:border-success-800 bg-success-50 dark:bg-success-950/20 border p-4 sm:p-6 motion-safe:hover:-m-2 motion-safe:hover:p-8 transition-ease duration-300"
                >
                    <div class="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-sm font-semibold sm:text-base"
                        >
                            {m.home_problemSolution_after_title()}
                        </h3>
                    </div>
                    <ul class="space-y-2 sm:space-y-3">
                        {#each problemSolution.after as item (item)}
                            <li
                                class="text-surface-800 dark:text-surface-200 flex items-start gap-2 text-xs leading-relaxed sm:text-sm"
                            >
                                <span
                                    class="text-success-500 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-current"
                                ></span>
                                <span>{item}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Value Propositions -->
    <section class="mb-16 sm:mb-32 md:mb-48">
        <div class="mx-auto max-w-6xl">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-6 px-2 text-center text-lg font-bold sm:mb-16 sm:px-0 sm:text-xl md:text-2xl"
            >
                {m.home_coreValues_title()}
            </h2>

            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {#each coreValues as value (value.title)}
                    {@const Icon = value.icon}
                    <div class="card p-4 text-center sm:p-6">
                        <div
                            class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg sm:mb-4 sm:h-12 sm:w-12"
                        >
                            <Icon
                                class="text-primary-600 dark:text-primary-400 h-5 w-5 sm:h-6 sm:w-6"
                            />
                        </div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 mb-2 text-sm font-semibold sm:text-base"
                        >
                            {value.title}
                        </h3>
                        <p
                            class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed sm:text-sm"
                        >
                            {value.description}
                        </p>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Interface Preview Placeholder -->
    <section class="mb-16 sm:mb-32 md:mb-48">
        <div class="mx-auto max-w-6xl">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-6 px-2 text-center text-lg font-bold sm:mb-16 sm:px-0 sm:text-xl md:text-2xl"
            >
                {@html m.home_interface_title()}
            </h2>
            <div
                class="card border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 border-2 border-dashed p-4 text-center sm:p-6 md:aspect-video lg:p-8"
            >
                <div class="flex h-full flex-col items-center justify-center">
                    <div
                        class="bg-primary-100 dark:bg-primary-900/30 mb-4 flex h-16 w-16 items-center justify-center rounded-xl sm:mb-6 sm:h-20 sm:w-20 sm:rounded-2xl"
                    >
                        <Palette
                            class="text-primary-600 dark:text-primary-400 h-8 w-8 sm:h-10 sm:w-10"
                        />
                    </div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 mb-2 text-lg font-bold sm:mb-3 sm:text-xl"
                    >
                        {@html m.home_interface_subtitle()}
                    </h3>
                    <p
                        class="text-surface-700 dark:text-surface-300 mx-auto mb-4 max-w-lg text-xs leading-relaxed sm:mb-6 sm:text-sm"
                    >
                        {@html m.home_interface_description()}
                    </p>
                    <div
                        class="flex w-full max-w-xs flex-col gap-2 sm:max-w-none sm:flex-row sm:justify-center sm:gap-3"
                    >
                        <a
                            href="https://discord.gg/myBMaaDeQu"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn preset-filled-primary-500 inline-flex min-h-[44px] items-center justify-center gap-2 px-4 text-sm text-white sm:px-6 sm:text-base"
                        >
                            <Palette class="h-3 w-3 sm:h-4 sm:w-4" />
                            {m.home_interface_cta_primary()}
                        </a>
                        <a
                            href="https://github.com/axonotes/AxonotesCore"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn dark:preset-outlined-primary-200-800 preset-outlined-primary-400-600 inline-flex min-h-[44px] items-center justify-center gap-2 px-4 text-sm sm:px-6 sm:text-base"
                        >
                            <Github class="h-3 w-3 sm:h-4 sm:w-4" />
                            {m.home_interface_cta_secondary()}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Feature Showcase Placeholders -->
    <section class="mb-16 sm:mb-32 md:mb-48">
        <div class="mx-auto max-w-6xl">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-6 px-2 text-center text-lg font-bold sm:mb-16 sm:px-0 sm:text-xl md:text-2xl"
            >
                {m.home_features_title()}
            </h2>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8">
                <!-- Time Machine for Your Work -->
                <div class="card p-4 sm:p-6">
                    <div class="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                        <div
                            class="bg-primary-100 dark:bg-primary-900/30 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10"
                        >
                            <Clock
                                class="text-primary-600 dark:text-primary-400 h-4 w-4 sm:h-5 sm:w-5"
                            />
                        </div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-sm font-semibold sm:text-base"
                        >
                            {m.home_features_unbreakableHistory_title()}
                        </h3>
                    </div>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed sm:text-sm"
                    >
                        {@html m.home_features_unbreakableHistory_description()}
                    </p>
                </div>

                <!-- Smart Flashcards -->
                <div class="card p-4 sm:p-6">
                    <div class="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                        <div
                            class="bg-secondary-100 dark:bg-secondary-900/30 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10"
                        >
                            <BookOpen
                                class="text-secondary-600 dark:text-secondary-400 h-4 w-4 sm:h-5 sm:w-5"
                            />
                        </div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-sm font-semibold sm:text-base"
                        >
                            {m.home_features_smartFlashcards_title()}
                        </h3>
                    </div>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed sm:text-sm"
                    >
                        {@html m.home_features_smartFlashcards_description()}
                    </p>
                </div>

                <!-- Global Search -->
                <div class="card p-4 sm:p-6">
                    <div class="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                        <div
                            class="bg-tertiary-100 dark:bg-tertiary-900/30 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10"
                        >
                            <Zap
                                class="text-tertiary-600 dark:text-tertiary-400 h-4 w-4 sm:h-5 sm:w-5"
                            />
                        </div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-sm font-semibold sm:text-base"
                        >
                            {m.home_features_globalSearch_title()}
                        </h3>
                    </div>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed sm:text-sm"
                    >
                        {@html m.home_features_globalSearch_description()}
                    </p>
                </div>

                <!-- Works Offline -->
                <div class="card p-4 sm:p-6">
                    <div class="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                        <div
                            class="bg-success-100 dark:bg-success-900/30 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10"
                        >
                            <Shield
                                class="text-success-600 dark:text-success-400 h-4 w-4 sm:h-5 sm:w-5"
                            />
                        </div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-sm font-semibold sm:text-base"
                        >
                            {m.home_features_offline_title()}
                        </h3>
                    </div>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed sm:text-sm"
                    >
                        {@html m.home_features_offline_description()}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Social Proof & Community -->
    <section class="mb-16 sm:mb-32 md:mb-48">
        <div
            class="card from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 border-primary-200 dark:border-primary-800 mx-auto max-w-4xl border bg-gradient-to-br p-6 text-center sm:p-8"
        >
            <h2
                class="text-surface-900 dark:text-surface-100 mb-3 text-lg font-bold sm:mb-6 sm:text-xl md:text-2xl"
            >
                {m.home_community_title()}
            </h2>
            <p
                class="text-surface-700 dark:text-surface-300 mx-auto mb-4 max-w-2xl text-sm leading-relaxed sm:mb-12 sm:text-base"
            >
                {m.home_community_description()}
            </p>

            <div
                class="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4"
            >
                <a
                    href="https://discord.gg/myBMaaDeQu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn preset-filled-primary-500 inline-flex min-h-[44px] items-center justify-center gap-2 px-4 text-sm text-white sm:px-6 sm:text-base"
                >
                    <MessageCircle class="h-3 w-3 sm:h-4 sm:w-4" />
                    {m.home_community_cta_primary()}
                </a>
                <a
                    href="https://github.com/axonotes/AxonotesCore"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn dark:preset-outlined-primary-200-800 preset-outlined-primary-400-600 inline-flex min-h-[44px] items-center justify-center gap-2 px-4 text-sm sm:px-6 sm:text-base"
                >
                    <Github class="h-3 w-3 sm:h-4 sm:w-4" />
                    {m.home_community_cta_secondary()}
                </a>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="px-2 text-center sm:px-0">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-3 text-lg font-bold sm:mb-6 sm:text-xl md:text-2xl"
        >
            {m.home_finalCta_title()}
        </h2>
        <p
            class="text-surface-700 dark:text-surface-300 mx-auto mb-6 max-w-xl text-sm leading-relaxed sm:mb-12 sm:text-base"
        >
            {m.home_finalCta_description()}
        </p>

        <a
            href="https://discord.gg/myBMaaDeQu"
            target="_blank"
            rel="noopener noreferrer"
            class="btn preset-filled-secondary-500 inline-flex min-h-[44px] items-center justify-center gap-2 px-4 text-sm text-white sm:px-6 sm:text-base"
        >
            {m.home_finalCta_button()}
            <ExternalLink class="h-3 w-3 sm:h-4 sm:w-4" />
        </a>
    </section>
</div>
