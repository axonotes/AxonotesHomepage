<script lang="ts">
    import {Switch} from '@skeletonlabs/skeleton-svelte';
    import {Moon, Sun} from "@lucide/svelte";

    let checked = $state(false);

    $effect(() => {
        const mode = localStorage.getItem('mode') || 'light';
        checked = mode === 'dark';
    });

    const onCheckedChange = (event: { checked: boolean }) => {
        const mode = event.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-mode', mode);
        localStorage.setItem('mode', mode);
        checked = event.checked;
    };
</script>

<svelte:head>
    <script>
        const mode = localStorage.getItem('mode') || 'light';
        document.documentElement.setAttribute('data-mode', mode);
    </script>
</svelte:head>

<div class="relative">
    {#if checked}
        <button type="button" class="btn-icon preset-filled scheme-light" onclick={() => onCheckedChange({checked: false})}>
            <Sun/>
        </button>
    {:else}
        <button type="button" class="btn-icon preset-filled scheme-dark" onclick={() => onCheckedChange({checked: true})}>
            <Moon/>
        </button>
    {/if}
</div>