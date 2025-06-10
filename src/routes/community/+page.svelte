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

    let heartClicked = $state(false);
</script>

<svelte:head>
    <title>Community - Axonotes</title>
    <meta
        name="description"
        content="Join the Axonotes community! Connect with fellow students and educators, contribute to our open-source project, and help shape the future of academic software."
    />
</svelte:head>

<div class="container mx-auto px-4 py-6 md:px-6 md:py-8">
    <!-- Hero Section -->
    <header class="mb-12 text-center md:mb-16 lg:mb-20">
        <h1
            class="text-primary-600 dark:text-primary-400 mb-3 text-2xl !leading-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl"
        >
            Join the Movement
        </h1>
        <p
            class="text-surface-800 dark:text-surface-200 mx-auto mb-4 max-w-2xl text-base md:mb-6 md:text-lg"
        >
            Help build the future of academic software alongside students and
            educators worldwide.
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
            Community-Driven Development
        </div>
    </header>

    <!-- Main Connection Paths -->
    <section class="mb-16 md:mb-20 lg:mb-24">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-6 text-center text-lg font-bold md:mb-8 md:text-xl lg:text-2xl"
        >
            Connect & Collaborate
        </h2>
        <div class="grid gap-6 md:gap-8 lg:grid-cols-2">
            <!-- Discord Community -->
            <div
                class="card border-primary-200 dark:border-primary-700 group hover:border-primary-500 border-2 p-6 transition-all md:p-8"
            >
                <div class="mb-4 flex items-center gap-3 md:mb-6 md:gap-4">
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
                            Discord Community
                        </h3>
                        <p
                            class="text-surface-600 dark:text-surface-400 text-xs md:text-sm"
                        >
                            Chat, share ideas, get support
                        </p>
                    </div>
                </div>
                <p
                    class="text-surface-700 dark:text-surface-300 mb-4 text-sm leading-relaxed md:mb-6 md:text-base"
                >
                    Join real-time discussions with fellow students and
                    educators. Share your academic workflow challenges and help
                    shape Axonotes development.
                </p>
                <a
                    href="https://discord.gg/myBMaaDeQu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn dark:preset-tonal-primary preset-filled-primary-500 inline-flex w-full items-center justify-center gap-2 text-sm text-white md:text-base"
                >
                    Join Discord
                    <ExternalLink class="h-3 w-3 md:h-4 md:w-4" />
                </a>
            </div>

            <!-- GitHub Community -->
            <div
                class="card border-surface-200 dark:border-surface-700 group hover:border-surface-400 border-2 p-6 transition-all md:p-8"
            >
                <div class="mb-4 flex items-center gap-3 md:mb-6 md:gap-4">
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
                            GitHub Development
                        </h3>
                        <p
                            class="text-surface-600 dark:text-surface-400 text-xs md:text-sm"
                        >
                            Contribute code, report issues
                        </p>
                    </div>
                </div>
                <p
                    class="text-surface-700 dark:text-surface-300 mb-4 text-sm leading-relaxed md:mb-6 md:text-base"
                >
                    Follow development progress, report bugs, suggest features,
                    and contribute code to make Axonotes even better.
                </p>
                <a
                    href="https://github.com/axonotes/AxonotesCore"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn dark:preset-outlined-primary-200-800 preset-outlined-primary-400-600 inline-flex w-full items-center justify-center gap-2 text-sm md:text-base"
                >
                    View on GitHub
                    <ExternalLink class="h-3 w-3 md:h-4 md:w-4" />
                </a>
            </div>
        </div>
    </section>

    <!-- Ways to Contribute -->
    <section class="mb-16 md:mb-20 lg:mb-24">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-6 text-center text-lg font-bold md:mb-8 md:text-xl lg:text-2xl"
        >
            How You Can Help
        </h2>
        <div
            class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4"
        >
            <!-- Give Feedback -->
            <div class="card p-4 text-center md:p-6">
                <div
                    class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg md:mb-4 md:h-12 md:w-12"
                >
                    <Lightbulb
                        class="text-primary-600 dark:text-primary-400 h-5 w-5 md:h-6 md:w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 mb-2 text-sm font-semibold md:text-base"
                >
                    Give Feedback
                </h3>
                <p
                    class="text-surface-600 dark:text-surface-400 text-xs md:text-sm"
                >
                    Share your academic workflow needs and suggestions
                </p>
            </div>

            <!-- Report Bugs -->
            <div class="card p-4 text-center md:p-6">
                <div
                    class="bg-warning-100 dark:bg-warning-900/30 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg md:mb-4 md:h-12 md:w-12"
                >
                    <Bug
                        class="text-warning-600 dark:text-warning-400 h-5 w-5 md:h-6 md:w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 mb-2 text-sm font-semibold md:text-base"
                >
                    Report Bugs
                </h3>
                <p
                    class="text-surface-600 dark:text-surface-400 text-xs md:text-sm"
                >
                    Help us improve by reporting issues you encounter
                </p>
            </div>

            <!-- Contribute Code -->
            <div class="card p-4 text-center md:p-6">
                <div
                    class="bg-secondary-100 dark:bg-secondary-900/30 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg md:mb-4 md:h-12 md:w-12"
                >
                    <Code
                        class="text-secondary-600 dark:text-secondary-400 h-5 w-5 md:h-6 md:w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 mb-2 text-sm font-semibold md:text-base"
                >
                    Contribute Code
                </h3>
                <p
                    class="text-surface-600 dark:text-surface-400 text-xs md:text-sm"
                >
                    Help build features and fix issues in our open-source code
                </p>
            </div>

            <!-- Spread the Word -->
            <div class="card p-4 text-center md:p-6">
                <div
                    class="bg-tertiary-100 dark:bg-tertiary-900/30 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg md:mb-4 md:h-12 md:w-12"
                >
                    <Share2
                        class="text-tertiary-600 dark:text-tertiary-400 h-5 w-5 md:h-6 md:w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 mb-2 text-sm font-semibold md:text-base"
                >
                    Spread the Word
                </h3>
                <p
                    class="text-surface-600 dark:text-surface-400 text-xs md:text-sm"
                >
                    Tell fellow students and educators about Axonotes
                </p>
            </div>
        </div>
    </section>

    <!-- Community Guidelines -->
    <section
        class="card from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 mb-12 bg-gradient-to-br p-6 md:mb-16 md:p-8"
    >
        <h2
            class="text-surface-900 dark:text-surface-100 mb-4 text-center text-lg font-bold md:mb-6 md:text-xl lg:text-2xl"
        >
            Community Guidelines
        </h2>
        <div class="mx-auto max-w-4xl">
            <div class="grid gap-4 md:grid-cols-2 md:gap-6">
                <div class="space-y-3 md:space-y-4">
                    <div class="flex items-start gap-2 md:gap-3">
                        <div
                            class="bg-primary-500 mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full md:mt-3 md:h-2 md:w-2"
                        ></div>
                        <div>
                            <h3
                                class="text-surface-800 dark:text-surface-200 mb-1 text-sm font-medium md:text-base"
                            >
                                Be respectful and kind
                            </h3>
                            <p
                                class="text-surface-600 dark:text-surface-400 text-xs md:text-sm"
                            >
                                Treat everyone with respect and courtesy
                            </p>
                        </div>
                    </div>
                    <div class="flex items-start gap-2 md:gap-3">
                        <div
                            class="bg-primary-500 mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full md:mt-3 md:h-2 md:w-2"
                        ></div>
                        <div>
                            <h3
                                class="text-surface-800 dark:text-surface-200 mb-1 text-sm font-medium md:text-base"
                            >
                                Stay on topic
                            </h3>
                            <p
                                class="text-surface-600 dark:text-surface-400 text-xs md:text-sm"
                            >
                                Keep discussions relevant to academic tools and
                                Axonotes
                            </p>
                        </div>
                    </div>
                </div>
                <div class="space-y-3 md:space-y-4">
                    <div class="flex items-start gap-2 md:gap-3">
                        <div
                            class="bg-primary-500 mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full md:mt-3 md:h-2 md:w-2"
                        ></div>
                        <div>
                            <h3
                                class="text-surface-800 dark:text-surface-200 mb-1 text-sm font-medium md:text-base"
                            >
                                Share knowledge
                            </h3>
                            <p
                                class="text-surface-600 dark:text-surface-400 text-xs md:text-sm"
                            >
                                Help others with your experiences and insights
                            </p>
                        </div>
                    </div>
                    <div class="flex items-start gap-2 md:gap-3">
                        <div
                            class="bg-primary-500 mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full md:mt-3 md:h-2 md:w-2"
                        ></div>
                        <div>
                            <h3
                                class="text-surface-800 dark:text-surface-200 mb-1 text-sm font-medium md:text-base"
                            >
                                Provide constructive feedback
                            </h3>
                            <p
                                class="text-surface-600 dark:text-surface-400 text-xs md:text-sm"
                            >
                                Give helpful suggestions with context and
                                details
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="text-center">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-3 text-lg font-bold md:mb-4 md:text-xl lg:text-2xl"
        >
            Ready to Get Started?
        </h2>
        <p
            class="text-surface-600 dark:text-surface-400 mx-auto mb-6 max-w-xl text-sm md:mb-8 md:text-base"
        >
            Join our growing community of students, educators, and developers
            building better academic tools.
        </p>
        <div class="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
                href="https://discord.gg/myBMaaDeQu"
                target="_blank"
                rel="noopener noreferrer"
                class="btn dark:preset-tonal-primary preset-filled-primary-500 inline-flex items-center justify-center gap-2 text-sm text-white md:text-base"
            >
                <MessageCircle class="h-3 w-3 md:h-4 md:w-4" />
                Join Discord Community
            </a>
            <a
                href="https://github.com/axonotes/AxonotesCore"
                target="_blank"
                rel="noopener noreferrer"
                class="btn dark:preset-outlined-primary-200-800 preset-outlined-primary-400-600 inline-flex items-center justify-center gap-2 text-sm md:text-base"
            >
                <Github class="h-3 w-3 md:h-4 md:w-4" />
                View on GitHub
            </a>
        </div>
    </section>
</div>
