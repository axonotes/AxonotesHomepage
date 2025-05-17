<script lang="ts">
	import '../app.css';
    import Navbar from "$lib/components/Navbar.svelte";

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
    <header class="sticky top-0 z-50 w-full">
        <Navbar />
    </header>

    <main class="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {@render children()}
    </main>

    <footer class="p-4 text-center text-sm">
        © {new Date().getFullYear()} Axonotes. All rights reserved.
    </footer>
</div>
