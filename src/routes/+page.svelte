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
        Workflow
    } from '@lucide/svelte';

    let heartClicked = $state(false);

    const topFeatures = [
        {
            icon: Workflow,
            title: 'Unify Your Workflow',
            description: 'No more app-switching. Notes, tasks, chat, and learning tools seamlessly integrated.'
        },
        {
            icon: Users,
            title: 'Collaborate Effortlessly',
            description: 'Work together in real-time with integrated chat and shared channels.'
        },
        {
            icon: GraduationCap,
            title: 'Boost Your Learning',
            description: 'Interactive exercises, reimagined flashcards, and powerful note-taking tools.'
        },
        {
            icon: Shield,
            title: 'Smart & Secure',
            description: 'Offline-first, version history, and Swiss-grade privacy with E2EE.'
        }
    ];

    // Featured items from the feature list
    const featuredFeatures = [
        {
            name: "Arrange Your Views",
            description: "Organize how Axonotes appears on your screen by splitting it into adjustable sections."
        },
        {
            name: "Smart Conflict Resolution",
            description: "Make changes offline and let Axonotes handle synchronization when you reconnect."
        },
        {
            name: "Live Collaboration",
            description: "Work on documents with others at the same time with changes appearing instantly."
        }
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
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Content -->
            <div class="space-y-8">
                <div>
                    <h1 class="text-4xl font-bold text-primary-600 dark:text-primary-400 sm:text-5xl !leading-tight mb-4">
                        Tired of Juggling Apps for School & Studies?
                    </h1>
                    <h3 class="text-lg font-light text-surface-800 dark:text-surface-200 max-w-2xl mb-3">
                        Your central academic hub for notes, collaboration, planning, and learning – all in one
                        intuitive experience.
                    </h3>
                    <p class="text-sm text-surface-700 dark:text-surface-300">
                        Currently in planning and early development – help us build the tool you need!
                    </p>
                </div>

                <div class="flex flex-col sm:flex-row gap-4">
                    <a
                            href="#feedback"
                            class="btn dark:preset-tonal-primary preset-filled-primary-500 text-white inline-flex items-center gap-2"
                    >
                        <Users class="h-4 w-4"/>
                        Join the Waitlist & Shape Axonotes!
                        <ArrowRight class="h-4 w-4"/>
                    </a>
                    <a
                            href="/features"
                            class="btn preset-outlined-primary-200-800 inline-flex items-center gap-2"
                    >
                        <Target class="h-4 w-4"/>
                        View Features
                    </a>
                </div>
            </div>

            <!-- Visual -->
            <div class="flex justify-center">
                <div
                        class="w-full max-w-md aspect-square bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/20 dark:to-primary-900/30 rounded-3xl flex items-center justify-center border border-primary-200 dark:border-primary-800"
                >
                    <div class="text-center space-y-4 p-8">
                        <img src="/favicon.png" alt="Axonotes Logo" class="w-32 h-32 mx-auto">
                        <p class="font-semibold text-lg text-primary-600 dark:text-primary-400">
                            Organizing your academic life
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Problem Section -->
    <section id="problem" class="mb-16 md:mb-20">
        <div class="card p-8 lg:p-12 bg-gradient-to-br from-secondary-50 to-surface-50 dark:from-secondary-950/20 dark:to-surface-900/30 border border-secondary-200 dark:border-secondary-800">
            <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-6 text-center">
                Sound Familiar?
            </h2>
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-8">
                    <p class="text-lg text-surface-800 dark:text-surface-200 italic">
                        "It's 2 AM. Your group project is due tomorrow, and you're frantically
                        switching between Google Docs for writing, Discord for team chat,
                        Notion for project planning, and your phone for the group WhatsApp.
                        Your notes are scattered across three different apps, you can't find
                        that important research link, and half your team is confused about
                        which version of the document is the latest."
                    </p>
                </div>
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-4">
                            😰 The Current Reality
                        </h3>
                        <ul class="space-y-2 text-surface-800 dark:text-surface-200">
                            <li>• Frantically switching between shared documents</li>
                            <li>• Separate chat apps pinging with conflicting ideas</li>
                            <li>• Personal notes scattered across different apps</li>
                            <li>• Course portals for assignment details</li>
                            <li>• Making flashcards feels like climbing a mountain</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-4">
                            ✨ Our Vision
                        </h3>
                        <ul class="space-y-2 text-surface-800 dark:text-surface-200">
                            <li>• One unified platform for all academic needs</li>
                            <li>• Seamless collaboration without app-switching</li>
                            <li>• Notes, planning, and learning tools together</li>
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
        <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100 text-center mb-8">
            Everything You Need, All in One Place
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each topFeatures as feature}
                <div class="card p-6 text-center transition-all duration-300">
                    <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svelte:component this={feature.icon} class="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    </div>
                    <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">
                        {feature.title}
                    </h3>
                    <p class="text-surface-700 dark:text-surface-300 text-sm">
                        {feature.description}
                    </p>
                </div>
            {/each}
        </div>
        <div class="flex justify-center mt-8">
            <a href="/features" class="btn inline-flex items-center gap-2">
                Explore All Features
                <ChevronRight class="h-4 w-4"/>
            </a>
        </div>
    </section>

    <!-- Featured Capabilities -->
    <section class="mb-16 md:mb-20">
        <div class="card p-8 lg:p-12 outline outline-primary-500 dark:outline-0 bg-gradient-to-br from-surface-50 to-primary-50 dark:from-surface-900/30 dark:to-primary-950/20">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100 text-center mb-8">
                    Highlighted Features
                </h2>
                <div class="grid md:grid-cols-3 gap-8">
                    {#each featuredFeatures as feature}
                        <div class="space-y-3">
                            <h3 class="font-semibold text-surface-900 dark:text-surface-100 flex items-center gap-2">
                                <span class="flex items-center relative text-primary-600 dark:text-primary-400 group">
                                    <ChevronRight class="h-5 w-5 rotate-180 -mr-0.5 group-hover:mr-1 duration-200"/>
                                    <span class="absolute w-full flex justify-center">
                                        <img src="/favicon.png" alt="surprise"
                                             class="h-5 opacity-0 group-hover:opacity-100 duration-200">
                                    </span>
                                    <ChevronRight class="h-5 w-5 -ml-0.5 group-hover:ml-1 duration-200"/>
                                </span>
                                {feature.name}
                            </h3>
                            <p class="text-surface-700 dark:text-surface-300">
                                {feature.description}
                            </p>
                        </div>
                    {/each}
                </div>
                <div class="flex justify-center mt-8">
                    <a
                            href="/features"
                            class="btn dark:preset-tonal-primary preset-filled-primary-500 text-white inline-flex items-center gap-2"
                    >
                        See All Features
                        <ExternalLink class="h-4 w-4"/>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Principles -->
    <section class="mb-16 md:mb-20">
        <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100 text-center mb-8">
            What Drives Us
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
            <!-- Unification -->
            <div class="card p-6 text-center transition-all duration-300">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target class="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                </div>
                <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">
                    Unification
                </h3>
                <p class="text-surface-700 dark:text-surface-300 text-sm">
                    No more app-switching chaos. Everything you need for academic success in one cohesive platform.
                </p>
            </div>

            <!-- Privacy -->
            <div class="card p-6 text-center transition-all duration-300">
                <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield class="h-6 w-6 text-secondary-600 dark:text-secondary-400"/>
                </div>
                <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">
                    Privacy First
                </h3>
                <p class="text-surface-700 dark:text-surface-300 text-sm">
                    Built with Swiss precision and end-to-end encryption. Your academic work stays yours.
                </p>
            </div>

            <!-- Accessibility -->
            <div class="card p-6 text-center transition-all duration-300">
                <div class="w-12 h-12 bg-tertiary-100 dark:bg-tertiary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe class="h-6 w-6 text-tertiary-600 dark:text-tertiary-400"/>
                </div>
                <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">
                    Universal Access
                </h3>
                <p class="text-surface-700 dark:text-surface-300 text-sm">
                    Works offline-first on all platforms. Academic tools should be accessible to everyone, everywhere.
                </p>
            </div>
        </div>
        <div class="flex justify-center mt-8">
            <a href="/about" class="btn inline-flex items-center gap-2">
                Learn More About Us
                <ChevronRight class="h-4 w-4"/>
            </a>
        </div>
    </section>

    <!-- Feedback Section -->
    <section id="feedback" class="mb-16 md:mb-20">
        <div class="card p-8 lg:p-12 bg-gradient-to-br from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 border border-primary-200 dark:border-primary-800">
            <div class="max-w-4xl mx-auto text-center">
                <div class="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <button onclick={() => heartClicked = true} class="{heartClicked ? 'cursor-default' : ''}">
                        <Heart class="h-4 w-4 {heartClicked ? 'fill-red-500 text-transparent' : 'hover:scale-110'} duration-200 transition-all"/>
                    </button>
                    Your Voice Matters
                </div>
                <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-4">
                    Help Shape Axonotes
                </h2>
                <p class="text-surface-700 dark:text-surface-300 mb-8 max-w-xl mx-auto">
                    Because we're building Axonotes right now, your feedback is invaluable.
                    Tell us what you need to succeed. Help us build the ultimate tool for
                    students and educators!
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
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
                        <FileText class="h-4 w-4"/>
                        Fill Out Our Survey
                        <ExternalLink class="h-4 w-4"/>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Community Section -->
    <section class="text-center">
        <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-4">
            Join Our Community
        </h2>
        <p class="text-surface-700 dark:text-surface-300 mb-8 max-w-xl mx-auto">
            Connect with fellow students, educators, and developers who are passionate about
            revolutionizing academic software.
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
                Star on GitHub
            </a>
            <a
                    href="/community"
                    class="btn inline-flex items-center gap-2"
            >
                <Users class="h-4 w-4"/>
                Community Page
            </a>
        </div>
    </section>
</div>
