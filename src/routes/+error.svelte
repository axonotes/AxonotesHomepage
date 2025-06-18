<script lang="ts">
    import {dev} from "$app/environment";
    import {page} from "$app/state";
    import {AlertTriangle, Undo2} from "@lucide/svelte";
    import * as m from "$lib/paraglide/messages.js";
</script>

<svelte:head>
    <title>
        {page.status === 404
            ? m.error_meta_title_404()
            : m.error_meta_title_generic()}
    </title>
    <meta charset="utf-8" />
    <meta
        name="description"
        content={page.status === 404
            ? m.error_meta_description_404()
            : m.error_meta_description_generic()}
    />
</svelte:head>

<div
    class="container mx-auto flex min-h-[75vh] flex-col items-center justify-center px-4 py-12 text-center md:px-6"
>
    <img
        src="/page-not-found.png"
        alt={m.error_image_alt()}
        class="mb-8 h-auto w-full max-w-xs md:max-w-sm"
    />

    {#if page.status === 404}
        <h1
            class="text-primary-600 dark:text-primary-400 mb-4 text-4xl !leading-tight font-bold md:text-5xl lg:text-6xl"
        >
            {m.error_404_title()}
        </h1>
        <p
            class="text-surface-700 dark:text-surface-300 mx-auto mb-2 max-w-xl text-lg md:text-xl"
        >
            {m.error_404_text_1()}
        </p>
        <p
            class="text-surface-600 dark:text-surface-400 mx-auto mb-8 max-w-xl md:text-lg"
        >
            {m.error_404_text_2()}
        </p>
    {:else}
        <h1
            class="text-warning-600 dark:text-warning-400 mb-4 text-4xl !leading-tight font-bold md:text-5xl lg:text-6xl"
        >
            {m.error_generic_title()}
        </h1>
        <p
            class="text-surface-700 dark:text-surface-300 mx-auto mb-8 max-w-xl text-lg md:text-xl"
        >
            {m.error_generic_description()}
        </p>
    {/if}

    <a
        href="/"
        class="btn dark:preset-tonal-primary preset-filled-primary-500 inline-flex items-center justify-center gap-2 text-base text-white"
    >
        <Undo2 class="h-4 w-4" />
        {m.error_backHome_button()}
    </a>

    {#if dev && page.error?.message}
        <div
            class="border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50 mt-12 w-full max-w-2xl rounded-lg border p-4 text-left"
        >
            <p
                class="text-surface-800 dark:text-surface-200 mb-2 flex items-center gap-2 text-sm font-bold"
            >
                <AlertTriangle class="text-warning-500 h-4 w-4" />
                {m.error_devLog_title()}
            </p>
            <pre
                class="text-error-600 dark:text-error-400 font-mono text-xs whitespace-pre-wrap"><code
                    >{page.error.message}</code
                ></pre>
        </div>
    {/if}
</div>
