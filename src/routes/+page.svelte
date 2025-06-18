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
        Play,
        Palette,
        Brain,
        Clock,
        Shield,
        Sparkles,
        Coffee,
    } from "@lucide/svelte";

    // Core value propositions - simplified for students
    const coreValues = [
        {
            icon: Brain,
            title: "Notes That Actually Work",
            description:
                "Write notes that can run code, generate charts, and create interactive content. Turn your study materials into living documents.",
        },
        {
            icon: Users,
            title: "Seamless Group Work",
            description:
                "Collaborate in real-time without the fear of losing work. Smart conflict resolution means everyone's changes matter.",
        },
        {
            icon: Sparkles,
            title: "Your Perfect Study Space",
            description:
                "Customize everything. Split screens, create shortcuts, organize however you think. Make Axonotes work the way you work.",
        },
    ];

    // Problem/Solution comparison - more relatable
    const problemSolution = {
        before: [
            "Switching between 5+ apps just to work on one assignment",
            "Lost work when someone edited while you were typing",
            "Can't find that one important note you wrote last week",
            "Studying with static, boring flashcards",
            "Group projects turning into chaos",
        ],
        after: [
            "Everything you need in one beautiful, organized space",
            "Real-time collaboration that actually works smoothly",
            "Find anything instantly with powerful search",
            "Interactive study materials that adapt to how you learn",
            "Group work that feels effortless and productive",
        ],
    };
</script>

<svelte:head>
    <title>Axonotes - The Academic Platform That Actually Gets It</title>
    <meta
        name="description"
        content="Stop juggling apps. Start studying smarter. One platform for notes, collaboration, and learning - built by students who understand your struggles."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
    <!-- Hero Section -->
    <section class="mb-16 sm:mb-20 md:mb-28">
        <div class="mx-auto max-w-4xl text-center">
            <!-- Main Headline -->
            <h1
                class="text-primary-600 dark:text-primary-400 mb-4 text-2xl leading-tight font-bold sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl"
            >
                The Academic Platform<br class="hidden sm:block" />That Actually
                Gets It
            </h1>

            <!-- Subheadline -->
            <p
                class="text-surface-800 dark:text-surface-200 mx-auto mb-6 max-w-2xl px-2 text-base leading-relaxed sm:mb-8 sm:px-0 sm:text-lg md:text-xl"
            >
                Stop juggling apps, losing work, and fighting with tools that
                weren't made for learning. Axonotes is built by students who've
                felt your pain.
            </p>

            <!-- Status Badge -->
            <div
                class="bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 mb-6 inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium sm:mb-8 sm:px-4 sm:text-sm"
            >
                <Coffee class="h-3 w-3 sm:h-4 sm:w-4" />
                <span class="xs:inline hidden">Currently brewing - </span>Help
                us shape the future
            </div>

            <!-- Primary CTA -->
            <div
                class="flex flex-col gap-3 px-2 sm:flex-row sm:justify-center sm:gap-4 sm:px-0"
            >
                <a
                    href="https://discord.gg/myBMaaDeQu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn preset-filled-primary-500 inline-flex min-h-[44px] items-center justify-center gap-2 px-4 text-sm text-white sm:px-6 sm:text-base"
                >
                    <MessageCircle class="h-4 w-4 sm:h-5 sm:w-5" />
                    <span class="xs:inline hidden"
                        >Join the Waitlist &
                    </span>Shape Axonotes
                    <ArrowRight class="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
                <a
                    href="/about"
                    class="btn dark:preset-outlined-primary-200-800 preset-outlined-primary-400-600 inline-flex min-h-[44px] items-center justify-center gap-2 px-4 text-sm sm:px-6 sm:text-base"
                >
                    Learn Our Story
                    <ChevronRight class="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
            </div>
        </div>
    </section>

    <!-- Product Demo Placeholder -->
    <section class="mb-16 sm:mb-20 md:mb-24">
        <div class="mx-auto max-w-4xl">
            <div
                class="card border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 border-2 border-dashed p-6 text-center sm:p-8 lg:p-12"
            >
                <div
                    class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full sm:mb-6 sm:h-16 sm:w-16"
                >
                    <Play
                        class="text-primary-600 dark:text-primary-400 h-6 w-6 sm:h-8 sm:w-8"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 mb-2 text-lg font-bold sm:mb-3 sm:text-xl"
                >
                    🎬 Epic Demo Reel <span class="hidden sm:inline"
                        >(In Progress)</span
                    >
                </h3>
                <p
                    class="text-surface-700 dark:text-surface-300 mx-auto mb-4 max-w-lg text-sm leading-relaxed sm:mb-6 sm:text-base"
                >
                    Imagine the smoothest real-time collaboration demo here.
                    We're too busy coding the actual features to make the fancy
                    videos<span class="hidden sm:inline">... yet</span>.
                </p>
                <a
                    href="https://discord.gg/myBMaaDeQu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn dark:preset-outlined-primary-200-800 preset-outlined-primary-400-600 inline-flex min-h-[44px] items-center gap-2 px-4 text-sm sm:px-6 sm:text-base"
                >
                    Help Us Create Amazing Demos
                    <MessageCircle class="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
            </div>
        </div>
    </section>

    <!-- Problem/Solution Section -->
    <section class="mb-16 sm:mb-20 md:mb-24">
        <div class="mx-auto max-w-6xl">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-6 px-2 text-center text-lg font-bold sm:mb-8 sm:px-0 sm:text-xl md:text-2xl"
            >
                From Academic Chaos to Seamless Flow
            </h2>

            <div class="grid gap-6 sm:gap-8 lg:grid-cols-2">
                <!-- Before: The Problem -->
                <div
                    class="card border-warning-200 dark:border-warning-800 bg-warning-50 dark:bg-warning-950/20 border p-4 sm:p-6"
                >
                    <div class="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                        <span class="text-xl sm:text-2xl">😰</span>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-sm font-semibold sm:text-base"
                        >
                            Your Current Academic Life
                        </h3>
                    </div>
                    <ul class="space-y-2 sm:space-y-3">
                        {#each problemSolution.before as item (item)}
                            <li
                                class="text-surface-800 dark:text-surface-200 flex items-start gap-2 text-xs leading-relaxed sm:text-sm"
                            >
                                <span
                                    class="text-warning-500 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-current"
                                ></span>
                                <span>{item}</span>
                            </li>
                        {/each}
                    </ul>
                </div>

                <!-- After: The Solution -->
                <div
                    class="card border-success-200 dark:border-success-800 bg-success-50 dark:bg-success-950/20 border p-4 sm:p-6"
                >
                    <div class="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                        <span class="text-xl sm:text-2xl">✨</span>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-sm font-semibold sm:text-base"
                        >
                            With Axonotes
                        </h3>
                    </div>
                    <ul class="space-y-2 sm:space-y-3">
                        {#each problemSolution.after as item (item)}
                            <li
                                class="text-surface-800 dark:text-surface-200 flex items-start gap-2 text-xs leading-relaxed sm:text-sm"
                            >
                                <span
                                    class="text-success-500 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-current"
                                ></span>
                                <span>{item}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Value Propositions -->
    <section class="mb-16 sm:mb-20 md:mb-24">
        <div class="mx-auto max-w-4xl">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-6 px-2 text-center text-lg font-bold sm:mb-8 sm:px-0 sm:text-xl md:text-2xl"
            >
                Everything Students Need, Nothing They Don't
            </h2>

            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {#each coreValues as value (value)}
                    <div class="card p-4 text-center sm:p-6">
                        <div
                            class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg sm:mb-4 sm:h-12 sm:w-12"
                        >
                            <svelte:component
                                this={value.icon}
                                class="text-primary-600 dark:text-primary-400 h-5 w-5 sm:h-6 sm:w-6"
                            />
                        </div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 mb-2 text-sm font-semibold sm:text-base"
                        >
                            {value.title}
                        </h3>
                        <p
                            class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed sm:text-sm"
                        >
                            {value.description}
                        </p>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Interface Preview Placeholder -->
    <section class="mb-16 sm:mb-20 md:mb-24">
        <div class="mx-auto max-w-6xl">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-6 px-2 text-center text-lg font-bold sm:mb-8 sm:px-0 sm:text-xl md:text-2xl"
            >
                Beautiful Interface <span class="hidden sm:inline"
                    >(Coming Soon)</span
                >
            </h2>
            <div
                class="card border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50 border-2 border-dashed p-4 text-center sm:p-6 md:aspect-video lg:p-8"
            >
                <div class="flex h-full flex-col items-center justify-center">
                    <div
                        class="bg-primary-100 dark:bg-primary-900/30 mb-4 flex h-16 w-16 items-center justify-center rounded-xl sm:mb-6 sm:h-20 sm:w-20 sm:rounded-2xl"
                    >
                        <Palette
                            class="text-primary-600 dark:text-primary-400 h-8 w-8 sm:h-10 sm:w-10"
                        />
                    </div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 mb-2 text-lg font-bold sm:mb-3 sm:text-xl"
                    >
                        🎨 <span class="xs:inline hidden"
                            >[INSERT GORGEOUS DESIGN HERE]</span
                        >
                        <span class="xs:hidden">Gorgeous Design Coming</span>
                    </h3>
                    <p
                        class="text-surface-700 dark:text-surface-300 mx-auto mb-4 max-w-md text-xs leading-relaxed sm:mb-6 sm:text-sm"
                    >
                        Our current UI is 90% placeholder text and 10% hope.
                        <span class="hidden sm:inline"
                            >Know the difference between serif and sans-serif?
                            Join us!</span
                        >
                    </p>
                    <div
                        class="flex w-full max-w-xs flex-col gap-2 sm:max-w-none sm:flex-row sm:justify-center sm:gap-3"
                    >
                        <a
                            href="https://discord.gg/myBMaaDeQu"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn preset-filled-primary-500 inline-flex min-h-[44px] items-center justify-center gap-2 px-4 text-sm text-white sm:px-6 sm:text-base"
                        >
                            <Palette class="h-3 w-3 sm:h-4 sm:w-4" />
                            Join as Designer
                        </a>
                        <a
                            href="https://github.com/axonotes/AxonotesCore"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn dark:preset-outlined-primary-200-800 preset-outlined-primary-400-600 inline-flex min-h-[44px] items-center justify-center gap-2 px-4 text-sm sm:px-6 sm:text-base"
                        >
                            <Github class="h-3 w-3 sm:h-4 sm:w-4" />
                            Contribute Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Feature Showcase Placeholders -->
    <section class="mb-16 sm:mb-20 md:mb-24">
        <div class="mx-auto max-w-6xl">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-6 px-2 text-center text-lg font-bold sm:mb-8 sm:px-0 sm:text-xl md:text-2xl"
            >
                Features You'll Accidentally Discover and Love
            </h2>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8">
                <!-- Time Machine for Your Work -->
                <div class="card p-4 sm:p-6">
                    <div class="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                        <div
                            class="bg-primary-100 dark:bg-primary-900/30 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10"
                        >
                            <Clock
                                class="text-primary-600 dark:text-primary-400 h-4 w-4 sm:h-5 sm:w-5"
                            />
                        </div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-sm font-semibold sm:text-base"
                        >
                            ⚡ Unbreakable History
                        </h3>
                    </div>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed sm:text-sm"
                    >
                        Powered by SpaceTimeDB, every database transaction is
                        saved permanently. Restore any version, see who changed
                        what, and collaborate without fear. <em
                            class="hidden sm:inline"
                            >Oh wow, I can actually undo that disaster from last
                            week!</em
                        >
                    </p>
                </div>

                <!-- Smart Flashcards -->
                <div class="card p-4 sm:p-6">
                    <div class="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                        <div
                            class="bg-secondary-100 dark:bg-secondary-900/30 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10"
                        >
                            <BookOpen
                                class="text-secondary-600 dark:text-secondary-400 h-4 w-4 sm:h-5 sm:w-5"
                            />
                        </div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-sm font-semibold sm:text-base"
                        >
                            🧠 Smart Flashcards
                        </h3>
                    </div>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed sm:text-sm"
                    >
                        Spaced repetition system that'll make Anki jealous.
                        Currently in our brilliant minds.
                        <em class="hidden sm:inline"
                            >Wait, I can make flashcards right here?</em
                        >
                    </p>
                </div>

                <!-- Global Search -->
                <div class="card p-4 sm:p-6">
                    <div class="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                        <div
                            class="bg-tertiary-100 dark:bg-tertiary-900/30 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10"
                        >
                            <Zap
                                class="text-tertiary-600 dark:text-tertiary-400 h-4 w-4 sm:h-5 sm:w-5"
                            />
                        </div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-sm font-semibold sm:text-base"
                        >
                            🔍 Find Anything, Instantly
                        </h3>
                    </div>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed sm:text-sm"
                    >
                        Search across all your notes, tasks, and even chat
                        messages in seconds.
                        <em class="hidden sm:inline"
                            >I can't believe it found that thing I wrote months
                            ago!</em
                        >
                    </p>
                </div>

                <!-- Works Offline -->
                <div class="card p-4 sm:p-6">
                    <div class="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                        <div
                            class="bg-success-100 dark:bg-success-900/30 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10"
                        >
                            <Shield
                                class="text-success-600 dark:text-success-400 h-4 w-4 sm:h-5 sm:w-5"
                            />
                        </div>
                        <h3
                            class="text-surface-900 dark:text-surface-100 text-sm font-semibold sm:text-base"
                        >
                            🌐 Works Even When WiFi Doesn't
                        </h3>
                    </div>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed sm:text-sm"
                    >
                        Keep working when the internet dies. Everything syncs
                        perfectly when you're back online.
                        <em class="hidden sm:inline"
                            >Wait, I was offline this whole time? Amazing!</em
                        >
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Social Proof & Community -->
    <section class="mb-16 sm:mb-20 md:mb-24">
        <div
            class="card from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 border-primary-200 dark:border-primary-800 mx-auto max-w-4xl border bg-gradient-to-br p-6 text-center sm:p-8"
        >
            <h2
                class="text-surface-900 dark:text-surface-100 mb-3 text-lg font-bold sm:mb-4 sm:text-xl md:text-2xl"
            >
                Help Us Build What Students Actually Want
            </h2>
            <p
                class="text-surface-700 dark:text-surface-300 mx-auto mb-4 max-w-2xl text-sm leading-relaxed sm:mb-6 sm:text-base"
            >
                We're students building for students. Your feedback directly
                shapes every feature we create. Join a community that actually
                listens.
            </p>

            <div
                class="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4"
            >
                <a
                    href="https://discord.gg/myBMaaDeQu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn preset-filled-primary-500 inline-flex min-h-[44px] items-center justify-center gap-2 px-4 text-sm text-white sm:px-6 sm:text-base"
                >
                    <MessageCircle class="h-3 w-3 sm:h-4 sm:w-4" />
                    Join Discord Community
                </a>
                <a
                    href="https://github.com/axonotes/AxonotesCore"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn dark:preset-outlined-primary-200-800 preset-outlined-primary-400-600 inline-flex min-h-[44px] items-center justify-center gap-2 px-4 text-sm sm:px-6 sm:text-base"
                >
                    <Github class="h-3 w-3 sm:h-4 sm:w-4" />
                    Star on GitHub
                </a>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="px-2 text-center sm:px-0">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-3 text-lg font-bold sm:mb-4 sm:text-xl md:text-2xl"
        >
            Ready to Stop Fighting With Your Tools?
        </h2>
        <p
            class="text-surface-700 dark:text-surface-300 mx-auto mb-6 max-w-xl text-sm leading-relaxed sm:mb-8 sm:text-base"
        >
            Be among the first to experience academic software that actually
            understands how you work and learn.
        </p>

        <a
            href="https://discord.gg/myBMaaDeQu"
            target="_blank"
            rel="noopener noreferrer"
            class="btn preset-filled-secondary-500 inline-flex min-h-[44px] items-center justify-center gap-2 px-4 text-sm text-white sm:px-6 sm:text-base"
        >
            Join the Waitlist
            <ExternalLink class="h-3 w-3 sm:h-4 sm:w-4" />
        </a>
    </section>
</div>
