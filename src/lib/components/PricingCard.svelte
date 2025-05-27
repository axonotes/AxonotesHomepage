<script lang="ts">
    import type {PricingPlan} from '$lib/types/pricing.js';
    import FeatureList from "$lib/components/FeatureList.svelte";

    interface Props {
        plan: PricingPlan;
    }

    let {plan}: Props = $props();

    const cardVariants = {
        default: {
            container:
                'card bg-surface-50 dark:bg-surface-800/20 border border-surface-200 dark:border-surface-700',
            title: 'text-primary-600 dark:text-primary-400',
            button: 'btn preset-outlined-primary-500'
        },
        featured: {
            container:
                'card bg-primary-50 dark:bg-primary-700/20 border-2 border-primary-500 dark:border-primary-500 relative ring-2 ring-primary-500/20',
            title: 'text-primary-700 dark:text-primary-300',
            button: 'btn preset-outlined-secondary-500'
        }
    };

    const variant = cardVariants[plan.variant];
</script>

<article class="flex flex-col {variant.container} p-6 h-full">
    <div class="flex-grow">
        <header class="mb-6">
            <h3 class="h3 {variant.title} mb-2">
                {plan.name}
            </h3>
            <div class="flex items-baseline gap-1 mb-3">
        <span class="text-3xl font-bold text-surface-900 dark:text-surface-100">
          {plan.price}
        </span>
                {#if plan.priceUnit}
          <span
                  class="text-sm font-normal text-surface-600 dark:text-surface-400"
          >
            {plan.priceUnit}
          </span>
                {/if}
            </div>
            <p class="text-sm text-surface-800 dark:text-surface-200 leading-relaxed">
                {plan.description}
            </p>
        </header>

        <FeatureList features={plan.features}/>
    </div>

    <footer class="mt-8">
        {#if plan.cta.href}
            <a
                    href={plan.cta.href}
                    class="btn preset-filled-primary-500 w-full"
                    target="_blank"
                    rel="noopener noreferrer"
            >
                {plan.cta.text}
            </a>
        {:else}
            <button
                    disabled={plan.cta.disabled}
                    type="button"
                    class="btn {plan.cta.disabled
          ? 'opacity-60 cursor-not-allowed'
          : variant.button} w-full"
            >
                {plan.cta.text}
            </button>
        {/if}
    </footer>
</article>
