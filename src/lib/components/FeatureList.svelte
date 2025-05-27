<script lang="ts">
    import {Check} from "@lucide/svelte";

    interface Props {
        features: string[];
    }

    let {features}: Props = $props();

    // Convert markdown-style bold text to HTML
    function parseFeature(feature: string): string {
        return feature.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }
</script>

<ul class="space-y-3 text-sm">
    {#each features as feature}
        <li class="flex items-start gap-3">
            <Check
                    class="h-5 w-5 text-primary-500 shrink-0 mt-0.5"
                    aria-hidden="true"
            />
            <span class="text-surface-700 dark:text-surface-200 leading-relaxed">
        {@html parseFeature(feature)}
      </span>
        </li>
    {/each}
</ul>
