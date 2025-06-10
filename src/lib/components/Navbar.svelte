<script lang="ts">
    import { page } from "$app/state";
    import LightSwitch from "$lib/components/LightSwitch.svelte";
    import { X, Menu } from "@lucide/svelte";
    import { Modal } from "@skeletonlabs/skeleton-svelte";

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/features", label: "Features" },
        { href: "/about", label: "About" },
        { href: "/community", label: "Community" },
        { href: "/pricing", label: "Pricing" },
    ];

    let isMobileMenuOpen = $state(false);

    function closeMobileMenu() {
        isMobileMenuOpen = false;
    }

    function isCurrentPage(href: string): boolean {
        return page.url.pathname === href;
    }
</script>

<nav
        class="border-surface-200/50 dark:border-surface-700/50 bg-surface-50/80 dark:bg-surface-950/80 sticky top-0 z-50 border-b backdrop-blur-md"
        aria-label="Main navigation"
>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
            <!-- Logo/Brand -->
            <a
                    href="/"
                    class="text-primary-600 dark:text-primary-400 flex items-center gap-3 text-xl font-bold transition-opacity hover:opacity-80"
            >
                <img
                        src="/favicon.png"
                        alt="Axonotes"
                        class="h-8 w-8"
                        loading="eager"
                />
                <span class="hidden sm:block">Axonotes</span>
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden items-center gap-8 md:flex">
                <ul class="flex items-center gap-1">
                    {#each navLinks as link (link.href)}
                        <li>
                            <a
                                    href={link.href}
                                    class="text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg px-3 py-2 text-sm font-medium transition-colors
                                       {isCurrentPage(link.href)
                                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50'
                                    : ''}"
                                    aria-current={isCurrentPage(link.href)
                                    ? "page"
                                    : undefined}
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
                        class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 hidden rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors focus:outline-none focus:ring-2 lg:block"
                >
                    Join Discord
                </a>

                <LightSwitch />
            </div>

            <!-- Mobile Controls -->
            <div class="flex items-center gap-3 md:hidden">
                <LightSwitch />
                <Modal
                        open={isMobileMenuOpen}
                        onOpenChange={(e) => (isMobileMenuOpen = e.open)}
                        triggerBase="text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg p-2 transition-colors"
                        contentBase="bg-surface-50 dark:bg-surface-950 fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] border-l border-surface-200 dark:border-surface-700 p-6 shadow-xl"
                        positionerJustify="justify-end"
                        positionerAlign=""
                        positionerPadding=""
                        transitionsPositionerIn={{ x: 320, duration: 250 }}
                        transitionsPositionerOut={{ x: 320, duration: 200 }}
                >
                    {#snippet trigger()}
                        <Menu class="h-6 w-6" />
                        <span class="sr-only">Open menu</span>
                    {/snippet}
                    {#snippet content()}
                        <div class="flex h-full flex-col">
                            <!-- Mobile Header -->
                            <div class="flex items-center justify-between pb-6">
                                <div
                                        class="text-primary-600 dark:text-primary-400 flex items-center gap-2 text-lg font-bold"
                                >
                                    <img
                                            src="/favicon.png"
                                            alt="Axonotes"
                                            class="h-6 w-6"
                                    />
                                    Axonotes
                                </div>
                                <button
                                        onclick={closeMobileMenu}
                                        class="text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg p-2 transition-colors"
                                        aria-label="Close menu"
                                >
                                    <X class="h-6 w-6" />
                                </button>
                            </div>

                            <!-- Mobile Navigation -->
                            <nav class="flex-1">
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
                            </nav>

                            <!-- Mobile CTA -->
                            <div class="border-surface-200 dark:border-surface-700 border-t pt-6">
                                <a
                                        href="https://discord.gg/myBMaaDeQu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onclick={closeMobileMenu}
                                        class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 block w-full rounded-lg px-4 py-3 text-center font-medium text-white transition-colors focus:outline-none focus:ring-2"
                                >
                                    Join Discord
                                </a>
                            </div>
                        </div>
                    {/snippet}
                </Modal>
            </div>
        </div>
    </div>
</nav>