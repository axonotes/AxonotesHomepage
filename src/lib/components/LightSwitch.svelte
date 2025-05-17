<script lang="ts">
    import {Moon, Sun} from "@lucide/svelte";

    let checked = $state(false);

    $effect(() => {
        const mode = localStorage.getItem('mode') || 'light';
        checked = mode === 'dark';
    });

    interface CheckedChangeEvent {
        checked: boolean;
    }

    const onCheckedChange = (event: CheckedChangeEvent) => {
        const mode = event.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-mode', mode);
        try {
            localStorage.setItem('mode', mode);
        } catch (error) {
            console.warn('Unable to save mode to localStorage:', error);
        }
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