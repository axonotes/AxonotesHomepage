<script lang="ts">
    import type {PageData} from './$types';
    import {onMount} from "svelte";

    export let data: PageData;

    onMount(() => {
        if (data.error) {
            console.error(data.error);
        }
    })

    function truncate(str: string | null, length: number) {
        if (str === null) {
            return '';
        }

        if (str.length > length) {
            return str.substring(0, length) + '...';
        }
        return str;
    }
</script>

<div class="text-center mb-8">
    <h2 class="text-3xl">Axonotes Features</h2>
    <p class="font-light">This page shows features that are planed for Axonotes</p>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {#each data.features as feature}
        {@const truncated_description = truncate(feature.short_description, 150)}
        <a href={feature.url} class="p-4 border rounded-md border-primary-500 m-2 relative">
            <div class="flex flex-col justify-between h-full">
                <div>
                    <p>{feature.name}</p>
                    <p class="text-sm text-gray-500 mt-2">{truncated_description}</p>
                </div>
                <p class="text-primary-500 underline text-sm mt-4">read more</p>
            </div>
            <div class="absolute bottom-0 right-0 p-4">
                <span class="badge">
                    👍 {feature.upvotes}
                </span>
            </div>
        </a>
    {/each}
</div>