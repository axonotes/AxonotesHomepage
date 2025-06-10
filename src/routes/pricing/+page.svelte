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
                "Support our mission while unlocking enhanced capabilities and helping shape the future of academic software.",
            features: [
                "10GB storage for extensive projects",
                "AI-powered study assistance",
                "Advanced collaboration features",
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

<div class="container mx-auto px-4 py-8">
    <!-- Header Section -->
    <header class="mb-16 text-center">
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
            Student-First Pricing
        </div>

        <h1
            class="text-primary-600 dark:text-primary-400 mb-4 text-3xl !leading-tight font-bold sm:text-4xl md:text-5xl"
        >
            Pricing That Makes Sense
        </h1>

        <div class="mx-auto max-w-3xl space-y-4">
            <h3
                class="text-surface-800 dark:text-surface-200 text-md font-light"
            >
                No hidden fees. No student discounts needed. Just honest pricing
                designed around real academic budgets.
            </h3>

            <p class="text-surface-600 dark:text-surface-400 text-sm">
                <strong>Our Philosophy:</strong> Essential academic tools should
                be free. Premium features should be affordable. Institutions should
                get enterprise-level flexibility.
            </p>
        </div>
    </header>

    <!-- Pricing Philosophy -->
    <section class="mb-16">
        <div
            class="card from-secondary-50/50 to-surface-50/50 dark:from-secondary-950/10 dark:to-surface-900/20 border-secondary-200/50 dark:border-secondary-800/50 mx-auto max-w-4xl border bg-gradient-to-br p-8"
        >
            <div class="grid gap-8 md:grid-cols-3">
                <div class="text-center">
                    <div
                        class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                    >
                        <DollarSign
                            class="text-primary-600 dark:text-primary-400 h-6 w-6"
                        />
                    </div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                    >
                        Transparent Always
                    </h3>
                    <p class="text-surface-700 dark:text-surface-300 text-sm">
                        What you see is what you pay. No surprise charges or
                        hidden premium features.
                    </p>
                </div>

                <div class="text-center">
                    <div
                        class="bg-secondary-100 dark:bg-secondary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                    >
                        <Heart
                            class="text-secondary-600 dark:text-secondary-400 h-6 w-6"
                        />
                    </div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                    >
                        Student Budget Friendly
                    </h3>
                    <p class="text-surface-700 dark:text-surface-300 text-sm">
                        Pro features cost less than a monthly coffee habit,
                        because education shouldn't break the bank.
                    </p>
                </div>

                <div class="text-center">
                    <div
                        class="bg-tertiary-100 dark:bg-tertiary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                    >
                        <span
                            class="text-tertiary-600 dark:text-tertiary-400 text-lg font-bold"
                            >∞</span
                        >
                    </div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                    >
                        Scale When Ready
                    </h3>
                    <p class="text-surface-700 dark:text-surface-300 text-sm">
                        Start free, upgrade when you need more, or host it
                        yourself for complete control.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Plans -->
    <section class="mb-16">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-2 text-center text-xl font-bold md:text-2xl"
        >
            Choose Your Plan
        </h2>
        <p
            class="text-surface-600 dark:text-surface-400 mb-12 text-center text-sm"
        >
            All plans include our core academic features. Upgrade for enhanced
            capabilities and to support development.
        </p>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {#each pricingPlans as plan (plan.id)}
                <PricingCard {plan} />
            {/each}
        </div>
    </section>

    <!-- Disclaimer -->
    <section class="mb-16">
        <div
            class="card bg-warning-50 dark:bg-warning-950/20 border-warning-200 dark:border-warning-800 border p-6"
        >
            <div class="flex items-start gap-3">
                <div
                    class="bg-warning-200 dark:bg-warning-800 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                >
                    <span
                        class="text-warning-700 dark:text-warning-300 text-xs font-bold"
                        >!</span
                    >
                </div>
                <div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                    >
                        Development Pricing
                    </h3>
                    <p class="text-surface-700 dark:text-surface-300 text-sm">
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
    <section class="text-center">
        <h2
            class="text-surface-900 dark:text-surface-100 mb-4 text-xl font-bold md:text-2xl"
        >
            Questions About Pricing?
        </h2>
        <p
            class="text-surface-700 dark:text-surface-300 mx-auto mb-6 max-w-2xl"
        >
            We're building Axonotes with transparency in mind. Have questions
            about our pricing model or need a custom solution?
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <a
                href="mailto:hello@axonotes.ch"
                class="btn preset-outlined-primary-500 inline-flex items-center gap-2"
            >
                Contact Us
            </a>
            <a
                href="/community"
                class="btn preset-outlined-secondary-500 inline-flex items-center gap-2"
            >
                Join Community Discussion
            </a>
        </div>
    </section>
</div>
