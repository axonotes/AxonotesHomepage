<script lang="ts">
    import {dev} from "$app/environment";
    import {page} from "$app/state";
    import {AlertTriangle, Undo2} from "@lucide/svelte";
</script>

<svelte:head>
    <title>
        {page.status === 404 ? "Page Not Found" : "Error"} - Axonotes
    </title>
    <meta charset="utf-8" />
    <meta
        name="description"
        content={page.status === 404
            ? "The page you were looking for could not be found."
            : "An unexpected error occurred."}
    />
</svelte:head>

<div
    class="container mx-auto flex min-h-[75vh] flex-col items-center justify-center px-4 py-12 text-center md:px-6"
>
    <img
        src="/page-not-found.png"
        alt="An illustration indicating a page could not be found."
        class="mb-8 h-auto w-full max-w-xs md:max-w-sm"
    />

    {#if page.status === 404}
        <h1
            class="text-primary-600 dark:text-primary-400 mb-4 text-4xl !leading-tight font-bold md:text-5xl lg:text-6xl"
        >
            Page Not Found
        </h1>
        <p
            class="text-surface-700 dark:text-surface-300 mx-auto mb-2 max-w-xl text-lg md:text-xl"
        >
            We've searched these waters high and wide...
        </p>
        <p
            class="text-surface-600 dark:text-surface-400 mx-auto mb-8 max-w-xl md:text-lg"
        >
            but it seems this page has swam away. Let's go back and try a
            different path.
        </p>
    {:else}
        <h1
            class="text-warning-600 dark:text-warning-400 mb-4 text-4xl !leading-tight font-bold md:text-5xl lg:text-6xl"
        >
            Oops! An Error Occurred
        </h1>
        <p
            class="text-surface-700 dark:text-surface-300 mx-auto mb-8 max-w-xl text-lg md:text-xl"
        >
            We're sorry, but something went wrong on our end. Our team has been
            notified and is looking into it.
        </p>
    {/if}

    <a
        href="/"
        class="btn dark:preset-tonal-primary preset-filled-primary-500 inline-flex items-center justify-center gap-2 text-base text-white"
    >
        <Undo2 class="h-4 w-4" />
        Go Back Home
    </a>

    {#if dev && page.error?.message}
        <div
            class="border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50 mt-12 w-full max-w-2xl rounded-lg border p-4 text-left"
        >
            <p
                class="text-surface-800 dark:text-surface-200 mb-2 flex items-center gap-2 text-sm font-bold"
            >
                <AlertTriangle class="text-warning-500 h-4 w-4" />
                Developer Log (Visible in 'dev' mode only)
            </p>
            <pre
                class="text-error-600 dark:text-error-400 font-mono text-xs whitespace-pre-wrap"><code
                    >{page.error.message}</code
                ></pre>
        </div>
    {/if}
</div>
