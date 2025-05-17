<script lang="ts">
    import {page} from '$app/state';
    import LightSwitch from '$lib/components/LightSwitch.svelte';
    import {X, Menu} from '@lucide/svelte';
    import {Modal} from '@skeletonlabs/skeleton-svelte';

    const navLinks = [
        {href: '/', label: 'Home'},
        {href: '/about', label: 'About'},
        {href: '/features', label: 'Features'},
        {href: '/pricing', label: 'Pricing'},
        {href: '/community', label: 'Community'},
    ];

    let isMobileMenuOpen = $state(true);

    function closeMobileMenu() {
        isMobileMenuOpen = false;
    }
</script>

<nav
        class="shadow-md"
        aria-label="Main navigation"
>
    <div
            class="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16"
    >
        <!-- Logo/Brand -->
        <a
                href="/"
                class="text-2xl font-bold text-primary-600 dark:text-primary-400 hover:opacity-80 transition-opacity
                       flex items-center"
        >
            <img src="/favicon.png" alt="logo" class="max-h-10 mr-2">
            Axonotes
        </a>

        <!-- Desktop Navigation & LightSwitch -->
        <div class="hidden md:flex items-center space-x-4">
            <ul class="flex space-x-1">
                {#each navLinks as link}
                    <li>
                        <a
                                href={link.href}
                                class="px-3 py-2 rounded-md text-sm font-medium transition-colors
                                   {page.url.pathname === link.href ? 'text-primary-600 dark:text-primary-400' : ''}"
                                aria-current={page.url.pathname === link.href ? 'page' : undefined}
                        >
                            {link.label}
                        </a>
                    </li>
                {/each}
            </ul>
            <LightSwitch/>
        </div>

        <!-- Mobile Navigation & LightSwitch -->
        <div class="md:hidden flex items-center space-x-2">
            <LightSwitch/>
            <Modal
                    open={isMobileMenuOpen}
                    onOpenChange={(e) => (isMobileMenuOpen = e.open)}
                    triggerBase="btn"
                    contentBase="bg-surface-100-900 p-4 space-y-4 shadow-xl w-[80%] max-w-[300px] h-screen"
                    positionerJustify="justify-end"
                    positionerAlign=""
                    positionerPadding=""
                    transitionsPositionerIn={{ x: 400, duration: 200 }}
                    transitionsPositionerOut={{ x: 400, duration: 200 }}
            >
                {#snippet trigger()}
                    <Menu/>
                {/snippet}
                {#snippet content()}
                    <div>
                        <div class="w-full flex justify-end space-x-2">
                            <button
                                    class="btn"
                                    onclick={closeMobileMenu}
                                    aria-label="Close mobile menu"
                            >
                                <X/>
                            </button>
                        </div>
                        <ul class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {#each navLinks as link}
                                <li>
                                    <a
                                            href={link.href}
                                            class="btn font-medium py-2 w-full flex justify-start
                                                    {page.url.pathname === link.href ?
                                                        'text-primary-600 dark:text-primary-400 border-1' :
                                                        ''
                                                    }"
                                            onclick={closeMobileMenu}
                                            aria-current={page.url.pathname === link.href ? 'page' : undefined}
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
