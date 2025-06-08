<script lang="ts">
    import {page} from "$app/state";
    import LightSwitch from "$lib/components/LightSwitch.svelte";
    import {X, Menu} from "@lucide/svelte";
    import {Modal} from "@skeletonlabs/skeleton-svelte";

    const navLinks = [
        {href: "/", label: "Home"},
        {href: "/about", label: "About"},
        {href: "/features", label: "Features"},
        {href: "/pricing", label: "Pricing"},
        {href: "/community", label: "Community"},
    ];

    let isMobileMenuOpen = $state(false);

    function closeMobileMenu() {
        isMobileMenuOpen = false;
    }
</script>

<nav
    class="bg-opacity-10 rounded-b-md shadow-md backdrop-blur-md backdrop-filter lg:m-2 lg:mt-0"
    aria-label="Main navigation"
>
    <div
        class="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8"
    >
        <!-- Logo/Brand -->
        <a
            href="/"
            class="text-primary-600 dark:text-primary-400 flex items-center text-2xl font-bold
                       transition-opacity hover:opacity-80"
        >
            <img src="/favicon.png" alt="logo" class="mr-2 max-h-10" />
            Axonotes
        </a>

        <!-- Desktop Navigation & LightSwitch -->
        <div class="hidden items-center space-x-4 md:flex">
            <ul class="flex space-x-1">
                {#each navLinks as link (link.id)}
                    <li>
                        <a
                            href={link.href}
                            class="rounded-md px-3 py-2 text-sm font-medium transition-colors
                                   {page.url.pathname === link.href
                                ? 'text-primary-600 dark:text-primary-400'
                                : ''}"
                            aria-current={page.url.pathname === link.href
                                ? "page"
                                : undefined}
                        >
                            {link.label}
                        </a>
                    </li>
                {/each}
            </ul>
            <LightSwitch />
        </div>

        <!-- Mobile Navigation & LightSwitch -->
        <div class="flex items-center space-x-2 md:hidden">
            <LightSwitch />
            <Modal
                open={isMobileMenuOpen}
                onOpenChange={(e) => (isMobileMenuOpen = e.open)}
                triggerBase="btn"
                contentBase="bg-surface-100-900 p-4 space-y-4 shadow-xl w-[80%] max-w-[300px] h-screen"
                positionerJustify="justify-end"
                positionerAlign=""
                positionerPadding=""
                transitionsPositionerIn={{x: 400, duration: 200}}
                transitionsPositionerOut={{x: 400, duration: 200}}
            >
                {#snippet trigger()}
                    <Menu />
                {/snippet}
                {#snippet content()}
                    <div>
                        <div class="flex w-full justify-end space-x-2">
                            <button
                                class="btn"
                                onclick={closeMobileMenu}
                                aria-label="Close mobile menu"
                            >
                                <X />
                            </button>
                        </div>
                        <ul class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                            {#each navLinks as link (link.id)}
                                <li>
                                    <a
                                        href={link.href}
                                        class="btn flex w-full justify-start py-2 font-medium
                                                    {page.url.pathname ===
                                        link.href
                                            ? 'text-primary-600 dark:text-primary-400 border-1'
                                            : ''}"
                                        onclick={closeMobileMenu}
                                        aria-current={page.url.pathname ===
                                        link.href
                                            ? "page"
                                            : undefined}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/snippet}
            </Modal>
        </div>
    </div>
</nav>
