<script lang="ts">
    import {
        ExternalLink,
        Target,
        Users,
        Zap,
        Shield,
        Globe,
        Code,
        Heart,
        ChevronRight,
    } from "@lucide/svelte";

    let heartClicked = $state(false);
</script>

<svelte:head>
    <title>About - Axonotes</title>
    <meta
        name="description"
        content="Learn about Axonotes - the revolutionary academic platform built by students, for students. Discover our mission to unify your academic workflow in one powerful, privacy-focused tool."
    />
</svelte:head>

<div class="container mx-auto px-4 py-8">
    <!-- Header Section -->
    <header class="mb-12 text-center md:mb-16">
        <h1
            class="text-primary-600 dark:text-primary-400 mb-4 text-4xl !leading-tight font-bold sm:text-5xl"
        >
            About Axonotes
        </h1>
        <h3
            class="text-surface-800 dark:text-surface-200 mx-auto mb-3 max-w-2xl text-lg font-light"
        >
            Revolutionizing academic life by unifying your notes, collaboration,
            planning, and learning tools into one seamless, privacy-focused
            platform.
        </h3>
        <p
            class="text-surface-700 dark:text-surface-300 mx-auto max-w-2xl text-sm"
        >
            Built by students who understand the chaos of juggling multiple apps
            for school and studies.
        </p>
    </header>

    <!-- The Problem Section -->
    <section class="mb-16 md:mb-20">
        <div
            class="card from-secondary-50 to-surface-50 dark:from-secondary-950/20 dark:to-surface-900/30 border-secondary-200 dark:border-secondary-800 border bg-gradient-to-br p-8 lg:p-12"
        >
            <h2
                class="text-surface-900 dark:text-surface-100 mb-6 text-center text-2xl font-bold"
            >
                The Problem We're Solving
            </h2>
            <div class="mx-auto max-w-4xl">
                <div class="mb-8 text-center">
                    <p
                        class="text-surface-800 dark:text-surface-200 text-lg italic"
                    >
                        "It's 2 AM. Your group project is due tomorrow..."
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
                                • Personal notes scattered across three
                                different apps
                            </li>
                            <li>• Course portals for assignment details</li>
                            <li>• Forgotten spreadsheet study planners</li>
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
                            <li>• Works offline and across all your devices</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section class="mb-16 md:mb-20">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-8 text-center text-2xl font-bold"
        >
            The Minds Behind Axonotes
        </h2>
        <div class="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <!-- Oliver Seifert -->
            <div
                class="card from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 border-primary-200 dark:border-primary-800 border bg-gradient-to-br p-6"
            >
                <div class="mb-4 flex items-start gap-4">
                    <div
                        class="bg-primary-100 dark:bg-primary-900/30 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg"
                    >
                        <Code
                            class="text-primary-600 dark:text-primary-400 h-6 w-6"
                        />
                    </div>
                    <div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-xl font-semibold"
                        >
                            Oliver Seifert
                        </h3>
                        <p
                            class="text-primary-600 dark:text-primary-400 font-medium"
                        >
                            Founder
                        </p>
                    </div>
                </div>
                <p class="text-surface-700 dark:text-surface-300 mb-4">
                    A developer with over eight years of programming experience
                    across diverse fields. The spark for Axonotes came from
                    building a private flashcard tool and experiencing
                    frustration with current academic software like MS Teams.
                </p>
            </div>

            <!-- Ionut-Sorin Vladu -->
            <div
                class="card from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 border-primary-200 dark:border-primary-800 border bg-gradient-to-br p-6"
            >
                <div class="mb-4 flex items-start gap-4">
                    <div
                        class="bg-primary-100 dark:bg-primary-900/30 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg"
                    >
                        <Zap
                            class="text-primary-600 dark:text-primary-400 h-6 w-6"
                        />
                    </div>
                    <div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-xl font-semibold"
                        >
                            Ionut-Sorin Vladu
                        </h3>
                        <p
                            class="text-primary-600 dark:text-primary-400 font-medium"
                        >
                            Co-founder
                        </p>
                    </div>
                </div>
                <p class="text-surface-700 dark:text-surface-300 mb-4">
                    Software engineer with four years of experience and a
                    background in Artificial Intelligence and Computer Science
                    from the University of Edinburgh. Passionate about building
                    impactful projects and working with complex systems.
                </p>
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
    </section>

    <!-- Technical Excellence -->
    <section
        class="card outline-primary-500 from-surface-50 to-primary-50 dark:from-surface-900/30 dark:to-primary-950/20 mb-16 bg-gradient-to-br p-8 outline lg:p-12 dark:outline-0"
    >
        <div class="mx-auto max-w-4xl">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-8 text-center text-2xl font-bold"
            >
                Built for Excellence
            </h2>
            <div class="grid gap-8 md:grid-cols-2">
                <div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 mb-4 flex items-center gap-2 font-semibold"
                    >
                        <span
                            class="text-primary-600 dark:text-primary-400 group relative flex items-center"
                        >
                            <ChevronRight
                                class="-mr-0.5 h-5 w-5 rotate-180 duration-200 group-hover:mr-1"
                            />
                            <span class="absolute flex w-full justify-center">
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
                        Modern Technology Stack
                    </h3>
                    <ul
                        class="text-surface-700 dark:text-surface-300 space-y-2"
                    >
                        <li>
                            • <strong>Frontend:</strong> Tauri with SvelteKit for
                            all performance
                        </li>
                        <li>
                            • <strong>Backend:</strong> SpaceTimeDB for real-time
                            collaboration
                        </li>
                        <li>
                            • <strong>Platform:</strong> Cross-platform applications
                        </li>
                        <li>
                            • <strong>Privacy:</strong> End-to-end encryption by
                            design
                        </li>
                    </ul>
                </div>
                <div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 mb-4 flex items-center gap-2 font-semibold"
                    >
                        <Zap
                            class="text-secondary-600 dark:text-secondary-400 h-5 w-5"
                        />
                        Revolutionary Features
                    </h3>
                    <ul
                        class="text-surface-700 dark:text-surface-300 space-y-2"
                    >
                        <li>
                            • <strong>Version History:</strong> Every update saved
                            efficiently
                        </li>
                        <li>
                            • <strong>Offline-First:</strong> Work anywhere, sync
                            when connected
                        </li>
                        <li>
                            • <strong>Smart Conflict Resolution:</strong> Seamless
                            collaboration
                        </li>
                        <li>
                            • <strong>Extensible Architecture:</strong> Built for
                            future growth
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Current Status & Future -->
    <section class="card mb-12 p-6">
        <div class="mx-auto max-w-4xl">
            <h3
                class="text-surface-900 dark:text-surface-100 mb-4 text-center font-semibold"
            >
                Where We Are Today
            </h3>
            <div class="grid gap-6 text-center md:grid-cols-3">
                <div>
                    <div
                        class="bg-warning-500 mx-auto mb-2 h-8 w-8 rounded-full"
                    ></div>
                    <h4
                        class="text-surface-800 dark:text-surface-200 mb-1 font-medium"
                    >
                        Planning Phase
                    </h4>
                    <p class="text-surface-700 dark:text-surface-300 text-sm">
                        Gathering feedback and refining our vision
                    </p>
                </div>
                <div>
                    <div
                        class="bg-secondary-500 mx-auto mb-2 h-8 w-8 rounded-full"
                    ></div>
                    <h4
                        class="text-surface-800 dark:text-surface-200 mb-1 font-medium"
                    >
                        Early Development
                    </h4>
                    <p class="text-surface-700 dark:text-surface-300 text-sm">
                        Building core features and architecture
                    </p>
                </div>
                <div>
                    <div
                        class="bg-surface-400 mx-auto mb-2 h-8 w-8 rounded-full"
                    ></div>
                    <h4
                        class="text-surface-800 dark:text-surface-200 mb-1 font-medium"
                    >
                        Community Building
                    </h4>
                    <p class="text-surface-700 dark:text-surface-300 text-sm">
                        Connecting with students and educators
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Swiss Excellence -->
    <section class="mb-24 text-center">
        <div
            class="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
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
            Swiss-Based Initiative
        </div>
        <h2
            class="text-surface-900 dark:text-surface-100 mb-3 text-xl font-bold"
        >
            Built with Swiss Values
        </h2>
        <p class="text-surface-700 dark:text-surface-300 mx-auto max-w-2xl">
            Leveraging Switzerland's strong data protection laws and commitment
            to quality, we're building Axonotes with the same precision and
            reliability you'd expect from Swiss engineering.
        </p>
    </section>

    <!-- Call to Action -->
    <section class="text-center">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-4 text-2xl font-bold"
        >
            Join Our Journey
        </h2>
        <p class="text-surface-700 dark:text-surface-300 mx-auto mb-8 max-w-xl">
            We're building Axonotes right now, and your voice matters. Help us
            create the academic platform you've always wanted.
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/community" class="btn inline-flex items-center gap-2">
                <Users class="h-4 w-4" />
                Join Our Community
            </a>
            <a href="/features" class="btn inline-flex items-center gap-2">
                <Target class="h-4 w-4" />
                Explore Features
            </a>
            <a
                href="https://forms.gle/N2qFoXn4PonD6EnA9"
                target="_blank"
                rel="noopener noreferrer"
                class="btn inline-flex items-center gap-2"
            >
                Share Feedback
                <ExternalLink class="h-4 w-4" />
            </a>
        </div>
    </section>
</div>
