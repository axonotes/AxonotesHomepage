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
        Lightbulb,
        Coffee,
        Zap,
        Brain,
        MapPin,
        Calendar,
    } from "@lucide/svelte";
    import * as m from "$lib/paraglide/messages.js";

    let heartClicked = $state(false);
    let coffeeClicked = $state(false);

    // Reconstruct structured data for the team members
    const teamMembers = [
        {
            name: m.about_team_oliver_name(),
            title: m.about_team_oliver_title(),
            age: m.about_team_oliver_age(),
            location: m.about_team_oliver_location(),
            description: m.about_team_oliver_description(),
            funFact: m.about_team_oliver_funFact(),
            linkText: m.about_team_oliver_linkText(),
            linkHref: "https://oseifert.ch",
            icon: Code,
            iconClass:
                "text-primary-600 dark:text-primary-400 h-6 w-6 md:h-8 md:w-8",
            bgClass: "bg-primary-100 dark:bg-primary-900/30",
            titleClass: "text-primary-600 dark:text-primary-400",
        },
        {
            name: m.about_team_ionut_name(),
            title: m.about_team_ionut_title(),
            university: m.about_team_ionut_university(),
            description: m.about_team_ionut_description(),
            background: m.about_team_ionut_background(),
            icon: Brain,
            iconClass:
                "text-secondary-600 dark:text-secondary-400 h-6 w-6 md:h-8 md:w-8",
            bgClass: "bg-secondary-100 dark:bg-secondary-900/30",
            titleClass: "text-secondary-600 dark:text-secondary-400",
        },
    ];

    // Reconstruct structured data for the approach section
    const approachItems = [
        {
            icon: Users,
            title: m.about_approach_item1_title(),
            description: m.about_approach_item1_description(),
            iconClass:
                "text-primary-600 dark:text-primary-400 h-5 w-5 md:h-6 md:w-6",
            bgClass: "bg-primary-100 dark:bg-primary-900/30",
        },
        {
            icon: Globe,
            title: m.about_approach_item2_title(),
            description: m.about_approach_item2_description(),
            iconClass:
                "text-secondary-600 dark:text-secondary-400 h-5 w-5 md:h-6 md:w-6",
            bgClass: "bg-secondary-100 dark:bg-secondary-900/30",
        },
        {
            icon: Shield,
            title: m.about_approach_item3_title(),
            description: m.about_approach_item3_description(),
            iconClass:
                "text-tertiary-600 dark:text-tertiary-400 h-5 w-5 md:h-6 md:w-6",
            bgClass: "bg-tertiary-100 dark:bg-tertiary-900/30",
        },
    ];

    // Reconstruct structured data for the technical foundation section
    const techFoundationItems = [
        {
            icon: Globe,
            title: m.about_tech_item1_title(),
            description: m.about_tech_item1_description(),
            iconClass:
                "text-primary-600 dark:text-primary-400 h-4 w-4 md:h-5 md:w-5",
            bgClass: "bg-primary-100 dark:bg-primary-900/30",
        },
        {
            icon: Code,
            title: m.about_tech_item2_title(),
            description: m.about_tech_item2_description(),
            iconClass:
                "text-secondary-600 dark:text-secondary-400 h-4 w-4 md:h-5 md:w-5",
            bgClass: "bg-secondary-100 dark:bg-secondary-900/30",
        },
    ];

    // Reconstruct structured data for core values
    const coreValues = [
        {
            icon: Target,
            title: m.about_values_item1_title(),
            description: m.about_values_item1_description(),
            iconClass:
                "text-primary-600 dark:text-primary-400 h-5 w-5 md:h-6 md:w-6",
            bgClass: "bg-primary-100 dark:bg-primary-900/30",
        },
        {
            icon: Users,
            title: m.about_values_item2_title(),
            description: m.about_values_item2_description(),
            iconClass:
                "text-secondary-600 dark:text-secondary-400 h-5 w-5 md:h-6 md:w-6",
            bgClass: "bg-secondary-100 dark:bg-secondary-900/30",
        },
        {
            icon: Shield,
            title: m.about_values_item3_title(),
            description: m.about_values_item3_description(),
            iconClass:
                "text-tertiary-600 dark:text-tertiary-400 h-5 w-5 md:h-6 md:w-6",
            bgClass: "bg-tertiary-100 dark:bg-tertiary-900/30",
        },
    ];
</script>

<svelte:head>
    <title>{m.about_meta_title()}</title>
    <meta name="description" content={m.about_meta_description()} />
</svelte:head>

<div class="container mx-auto px-4 py-6 md:py-8">
    <!-- Mission Hero -->
    <header class="mb-12 text-center md:mb-16 lg:mb-20">
        <h1
            class="text-primary-600 dark:text-primary-400 mb-4 text-2xl !leading-tight font-bold md:mb-6 md:text-4xl lg:text-5xl"
        >
            {m.about_hero_title()}
        </h1>
        <p
            class="text-surface-800 dark:text-surface-200 mx-auto max-w-3xl text-base md:text-lg"
        >
            {m.about_hero_subtitle()}
        </p>
    </header>

    <!-- Our Story -->
    <section class="mb-16 md:mb-20 lg:mb-24">
        <div class="mx-auto max-w-4xl">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-6 text-center text-lg font-bold md:mb-8 md:text-xl lg:text-2xl"
            >
                {m.about_story_title()}
            </h2>
            <div class="card p-6 md:p-8">
                <p
                    class="text-surface-700 dark:text-surface-300 mb-4 text-sm md:text-base"
                >
                    {m.about_story_paragraph1()}
                </p>
                <p
                    class="text-surface-700 dark:text-surface-300 mb-4 text-sm md:text-base"
                >
                    {@html m.about_story_paragraph2()}
                </p>
                <p
                    class="text-surface-700 dark:text-surface-300 text-sm md:text-base"
                >
                    {m.about_story_paragraph3()}
                </p>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section class="mb-16 md:mb-20 lg:mb-24">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-6 text-center text-lg font-bold md:mb-8 md:text-xl lg:text-2xl"
        >
            {m.about_team_title()}
        </h2>
        <div class="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8">
            {#each teamMembers as member}
                <div class="card p-4 md:p-6">
                    <div class="mb-4 flex items-start gap-3 md:mb-6 md:gap-4">
                        <div
                            class="{member.bgClass} flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full md:h-16 md:w-16"
                        >
                            <svelte:component
                                this={member.icon}
                                class={member.iconClass}
                            />
                        </div>
                        <div class="min-w-0 flex-1">
                            <h3
                                class="text-surface-900 dark:text-surface-100 text-base font-bold md:text-lg"
                            >
                                {member.name}
                            </h3>
                            <p
                                class="{member.titleClass} text-sm font-medium md:text-base"
                            >
                                {member.title}
                            </p>
                            <div
                                class="text-surface-600 dark:text-surface-400 mt-2 flex flex-col gap-2 text-xs md:flex-row md:items-center md:gap-4 md:text-sm"
                            >
                                {#if member.age}
                                    <div class="flex items-center gap-1">
                                        <Calendar class="h-3 w-3" />
                                        <span>{member.age}</span>
                                    </div>
                                {/if}
                                {#if member.location}
                                    <div class="flex items-center gap-1">
                                        <MapPin class="h-3 w-3" />
                                        <span>{member.location}</span>
                                    </div>
                                {/if}
                                {#if member.university}
                                    <div class="flex items-center gap-1">
                                        <Lightbulb class="h-3 w-3" />
                                        <span>{member.university}</span>
                                    </div>
                                {/if}
                            </div>
                        </div>
                    </div>
                    <p
                        class="text-surface-700 dark:text-surface-300 mb-3 text-sm md:mb-4 md:text-base"
                    >
                        "{member.description}"
                    </p>
                    <p
                        class="text-surface-700 dark:text-surface-300 mb-3 text-xs md:mb-4 md:text-sm"
                    >
                        <strong>{m.about_team_funFact_label()}:</strong>
                        {member.funFact || member.background}
                    </p>
                    {#if member.linkHref}
                        <div class="mt-3 md:mt-4">
                            <a
                                href={member.linkHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-primary-600 dark:text-primary-400 inline-flex items-center gap-1 text-xs hover:underline md:text-sm"
                            >
                                {member.linkText}
                                <ExternalLink class="h-3 w-3" />
                            </a>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </section>

    <!-- Our Approach -->
    <section class="mb-16 md:mb-20 lg:mb-24">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-6 text-center text-lg font-bold md:mb-8 md:text-xl lg:text-2xl"
        >
            {m.about_approach_title()}
        </h2>
        <div class="grid gap-4 md:grid-cols-3 md:gap-6">
            {#each approachItems as item}
                <div class="card p-4 text-center md:p-6">
                    <div
                        class="{item.bgClass} mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg md:mb-4 md:h-12 md:w-12"
                    >
                        <svelte:component
                            this={item.icon}
                            class={item.iconClass}
                        />
                    </div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 mb-2 text-sm font-semibold md:text-base"
                    >
                        {item.title}
                    </h3>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs md:text-sm"
                    >
                        {item.description}
                    </p>
                </div>
            {/each}
        </div>
    </section>

    <!-- Development Status -->
    <section
        class="card from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30 border-primary-200 dark:border-primary-800 mb-12 border bg-gradient-to-br p-6 md:mb-16 md:p-8 lg:p-12"
    >
        <div class="mx-auto max-w-4xl text-center">
            <h2
                class="text-surface-900 dark:text-surface-100 mb-6 text-lg font-bold md:mb-8 md:text-xl lg:text-2xl"
            >
                {m.about_developmentStatus_title()}
            </h2>
            <div class="mb-6 flex justify-center md:mb-8">
                <div
                    class="flex flex-col items-center gap-3 md:flex-row md:gap-4"
                >
                    <div class="flex items-center gap-2">
                        <CheckCircle
                            class="text-success-500 h-5 w-5 md:h-6 md:w-6"
                            aria-hidden="true"
                        />
                        <span
                            class="text-surface-800 dark:text-surface-200 text-xs md:text-sm"
                        >
                            {m.about_developmentStatus_planning()}
                        </span>
                    </div>
                    <div
                        class="bg-primary-300 dark:bg-primary-700 h-1 w-8 rounded md:w-12"
                    ></div>
                    <div class="flex items-center gap-2">
                        <button
                            onclick={() => (coffeeClicked = true)}
                            class={coffeeClicked ? "cursor-default" : ""}
                        >
                            <Coffee
                                class="text-primary-500 h-5 w-5 {coffeeClicked
                                    ? 'animate-bounce'
                                    : 'hover:scale-110'} transition-all duration-200 md:h-6 md:w-6"
                                aria-hidden="true"
                            />
                        </button>
                        <span
                            class="text-primary-600 dark:text-primary-400 text-xs font-medium md:text-sm"
                        >
                            {m.about_developmentStatus_activeDevelopment()}
                        </span>
                    </div>
                    <div
                        class="bg-surface-300 dark:bg-surface-700 h-1 w-8 rounded md:w-12"
                    ></div>
                    <div class="flex items-center gap-2">
                        <div
                            class="bg-surface-400 dark:bg-surface-600 h-5 w-5 rounded-full md:h-6 md:w-6"
                        ></div>
                        <span
                            class="text-surface-600 dark:text-surface-400 text-xs md:text-sm"
                        >
                            {m.about_developmentStatus_betaTesting()}
                        </span>
                    </div>
                </div>
            </div>
            <p
                class="text-surface-700 dark:text-surface-300 mb-4 text-sm md:mb-6 md:text-base lg:text-lg"
            >
                {m.about_developmentStatus_description()}
            </p>
            <div
                class="bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium md:inline-flex md:px-4 md:py-2 md:text-sm"
            >
                <Zap class="mx-auto h-5 w-5 md:m-0 md:h-4 md:w-4" />
                {m.about_developmentStatus_badge()}
            </div>
        </div>
    </section>

    <!-- Technical Foundation -->
    <section class="mb-16 md:mb-20 lg:mb-24">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-6 text-center text-lg font-bold md:mb-8 md:text-xl lg:text-2xl"
        >
            {m.about_tech_title()}
        </h2>
        <div class="mx-auto max-w-4xl">
            <div class="card p-6 md:p-8">
                <div class="grid gap-4 md:grid-cols-2 md:gap-6">
                    {#each techFoundationItems as item}
                        <div class="text-center">
                            <div
                                class="{item.bgClass} mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-lg md:h-10 md:w-10"
                            >
                                <svelte:component
                                    this={item.icon}
                                    class={item.iconClass}
                                />
                            </div>
                            <h3
                                class="text-surface-900 dark:text-surface-100 mb-2 text-sm font-semibold md:text-base"
                            >
                                {item.title}
                            </h3>
                            <p
                                class="text-surface-700 dark:text-surface-300 text-xs md:text-sm"
                            >
                                {item.description}
                            </p>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </section>

    <!-- Core Values -->
    <section class="mb-16 md:mb-20 lg:mb-24">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-6 text-center text-lg font-bold md:mb-8 md:text-xl lg:text-2xl"
        >
            {m.about_values_title()}
        </h2>
        <div class="grid gap-4 md:grid-cols-3 md:gap-6">
            {#each coreValues as value}
                <div class="card p-4 text-center md:p-6">
                    <div
                        class="{value.bgClass} mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg md:mb-4 md:h-12 md:w-12"
                    >
                        <svelte:component
                            this={value.icon}
                            class={value.iconClass}
                        />
                    </div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 mb-2 text-sm font-semibold md:text-base"
                    >
                        {value.title}
                    </h3>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs md:text-sm"
                    >
                        {value.description}
                    </p>
                </div>
            {/each}
        </div>
    </section>

    <!-- Swiss Excellence -->
    <section class="mb-12 text-center md:mb-16">
        <div
            class="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium md:mb-6 md:px-4 md:py-2 md:text-sm"
        >
            <button
                onclick={() => (heartClicked = true)}
                class={heartClicked ? "cursor-default" : ""}
            >
                <Heart
                    class="h-3 w-3 {heartClicked
                        ? 'fill-red-500 text-transparent'
                        : 'hover:scale-110'} transition-all duration-200 md:h-4 md:w-4"
                />
            </button>
            {m.about_swissExcellence_badge()}
        </div>
        <h2
            class="text-surface-900 dark:text-surface-100 mb-3 text-lg font-bold md:mb-4 md:text-xl lg:text-2xl"
        >
            {m.about_swissExcellence_title()}
        </h2>
        <p
            class="text-surface-700 dark:text-surface-300 mx-auto max-w-2xl text-sm md:text-base"
        >
            {m.about_swissExcellence_description()}
        </p>
    </section>

    <!-- Call to Action -->
    <section class="text-center">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-3 text-lg font-bold md:mb-4 md:text-xl lg:text-2xl"
        >
            {m.about_cta_title()}
        </h2>
        <p
            class="text-surface-700 dark:text-surface-300 mx-auto mb-6 max-w-xl text-sm md:mb-8 md:text-base"
        >
            {m.about_cta_description()}
        </p>
        <div class="flex flex-col gap-3 md:flex-row md:justify-center md:gap-4">
            <a
                href="/community"
                target="_blank"
                rel="noopener noreferrer"
                class="btn preset-filled-primary-500 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm text-white md:px-6 md:py-3 md:text-base"
            >
                <Users class="h-4 w-4" />
                {m.about_cta_button1()}
            </a>
            <a
                href="https://forms.gle/N2qFoXn4PonD6EnA9"
                target="_blank"
                rel="noopener noreferrer"
                class="btn dark:preset-outlined-primary-200-800 preset-outlined-primary-400-600 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm md:px-6 md:py-3 md:text-base"
            >
                <Target class="h-4 w-4" />
                {m.about_cta_button2()}
            </a>
        </div>
    </section>
</div>
