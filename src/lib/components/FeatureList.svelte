<script lang="ts">
    import {Check} from "@lucide/svelte";

    interface Props {
        features: string[];
    }

    let {features}: Props = $props();
</script>

<ul class="space-y-3 text-sm">
    {#each features as feature (feature)}
        <li class="flex items-start gap-3">
            <Check
                class="text-primary-500 mt-0.5 h-5 w-5 shrink-0"
                aria-hidden="true"
            />
            <span
                class="text-surface-700 dark:text-surface-200 leading-relaxed"
            >
                {feature}
            </span>
        </li>
    {/each}
</ul>
