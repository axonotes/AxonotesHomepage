<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import {onMount} from "svelte";
    import {browser} from "$app/environment";
    import {PUBLIC_POSTHOG_HOST, PUBLIC_POSTHOG_KEY} from "$env/static/public";
    import posthog from "posthog-js";
    import {afterNavigate} from "$app/navigation";

    let {children} = $props();

    onMount(() => {
        initPostHog();
    });

    function initPostHog() {
        if (!PUBLIC_POSTHOG_KEY || !PUBLIC_POSTHOG_HOST) return;
        if (!browser) return;

        posthog.init(PUBLIC_POSTHOG_KEY, {
            api_host: PUBLIC_POSTHOG_HOST,
            person_profiles: "identified_only",
            loaded: (ph) => {
                if (import.meta.env.MODE === "development") {
                    ph.debug();
                }
            },
        });
    }
</script>

<svelte:head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="bg-surface-50 dark:bg-surface-950 flex min-h-screen flex-col">
    <Navbar />

    <main class="flex-1 pb-20">
        {@render children()}
    </main>

    <footer
        class="border-surface-200 dark:border-surface-700 bg-surface-100/50 dark:bg-surface-900/50 border-t py-8"
    >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
                class="flex flex-col items-center justify-between gap-4 sm:flex-row"
            >
                <div
                    class="text-primary-600 dark:text-primary-400 flex items-center gap-2 text-sm font-medium"
                >
                    <img src="/favicon.png" alt="Axonotes" class="h-5 w-5" />
                    <span>Built by students, for students</span>
                </div>

                <div class="flex items-center gap-6 text-sm">
                    <a
                        href="https://github.com/axonotes/AxonotesCore"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://discord.gg/myBMaaDeQu"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                        Discord
                    </a>
                    <span class="text-surface-500 dark:text-surface-500">
                        © {new Date().getFullYear()} Axonotes
                    </span>
                </div>
            </div>
        </div>
    </footer>
</div>
