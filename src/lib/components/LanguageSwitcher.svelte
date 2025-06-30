<script lang="ts">
    import {Popover} from "@skeletonlabs/skeleton-svelte";
    import {page} from "$app/state";
    import {
        availableLanguageTags,
        languageTag,
    } from "$lib/paraglide/runtime.js";
    import {i18n} from "$lib/i18n.js";
    import {Globe} from "@lucide/svelte";

    let open = $state(false);

    const languageDetails: Record<string, {name: string; short: string}> = {
        en: {name: "English", short: "en"},
        de: {name: "Deutsch", short: "de"},
    };

    function closePopover() {
        open = false;
    }
</script>

<Popover
    {open}
    onOpenChange={(e) => (open = e.open)}
    positioning={{placement: "top"}}
    triggerBase="w-4 h-4 flex items-center"
    closeOnEscape
>
    {#snippet trigger()}
        <Globe class="h-4 w-4" />
    {/snippet}

    {#snippet content()}
        <div class="card bg-surface-100-900 min-w-36 p-2 shadow-xl">
            <nav class="list-nav">
                <ul class="space-y-1">
                    {#each availableLanguageTags as lang}
                        {@const details = languageDetails[lang] || {
                            name: lang.toUpperCase(),
                            short: "🌐",
                        }}
                        {@const isActive = lang === languageTag()}
                        <li>
                            <a
                                href={i18n.route(page.url.pathname)}
                                hreflang={lang}
                                class="text-surface-900-100 flex items-center justify-between rounded-md px-2 py-1 hover:bg-primary-100-900 duration-200"
                                class:preset-filled-primary-300-700={isActive}
                                onclick={closePopover}
                                rel="alternate"
                                aria-current={isActive ? "page" : undefined}
                            >
                                <span class="flex-auto text-start"
                                    >{details.name}</span
                                >
                                <span class="font-light opacity-70"
                                    >{details.short}</span
                                >
                            </a>
                        </li>
                    {/each}
                </ul>
            </nav>
        </div>
    {/snippet}
</Popover>
