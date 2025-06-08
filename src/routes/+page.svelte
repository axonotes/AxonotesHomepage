<script lang="ts">
    import {
        ArrowRight,
        ChevronRight,
        ExternalLink,
        FileText,
        Github,
        Globe,
        GraduationCap,
        Heart,
        MessageCircle,
        Shield,
        Target,
        Users,
        Workflow,
    } from "@lucide/svelte";

    let heartClicked = $state(false);

    const topFeatures = [
        {
            icon: Workflow,
            title: "Unify Your Workflow",
            description:
                "No more app-switching. Notes, tasks, chat, and learning tools seamlessly integrated.",
        },
        {
            icon: Users,
            title: "Collaborate Effortlessly",
            description:
                "Work together in real-time with integrated chat and shared channels.",
        },
        {
            icon: GraduationCap,
            title: "Boost Your Learning",
            description:
                "Interactive exercises, reimagined flashcards, and powerful note-taking tools.",
        },
        {
            icon: Shield,
            title: "Smart & Secure",
            description:
                "Offline-first, version history, and Swiss-grade privacy with E2EE.",
        },
    ];

    // Featured items from the feature list
    const featuredFeatures = [
        {
            name: "Arrange Your Views",
            description:
                "Organize how Axonotes appears on your screen by splitting it into adjustable sections.",
        },
        {
            name: "Smart Conflict Resolution",
            description:
                "Make changes offline and let Axonotes handle synchronization when you reconnect.",
        },
        {
            name: "Live Collaboration",
            description:
                "Work on documents with others at the same time with changes appearing instantly.",
        },
    ];
</script>

<svelte:head>
    <title>Axonotes - Your Unified Academic Command Center</title>
    <meta
        name="description"
        content="End the chaos of juggling multiple apps for school. Axonotes is your central academic hub for notes, collaboration, planning, and learning – all in one intuitive experience."
    />
</svelte:head>

<div class="container mx-auto px-4 py-8">
    <!-- Hero Section -->
    <section class="mb-16 md:mb-20">
        <div class="grid items-center gap-12 lg:grid-cols-2">
            <!-- Content -->
            <div class="space-y-8">
                <div>
                    <h1
                        class="text-primary-600 dark:text-primary-400 mb-4 text-4xl !leading-tight font-bold sm:text-5xl"
                    >
                        Tired of Juggling Apps for School & Studies?
                    </h1>
                    <h3
                        class="text-surface-800 dark:text-surface-200 mb-3 max-w-2xl text-lg font-light"
                    >
                        Your central academic hub for notes, collaboration,
                        planning, and learning – all in one intuitive
                        experience.
                    </h3>
                    <p class="text-surface-700 dark:text-surface-300 text-sm">
                        Currently in planning and early development – help us
                        build the tool you need!
                    </p>
                </div>

                <div class="flex flex-col gap-4 sm:flex-row">
                    <a
                        href="#feedback"
                        class="btn dark:preset-tonal-primary preset-filled-primary-500 inline-flex items-center gap-2 text-white"
                    >
                        <Users class="h-4 w-4" />
                        Join the Waitlist & Shape Axonotes!
                        <ArrowRight class="h-4 w-4" />
                    </a>
                    <a
                        href="/features"
                        class="btn preset-outlined-primary-200-800 inline-flex items-center gap-2"
                    >
                        <Target class="h-4 w-4" />
                        View Features
                    </a>
                </div>
            </div>

            <!-- Visual -->
            <div class="flex justify-center">
                <div
                    class="from-primary-50 to-primary-100 dark:from-primary-950/20 dark:to-primary-900/30 border-primary-200 dark:border-primary-800 flex aspect-square w-full max-w-md items-center justify-center rounded-3xl border bg-gradient-to-br"
                >
                    <div class="space-y-4 p-8 text-center">
                        <img
                            src="/favicon.png"
                            alt="Axonotes Logo"
                            class="mx-auto h-32 w-32"
                        />
                        <p
                            class="text-primary-600 dark:text-primary-400 text-lg font-semibold"
                        >
                            Organizing your academic life
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Problem Section -->
    <section id="problem" class="mb-16 md:mb-20">
        <div
            class="card from-secondary-50 to-surface-50 dark:from-secondary-950/20 dark:to-surface-900/30 border-secondary-200 dark:border-secondary-800 border bg-gradient-to-br p-8 lg:p-12"
        >
            <h2
                class="text-surface-900 dark:text-surface-100 mb-6 text-center text-2xl font-bold"
            >
                Sound Familiar?
            </h2>
            <div class="mx-auto max-w-4xl">
                <div class="mb-8 text-center">
                    <p
                        class="text-surface-800 dark:text-surface-200 text-lg italic"
                    >
                        "It's 2 AM. Your group project is due tomorrow, and
                        you're frantically switching between Google Docs for
                        writing, Discord for team chat, Notion for project
                        planning, and your phone for the group WhatsApp. Your
                        notes are scattered across three different apps, you
                        can't find that important research link, and half your
                        team is confused about which version of the document is
                        the latest."
                    </p>
                </div>
                <div class="grid gap-8 md:grid-cols-2">
                    <div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 mb-4 font-semibold"
                        >
                            😰 The Current Reality
                        </h3>
                        <ul
                            class="text-surface-800 dark:text-surface-200 space-y-2"
                        >
                            <li>
                                • Frantically switching between shared documents
                            </li>
                            <li>
                                • Separate chat apps pinging with conflicting
                                ideas
                            </li>
                            <li>
                                • Personal notes scattered across different apps
                            </li>
                            <li>• Course portals for assignment details</li>
                            <li>
                                • Making flashcards feels like climbing a
                                mountain
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 mb-4 font-semibold"
                        >
                            ✨ Our Vision
                        </h3>
                        <ul
                            class="text-surface-800 dark:text-surface-200 space-y-2"
                        >
                            <li>
                                • One unified platform for all academic needs
                            </li>
                            <li>
                                • Seamless collaboration without app-switching
                            </li>
                            <li>
                                • Notes, planning, and learning tools together
                            </li>
                            <li>• Built specifically for academic life</li>
                            <li>• Privacy-focused and secure by design</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Overview -->
    <section class="mb-16 md:mb-20">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-8 text-center text-2xl font-bold"
        >
            Everything You Need, All in One Place
        </h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {#each topFeatures as feature (feature.id)}
                <div class="card p-6 text-center transition-all duration-300">
                    <div
                        class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                    >
                        <svelte:component
                            this={feature.icon}
                            class="text-primary-600 dark:text-primary-400 h-6 w-6"
                        />
                    </div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 mb-2 font-semibold"
                    >
                        {feature.title}
                    </h3>
                    <p class="text-surface-700 dark:text-surface-300 text-sm">
                        {feature.description}
                    </p>
                </div>
            {/each}
        </div>
        <div class="mt-8 flex justify-center">
            <a href="/features" class="btn inline-flex items-center gap-2">
                Explore All Features
                <ChevronRight class="h-4 w-4" />
            </a>
        </div>
    </section>

    <!-- Featured Capabilities -->
    <section class="mb-16 md:mb-20">
        <div
            class="card outline-primary-500 from-surface-50 to-primary-50 dark:from-surface-900/30 dark:to-primary-950/20 bg-gradient-to-br p-8 outline lg:p-12 dark:outline-0"
        >
            <div class="mx-auto max-w-4xl">
                <h2
                    class="text-surface-900 dark:text-surface-100 mb-8 text-center text-2xl font-bold"
                >
                    Highlighted Features
                </h2>
                <div class="grid gap-8 md:grid-cols-3">
                    {#each featuredFeatures as feature (feature.id)}
                        <div class="space-y-3">
                            <h3
                                class="text-surface-900 dark:text-surface-100 flex items-center gap-2 font-semibold"
                            >
                                <span
                                    class="text-primary-600 dark:text-primary-400 group relative flex items-center"
                                >
                                    <ChevronRight
                                        class="-mr-0.5 h-5 w-5 rotate-180 duration-200 group-hover:mr-1"
                                    />
                                    <span
                                        class="absolute flex w-full justify-center"
                                    >
                                        <img
                                            src="/favicon.png"
                                            alt="surprise"
                                            class="h-5 opacity-0 duration-200 group-hover:opacity-100"
                                        />
                                    </span>
                                    <ChevronRight
                                        class="-ml-0.5 h-5 w-5 duration-200 group-hover:ml-1"
                                    />
                                </span>
                                {feature.name}
                            </h3>
                            <p class="text-surface-700 dark:text-surface-300">
                                {feature.description}
                            </p>
                        </div>
                    {/each}
                </div>
                <div class="mt-8 flex justify-center">
                    <a
                        href="/features"
                        class="btn dark:preset-tonal-primary preset-filled-primary-500 inline-flex items-center gap-2 text-white"
                    >
                        See All Features
                        <ExternalLink class="h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Principles -->
    <section class="mb-16 md:mb-20">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-8 text-center text-2xl font-bold"
        >
            What Drives Us
        </h2>
        <div class="grid gap-6 md:grid-cols-3">
            <!-- Unification -->
            <div class="card p-6 text-center transition-all duration-300">
                <div
                    class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Target
                        class="text-primary-600 dark:text-primary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 mb-2 font-semibold"
                >
                    Unification
                </h3>
                <p class="text-surface-700 dark:text-surface-300 text-sm">
                    No more app-switching chaos. Everything you need for
                    academic success in one cohesive platform.
                </p>
            </div>

            <!-- Privacy -->
            <div class="card p-6 text-center transition-all duration-300">
                <div
                    class="bg-secondary-100 dark:bg-secondary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Shield
                        class="text-secondary-600 dark:text-secondary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 mb-2 font-semibold"
                >
                    Privacy First
                </h3>
                <p class="text-surface-700 dark:text-surface-300 text-sm">
                    Built with Swiss precision and end-to-end encryption. Your
                    academic work stays yours.
                </p>
            </div>

            <!-- Accessibility -->
            <div class="card p-6 text-center transition-all duration-300">
                <div
                    class="bg-tertiary-100 dark:bg-tertiary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Globe
                        class="text-tertiary-600 dark:text-tertiary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 mb-2 font-semibold"
                >
                    Universal Access
                </h3>
                <p class="text-surface-700 dark:text-surface-300 text-sm">
                    Works offline-first on all platforms. Academic tools should
                    be accessible to everyone, everywhere.
                </p>
            </div>
        </div>
        <div class="mt-8 flex justify-center">
            <a href="/about" class="btn inline-flex items-center gap-2">
                Learn More About Us
                <ChevronRight class="h-4 w-4" />
            </a>
        </div>
    </section>

    <!-- Feedback Section -->
    <section id="feedback" class="mb-16 md:mb-20">
        <div
            class="card from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 border-primary-200 dark:border-primary-800 border bg-gradient-to-br p-8 lg:p-12"
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
                    Your Voice Matters
                </div>
                <h2
                    class="text-surface-900 dark:text-surface-100 mb-4 text-2xl font-bold"
                >
                    Help Shape Axonotes
                </h2>
                <p
                    class="text-surface-700 dark:text-surface-300 mx-auto mb-8 max-w-xl"
                >
                    Because we're building Axonotes right now, your feedback is
                    invaluable. Tell us what you need to succeed. Help us build
                    the ultimate tool for students and educators!
                </p>
                <div class="flex flex-col justify-center gap-4 sm:flex-row">
                    <a
                        href="mailto:oliver@axonotes.ch"
                        class="btn inline-flex items-center gap-2"
                    >
                        Share Thoughts via Email
                    </a>
                    <a
                        href="https://forms.gle/N2qFoXn4PonD6EnA9"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn inline-flex items-center gap-2"
                    >
                        <FileText class="h-4 w-4" />
                        Fill Out Our Survey
                        <ExternalLink class="h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Community Section -->
    <section class="text-center">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-4 text-2xl font-bold"
        >
            Join Our Community
        </h2>
        <p class="text-surface-700 dark:text-surface-300 mx-auto mb-8 max-w-xl">
            Connect with fellow students, educators, and developers who are
            passionate about revolutionizing academic software.
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
                Star on GitHub
            </a>
            <a href="/community" class="btn inline-flex items-center gap-2">
                <Users class="h-4 w-4" />
                Community Page
            </a>
        </div>
    </section>
</div>
