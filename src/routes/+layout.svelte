<script lang="ts">
	import '../app.css';
    import LightSwitch from "$lib/components/lightSwitch/LightSwitch.svelte";

	let { children } = $props();
</script>

<div class="w-screen h-screen absolute top-0 left-0 overflow-auto">
    <LightSwitch/>

    {@render children()}
</div>
