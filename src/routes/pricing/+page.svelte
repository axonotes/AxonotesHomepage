<script lang="ts">
    import PricingCard from "$lib/components/PricingCard.svelte";
    import SelfHostingSection from "$lib/components/SelfHostingSection.svelte";
    import {Heart, DollarSign} from "@lucide/svelte";
    import type {PricingPlan} from "$lib/types/pricing.js";
    import * as m from "$lib/paraglide/messages.js";

    let heartClicked = $state(false);

    // Reconstruct the structured data from the flat message strings
    const pricingPlans: PricingPlan[] = [
        {
            id: "free",
            name: m.pricing_plan_free_name(),
            price: m.pricing_plan_free_price(),
            description: m.pricing_plan_free_description(),
            features: [
                m.pricing_plan_free_feature_1(),
                m.pricing_plan_free_feature_2(),
                m.pricing_plan_free_feature_3(),
                m.pricing_plan_free_feature_4(),
                m.pricing_plan_free_feature_5(),
            ],
            cta: {
                text: m.pricing_plan_cta_comingSoon(),
                disabled: true,
            },
            variant: "default",
        },
        {
            id: "pro",
            name: m.pricing_plan_pro_name(),
            price: "$8", // Price is hardcoded, if it needs to be localized, it should also come from messages.
            priceUnit: m.pricing_plan_pro_priceUnit(),
            description: m.pricing_plan_pro_description(),
            features: [
                m.pricing_plan_pro_feature_1(),
                m.pricing_plan_pro_feature_2(),
                m.pricing_plan_pro_feature_3(),
                m.pricing_plan_pro_feature_4(),
                m.pricing_plan_pro_feature_5(),
            ],
            cta: {
                text: m.pricing_plan_cta_comingSoon(),
                disabled: true,
            },
            variant: "featured",
        },
        {
            id: "institutional",
            name: m.pricing_plan_institutional_name(),
            price: m.pricing_plan_institutional_price(),
            description: m.pricing_plan_institutional_description(),
            features: [
                m.pricing_plan_institutional_feature_1(),
                m.pricing_plan_institutional_feature_2(),
                m.pricing_plan_institutional_feature_3(),
                m.pricing_plan_institutional_feature_4(),
                m.pricing_plan_institutional_feature_5(),
                m.pricing_plan_institutional_feature_6(),
            ],
            cta: {
                text: m.pricing_plan_cta_contactUs(),
                disabled: true,
            },
            variant: "default",
        },
    ];
</script>

<svelte:head>
    <title>{m.pricing_meta_title()}</title>
    <meta name="description" content={m.pricing_meta_description()} />
</svelte:head>

<div class="container mx-auto px-4 py-6 md:py-8">
    <!-- Header Section -->
    <header class="mb-10 text-center md:mb-12 lg:mb-16">
        <h1
            class="text-primary-600 dark:text-primary-400 mb-3 text-2xl !leading-tight font-bold sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl"
        >
            {m.pricing_header_title()}
        </h1>

        <div class="mx-auto mb-4 max-w-3xl space-y-3 md:mb-6 md:space-y-4">
            <h3
                class="text-surface-800 dark:text-surface-200 text-sm leading-relaxed font-light md:text-base"
            >
                {m.pricing_header_subtitle_line1()}
                <br />
                {m.pricing_header_subtitle_line2()}
            </h3>

            <p
                class="text-surface-600 dark:text-surface-400 text-xs leading-relaxed md:text-sm"
            >
                <strong>{m.pricing_header_philosophy_strong()}</strong>
                {m.pricing_header_philosophy_text()}
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
            {m.pricing_header_badge()}
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
                        {m.pricing_philosophy_transparent_title()}
                    </h3>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed md:text-sm"
                    >
                        {m.pricing_philosophy_transparent_description()}
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
                        {m.pricing_philosophy_budgetFriendly_title()}
                    </h3>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed md:text-sm"
                    >
                        {m.pricing_philosophy_budgetFriendly_description()}
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
                        {m.pricing_philosophy_scale_title()}
                    </h3>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed md:text-sm"
                    >
                        {m.pricing_philosophy_scale_description()}
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
            {m.pricing_plans_title()}
        </h2>
        <p
            class="text-surface-600 dark:text-surface-400 mb-8 text-center text-xs leading-relaxed md:mb-10 md:text-sm lg:mb-12"
        >
            {m.pricing_plans_description()}
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
                        {m.pricing_disclaimer_title()}
                    </h3>
                    <p
                        class="text-surface-700 dark:text-surface-300 text-xs leading-relaxed md:text-sm"
                    >
                        {m.pricing_disclaimer_description()}
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
            {m.pricing_faq_title()}
        </h2>
        <p
            class="text-surface-700 dark:text-surface-300 mx-auto mb-4 max-w-2xl text-xs leading-relaxed md:mb-6 md:text-sm"
        >
            {m.pricing_faq_description()}
        </p>
        <div class="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
                href="mailto:info@axonotes.ch"
                class="btn preset-outlined-primary-500 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium md:px-6 md:py-3 md:text-base"
            >
                {m.pricing_faq_cta_contact()}
            </a>
            <a
                href="/community"
                class="btn preset-outlined-secondary-500 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium md:px-6 md:py-3 md:text-base"
            >
                <span class="hidden sm:inline"
                    >{m.pricing_faq_cta_community_full()}</span
                >
                <span class="sm:hidden"
                    >{m.pricing_faq_cta_community_mobile()}</span
                >
            </a>
        </div>
    </section>
</div>
