<script lang="ts">
    import {
        ExternalLink,
        Target,
        Users,
        Shield,
        Globe,
        Code,
        Heart,
        CheckCircle,
        Clock,
        Lightbulb,
    } from "@lucide/svelte";

    let heartClicked = $state(false);
</script>

<svelte:head>
    <title>About - Axonotes</title>
    <meta
        name="description"
        content="Learn about Axonotes - the revolutionary academic platform built by students, for students. Discover our mission to unify your academic workflow."
    />
</svelte:head>

<div class="container mx-auto px-4 py-8">
    <!-- Mission Hero -->
    <header class="mb-16 text-center md:mb-20">
        <h1
            class="text-primary-600 dark:text-primary-400 mb-6 text-3xl !leading-tight font-bold sm:text-4xl md:text-5xl"
        >
            Building the Academic Platform Students Deserve
        </h1>
        <p
            class="text-surface-800 dark:text-surface-200 mx-auto max-w-3xl text-lg"
        >
            We're students who got tired of juggling multiple apps for school.
            So we decided to build the unified academic platform we always
            wanted – and make it open source for everyone.
        </p>
    </header>

    <!-- Team Section -->
    <section class="mb-20 md:mb-24">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-8 text-center text-xl font-bold md:text-2xl"
        >
            Meet the Founders
        </h2>
        <div class="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <!-- Oliver Seifert -->
            <div class="card p-6">
                <div class="mb-4 flex items-start gap-4">
                    <div
                        class="bg-primary-100 dark:bg-primary-900/30 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full"
                    >
                        <Code
                            class="text-primary-600 dark:text-primary-400 h-8 w-8"
                        />
                    </div>
                    <div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-md font-semibold"
                        >
                            Oliver Seifert
                        </h3>
                        <p
                            class="text-primary-600 dark:text-primary-400 font-medium"
                        >
                            Founder & Developer
                        </p>
                        <p
                            class="text-surface-600 dark:text-surface-400 text-sm"
                        >
                            8+ years programming experience
                        </p>
                    </div>
                </div>
                <p class="text-surface-700 dark:text-surface-300">
                    Started Axonotes after building personal academic tools and
                    experiencing the frustration of fragmented academic
                    software.
                </p>
            </div>

            <!-- Ionut-Sorin Vladu -->
            <div class="card p-6">
                <div class="mb-4 flex items-start gap-4">
                    <div
                        class="bg-primary-100 dark:bg-primary-900/30 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full"
                    >
                        <Lightbulb
                            class="text-primary-600 dark:text-primary-400 h-8 w-8"
                        />
                    </div>
                    <div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-md font-semibold"
                        >
                            Ionut-Sorin Vladu
                        </h3>
                        <p
                            class="text-primary-600 dark:text-primary-400 font-medium"
                        >
                            Co-founder & Engineer
                        </p>
                        <p
                            class="text-surface-600 dark:text-surface-400 text-sm"
                        >
                            AI & Computer Science, University of Edinburgh
                        </p>
                    </div>
                </div>
                <p class="text-surface-700 dark:text-surface-300">
                    Brings expertise in building complex systems and a passion
                    for creating impactful academic solutions.
                </p>
            </div>
        </div>
    </section>

    <!-- Our Approach -->
    <section class="mb-20 md:mb-24">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-8 text-center text-xl font-bold md:text-2xl"
        >
            How We're Building It
        </h2>
        <div class="grid gap-6 md:grid-cols-3">
            <div class="card p-6 text-center">
                <div
                    class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Globe
                        class="text-primary-600 dark:text-primary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Offline-First
                </h3>
                <p class="text-surface-700 dark:text-surface-300">
                    Work anywhere, sync when connected. Your productivity
                    shouldn't depend on internet.
                </p>
            </div>

            <div class="card p-6 text-center">
                <div
                    class="bg-secondary-100 dark:bg-secondary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Shield
                        class="text-secondary-600 dark:text-secondary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Privacy by Design
                </h3>
                <p class="text-surface-700 dark:text-surface-300">
                    End-to-end encryption and Swiss data protection standards.
                    Your work stays yours.
                </p>
            </div>

            <div class="card p-6 text-center">
                <div
                    class="bg-tertiary-100 dark:bg-tertiary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Code
                        class="text-tertiary-600 dark:text-tertiary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Open Source
                </h3>
                <p class="text-surface-700 dark:text-surface-300">
                    Community-driven development with transparent code and
                    self-hosting options.
                </p>
            </div>
        </div>
    </section>

    <!-- Development Status -->
    <section
        class="card from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 border-primary-200 dark:border-primary-800 mb-16 border bg-gradient-to-br p-8 lg:p-12"
    >
        <div class="mx-auto max-w-4xl text-center">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-8 text-xl font-bold md:text-2xl"
            >
                Current Development Status
            </h2>
            <div class="mb-8 flex justify-center">
                <div class="flex items-center gap-4">
                    <div class="flex items-center gap-2">
                        <CheckCircle
                            class="text-success-500 h-6 w-6"
                            aria-hidden="true"
                        />
                        <span
                            class="text-surface-800 dark:text-surface-200 text-sm"
                        >
                            Planning
                        </span>
                    </div>
                    <div
                        class="bg-primary-300 dark:bg-primary-700 h-1 w-12 rounded"
                    ></div>
                    <div class="flex items-center gap-2">
                        <Clock
                            class="text-primary-500 h-6 w-6"
                            aria-hidden="true"
                        />
                        <span
                            class="text-primary-600 dark:text-primary-400 text-sm font-medium"
                        >
                            Early Development
                        </span>
                    </div>
                    <div
                        class="bg-surface-300 dark:bg-surface-700 h-1 w-12 rounded"
                    ></div>
                    <div class="flex items-center gap-2">
                        <div
                            class="bg-surface-400 dark:bg-surface-600 h-6 w-6 rounded-full"
                        ></div>
                        <span
                            class="text-surface-600 dark:text-surface-400 text-sm"
                        >
                            Beta Release
                        </span>
                    </div>
                </div>
            </div>
            <p class="text-surface-700 dark:text-surface-300 text-lg">
                We're currently gathering feedback and building core features.
                Your input directly shapes what we build next.
            </p>
        </div>
    </section>

    <!-- Core Values -->
    <section class="mb-20 md:mb-24">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-8 text-center text-xl font-bold md:text-2xl"
        >
            Our Core Values
        </h2>
        <div class="grid gap-6 md:grid-cols-3">
            <div class="card p-6 text-center">
                <div
                    class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Shield
                        class="text-primary-600 dark:text-primary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Swiss Privacy Standards
                </h3>
                <p class="text-surface-700 dark:text-surface-300">
                    Built with the same privacy principles and data protection
                    standards that Switzerland is known for.
                </p>
            </div>

            <div class="card p-6 text-center">
                <div
                    class="bg-secondary-100 dark:bg-secondary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Target
                        class="text-secondary-600 dark:text-secondary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Student-First Design
                </h3>
                <p class="text-surface-700 dark:text-surface-300">
                    Every feature is designed by students who understand real
                    academic workflows and challenges.
                </p>
            </div>

            <div class="card p-6 text-center">
                <div
                    class="bg-tertiary-100 dark:bg-tertiary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Users
                        class="text-tertiary-600 dark:text-tertiary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Open Source Commitment
                </h3>
                <p class="text-surface-700 dark:text-surface-300">
                    Academic tools should be accessible to everyone. That's why
                    our core is open source and self-hostable.
                </p>
            </div>
        </div>
    </section>

    <!-- Swiss Excellence -->
    <section class="mb-16 text-center">
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
            Made in Switzerland
        </div>
        <h2
            class="text-surface-900 dark:text-surface-100 mb-4 text-xl font-bold md:text-2xl"
        >
            Precision, Privacy, and Quality
        </h2>
        <p class="text-surface-700 dark:text-surface-300 mx-auto max-w-2xl">
            Just like Swiss watches and chocolates, we're building Axonotes with
            attention to detail, reliability, and a commitment to excellence
            that students can trust.
        </p>
    </section>

    <!-- Call to Action -->
    <section class="text-center">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-4 text-xl font-bold md:text-2xl"
        >
            Join Our Mission
        </h2>
        <p class="text-surface-700 dark:text-surface-300 mx-auto mb-8 max-w-xl">
            Help us build the academic platform that students actually want to
            use. Your feedback shapes every feature we develop.
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <a
                href="https://discord.gg/myBMaaDeQu"
                target="_blank"
                rel="noopener noreferrer"
                class="btn dark:preset-tonal-primary preset-filled-primary-500 inline-flex items-center gap-2 text-white"
            >
                <Users class="h-4 w-4" />
                Join Our Community
            </a>
            <a href="/features" class="btn inline-flex items-center gap-2">
                <Target class="h-4 w-4" />
                Explore Features
            </a>
        </div>
    </section>
</div>
