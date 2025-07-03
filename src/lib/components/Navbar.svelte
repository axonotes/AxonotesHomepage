<script lang="ts">
    import {page} from "$app/state";
    import LightSwitch from "$lib/components/LightSwitch.svelte";
    import {X, Menu} from "@lucide/svelte";
    import {Modal} from "@skeletonlabs/skeleton-svelte";
    import * as m from "$lib/paraglide/messages.js";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    // Reconstruct the structured data from the flat message strings
    const navLinks = [
        {href: "/", label: m.nav_link_home()},
        {href: "/features", label: m.nav_link_features()},
        {href: "/about", label: m.nav_link_about()},
        {href: "/community", label: m.nav_link_community()},
        {href: "/pricing", label: m.nav_link_pricing()},
    ];

    let isMobileMenuOpen = $state(false);

    function closeMobileMenu() {
        isMobileMenuOpen = false;
    }

    function isCurrentPage(href: string): boolean {
        return page.url.pathname === href;
    }

    // Track if the page is scrolled
    const scrolled = writable(false);

    function handleScroll() {
        scrolled.set(window.scrollY > 200);
    }

    onMount(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<nav
    class="sticky top-4 z-50 rounded-4xl mx-4 lg:mx-25 backdrop-blur-xs transition-all
        { $scrolled ? 'bg-surface-100/80 dark:bg-surface-800/80' : 'bg-surface-50/80 dark:bg-surface-950/80' }"
    aria-label={m.nav_aria_label()}
>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
            <!-- Logo/Brand -->
            <a
                href="/"
                class="text-primary-600 dark:text-primary-400 flex items-center gap-3 text-xl font-bold transition-opacity hover:opacity-80"
            >
                <img
                    src="/favicon.svg"
                    alt={m.nav_logo_alt()}
                    class="h-8 w-8"
                    loading="eager"
                />
                <span>{m.nav_logo_text()}</span>
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden items-center gap-8 md:flex">
                <ul class="flex items-center gap-1">
                    {#each navLinks as link (link.href)}
                        <li>
                            <a
                                href={link.href}
                                class="text-surface-800 dark:text-surface-200 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg px-3 py-2 text-sm font-medium transition-colors
                                       {isCurrentPage(link.href) ? 'bg-primary-200/80 dark:bg-primary-800/80' : ''}"
                                aria-current={isCurrentPage(link.href) ? "page" : undefined}
                            >
                                {link.label}
                            </a>
                        </li>
                    {/each}
                </ul>

                <!-- Primary CTA -->
                <a
                    href="https://discord.gg/myBMaaDeQu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 hidden rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors focus:ring-2 focus:outline-none lg:block"
                >
                    {m.nav_cta_discord()}
                </a>

                <LightSwitch />
            </div>

            <!-- Mobile Controls -->
            <div class="flex items-center gap-3 md:hidden">
                <Modal
                    open={isMobileMenuOpen}
                    onOpenChange={(e) => (isMobileMenuOpen = e.open)}
                    triggerBase="text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg p-2 transition-colors"
                    contentBase="bg-surface-50 dark:bg-surface-950 fixed inset-y-0 right-0 z-50 w-full h-full border-l border-surface-200 dark:border-surface-700 p-6 shadow-xl"
                    positionerJustify="justify-end"
                    positionerAlign=""
                    positionerPadding=""
                    transitionsPositionerIn={{y: -200, duration: 250}}
                    transitionsPositionerOut={{y: -200, duration: 200}}
                >
                    {#snippet trigger()}
                        <Menu class="h-6 w-6" />
                        <span class="sr-only">{m.nav_mobile_openMenu_sr()}</span
                        >
                    {/snippet}
                    {#snippet content()}
                        <div class="flex items-center h-full flex-col">
                            <!-- Mobile Header -->
                            <div class="w-[90vw] flex items-center justify-between pb-4 mb-6 border-b border-surface-200 dark:border-surface-700">
                                <div
                                    class="px-4 py-2 text-primary-600 dark:text-primary-400 flex items-center gap-2 text-lg font-bold"
                                >
                                    <img
                                        src="/favicon.svg"
                                        alt={m.nav_logo_alt()}
                                        class="h-8 w-8"
                                    />
                                    <h1 class="text-lg font-bold">{m.nav_logo_text()}</h1>
                                </div>
                                <button
                                    onclick={closeMobileMenu}
                                    class="text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                    aria-label={m.nav_mobile_closeMenu_aria()}
                                >
                                    <X class="h-8 w-8" />
                                </button>
                            </div>

                            <!-- Mobile Navigation -->
                            <nav class="flex-1 w-[80vw]">
                                <ul class="space-y-2">
                                    {#each navLinks as link (link.href)}
                                        <li>
                                            <a
                                                href={link.href}
                                                onclick={closeMobileMenu}
                                                class="text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-surface-100 dark:hover:bg-surface-800 block rounded-lg px-4 py-3 font-medium transition-colors
                                                       {isCurrentPage(link.href)
                                                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50'
                                                    : ''}"
                                                aria-current={isCurrentPage(
                                                    link.href
                                                )
                                                    ? "page"
                                                    : undefined}
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    {/each}
                                </ul>
                                <LightSwitch />
                            </nav>

                            <!-- Mobile CTA -->
                            <div
                                class="w-[80vw] mt-6 flex items-center justify-center"
                            >
                                <a
                                    href="https://discord.gg/myBMaaDeQu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onclick={closeMobileMenu}
                                    class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 block w-full rounded-lg px-4 py-3 text-center font-medium text-white transition-colors focus:ring-2 focus:outline-none"
                                >
                                    {m.nav_cta_discord()}
                                </a>
                            </div>
                        </div>
                    {/snippet}
                </Modal>
            </div>
        </div>
    </div>
</nav>
