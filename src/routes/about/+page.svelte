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
        LayoutTemplate,
        Coffee,
        Zap,
        Brain,
        MapPin,
        Calendar,
    } from "@lucide/svelte";

    let heartClicked = $state(false);
    let coffeeClicked = $state(false);
</script>

<svelte:head>
    <title>About - Axonotes</title>
    <meta
        name="description"
        content="Meet the student founders building Axonotes - the academic platform that actually understands your struggles. Our story, mission, and vision."
    />
</svelte:head>

<div class="container mx-auto px-4 py-8">
    <!-- Mission Hero -->
    <header class="mb-16 text-center md:mb-20">
        <h1
            class="text-primary-600 dark:text-primary-400 mb-6 text-3xl !leading-tight font-bold sm:text-4xl md:text-5xl"
        >
            Built by Students Who Get It
        </h1>
        <p
            class="text-surface-800 dark:text-surface-200 mx-auto max-w-3xl text-lg"
        >
            We got tired of switching between 5+ apps just to work on one
            assignment. So we decided to build the unified academic platform we
            always wanted – and make available it for everyone.
        </p>
    </header>

    <!-- Our Story -->
    <section class="mb-20 md:mb-24">
        <div class="mx-auto max-w-4xl">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-8 text-center text-xl font-bold md:text-2xl"
            >
                How It All Started
            </h2>
            <div class="card p-8">
                <p class="text-surface-700 dark:text-surface-300 mb-4">
                    Picture this: It's 2 AM. Your group project is due tomorrow.
                    You're frantically switching between your shared document
                    (where someone just accidentally deleted a crucial
                    paragraph), a separate chat app pinging with conflicting
                    ideas, your personal notes scattered across three different
                    apps, and the course portal for assignment details.
                </p>
                <p class="text-surface-700 dark:text-surface-300 mb-4">
                    Sound familiar? That's exactly what sparked Axonotes. We're
                    students who experienced this chaos firsthand and thought: <em
                        >"There has to be a better way."</em
                    >
                </p>
                <p class="text-surface-700 dark:text-surface-300">
                    Two years ago, Oliver built a private version for his own
                    flashcard needs. As university approached, the vision grew:
                    What if we could create one beautiful platform that handles
                    everything students actually need?
                </p>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section class="mb-20 md:mb-24">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-8 text-center text-xl font-bold md:text-2xl"
        >
            Meet the Founders
        </h2>
        <div class="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <!-- Oliver Seifert -->
            <div class="card p-6">
                <div class="mb-6 flex items-start gap-4">
                    <div
                        class="bg-primary-100 dark:bg-primary-900/30 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full"
                    >
                        <Code
                            class="text-primary-600 dark:text-primary-400 h-8 w-8"
                        />
                    </div>
                    <div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-lg font-bold"
                        >
                            Oliver Seifert
                        </h3>
                        <p
                            class="text-primary-600 dark:text-primary-400 font-medium"
                        >
                            Founder & Lead Developer
                        </p>
                        <div
                            class="text-surface-600 dark:text-surface-400 mt-2 flex items-center gap-4 text-sm"
                        >
                            <div class="flex items-center gap-1">
                                <Calendar class="h-3 w-3" />
                                <span>18 years old</span>
                            </div>
                            <div class="flex items-center gap-1">
                                <MapPin class="h-3 w-3" />
                                <span>Switzerland</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="text-surface-700 dark:text-surface-300 mb-4">
                    "I've been coding for 9+ years across everything from web
                    development to systems programming. The idea for Axonotes
                    came from my own frustration with academic tools that just
                    don't work the way students actually think."
                </p>
                <p class="text-surface-700 dark:text-surface-300 text-sm">
                    <strong>Fun fact:</strong> Uses Fedora Linux and got frustrated
                    when school tools like MS Teams didn't work well on his setup.
                    That's partly what motivated building something better.
                </p>
                <div class="mt-4">
                    <a
                        href="https://oseifert.ch"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-primary-600 dark:text-primary-400 inline-flex items-center gap-1 text-sm hover:underline"
                    >
                        Learn more about Oliver
                        <ExternalLink class="h-3 w-3" />
                    </a>
                </div>
            </div>

            <!-- Ionut-Sorin Vladu -->
            <div class="card p-6">
                <div class="mb-6 flex items-start gap-4">
                    <div
                        class="bg-secondary-100 dark:bg-secondary-900/30 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full"
                    >
                        <Brain
                            class="text-secondary-600 dark:text-secondary-400 h-8 w-8"
                        />
                    </div>
                    <div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-lg font-bold"
                        >
                            Ionut-Sorin Vladu
                        </h3>
                        <p
                            class="text-secondary-600 dark:text-secondary-400 font-medium"
                        >
                            Co-founder & Engineer
                        </p>
                        <div
                            class="text-surface-600 dark:text-surface-400 mt-2 flex items-center gap-4 text-sm"
                        >
                            <div class="flex items-center gap-1">
                                <Lightbulb class="h-3 w-3" />
                                <span>University of Edinburgh</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="text-surface-700 dark:text-surface-300 mb-4">
                    "I bring 4+ years of software engineering experience and a
                    background in AI and Computer Science. I love the challenge
                    of building complex systems that actually make people's
                    lives easier."
                </p>
                <p class="text-surface-700 dark:text-surface-300 text-sm">
                    <strong>Background:</strong> Competed in Math and Physics Olympiads
                    in high school, which sparked his passion for solving complex
                    problems with code.
                </p>
            </div>
        </div>
    </section>

    <!-- Our Approach -->
    <section class="mb-20 md:mb-24">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-8 text-center text-xl font-bold md:text-2xl"
        >
            How We're Building It Different
        </h2>
        <div class="grid gap-6 md:grid-cols-3">
            <div class="card p-6 text-center">
                <div
                    class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Users
                        class="text-primary-600 dark:text-primary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Student-First Design
                </h3>
                <p class="text-surface-700 dark:text-surface-300 text-sm">
                    Every feature is designed by students who actually use these
                    tools daily. No corporate guessing about what students need.
                </p>
            </div>

            <div class="card p-6 text-center">
                <div
                    class="bg-secondary-100 dark:bg-secondary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Globe
                        class="text-secondary-600 dark:text-secondary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Works Everywhere
                </h3>
                <p class="text-surface-700 dark:text-surface-300 text-sm">
                    Built to work seamlessly on Windows, Mac, Linux, and mobile.
                    Your work follows you, no matter what device you prefer.
                </p>
            </div>

            <div class="card p-6 text-center">
                <div
                    class="bg-tertiary-100 dark:bg-tertiary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Shield
                        class="text-tertiary-600 dark:text-tertiary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Privacy by Design
                </h3>
                <p class="text-surface-700 dark:text-surface-300 text-sm">
                    End-to-end encryption and Swiss data protection standards.
                    Your academic work stays private and secure.
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
                Where We Are Right Now
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
                            Planning Complete
                        </span>
                    </div>
                    <div
                        class="bg-primary-300 dark:bg-primary-700 h-1 w-12 rounded"
                    ></div>
                    <div class="flex items-center gap-2">
                        <button
                            onclick={() => (coffeeClicked = true)}
                            class={coffeeClicked ? "cursor-default" : ""}
                        >
                            <Coffee
                                class="text-primary-500 h-6 w-6 {coffeeClicked
                                    ? 'animate-bounce'
                                    : 'hover:scale-110'} transition-all duration-200"
                                aria-hidden="true"
                            />
                        </button>
                        <span
                            class="text-primary-600 dark:text-primary-400 text-sm font-medium"
                        >
                            Active Development
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
                            Beta Testing
                        </span>
                    </div>
                </div>
            </div>
            <p class="text-surface-700 dark:text-surface-300 mb-6 text-lg">
                We're currently building the core features based on feedback
                from students like you. Every feature request and pain point you
                share directly influences what we build next.
            </p>
            <div
                class="bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
            >
                <Zap class="h-4 w-4" />
                Your input shapes our roadmap in real-time
            </div>
        </div>
    </section>

    <!-- Technical Foundation -->
    <section class="mb-20 md:mb-24">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-8 text-center text-xl font-bold md:text-2xl"
        >
            Built on Solid Ground
        </h2>
        <div class="mx-auto max-w-4xl">
            <div class="card p-8">
                <div class="grid gap-6 md:grid-cols-2">
                    <div class="text-center">
                        <div
                            class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg"
                        >
                            <Globe
                                class="text-primary-600 dark:text-primary-400 h-5 w-5"
                            />
                        </div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 mb-2 font-semibold"
                        >
                            Offline-First Architecture
                        </h3>
                        <p
                            class="text-surface-700 dark:text-surface-300 text-sm"
                        >
                            Powered by SpaceTimeDB for real-time collaboration
                            and bulletproof sync. Work anywhere, sync
                            everywhere.
                        </p>
                    </div>
                    <div class="text-center">
                        <div
                            class="bg-secondary-100 dark:bg-secondary-900/30 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg"
                        >
                            <Code
                                class="text-secondary-600 dark:text-secondary-400 h-5 w-5"
                            />
                        </div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 mb-2 font-semibold"
                        >
                            Native Performance
                        </h3>
                        <p
                            class="text-surface-700 dark:text-surface-300 text-sm"
                        >
                            Built with Tauri and SvelteKit for fast, secure,
                            cross-platform apps that feel native on every
                            device.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Values -->
    <section class="mb-20 md:mb-24">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-8 text-center text-xl font-bold md:text-2xl"
        >
            What Drives Us
        </h2>
        <div class="grid gap-6 md:grid-cols-3">
            <div class="card p-6 text-center">
                <div
                    class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Target
                        class="text-primary-600 dark:text-primary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Solve Real Problems
                </h3>
                <p class="text-surface-700 dark:text-surface-300 text-sm">
                    We build features that solve actual pain points students
                    face every day, not just cool tech for the sake of it.
                </p>
            </div>

            <div class="card p-6 text-center">
                <div
                    class="bg-secondary-100 dark:bg-secondary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Users
                        class="text-secondary-600 dark:text-secondary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Open Source Spirit
                </h3>
                <p class="text-surface-700 dark:text-surface-300 text-sm">
                    Academic tools should be accessible to everyone. Our core is
                    open source and self-hostable.
                </p>
            </div>

            <div class="card p-6 text-center">
                <div
                    class="bg-tertiary-100 dark:bg-tertiary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Shield
                        class="text-tertiary-600 dark:text-tertiary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Swiss Privacy Standards
                </h3>
                <p class="text-surface-700 dark:text-surface-300 text-sm">
                    Built with the same privacy principles and data protection
                    standards that Switzerland is known for.
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
            Crafted in Switzerland
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
            Be Part of the Story
        </h2>
        <p class="text-surface-700 dark:text-surface-300 mx-auto mb-8 max-w-xl">
            We're not just building software – we're building the future of
            academic work. Your feedback, ideas, and experiences shape every
            feature we develop.
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <a
                href="/community"
                target="_blank"
                rel="noopener noreferrer"
                class="btn preset-filled-primary-500 inline-flex items-center gap-2 text-white"
            >
                <Users class="h-4 w-4" />
                Join Our Community
            </a>
            <a
                href="https://forms.gle/N2qFoXn4PonD6EnA9"
                target="_blank"
                rel="noopener noreferrer"
                class="btn dark:preset-outlined-primary-200-800 preset-outlined-primary-400-600 inline-flex items-center gap-2"
            >
                <Target class="h-4 w-4" />
                Share Your Feedback
            </a>
        </div>
    </section>
</div>
