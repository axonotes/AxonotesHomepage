<script lang="ts">
    import PricingCard from "$lib/components/PricingCard.svelte";
    import SelfHostingSection from "$lib/components/SelfHostingSection.svelte";
    import type {PricingPlan} from "$lib/types/pricing.js";

    const pricingPlans: PricingPlan[] = [
        {
            id: "free",
            name: "Free Tier",
            price: "Free",
            description:
                "Perfect for individual use, students, and anyone wanting to explore the core of Axonotes, with everything you need.",
            features: [
                "Targeting 1GB of storage",
                "Enough for thousands of documents & notes",
                "Core note-taking, organization, and learning tools",
                "Everything essential for students and individual learners",
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
                "Support Axonotes' development and unlock valuable extras like more storage, AI, and personalization.",
            features: [
                "Aiming for 10GB of storage",
                "Enhanced capabilities (e.g., AI Assistance)",
                "Exclusive personalization options (themes, profiles - planned)",
                "All Free Tier features",
                "Directly support Axonotes' ongoing development & mission",
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
                "Tailored solutions for schools, universities, and educational organizations. Let's empower your institution.",
            features: [
                "Manage student and teacher accounts seamlessly",
                "Pro-level benefits for all managed users",
                "Dedicated support & flexible deployment options",
                "Customized onboarding and training (planned)",
            ],
            cta: {
                text: "Coming Soon",
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
        content="Discover Axonotes pricing plans: transparent, accessible, and designed for everyone from individual students to educational institutions."
    />
</svelte:head>

<div class="container mx-auto px-4 py-8">
    <!-- Header Section -->
    <header class="mb-12 text-center md:mb-16">
        <h1
            class="text-primary-600 dark:text-primary-400 mb-4 text-4xl !leading-tight font-bold sm:text-5xl"
        >
            Axonotes Pricing
        </h1>
        <h3
            class="text-surface-800 dark:text-surface-200 mx-auto mb-3 max-w-2xl text-lg font-light"
        >
            Discover our planned pricing: transparent, accessible, and designed
            for everyone from individual students to educational institutions.
        </h3>
    </header>

    <!-- Pricing Plans Grid -->
    <section class="mb-16 md:mb-20">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {#each pricingPlans as plan (plan.id)}
                <PricingCard {plan} />
            {/each}
        </div>

        <p
            class="text-surface-800 dark:text-surface-200 mx-auto mt-8 max-w-2xl text-sm"
        >
            <strong>Please note:</strong> The plans outlined are our current aspirations.
            Specific features, storage limits, and pricing are subject to change
            as we continue to develop and refine Axonotes.
        </p>
    </section>

    <!-- Self-Hosted Section -->
    <SelfHostingSection />
</div>
