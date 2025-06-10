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
        Camera,
        Play,
        Palette,
    } from "@lucide/svelte";

    // Core value propositions - simplified to 3 key benefits
    const coreValues = [
        {
            icon: BookOpen,
            title: "Unify Your Workflow",
            description:
                "Stop switching between apps. Notes, tasks, and collaboration in one place.",
        },
        {
            icon: Users,
            title: "Collaborate Effortlessly",
            description:
                "Real-time editing and chat without the chaos of multiple platforms.",
        },
        {
            icon: Zap,
            title: "Study Smarter",
            description:
                "Interactive learning tools designed specifically for students.",
        },
    ];

    // Problem/Solution comparison
    const problemSolution = {
        before: [
            "Google Docs for writing",
            "Discord for team chat",
            "Notion for planning",
            "WhatsApp for quick updates",
        ],
        after: [
            "All writing in one place",
            "Integrated team communication",
            "Built-in planning tools",
            "Everything synchronized",
        ],
    };

    // Placeholder content for missing visuals
    const placeholders = [
        {
            type: "demo",
            icon: Play,
            title: "🎬 Epic Demo Reel (In Progress)",
            description:
                "Imagine the smoothest workflow animation here. Now imagine we actually had time to make it.",
            action: "Want to help us create amazing demos?",
        },
        {
            type: "interface",
            icon: Palette,
            title: "🎨 Beautiful UI Loading... (Designer Needed!)",
            description:
                "This is where our stunning interface would be if we had a designer. Know Figma? We have cookies!",
            action: "Join our design team",
        },
        {
            type: "features",
            icon: Camera,
            title: "📱 App Preview Coming Soon™",
            description:
                "Currently exists only in our dreams and messy wireframes. Help us make it real!",
            action: "Help us build the future",
        },
    ];
</script>

<svelte:head>
    <title>Axonotes - Stop Juggling Apps. Start Studying Smarter.</title>
    <meta
        name="description"
        content="One platform for notes, collaboration, and learning - built by students, for students. Join the waitlist and help shape the future of academic software."
    />
</svelte:head>

<div class="container mx-auto px-4 py-8">
    <!-- Hero Section -->
    <section class="mb-20 md:mb-28">
        <div class="mx-auto max-w-4xl text-center">
            <!-- Main Headline -->
            <h1
                class="text-primary-600 dark:text-primary-400 mb-6 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl"
            >
                Stop Juggling Apps.<br />Start Studying Smarter.
            </h1>

            <!-- Subheadline -->
            <p
                class="text-surface-800 dark:text-surface-200 mx-auto mb-8 max-w-2xl text-lg md:text-xl"
            >
                One platform for notes, collaboration, and learning - built by
                students, for students.
            </p>

            <!-- Visual Element -->
            <div class="mb-8 flex justify-center">
                <div
                    class="from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 border-primary-200 dark:border-primary-800 flex h-32 w-32 items-center justify-center rounded-3xl border bg-gradient-to-br"
                >
                    <img
                        src="/favicon.png"
                        alt="Axonotes Logo"
                        class="h-20 w-20"
                    />
                </div>
            </div>

            <!-- Status Badge -->
            <div
                class="bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
            >
                Currently in development - Join us in building the future
            </div>

            <!-- Primary CTA -->
            <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                    href="https://discord.gg/myBMaaDeQu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn preset-filled-primary-500 inline-flex items-center gap-2 text-white"
                >
                    <MessageCircle class="h-5 w-5" />
                    Join Waitlist & Help Shape Axonotes
                    <ArrowRight class="h-4 w-4" />
                </a>
                <a
                    href="/features"
                    class="btn preset-outlined-primary-200-800 inline-flex items-center gap-2"
                >
                    Explore Features
                    <ChevronRight class="h-4 w-4" />
                </a>
            </div>
        </div>
    </section>

    <!-- Product Demo Placeholder -->
    <section class="mb-20 md:mb-24">
        <div class="mx-auto max-w-4xl">
            <div
                class="card border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 border-2 border-dashed p-12 text-center"
            >
                <div
                    class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                >
                    <Play
                        class="text-primary-600 dark:text-primary-400 h-8 w-8"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 mb-3 text-xl font-bold"
                >
                    🎬 Epic Demo Reel (In Progress)
                </h3>
                <p
                    class="text-surface-700 dark:text-surface-300 mx-auto mb-6 max-w-lg"
                >
                    Imagine the smoothest real-time collaboration demo here.
                    We're too busy coding the actual features to make the fancy
                    videos... yet.
                </p>
                <a
                    href="https://discord.gg/myBMaaDeQu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn preset-outlined-primary-200-800 inline-flex items-center gap-2"
                >
                    Help Us Create Amazing Demos
                    <MessageCircle class="h-4 w-4" />
                </a>
            </div>
        </div>
    </section>

    <!-- Problem/Solution Section -->
    <section class="mb-20 md:mb-24">
        <div class="mx-auto max-w-6xl">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-8 text-center text-xl font-bold md:text-2xl"
            >
                From Academic Chaos to Seamless Flow
            </h2>

            <div class="grid gap-8 md:grid-cols-2">
                <!-- Before: The Problem -->
                <div
                    class="card border-warning-200 dark:border-warning-800 bg-warning-50 dark:bg-warning-950/20 border p-6"
                >
                    <div class="mb-4 flex items-center gap-3">
                        <span class="text-2xl">😰</span>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-md font-semibold"
                        >
                            Your Current Reality
                        </h3>
                    </div>
                    <ul class="space-y-3">
                        {#each problemSolution.before as item (item)}
                            <li
                                class="text-surface-800 dark:text-surface-200 flex items-center gap-2 text-sm"
                            >
                                <span
                                    class="text-warning-500 h-2 w-2 rounded-full bg-current"
                                ></span>
                                {item}
                            </li>
                        {/each}
                    </ul>
                </div>

                <!-- After: The Solution -->
                <div
                    class="card border-success-200 dark:border-success-800 bg-success-50 dark:bg-success-950/20 border p-6"
                >
                    <div class="mb-4 flex items-center gap-3">
                        <span class="text-2xl">✨</span>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-md font-semibold"
                        >
                            With Axonotes
                        </h3>
                    </div>
                    <ul class="space-y-3">
                        {#each problemSolution.after as item (item)}
                            <li
                                class="text-surface-800 dark:text-surface-200 flex items-center gap-2 text-sm"
                            >
                                <span
                                    class="text-success-500 h-2 w-2 rounded-full bg-current"
                                ></span>
                                {item}
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Value Propositions -->
    <section class="mb-20 md:mb-24">
        <div class="mx-auto max-w-4xl">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-8 text-center text-xl font-bold md:text-2xl"
            >
                Everything Students Need
            </h2>

            <div class="grid gap-6 md:grid-cols-3">
                {#each coreValues as value (value)}
                    <div class="card p-6 text-center">
                        <div
                            class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                        >
                            <svelte:component
                                this={value.icon}
                                class="text-primary-600 dark:text-primary-400 h-6 w-6"
                            />
                        </div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                        >
                            {value.title}
                        </h3>
                        <p
                            class="text-surface-700 dark:text-surface-300 text-sm"
                        >
                            {value.description}
                        </p>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Interface Preview Placeholder -->
    <section class="mb-20 md:mb-24">
        <div class="mx-auto max-w-6xl">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-8 text-center text-xl font-bold md:text-2xl"
            >
                Beautiful Interface (Coming Soon)
            </h2>
            <div
                class="card border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 aspect-video border-2 border-dashed p-8 text-center"
            >
                <div class="flex h-full flex-col items-center justify-center">
                    <div
                        class="bg-primary-100 dark:bg-primary-900/30 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl"
                    >
                        <Palette
                            class="text-primary-600 dark:text-primary-400 h-10 w-10"
                        />
                    </div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 mb-3 text-xl font-bold"
                    >
                        🎨 [INSERT GORGEOUS DESIGN HERE]
                    </h3>
                    <p
                        class="text-surface-700 dark:text-surface-300 mx-auto mb-6 max-w-md"
                    >
                        Our current UI is 90% placeholder text and 10% hope.
                        Know the difference between serif and sans-serif? You're
                        hired!
                    </p>
                    <div class="flex flex-col gap-3 sm:flex-row">
                        <a
                            href="https://discord.gg/myBMaaDeQu"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn preset-filled-primary-500 inline-flex items-center gap-2 text-white"
                        >
                            <Palette class="h-4 w-4" />
                            Join as Designer
                        </a>
                        <a
                            href="https://github.com/axonotes/AxonotesCore"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn preset-outlined-primary-200-800 inline-flex items-center gap-2"
                        >
                            <Github class="h-4 w-4" />
                            Contribute Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Feature Showcase Placeholders -->
    <section class="mb-20 md:mb-24">
        <div class="mx-auto max-w-6xl">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-8 text-center text-xl font-bold md:text-2xl"
            >
                Revolutionary Features (In Development)
            </h2>
            <div class="grid gap-8 md:grid-cols-2">
                <!-- Real-time Collaboration Placeholder -->
                <div
                    class="card border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 border-2 border-dashed p-6 text-center"
                >
                    <div
                        class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30"
                    >
                        <Users
                            class="h-6 w-6 text-blue-600 dark:text-blue-400"
                        />
                    </div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                    >
                        ⚡ Real-time Magic (Loading...)
                    </h3>
                    <p class="text-surface-700 dark:text-surface-300 text-sm">
                        Picture the most satisfying collaboration animation. Got
                        it? Great, because that's all we have too.
                    </p>
                </div>

                <!-- Flashcard System Placeholder -->
                <div
                    class="card border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 border-2 border-dashed p-6 text-center"
                >
                    <div
                        class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30"
                    >
                        <BookOpen
                            class="h-6 w-6 text-green-600 dark:text-green-400"
                        />
                    </div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                    >
                        🧠 Smart Flashcards (Coming Soon)
                    </h3>
                    <p class="text-surface-700 dark:text-surface-300 text-sm">
                        Revolutionary spaced repetition system that'll make Anki
                        jealous. Currently in our brilliant minds.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Social Proof & Community -->
    <section class="mb-20 md:mb-24">
        <div
            class="card from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 border-primary-200 dark:border-primary-800 mx-auto max-w-4xl border bg-gradient-to-br p-8 text-center"
        >
            <h2
                class="text-surface-900 dark:text-surface-100 mb-4 text-xl font-bold md:text-2xl"
            >
                Join Students Already Building the Future
            </h2>
            <p
                class="text-surface-700 dark:text-surface-300 mx-auto mb-6 max-w-2xl"
            >
                Your feedback shapes Axonotes. Connect with fellow students and
                help us build the academic platform you've always wanted.
            </p>

            <div class="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                    href="https://discord.gg/myBMaaDeQu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn preset-filled-primary-500 inline-flex items-center gap-2 text-white"
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
                    Star on GitHub
                </a>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="text-center">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-4 text-xl font-bold md:text-2xl"
        >
            Ready to Transform Your Academic Life?
        </h2>
        <p class="text-surface-700 dark:text-surface-300 mx-auto mb-8 max-w-xl">
            Be among the first to experience academic software designed by
            students, for students.
        </p>

        <a
            href="https://forms.gle/N2qFoXn4PonD6EnA9"
            target="_blank"
            rel="noopener noreferrer"
            class="btn preset-filled-secondary-500 inline-flex items-center gap-2 text-white"
        >
            Join the Waitlist
            <ExternalLink class="h-4 w-4" />
        </a>
    </section>
</div>
