<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";

    let {children} = $props();
</script>

<div
    class="from-primary-700/10 dark:to-primary-700/20 flex min-h-screen flex-col bg-gradient-to-br to-transparent dark:from-transparent"
>
    <header class="sticky top-0 z-50 w-full">
        <Navbar />
    </header>

    <main class="container mx-auto flex-grow p-4 sm:p-6 lg:p-8">
        {@render children()}
    </main>

    <footer class="p-4 text-center text-sm">
        © {new Date().getFullYear()} Axonotes. All rights reserved.
    </footer>
</div>
