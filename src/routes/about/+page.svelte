<script lang="ts">
    import {ExternalLink, Target, Users, Zap, Shield, Globe, Code, Heart, ChevronRight} from "@lucide/svelte";

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
    <header class="text-center mb-12 md:mb-16">
        <h1
                class="text-4xl font-bold text-primary-600 dark:text-primary-400 sm:text-5xl !leading-tight mb-4"
        >
            About Axonotes
        </h1>
        <h3
                class="text-lg font-light text-surface-800 dark:text-surface-200 max-w-2xl mx-auto mb-3"
        >
            Revolutionizing academic life by unifying your notes, collaboration, planning, and learning tools into one
            seamless, privacy-focused platform.
        </h3>
        <p
                class="text-sm text-surface-700 dark:text-surface-300 max-w-2xl mx-auto"
        >
            Built by students who understand the chaos of juggling multiple apps for school and studies.
        </p>
    </header>

    <!-- The Problem Section -->
    <section class="mb-16 md:mb-20">
        <div class="card p-8 lg:p-12 bg-gradient-to-br from-secondary-50 to-surface-50 dark:from-secondary-950/20 dark:to-surface-900/30 border border-secondary-200 dark:border-secondary-800">
            <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-6 text-center">
                The Problem We're Solving
            </h2>
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-8">
                    <p class="text-lg text-surface-800 dark:text-surface-200 italic">
                        "It's 2 AM. Your group project is due tomorrow..."
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
                            <li>• Personal notes scattered across three different apps</li>
                            <li>• Course portals for assignment details</li>
                            <li>• Forgotten spreadsheet study planners</li>
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
                            <li>• Works offline and across all your devices</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section class="mb-16 md:mb-20">
        <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100 text-center mb-8">
            The Minds Behind Axonotes
        </h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <!-- Oliver Seifert -->
            <div class="card p-6 bg-gradient-to-br from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 border border-primary-200 dark:border-primary-800">
                <div class="flex items-start gap-4 mb-4">
                    <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Code class="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100">
                            Oliver Seifert
                        </h3>
                        <p class="text-primary-600 dark:text-primary-400 font-medium">Founder</p>
                    </div>
                </div>
                <p class="text-surface-700 dark:text-surface-300 mb-4">
                    A developer with over eight years of programming experience across diverse fields.
                    The spark for Axonotes came from building a private flashcard tool and experiencing frustration
                    with current academic software like MS Teams.
                </p>
            </div>

            <!-- Ionut-Sorin Vladu -->
            <div class="card p-6 bg-gradient-to-br from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 border border-primary-200 dark:border-primary-800">
                <div class="flex items-start gap-4 mb-4">
                    <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap class="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100">
                            Ionut-Sorin Vladu
                        </h3>
                        <p class="text-primary-600 dark:text-primary-400 font-medium">Co-founder</p>
                    </div>
                </div>
                <p class="text-surface-700 dark:text-surface-300 mb-4">
                    Software engineer with four years of experience and a background in Artificial Intelligence
                    and Computer Science from the University of Edinburgh. Passionate about building impactful
                    projects and working with complex systems.
                </p>
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
    </section>

    <!-- Technical Excellence -->
    <section
            class="card p-8 lg:p-12 outline outline-primary-500 dark:outline-0 bg-gradient-to-br from-surface-50 to-primary-50 dark:from-surface-900/30 dark:to-primary-950/20 mb-16">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100 text-center mb-8">
                Built for Excellence
            </h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-4 flex items-center gap-2">
                        <span class="flex items-center relative text-primary-600 dark:text-primary-400 group">
                            <ChevronRight class="h-5 w-5 rotate-180 -mr-0.5 group-hover:mr-1 duration-200"/>
                            <span class="absolute w-full flex justify-center">
                                <img src="/favicon.png" alt="surprise"
                                     class="h-5 opacity-0 group-hover:opacity-100 duration-200">
                            </span>
                            <ChevronRight class="h-5 w-5 -ml-0.5 group-hover:ml-1 duration-200"/>
                        </span>
                        Modern Technology Stack
                    </h3>
                    <ul class="space-y-2 text-surface-700 dark:text-surface-300">
                        <li>• <strong>Frontend:</strong> Tauri with SvelteKit for all performance</li>
                        <li>• <strong>Backend:</strong> SpaceTimeDB for real-time collaboration</li>
                        <li>• <strong>Platform:</strong> Cross-platform applications</li>
                        <li>• <strong>Privacy:</strong> End-to-end encryption by design</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-4 flex items-center gap-2">
                        <Zap class="h-5 w-5 text-secondary-600 dark:text-secondary-400"/>
                        Revolutionary Features
                    </h3>
                    <ul class="space-y-2 text-surface-700 dark:text-surface-300">
                        <li>• <strong>Version History:</strong> Every update saved efficiently</li>
                        <li>• <strong>Offline-First:</strong> Work anywhere, sync when connected</li>
                        <li>• <strong>Smart Conflict Resolution:</strong> Seamless collaboration</li>
                        <li>• <strong>Extensible Architecture:</strong> Built for future growth</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Current Status & Future -->
    <section class="card p-6 mb-12">
        <div class="max-w-4xl mx-auto">
            <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-4 text-center">
                Where We Are Today
            </h3>
            <div class="grid md:grid-cols-3 gap-6 text-center">
                <div>
                    <div class="w-8 h-8 bg-warning-500 rounded-full mx-auto mb-2"></div>
                    <h4 class="font-medium text-surface-800 dark:text-surface-200 mb-1">Planning Phase</h4>
                    <p class="text-sm text-surface-700 dark:text-surface-300">Gathering feedback and refining our
                        vision</p>
                </div>
                <div>
                    <div class="w-8 h-8 bg-secondary-500 rounded-full mx-auto mb-2"></div>
                    <h4 class="font-medium text-surface-800 dark:text-surface-200 mb-1">Early Development</h4>
                    <p class="text-sm text-surface-700 dark:text-surface-300">Building core features and
                        architecture</p>
                </div>
                <div>
                    <div class="w-8 h-8 bg-surface-400 rounded-full mx-auto mb-2"></div>
                    <h4 class="font-medium text-surface-800 dark:text-surface-200 mb-1">Community Building</h4>
                    <p class="text-sm text-surface-700 dark:text-surface-300">Connecting with students and educators</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Swiss Excellence -->
    <section class="text-center mb-24">
        <div class="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <button onclick={() => heartClicked = true} class="{heartClicked ? 'cursor-default' : ''}">
                <Heart class="h-4 w-4 {heartClicked ? 'fill-red-500 text-transparent' : 'hover:scale-110'} duration-200 transition-all"/>
            </button>
            Swiss-Based Initiative
        </div>
        <h2 class="text-xl font-bold text-surface-900 dark:text-surface-100 mb-3">
            Built with Swiss Values
        </h2>
        <p class="text-surface-700 dark:text-surface-300 max-w-2xl mx-auto">
            Leveraging Switzerland's strong data protection laws and commitment to quality,
            we're building Axonotes with the same precision and reliability you'd expect from Swiss engineering.
        </p>
    </section>

    <!-- Call to Action -->
    <section class="text-center">
        <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-4">
            Join Our Journey
        </h2>
        <p class="text-surface-700 dark:text-surface-300 mb-8 max-w-xl mx-auto">
            We're building Axonotes right now, and your voice matters. Help us create the academic platform
            you've always wanted.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
                    href="/community"
                    class="btn inline-flex items-center gap-2"
            >
                <Users class="h-4 w-4"/>
                Join Our Community
            </a>
            <a
                    href="/features"
                    class="btn inline-flex items-center gap-2"
            >
                <Target class="h-4 w-4"/>
                Explore Features
            </a>
            <a
                    href="https://forms.gle/N2qFoXn4PonD6EnA9"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn inline-flex items-center gap-2"
            >
                Share Feedback
                <ExternalLink class="h-4 w-4"/>
            </a>
        </div>
    </section>
</div>
