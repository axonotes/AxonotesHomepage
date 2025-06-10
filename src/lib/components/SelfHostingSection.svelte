<script lang="ts">
    import {
        ExternalLink,
        Users,
        Shield,
        Code,
        ChevronRight,
    } from "@lucide/svelte";
</script>

<section
    class="card from-primary-50 to-surface-50 outline-primary-500 dark:from-primary-950/20 dark:to-surface-900/30 bg-gradient-to-br p-8 outline lg:p-12 dark:outline-0"
>
    <div class="mx-auto max-w-4xl">
        <!-- Header -->
        <div class="mb-12 text-center">
            <div
                class="group bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
            >
                <div class="relative flex items-center">
                    <ChevronRight
                        class="-mr-0.5 h-4 w-4 rotate-180 duration-200 group-hover:mr-1"
                    />
                    <div class="absolute flex w-full justify-center">
                        <img
                            src="/favicon.png"
                            alt="surprise"
                            class="h-4 opacity-0 duration-200 group-hover:opacity-100"
                        />
                    </div>
                    <ChevronRight
                        class="-ml-0.5 h-4 w-4 duration-200 group-hover:ml-1"
                    />
                </div>
                Self-Hosting Available
            </div>
            <h2
                class="text-surface-900 dark:text-surface-100 mb-4 text-xl md:text-2xl"
            >
                Take Control of Your Data
            </h2>
            <p
                class="text-surface-800 dark:text-surface-200 mx-auto max-w-2xl text-xl"
            >
                Host AxonotesCore yourself with our Business Source License
            </p>
        </div>

        <!-- Features Grid -->
        <div class="mb-8 grid gap-6 md:grid-cols-3">
            <div class="card p-6 text-center">
                <div
                    class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Users
                        class="text-primary-600 dark:text-primary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Free for Small Teams
                </h3>
                <p class="text-surface-800 dark:text-surface-200 text-sm">
                    Up to 50 users at no cost
                </p>
            </div>

            <div class="card p-6 text-center">
                <div
                    class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Shield
                        class="text-primary-600 dark:text-primary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Your Infrastructure
                </h3>
                <p class="text-surface-800 dark:text-surface-200 text-sm">
                    Complete control over your deployment, no limits
                </p>
            </div>

            <div class="card p-6 text-center">
                <div
                    class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                >
                    <Code
                        class="text-primary-600 dark:text-primary-400 h-6 w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                >
                    Open Source Future
                </h3>
                <p class="text-surface-800 dark:text-surface-200 text-sm">
                    Will transition to AGPLv3
                </p>
            </div>
        </div>

        <!-- License Details -->
        <div class="card bg-primary-100 dark:bg-primary-900/30 mb-8 p-6">
            <div class="flex items-start gap-4">
                <div
                    class="bg-secondary-200 dark:bg-secondary-800 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                >
                    <span
                        class="text-secondary-700 dark:text-secondary-300 text-sm font-bold"
                        >!</span
                    >
                </div>
                <div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 text-md mb-2 font-semibold"
                    >
                        Commercial Use & Licensing
                    </h3>
                    <p
                        class="text-surface-800 dark:text-surface-200 mb-2 text-sm"
                    >
                        Free for up to 50 users. For larger deployments or
                        commercial services, you can purchase a commercial
                        license from us.
                    </p>
                    <p class="text-surface-800 dark:text-surface-200 text-sm">
                        Perfect for internal use, development, and personal
                        projects under the BSL 1.1 terms.
                    </p>
                </div>
            </div>
        </div>

        <!-- CTA -->
        <div class="text-center">
            <a
                href="https://github.com/axonotes/AxonotesCore/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                class="btn variant-filled-primary inline-flex items-center gap-2"
            >
                View on GitHub
                <ExternalLink class="h-4 w-4" />
            </a>
            <p class="text-surface-500 dark:text-surface-400 mt-3 text-sm">
                Licensed under BSL 1.1 • Full terms available in repository
            </p>
        </div>
    </div>
</section>
