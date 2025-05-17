<script lang="ts">
    import type {PageData} from './$types';

    export let data: PageData;
</script>

{#each data.features as feature}
    <p>{feature.name}</p>
{/each}