<script lang="ts">
    import type {PageData} from './$types';

    export let data: PageData;
</script>

<div class="text-center mb-8">
    <h2 class="text-3xl">Axonotes Features</h2>
    <p class="font-light">This page shows features that are planed for Axonotes</p>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {#each data.features as feature}
        <a href={feature.url} class="p-4 border rounded-md border-primary-500">
            <p>{feature.name}</p>
            <div class="w-full flex justify-end">
                <span class="badge">
                    👍 {feature.upvotes}
                </span>
            </div>
        </a>
    {/each}
</div>