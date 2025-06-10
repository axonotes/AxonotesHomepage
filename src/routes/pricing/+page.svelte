<script lang="ts">
    import PricingCard from "$lib/components/PricingCard.svelte";
    import SelfHostingSection from "$lib/components/SelfHostingSection.svelte";
    import {Heart, DollarSign} from "@lucide/svelte";
    import type {PricingPlan} from "$lib/types/pricing.js";

    let heartClicked = $state(false);

    const pricingPlans: PricingPlan[] = [
        {
            id: "free",
            name: "Free Tier",
            price: "Free",
            description:
                "Everything you need to excel academically. Perfect for students starting their journey with Axonotes.",
            features: [
                "1GB storage for thousands of notes",
                "Core note-taking & organization tools",
                "Learning features (flashcards, exercises)",
                "Offline access across all devices",
                "End-to-end encryption",
            ],
            cta: {
                text: "Coming Soon",
                disabled: true,
            },
            variant: "default",
        },
        {
            id: "pro",
            name: "Pro Supporter",
            price: "$8",
            priceUnit: "/month",
            description:
                "Support our mission while unlocking enhanced capabilities.",
            features: [
                "Everything in Free Tier",
                "10GB storage for extensive projects",
                "Priority support & early access",
                "Custom themes & personalization",
                "Directly fund Axonotes development",
            ],
            cta: {
                text: "Coming Soon",
                disabled: true,
            },
            variant: "featured",
        },
        {
            id: "institutional",
            name: "Institutional",
            price: "Custom",
            description:
                "Empower your entire educational organization with tailored deployment and management solutions.",
            features: [
                "Unlimited storage & users",
                "Centralized account management",
                "Custom deployment options",
                "Dedicated support & training",
                "Advanced analytics & reporting",
                "Flexible billing & contracts",
            ],
            cta: {
                text: "Contact Us",
                disabled: true,
            },
            variant: "default",
        },
    ];
</script>

<svelte:head>
    <title>Pricing - Axonotes</title>
    <meta
        name="description"
        content="Transparent, student-friendly pricing for Axonotes. Free for individual use, affordable Pro features, and custom solutions for institutions."
    />
</svelte:head>

<div class="container mx-auto px-4 py-6 md:py-8">
    <!-- Header Section -->
    <header class="mb-10 text-center md:mb-12 lg:mb-16">
        <h1
            class="text-primary-600 dark:text-primary-400 mb-3 text-2xl !leading-tight font-bold sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl"
        >
            Pricing That Makes Sense
        </h1>

        <div class="mx-auto mb-4 max-w-3xl space-y-3 md:mb-6 md:space-y-4">
            <h3
                class="text-surface-800 dark:text-surface-200 text-sm leading-relaxed font-light md:text-base"
            >
                No hidden fees. No student discounts needed.
                <br />
                Just honest pricing designed around real academic budgets.
            </h3>

            <p
                class="text-surface-600 dark:text-surface-400 text-xs leading-relaxed md:text-sm"
            >
                <strong>Our Philosophy:</strong> Essential academic tools should
                be free. Premium features should be affordable. Institutions should
                get enterprise-level flexibility.
            </p>
        </div>

        <div
            class="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium md:px-4 md:py-2 md:text-sm"
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
            Student-First Pricing
        </div>
    </header>

    <!-- Pricing Philosophy -->
    <section class="mb-10 md:mb-12 lg:mb-16">
        <div
            class="card from-secondary-50/50 to-surface-50/50 dark:from-secondary-950/10 dark:to-surface-900/20 border-secondary-200/50 dark:border-secondary-800/50 mx-auto max-w-4xl border bg-gradient-to-br p-4 md:p-6 lg:p-8"
        >
            <div class="grid gap-6 md:grid-cols-3 md:gap-8">
                <div class="text-center">
                    <div
                        class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg md:mb-4 md:h-12 md:w-12"
                    >
                        <DollarSign
                            class="text-primary-600 dark:text-primary-400 h-5 w-5 md:h-6 md:w-6"
                        />
                    </div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 mb-1.5 text-sm font-semibold md:mb-2 md:text-base"
                    >
                        Transparent Always
                    </h3>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed md:text-sm"
                    >
                        What you see is what you pay. No surprise charges or
                        hidden premium features.
                    </p>
                </div>

                <div class="text-center">
                    <div
                        class="bg-secondary-100 dark:bg-secondary-900/30 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg md:mb-4 md:h-12 md:w-12"
                    >
                        <Heart
                            class="text-secondary-600 dark:text-secondary-400 h-5 w-5 md:h-6 md:w-6"
                        />
                    </div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 mb-1.5 text-sm font-semibold md:mb-2 md:text-base"
                    >
                        Student Budget Friendly
                    </h3>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed md:text-sm"
                    >
                        Pro features cost less than a monthly coffee habit,
                        because education shouldn't break the bank.
                    </p>
                </div>

                <div class="text-center">
                    <div
                        class="bg-tertiary-100 dark:bg-tertiary-900/30 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg md:mb-4 md:h-12 md:w-12"
                    >
                        <span
                            class="text-tertiary-600 dark:text-tertiary-400 text-base font-bold md:text-lg"
                            >∞</span
                        >
                    </div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 mb-1.5 text-sm font-semibold md:mb-2 md:text-base"
                    >
                        Scale When Ready
                    </h3>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed md:text-sm"
                    >
                        Start free, upgrade when you need more, or host it
                        yourself for complete control.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Plans -->
    <section class="mb-10 md:mb-12 lg:mb-16">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-1.5 text-center text-lg font-bold md:mb-2 md:text-xl lg:text-2xl"
        >
            Choose Your Plan
        </h2>
        <p
            class="text-surface-600 dark:text-surface-400 mb-8 text-center text-xs leading-relaxed md:mb-10 md:text-sm lg:mb-12"
        >
            All plans include our core academic features. Upgrade for enhanced
            capabilities and to support development.
        </p>

        <div class="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-3 lg:gap-8">
            {#each pricingPlans as plan (plan.id)}
                <PricingCard {plan} />
            {/each}
        </div>
    </section>

    <!-- Disclaimer -->
    <section class="mb-10 md:mb-12 lg:mb-16">
        <div
            class="card bg-warning-50 dark:bg-warning-950/20 border-warning-200 dark:border-warning-800 border p-4 md:p-6"
        >
            <div class="flex items-start gap-2.5 md:gap-3">
                <div
                    class="bg-warning-200 dark:bg-warning-800 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full md:h-6 md:w-6"
                >
                    <span
                        class="text-warning-700 dark:text-warning-300 text-xs font-bold"
                        >!</span
                    >
                </div>
                <div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 mb-1.5 text-sm font-semibold md:mb-2 md:text-base"
                    >
                        Development Pricing
                    </h3>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed md:text-sm"
                    >
                        These plans represent our current vision. Final
                        features, storage limits, and pricing may evolve as we
                        develop and refine Axonotes based on community feedback.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Self-Hosted Section -->
    <SelfHostingSection />

    <!-- FAQ Preview -->
    <section class="mt-12 text-center md:mt-16 lg:mt-20">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-3 text-lg font-bold md:mb-4 md:text-xl lg:text-2xl"
        >
            Questions About Pricing?
        </h2>
        <p
            class="text-surface-700 dark:text-surface-300 mx-auto mb-4 max-w-2xl text-xs leading-relaxed md:mb-6 md:text-sm"
        >
            We're building Axonotes with transparency in mind. Have questions
            about our pricing model or need a custom solution?
        </p>
        <div class="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
                href="mailto:info@axonotes.ch"
                class="btn preset-outlined-primary-500 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium md:px-6 md:py-3 md:text-base"
            >
                Contact Us
            </a>
            <a
                href="/community"
                class="btn preset-outlined-secondary-500 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium md:px-6 md:py-3 md:text-base"
            >
                <span class="hidden sm:inline">Join Community Discussion</span>
                <span class="sm:hidden">Join Community</span>
            </a>
        </div>
    </section>
</div>
