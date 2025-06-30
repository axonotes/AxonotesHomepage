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
            class="border-surface-200 dark:border-surface-700 bg-surface-100/50 dark:bg-surface-900/50 border-t py-8"
        >
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    class="flex flex-col items-center justify-between gap-6 sm:flex-row"
                >
                    <!-- Logo & Tagline -->
                    <div
                        class="text-primary-600 dark:text-primary-400 flex items-center gap-2 text-sm font-medium"
                    >
                        <img
                            src="/favicon.svg"
                            alt={m.footer_logo_alt()}
                            class="h-5 w-5"
                        />
                        <span>{m.footer_tagline()}</span>
                    </div>

                    <!-- Links & Controls -->
                    <div
                        class="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm"
                    >
                        <a
                            href="/legal/imprint"
                            class="text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                            {m.footer_link_imprint()}
                        </a>
                        <a
                            href="/legal/privacy-policy"
                            class="text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                            {m.footer_link_privacyPolicy()}
                        </a>
                        <a
                            href="https://github.com/axonotes/AxonotesCore"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                            {m.footer_link_github()}
                        </a>
                        <a
                            href="https://discord.gg/myBMaaDeQu"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                            {m.footer_link_discord()}
                        </a>
                        <!-- Dezenter, aber funktionaler Language Switcher -->
                        <LanguageSwitcher />
                    </div>
                </div>

                <!-- Copyright -->
                <div
                    class="border-surface-200 dark:border-surface-700 mt-6 border-t pt-4 text-center"
                >
                    <span
                        class="text-surface-500 dark:text-surface-500 text-xs"
                    >
                        {m.footer_copyright({
                            year: new Date().getFullYear(),
                        })}
                    </span>
                </div>
            </div>
        </footer>
    </div>
</ParaglideJS>
