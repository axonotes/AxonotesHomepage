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
    class="card from-primary-50 to-surface-50 outline-primary-500 dark:from-primary-950/20 dark:to-surface-900/30 bg-gradient-to-br p-4 outline md:p-6 lg:p-8 xl:p-12 dark:outline-0"
>
    <div class="mx-auto max-w-4xl">
        <!-- Header -->
        <div class="mb-8 text-center md:mb-10 lg:mb-12">
            <div
                class="group bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium md:mb-4 md:px-4 md:py-2 md:text-sm"
            >
                <div class="relative flex items-center">
                    <ChevronRight
                        class="-mr-0.5 h-3 w-3 rotate-180 duration-200 group-hover:mr-1 md:h-4 md:w-4"
                    />
                    <div class="absolute flex w-full justify-center">
                        <img
                            src="/favicon.png"
                            alt="surprise"
                            class="h-3 opacity-0 duration-200 group-hover:opacity-100 md:h-4"
                        />
                    </div>
                    <ChevronRight
                        class="-ml-0.5 h-3 w-3 duration-200 group-hover:ml-1 md:h-4 md:w-4"
                    />
                </div>
                Self-Hosting Available
            </div>
            <h2
                class="text-surface-900 dark:text-surface-100 mb-3 text-lg font-bold md:mb-4 md:text-xl lg:text-2xl"
            >
                Take Control of Your Data
            </h2>
            <p
                class="text-surface-800 dark:text-surface-200 mx-auto max-w-2xl text-base leading-relaxed md:text-lg lg:text-xl"
            >
                Host AxonotesCore yourself with our Business Source License
            </p>
        </div>

        <!-- Features Grid -->
        <div class="mb-6 grid gap-4 md:mb-8 md:grid-cols-3 md:gap-6">
            <div class="card p-4 text-center md:p-6">
                <div
                    class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg md:mb-4 md:h-12 md:w-12"
                >
                    <Users
                        class="text-primary-600 dark:text-primary-400 h-5 w-5 md:h-6 md:w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 mb-1.5 text-sm font-semibold md:mb-2 md:text-base"
                >
                    Free for Small Teams
                </h3>
                <p
                    class="text-surface-800 dark:text-surface-200 text-xs md:text-sm"
                >
                    Up to 50 users at no cost
                </p>
            </div>

            <div class="card p-4 text-center md:p-6">
                <div
                    class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg md:mb-4 md:h-12 md:w-12"
                >
                    <Shield
                        class="text-primary-600 dark:text-primary-400 h-5 w-5 md:h-6 md:w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 mb-1.5 text-sm font-semibold md:mb-2 md:text-base"
                >
                    Your Infrastructure
                </h3>
                <p
                    class="text-surface-800 dark:text-surface-200 text-xs md:text-sm"
                >
                    Complete control over your deployment, no limits
                </p>
            </div>

            <div class="card p-4 text-center md:p-6">
                <div
                    class="bg-primary-100 dark:bg-primary-900/30 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg md:mb-4 md:h-12 md:w-12"
                >
                    <Code
                        class="text-primary-600 dark:text-primary-400 h-5 w-5 md:h-6 md:w-6"
                    />
                </div>
                <h3
                    class="text-surface-900 dark:text-surface-100 mb-1.5 text-sm font-semibold md:mb-2 md:text-base"
                >
                    Open Source Future
                </h3>
                <p
                    class="text-surface-800 dark:text-surface-200 text-xs md:text-sm"
                >
                    Will transition to AGPLv3
                </p>
            </div>
        </div>

        <!-- License Details -->
        <div
            class="card bg-primary-100 dark:bg-primary-900/30 mb-6 p-4 md:mb-8 md:p-6"
        >
            <div class="flex items-start gap-3 md:gap-4">
                <div
                    class="bg-secondary-200 dark:bg-secondary-800 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg md:h-8 md:w-8"
                >
                    <span
                        class="text-secondary-700 dark:text-secondary-300 text-xs font-bold md:text-sm"
                        >!</span
                    >
                </div>
                <div>
                    <h3
                        class="text-surface-900 dark:text-surface-100 mb-2 text-sm font-semibold md:text-base"
                    >
                        Commercial Use & Licensing
                    </h3>
                    <p
                        class="text-surface-800 dark:text-surface-200 mb-2 text-xs leading-relaxed md:text-sm"
                    >
                        Free for up to 50 users. For larger deployments or
                        commercial services, you can purchase a commercial
                        license from us.
                    </p>
                    <p
                        class="text-surface-800 dark:text-surface-200 text-xs leading-relaxed md:text-sm"
                    >
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
                class="btn variant-filled-primary inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium md:px-6 md:py-3 md:text-base"
            >
                View on GitHub
                <ExternalLink class="h-3 w-3 md:h-4 md:w-4" />
            </a>
            <p
                class="text-surface-500 dark:text-surface-400 mt-2 text-xs leading-relaxed md:mt-3 md:text-sm"
            >
                Licensed under BSL 1.1 • Full terms available in repository
            </p>
        </div>
    </div>
</section>
