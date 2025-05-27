<script lang="ts">
    import {
        ExternalLink,
        MessageCircle,
        Github,
        Bug,
        Users,
        Heart,
        Lightbulb,
        ChevronRight
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
    <header class="text-center mb-12 md:mb-16">
        <h1
                class="text-4xl font-bold text-primary-600 dark:text-primary-400 sm:text-5xl !leading-tight mb-4"
        >
            Join the Axonotes Community
        </h1>
        <h3
                class="text-lg font-light text-surface-800 dark:text-surface-200 max-w-2xl mx-auto mb-3"
        >
            Connect with fellow students, educators, and developers who are passionate about revolutionizing academic
            software.
        </h3>
        <p
                class="text-sm text-surface-700 dark:text-surface-300 max-w-2xl mx-auto"
        >
            Whether you're here to collaborate, contribute, or simply connect, we're excited to have you as part of our
            journey.
        </p>
    </header>

    <!-- Community Platforms Grid -->
    <section class="mb-16 md:mb-20">
        <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100 text-center mb-8">
            Connect & Collaborate
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <!-- Discord Community -->
            <div class="card flex flex-col justify-between p-8 bg-gradient-to-br from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 border border-primary-200 dark:border-primary-800">
                <div class="flex items-start gap-4 mb-6">
                    <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageCircle class="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">
                            Discord Server
                        </h3>
                        <p class="text-surface-800 dark:text-surface-200">
                            Join our vibrant Discord community to chat in real-time, ask questions, share ideas, and
                            connect with other Axonotes enthusiasts.
                        </p>
                    </div>
                </div>
                <div class="space-y-3 mb-6">
                    <div class="flex items-center gap-2 text-sm text-surface-700 dark:text-surface-300">
                        <span class="w-2 h-2 bg-primary-500 rounded-full"></span>
                        Real-time discussions and support
                    </div>
                    <div class="flex items-center gap-2 text-sm text-surface-700 dark:text-surface-300">
                        <span class="w-2 h-2 bg-primary-500 rounded-full"></span>
                        Connect with students and educators
                    </div>
                    <div class="flex items-center gap-2 text-sm text-surface-700 dark:text-surface-300">
                        <span class="w-2 h-2 bg-primary-500 rounded-full"></span>
                        Get early updates and previews
                    </div>
                    <div class="flex items-center gap-2 text-sm text-surface-700 dark:text-surface-300">
                        <span class="w-2 h-2 bg-primary-500 rounded-full"></span>
                        Share feedback and suggestions
                    </div>
                </div>
                <a
                        href="https://discord.gg/myBMaaDeQu"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn w-full dark:preset-tonal-primary preset-filled-primary-500 text-white inline-flex items-center justify-center gap-2"
                >
                    Join Discord Server
                    <ExternalLink class="h-4 w-4"/>
                </a>
            </div>

            <!-- GitHub Community -->
            <div class="card flex flex-col justify-between p-8 bg-gradient-to-br from-surface-50 to-primary-50 dark:from-surface-900/30 dark:to-primary-950/20 border border-surface-200 dark:border-surface-700">
                <div class="flex items-start gap-4 mb-6">
                    <div class="w-12 h-12 bg-surface-100 dark:bg-surface-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Github class="h-6 w-6 text-surface-800 dark:text-surface-200"/>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">
                            GitHub Community
                        </h3>
                        <p class="text-surface-800 dark:text-surface-200">
                            Follow our development progress, report issues, and contribute to the future of academic
                            software.
                        </p>
                    </div>
                </div>
                <div class="space-y-3 mb-6">
                    <div class="flex items-center gap-2 text-sm text-surface-700 dark:text-surface-300">
                        <span class="w-2 h-2 bg-primary-500 rounded-full"></span>
                        Track development progress
                    </div>
                    <div class="flex items-center gap-2 text-sm text-surface-700 dark:text-surface-300">
                        <span class="w-2 h-2 bg-primary-500 rounded-full"></span>
                        Report bugs and issues
                    </div>
                    <div class="flex items-center gap-2 text-sm text-surface-700 dark:text-surface-300">
                        <span class="w-2 h-2 bg-primary-500 rounded-full"></span>
                        Contribute code and documentation
                    </div>
                    <div class="flex items-center gap-2 text-sm text-surface-700 dark:text-surface-300">
                        <span class="w-2 h-2 bg-primary-500 rounded-full"></span>
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
        <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100 text-center mb-8">
            Ways to Get Involved
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Code Contributions -->
            <div class="card p-6 text-center transition-all duration-300">
                <div class="group w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div class="flex items-center relative text-primary-600 dark:text-primary-400">
                        <ChevronRight class="h-6 w-6 rotate-180 -mr-1 group-hover:mr-1 duration-200"/>
                        <div class="absolute w-full flex justify-center">
                            <img src="/favicon.png" alt="surprise"
                                 class="h-6 opacity-0 group-hover:opacity-100 duration-200">
                        </div>
                        <ChevronRight class="h-6 w-6 -ml-1 group-hover:ml-1 duration-200"/>
                    </div>
                </div>
                <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">
                    Contribute Code
                </h3>
                <p class="text-surface-800 dark:text-surface-200 text-sm mb-4">
                    Help us build the future of academic software by contributing to our open-source codebase.
                </p>
                <a
                        href="https://github.com/axonotes/AxonotesCore"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn text-sm inline-flex items-center gap-1"
                >
                    View Code
                    <ExternalLink class="h-3 w-3"/>
                </a>
            </div>

            <!-- Feature Requests -->
            <div class="card p-6 text-center transition-all duration-300">
                <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lightbulb class="h-6 w-6 text-secondary-600 dark:text-secondary-400"/>
                </div>
                <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">
                    Request Features
                </h3>
                <p class="text-surface-800 dark:text-surface-200 text-sm mb-4">
                    Have an idea for a new feature? Share it with us and help shape Axonotes' development.
                </p>
                <a
                        href="https://github.com/axonotes/AxonotesCore/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn text-sm inline-flex items-center gap-1"
                >
                    Submit Ideas
                    <ExternalLink class="h-3 w-3"/>
                </a>
            </div>

            <!-- Bug Reports -->
            <div class="card p-6 text-center transition-all duration-300">
                <div class="w-12 h-12 bg-warning-100 dark:bg-warning-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Bug class="h-6 w-6 text-warning-600 dark:text-warning-400"/>
                </div>
                <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">
                    Report Issues
                </h3>
                <p class="text-surface-800 dark:text-surface-200 text-sm mb-4">
                    Help us improve by reporting bugs, issues, or unexpected behavior you encounter.
                </p>
                <a
                        href="https://github.com/axonotes/AxonotesCore/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn text-sm inline-flex items-center gap-1"
                >
                    Report Bug
                    <ExternalLink class="h-3 w-3"/>
                </a>
            </div>
        </div>
    </section>

    <!-- Open Source Philosophy -->
    <section
            class="card p-8 lg:p-12 bg-gradient-to-br from-primary-50 to-surface-50 outline outline-primary-500 dark:outline-0 dark:from-primary-950/20 dark:to-surface-900/30 mb-16">
        <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <button onclick={() => heartClicked = true} class="{heartClicked ? 'cursor-default' : ''}">
                    <Heart class="h-4 w-4 {heartClicked ? 'fill-red-500 text-transparent' : 'hover:scale-110'} duration-200 transition-all"/>
                </button>
                Open Source & Community-Driven
            </div>
            <h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">
                Built by the Community, for the Community
            </h2>
            <p class="text-lg text-surface-800 dark:text-surface-200 max-w-2xl mx-auto mb-8">
                Axonotes is more than just software – it's a collaborative effort to revolutionize how students and
                educators interact with technology. Your contributions, feedback, and ideas directly shape our
                development.
            </p>
            <div class="grid md:grid-cols-2 gap-8 text-left">
                <div>
                    <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-3">
                        🚀 What We Believe
                    </h3>
                    <ul class="space-y-2 text-surface-600 dark:text-surface-400">
                        <li>• Academic tools should be accessible to everyone</li>
                        <li>• Community input drives better software</li>
                        <li>• Transparency builds trust and innovation</li>
                        <li>• Open source creates lasting value</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-3">
                        🤝 How You Can Help
                    </h3>
                    <ul class="space-y-2 text-surface-600 dark:text-surface-400">
                        <li>• Share your academic workflow challenges</li>
                        <li>• Test early versions and provide feedback</li>
                        <li>• Contribute code, documentation, or design</li>
                        <li>• Spread the word to fellow students and educators</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Community Guidelines -->
    <section class="card p-6 mb-16">
        <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-4 flex items-center gap-2">
            <Users class="h-5 w-5"/>
            Community Guidelines
        </h3>
        <div class="grid md:grid-cols-2 gap-6 text-sm text-surface-700 dark:text-surface-300">
            <div>
                <h4 class="font-medium text-surface-800 dark:text-surface-200 mb-2">Be Respectful</h4>
                <p>Treat all community members with kindness and respect. We're all here to learn and grow together.</p>
            </div>
            <div>
                <h4 class="font-medium text-surface-800 dark:text-surface-200 mb-2">Stay On Topic</h4>
                <p>Keep discussions relevant to Axonotes, academic productivity, and related educational technology.</p>
            </div>
            <div>
                <h4 class="font-medium text-surface-800 dark:text-surface-200 mb-2">Share Knowledge</h4>
                <p>Help others by sharing your experiences, solutions, and insights about academic workflows.</p>
            </div>
            <div>
                <h4 class="font-medium text-surface-800 dark:text-surface-200 mb-2">Be Constructive</h4>
                <p>Provide helpful feedback and suggestions. When reporting issues, include relevant details and
                    context.</p>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="text-center">
        <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-4">
            Ready to Join Us?
        </h2>
        <p class="text-surface-700 dark:text-surface-300 mb-8 max-w-xl mx-auto">
            Whether you're a student, educator, developer, or simply someone passionate about better academic tools,
            there's a place for you in our community.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
                    href="https://discord.gg/myBMaaDeQu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn inline-flex items-center gap-2"
            >
                <MessageCircle class="h-4 w-4"/>
                Join Discord
            </a>
            <a
                    href="https://github.com/axonotes/AxonotesCore"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn inline-flex items-center gap-2"
            >
                <Github class="h-4 w-4"/>
                View on GitHub
            </a>
        </div>
    </section>
</div>
