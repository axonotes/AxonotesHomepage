<script lang="ts">
    import {ParaglideJS} from "@inlang/paraglide-sveltekit";
    import {i18n} from "$lib/i18n";
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import LanguageSwitcher from "$lib/components/LanguageSwitcher.svelte";
    import {onMount} from "svelte";
    import {browser} from "$app/environment";
    import * as m from "$lib/paraglide/messages.js";

    const {children} = $props();

    onMount(() => {
        if (browser) {
            const script = document.createElement("script");
            script.defer = true;
            script.setAttribute("data-domain", window.location.hostname);
            script.src =
                "https://plausible.axonotes.ch/js/script.outbound-links.js";
            document.head.appendChild(script);
        }
    });
</script>

<ParaglideJS {i18n}>
    <div class="bg-surface-50 dark:bg-surface-950 flex min-h-screen flex-col">
        <Navbar />

        <main id="main-content" class="flex-1 pb-20">
            {@render children()}
        </main>

        <footer
            class="border-surface-200 dark:border-surface-700 bg-[var(--anchor-font-color)] dark:bg-primary-800/80 border-t py-8"
        >
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    class="flex flex-col items-center justify-between gap-6 sm:flex-row"
                >
                    <!-- Logo & Tagline -->
                    <div
                        class="text-white dark:text-white flex items-center gap-2 text-sm font-medium"
                    >
                        <img
                            src="/favicon.svg"
                            alt={m.footer_logo_alt()}
                            class="h-5 w-5"
                        />
                        <span>{m.footer_tagline()}</span>
                    </div>
                    <LanguageSwitcher />
                </div>

                <div>
                    <div class="border-b-2 border-white pb-5 pt-5 mb-7">
                         <div class="text-white dark:text-white flex items-center gap-2 text-lg font-bold">
                            <img
                                src="/favicon.svg"
                                alt={m.nav_logo_alt()}
                                class="h-20 w-20"
                            />
                            <h1 class="text-4xl font-bold">{m.nav_logo_text()}</h1>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-center justify-between gap-5">
                        <div class="text-white dark:text-white flex flex-wrap items-center gap-x-6 gap-y-4 text-xs">
                            <a
                                href="/legal/imprint"
                                class="hover:underline transition-colors"
                            >
                                {m.footer_link_imprint()}
                            </a>
                            <a
                                href="/legal/privacy-policy"
                                class="hover:underline transition-colors"
                            >
                                {m.footer_link_privacyPolicy()}
                            </a>
                        </div>
                        <div class="flex items-center gap-5">
                            <a href="https://discord.com/invite/your-invite-code">
                                <img src="/discord-dark.svg" alt={m.footer_logo_alt()} class="h-5 w-5" />
                            </a>
                            <a href="https://github.com/your-repo">
                                <img src="/github-dark.svg" alt={m.footer_logo_alt()} class="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                    <div class="mt-2 text-white">
                        <span class="text-xs">
                            {m.footer_copyright({
                                year: new Date().getFullYear(),
                            })}
                        </span>
                    </div>        
                </div>
            </div>
        </footer>
    </div>
</ParaglideJS>
