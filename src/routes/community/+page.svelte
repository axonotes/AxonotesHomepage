<script lang="ts">
    import {
        ExternalLink,
        MessageCircle,
        Github,
        Bug,
        Users,
        Heart,
        Lightbulb,
        ChevronRight,
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

<div class="container mx-auto px-4 py-8">
    <!-- Header Section -->
    <header class="mb-12 text-center md:mb-16">
        <h1
            class="text-primary-600 dark:text-primary-400 mb-4 text-4xl !leading-tight font-bold sm:text-5xl"
        >
            Join the Axonotes Community
        </h1>
        <h3
            class="text-surface-800 dark:text-surface-200 mx-auto mb-3 max-w-2xl text-lg font-light"
        >
            Connect with fellow students, educators, and developers who are
            passionate about revolutionizing academic software.
        </h3>
        <p
            class="text-surface-700 dark:text-surface-300 mx-auto max-w-2xl text-sm"
        >
            Whether you're here to collaborate, contribute, or simply connect,
            we're excited to have you as part of our journey.
        </p>
    </header>

    <!-- Community Platforms Grid -->
    <section class="mb-16 md:mb-20">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-8 text-center text-2xl font-bold"
        >
            Connect & Collaborate
        </h2>
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <!-- Discord Community -->
            <div
                class="card from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 border-primary-200 dark:border-primary-800 flex flex-col justify-between border bg-gradient-to-br p-8"
            >
                <div class="mb-6 flex items-start gap-4">
                    <div
                        class="bg-primary-100 dark:bg-primary-900/30 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg"
                    >
                        <MessageCircle
                            class="text-primary-600 dark:text-primary-400 h-6 w-6"
                        />
                    </div>
                    <div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 mb-2 text-xl font-semibold"
                        >
                            Discord Server
                        </h3>
                        <p class="text-surface-800 dark:text-surface-200">
                            Join our vibrant Discord community to chat in
                            real-time, ask questions, share ideas, and connect
                            with other Axonotes enthusiasts.
                        </p>
                    </div>
                </div>
                <div class="mb-6 space-y-3">
                    <div
                        class="text-surface-700 dark:text-surface-300 flex items-center gap-2 text-sm"
                    >
                        <span class="bg-primary-500 h-2 w-2 rounded-full"
                        ></span>
                        Real-time discussions and support
                    </div>
                    <div
                        class="text-surface-700 dark:text-surface-300 flex items-center gap-2 text-sm"
                    >
                        <span class="bg-primary-500 h-2 w-2 rounded-full"
                        ></span>
                        Connect with students and educators
                    </div>
                    <div
                        class="text-surface-700 dark:text-surface-300 flex items-center gap-2 text-sm"
                    >
                        <span class="bg-primary-500 h-2 w-2 rounded-full"
                        ></span>
                        Get early updates and previews
                    </div>
                    <div
                        class="text-surface-700 dark:text-surface-300 flex items-center gap-2 text-sm"
                    >
                        <span class="bg-primary-500 h-2 w-2 rounded-full"
                        ></span>
                        Share feedback and suggestions
                    </div>
                </div>
                <a
                    href="https://discord.gg/myBMaaDeQu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn dark:preset-tonal-primary preset-filled-primary-500 inline-flex w-full items-center justify-center gap-2 text-white"
                >
                    Join Discord Server
                    <ExternalLink class="h-4 w-4" />
                </a>
            </div>

            <!-- GitHub Community -->
            <div
                class="card from-surface-50 to-primary-50 dark:from-surface-900/30 dark:to-primary-950/20 border-surface-200 dark:border-surface-700 flex flex-col justify-between border bg-gradient-to-br p-8"
            >
                <div class="mb-6 flex items-start gap-4">
                    <div
                        class="bg-surface-100 dark:bg-surface-800 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg"
                    >
                        <Github
                            class="text-surface-800 dark:text-surface-200 h-6 w-6"
                        />
                    </div>
                    <div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 mb-2 text-xl font-semibold"
                        >
                            GitHub Community
                        </h3>
                        <p class="text-surface-800 dark:text-surface-200">
                            Follow our development progress, report issues, and
                            contribute to the future of academic software.
                        </p>
                    </div>
                </div>
                <div class="mb-6 space-y-3">
                    <div
                        class="text-surface-700 dark:text-surface-300 flex items-center gap-2 text-sm"
                    >
                        <span class="bg-primary-500 h-2 w-2 rounded-full"
                        ></span>
                        Track development progress
                    </div>
                    <div
                        class="text-surface-700 dark:text-surface-300 flex items-center gap-2 text-sm"
                    >
                        <span class="bg-primary-500 h-2 w-2 rounded-full"
                        ></span>
                        Report bugs and issues
                    </div>
                    <div
                        class="text-surface-700 dark:text-surface-300 flex items-center gap-2 text-sm"
                    >
                        <span class="bg-primary-500 h-2 w-2 rounded-full"
                        ></span>
                        Contribute code and documentation
                    </div>
                    <div
                        class="text-surface-700 dark:text-surface-300 flex items-center gap-2 text-sm"
                    >
                        <span class="bg-primary-500 h-2 w-2 rounded-full"
                        ></span>
                        Request new features
                    </div>
                </div>
                <div class="flex gap-3">
                    <a
                        href="https://github.com/axonotes/AxonotesCore"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn preset-outlined-primary-200-800 flex-1"
                    >
                        Core Repo
                    </a>
                    <a
                        href="https://github.com/axonotes/AxonotesHomepage"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn preset-outlined-primary-200-800 flex-1"
                    >
                        Homepage
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Ways to Contribute -->
    <section class="mb-16 md:mb-20">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-8 text-center text-2xl font-bold"
        >
            Ways to Get Involved
        </h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <!-- Code Contributions -->
            <div class="card p-6 text-center transition-all duration-300">
                <div
                    class="group bg-primary-100 dark:bg-primary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <div
                        class="text-primary-600 dark:text-primary-400 relative flex items-center"
                    >
                        <ChevronRight
                            class="-mr-1 h-6 w-6 rotate-180 duration-200 group-hover:mr-1"
                        />
                        <div class="absolute flex w-full justify-center">
                            <img
                                src="/favicon.png"
                                alt="surprise"
                                class="h-6 opacity-0 duration-200 group-hover:opacity-100"
                            />
                        </div>
                        <ChevronRight
                            class="-ml-1 h-6 w-6 duration-200 group-hover:ml-1"
                        />
                    </div>
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 mb-2 font-semibold"
                >
                    Contribute Code
                </h3>
                <p class="text-surface-800 dark:text-surface-200 mb-4 text-sm">
                    Help us build the future of academic software by
                    contributing to our open-source codebase.
                </p>
                <a
                    href="https://github.com/axonotes/AxonotesCore"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn inline-flex items-center gap-1 text-sm"
                >
                    View Code
                    <ExternalLink class="h-3 w-3" />
                </a>
            </div>

            <!-- Feature Requests -->
            <div class="card p-6 text-center transition-all duration-300">
                <div
                    class="bg-secondary-100 dark:bg-secondary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Lightbulb
                        class="text-secondary-600 dark:text-secondary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 mb-2 font-semibold"
                >
                    Request Features
                </h3>
                <p class="text-surface-800 dark:text-surface-200 mb-4 text-sm">
                    Have an idea for a new feature? Share it with us and help
                    shape Axonotes' development.
                </p>
                <a
                    href="https://github.com/axonotes/AxonotesCore/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn inline-flex items-center gap-1 text-sm"
                >
                    Submit Ideas
                    <ExternalLink class="h-3 w-3" />
                </a>
            </div>

            <!-- Bug Reports -->
            <div class="card p-6 text-center transition-all duration-300">
                <div
                    class="bg-warning-100 dark:bg-warning-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Bug
                        class="text-warning-600 dark:text-warning-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 mb-2 font-semibold"
                >
                    Report Issues
                </h3>
                <p class="text-surface-800 dark:text-surface-200 mb-4 text-sm">
                    Help us improve by reporting bugs, issues, or unexpected
                    behavior you encounter.
                </p>
                <a
                    href="https://github.com/axonotes/AxonotesCore/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn inline-flex items-center gap-1 text-sm"
                >
                    Report Bug
                    <ExternalLink class="h-3 w-3" />
                </a>
            </div>
        </div>
    </section>

    <!-- Open Source Philosophy -->
    <section
        class="card from-primary-50 to-surface-50 outline-primary-500 dark:from-primary-950/20 dark:to-surface-900/30 mb-16 bg-gradient-to-br p-8 outline lg:p-12 dark:outline-0"
    >
        <div class="mx-auto max-w-4xl text-center">
            <div
                class="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
            >
                <button
                    onclick={() => (heartClicked = true)}
                    class={heartClicked ? "cursor-default" : ""}
                >
                    <Heart
                        class="h-4 w-4 {heartClicked
                            ? 'fill-red-500 text-transparent'
                            : 'hover:scale-110'} transition-all duration-200"
                    />
                </button>
                Open Source & Community-Driven
            </div>
            <h2
                class="text-surface-900 dark:text-surface-100 mb-4 text-3xl font-bold"
            >
                Built by the Community, for the Community
            </h2>
            <p
                class="text-surface-800 dark:text-surface-200 mx-auto mb-8 max-w-2xl text-lg"
            >
                Axonotes is more than just software – it's a collaborative
                effort to revolutionize how students and educators interact with
                technology. Your contributions, feedback, and ideas directly
                shape our development.
            </p>
            <div class="grid gap-8 text-left md:grid-cols-2">
                <div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 mb-3 font-semibold"
                    >
                        🚀 What We Believe
                    </h3>
                    <ul
                        class="text-surface-600 dark:text-surface-400 space-y-2"
                    >
                        <li>
                            • Academic tools should be accessible to everyone
                        </li>
                        <li>• Community input drives better software</li>
                        <li>• Transparency builds trust and innovation</li>
                        <li>• Open source creates lasting value</li>
                    </ul>
                </div>
                <div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 mb-3 font-semibold"
                    >
                        🤝 How You Can Help
                    </h3>
                    <ul
                        class="text-surface-600 dark:text-surface-400 space-y-2"
                    >
                        <li>• Share your academic workflow challenges</li>
                        <li>• Test early versions and provide feedback</li>
                        <li>• Contribute code, documentation, or design</li>
                        <li>
                            • Spread the word to fellow students and educators
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Community Guidelines -->
    <section class="card mb-16 p-6">
        <h3
            class="text-surface-900 dark:text-surface-100 mb-4 flex items-center gap-2 font-semibold"
        >
            <Users class="h-5 w-5" />
            Community Guidelines
        </h3>
        <div
            class="text-surface-700 dark:text-surface-300 grid gap-6 text-sm md:grid-cols-2"
        >
            <div>
                <h4
                    class="text-surface-800 dark:text-surface-200 mb-2 font-medium"
                >
                    Be Respectful
                </h4>
                <p>
                    Treat all community members with kindness and respect. We're
                    all here to learn and grow together.
                </p>
            </div>
            <div>
                <h4
                    class="text-surface-800 dark:text-surface-200 mb-2 font-medium"
                >
                    Stay On Topic
                </h4>
                <p>
                    Keep discussions relevant to Axonotes, academic
                    productivity, and related educational technology.
                </p>
            </div>
            <div>
                <h4
                    class="text-surface-800 dark:text-surface-200 mb-2 font-medium"
                >
                    Share Knowledge
                </h4>
                <p>
                    Help others by sharing your experiences, solutions, and
                    insights about academic workflows.
                </p>
            </div>
            <div>
                <h4
                    class="text-surface-800 dark:text-surface-200 mb-2 font-medium"
                >
                    Be Constructive
                </h4>
                <p>
                    Provide helpful feedback and suggestions. When reporting
                    issues, include relevant details and context.
                </p>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="text-center">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-4 text-2xl font-bold"
        >
            Ready to Join Us?
        </h2>
        <p class="text-surface-700 dark:text-surface-300 mx-auto mb-8 max-w-xl">
            Whether you're a student, educator, developer, or simply someone
            passionate about better academic tools, there's a place for you in
            our community.
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <a
                href="https://discord.gg/myBMaaDeQu"
                target="_blank"
                rel="noopener noreferrer"
                class="btn inline-flex items-center gap-2"
            >
                <MessageCircle class="h-4 w-4" />
                Join Discord
            </a>
            <a
                href="https://github.com/axonotes/AxonotesCore"
                target="_blank"
                rel="noopener noreferrer"
                class="btn inline-flex items-center gap-2"
            >
                <Github class="h-4 w-4" />
                View on GitHub
            </a>
        </div>
    </section>
</div>
