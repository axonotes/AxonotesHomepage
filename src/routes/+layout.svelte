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
            class="bg-surface-100/80 dark:bg-surface-800/80 backdrop-blur-xs rounded-4xl mx-4 py-6 lg:mx-25 mb-5"
        >
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    class="flex flex-col items-center justify-between gap-6 sm:flex-row"
                >
                    <!-- Logo & Tagline -->
                    <div
                        class="text-black dark:text-white flex items-center gap-2 text-sm font-medium"
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

                <div class="flex flex-col sm:flex-row justify-between gap-6 mt-8 text-black dark:text-white">
                    <div class="flex flex-col">
                        <h1 class="font-bold">{m.nav_link_features()}</h1>
                        <div>
                            <h2>1</h2>
                            <h2>2</h2>
                        </div>
                    </div>
                    <div>
                        <h1 class="font-bold">{m.nav_link_about()}</h1>
                        <div>
                            <h2>1</h2>
                            <h2>2</h2>
                        </div>
                    </div>
                    <div>
                        <h1 class="font-bold">{m.nav_link_community()}</h1>
                        <div>
                            <h2>1</h2>
                            <h2>2</h2>
                        </div>
                    </div>
                    <div>
                        <h1 class="font-bold">{m.nav_link_pricing()}</h1>
                        <div>
                            <h2>1</h2>
                            <h2>2</h2>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="border-b-2 border-white dark:border-white pb-5 pt-5 mb-7">
                         <div class="text-black dark:text-white flex items-center gap-2 text-lg font-bold">
                            <img
                                src="/favicon.svg"
                                alt={m.nav_logo_alt()}
                                class="h-20 w-20"
                            />
                            <h1 class="text-4xl font-bold">{m.nav_logo_text()}</h1>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-center justify-between gap-5">
                        <div class="text-black dark:text-white flex flex-wrap items-center gap-x-6 gap-y-4 text-xs">
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
                            <a href="https://discord.com/invite/your-invite-code" target="_blank" rel="noopener noreferrer">
                                <img src="/discord-dark.svg" alt={m.footer_logo_alt()} class="h-5 w-5 hidden dark:block" />
                                <img src="/discord.svg" alt={m.footer_logo_alt()} class="h-5 w-5 dark:hidden" />
                            </a>
                            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
                                <img src="/github-dark.svg" alt={m.footer_logo_alt()} class="h-5 w-5 hidden dark:block" />
                                <img src="/github.svg" alt={m.footer_logo_alt()} class="h-5 w-5 dark:hidden" />
                            </a>
                        </div>
                    </div>
                    <div class="mt-2 text-black dark:text-white">
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
