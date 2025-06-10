<script lang="ts">
    import {
        ExternalLink,
        MessageCircle,
        Github,
        Heart,
        Users,
        Lightbulb,
        Bug,
        Code,
        Share2,
    } from "@lucide/svelte";
</script>

<svelte:head>
    <title>Community - Axonotes</title>
    <meta
        name="description"
        content="Join the Axonotes community! Connect with fellow students and educators, contribute to our open-source project, and help shape the future of academic software."
    />
</svelte:head>

<div class="container mx-auto px-4 py-8">
    <!-- Hero Section -->
    <header class="mb-16 text-center md:mb-20">
        <h1
            class="text-primary-600 dark:text-primary-400 mb-4 text-3xl !leading-tight font-bold sm:text-4xl md:text-5xl"
        >
            Join the Movement
        </h1>
        <p
            class="text-surface-800 dark:text-surface-200 mx-auto mb-6 max-w-2xl text-lg"
        >
            Help build the future of academic software alongside students and
            educators worldwide.
        </p>
        <div
            class="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mx-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
        >
            <Heart class="h-4 w-4" />
            Community-Driven Development
        </div>
    </header>

    <!-- Main Connection Paths -->
    <section class="mb-20 md:mb-24">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-8 text-center text-xl font-bold md:text-2xl"
        >
            Connect & Collaborate
        </h2>
        <div class="grid gap-8 lg:grid-cols-2">
            <!-- Discord Community -->
            <div
                class="card border-primary-200 dark:border-primary-700 group hover:border-primary-500 border-2 p-8 transition-all"
            >
                <div class="mb-6 flex items-center gap-4">
                    <div
                        class="bg-primary-100 dark:bg-primary-900/30 flex h-16 w-16 items-center justify-center rounded-xl"
                    >
                        <MessageCircle
                            class="text-primary-600 dark:text-primary-400 h-8 w-8"
                        />
                    </div>
                    <div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-md font-bold"
                        >
                            Discord Community
                        </h3>
                        <p class="text-surface-600 dark:text-surface-400">
                            Chat, share ideas, get support
                        </p>
                    </div>
                </div>
                <p
                    class="text-surface-700 dark:text-surface-300 mb-6 leading-relaxed"
                >
                    Join real-time discussions with fellow students and
                    educators. Share your academic workflow challenges and help
                    shape Axonotes development.
                </p>
                <a
                    href="https://discord.gg/myBMaaDeQu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn dark:preset-tonal-primary preset-filled-primary-500 inline-flex w-full items-center justify-center gap-2 text-white"
                >
                    Join Discord
                    <ExternalLink class="h-4 w-4" />
                </a>
            </div>

            <!-- GitHub Community -->
            <div
                class="card border-surface-200 dark:border-surface-700 group hover:border-surface-400 border-2 p-8 transition-all"
            >
                <div class="mb-6 flex items-center gap-4">
                    <div
                        class="bg-surface-100 dark:bg-surface-800 flex h-16 w-16 items-center justify-center rounded-xl"
                    >
                        <Github
                            class="text-surface-700 dark:text-surface-300 h-8 w-8"
                        />
                    </div>
                    <div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-md font-bold"
                        >
                            GitHub Development
                        </h3>
                        <p class="text-surface-600 dark:text-surface-400">
                            Contribute code, report issues
                        </p>
                    </div>
                </div>
                <p
                    class="text-surface-700 dark:text-surface-300 mb-6 leading-relaxed"
                >
                    Follow development progress, report bugs, suggest features,
                    and contribute code to make Axonotes even better.
                </p>
                <a
                    href="https://github.com/axonotes/AxonotesCore"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn preset-outlined-primary-200-800 inline-flex w-full items-center justify-center gap-2"
                >
                    View on GitHub
                    <ExternalLink class="h-4 w-4" />
                </a>
            </div>
        </div>
    </section>

    <!-- Ways to Contribute -->
    <section class="mb-20 md:mb-24">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-8 text-center text-xl font-bold md:text-2xl"
        >
            How You Can Help
        </h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <!-- Give Feedback -->
            <div class="card p-6 text-center">
                <div
                    class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Lightbulb
                        class="text-primary-600 dark:text-primary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Give Feedback
                </h3>
                <p class="text-surface-600 dark:text-surface-400 text-sm">
                    Share your academic workflow needs and suggestions
                </p>
            </div>

            <!-- Report Bugs -->
            <div class="card p-6 text-center">
                <div
                    class="bg-warning-100 dark:bg-warning-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Bug
                        class="text-warning-600 dark:text-warning-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Report Bugs
                </h3>
                <p class="text-surface-600 dark:text-surface-400 text-sm">
                    Help us improve by reporting issues you encounter
                </p>
            </div>

            <!-- Contribute Code -->
            <div class="card p-6 text-center">
                <div
                    class="bg-secondary-100 dark:bg-secondary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Code
                        class="text-secondary-600 dark:text-secondary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Contribute Code
                </h3>
                <p class="text-surface-600 dark:text-surface-400 text-sm">
                    Help build features and fix issues in our open-source code
                </p>
            </div>

            <!-- Spread the Word -->
            <div class="card p-6 text-center">
                <div
                    class="bg-tertiary-100 dark:bg-tertiary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Share2
                        class="text-tertiary-600 dark:text-tertiary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Spread the Word
                </h3>
                <p class="text-surface-600 dark:text-surface-400 text-sm">
                    Tell fellow students and educators about Axonotes
                </p>
            </div>
        </div>
    </section>

    <!-- Community Guidelines -->
    <section
        class="card from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 mb-16 bg-gradient-to-br p-8"
    >
        <h2
            class="text-surface-900 dark:text-surface-100 mb-6 text-center text-xl font-bold md:text-2xl"
        >
            Community Guidelines
        </h2>
        <div class="mx-auto max-w-4xl">
            <div class="grid gap-6 md:grid-cols-2">
                <div class="space-y-4">
                    <div class="flex items-start gap-3">
                        <div
                            class="bg-primary-500 mt-1 h-2 w-2 flex-shrink-0 rounded-full"
                        ></div>
                        <div>
                            <h3
                                class="text-surface-800 dark:text-surface-200 text-md mb-1 font-medium"
                            >
                                Be respectful and kind
                            </h3>
                            <p
                                class="text-surface-600 dark:text-surface-400 text-sm"
                            >
                                Treat everyone with respect and courtesy
                            </p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <div
                            class="bg-primary-500 mt-1 h-2 w-2 flex-shrink-0 rounded-full"
                        ></div>
                        <div>
                            <h3
                                class="text-surface-800 dark:text-surface-200 text-md mb-1 font-medium"
                            >
                                Stay on topic
                            </h3>
                            <p
                                class="text-surface-600 dark:text-surface-400 text-sm"
                            >
                                Keep discussions relevant to academic tools and
                                Axonotes
                            </p>
                        </div>
                    </div>
                </div>
                <div class="space-y-4">
                    <div class="flex items-start gap-3">
                        <div
                            class="bg-primary-500 mt-1 h-2 w-2 flex-shrink-0 rounded-full"
                        ></div>
                        <div>
                            <h3
                                class="text-surface-800 dark:text-surface-200 text-md mb-1 font-medium"
                            >
                                Share knowledge
                            </h3>
                            <p
                                class="text-surface-600 dark:text-surface-400 text-sm"
                            >
                                Help others with your experiences and insights
                            </p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <div
                            class="bg-primary-500 mt-1 h-2 w-2 flex-shrink-0 rounded-full"
                        ></div>
                        <div>
                            <h3
                                class="text-surface-800 dark:text-surface-200 text-md mb-1 font-medium"
                            >
                                Provide constructive feedback
                            </h3>
                            <p
                                class="text-surface-600 dark:text-surface-400 text-sm"
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
            class="text-surface-900 dark:text-surface-100 mb-4 text-xl font-bold md:text-2xl"
        >
            Ready to Get Started?
        </h2>
        <p class="text-surface-600 dark:text-surface-400 mx-auto mb-8 max-w-xl">
            Join our growing community of students, educators, and developers
            building better academic tools.
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <a
                href="https://discord.gg/myBMaaDeQu"
                target="_blank"
                rel="noopener noreferrer"
                class="btn dark:preset-tonal-primary preset-filled-primary-500 inline-flex items-center gap-2 text-white"
            >
                <MessageCircle class="h-4 w-4" />
                Join Discord Community
            </a>
            <a
                href="https://github.com/axonotes/AxonotesCore"
                target="_blank"
                rel="noopener noreferrer"
                class="btn preset-outlined-primary-200-800 inline-flex items-center gap-2"
            >
                <Github class="h-4 w-4" />
                View on GitHub
            </a>
        </div>
    </section>
</div>
