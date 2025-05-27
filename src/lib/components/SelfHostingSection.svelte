<script lang="ts">
    import { ExternalLink, Users, Shield, Code } from "@lucide/svelte";
</script>

<section class="card p-8 lg:p-12 bg-gradient-to-br from-primary-50 to-surface-50 dark:from-primary-950/20 dark:to-surface-900/30">
    <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Code class="h-4 w-4" />
                Self-Hosting Available
            </div>
            <h2 class="h2 text-surface-900 dark:text-surface-100 mb-4">
                Take Control of Your Data
            </h2>
            <p class="text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
                Host AxonotesCore yourself with our Business Source License
            </p>
        </div>

        <!-- Features Grid -->
        <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="card variant-ghost p-6 text-center">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users class="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">
                    Free for Small Teams
                </h3>
                <p class="text-surface-600 dark:text-surface-400 text-sm">
                    Up to 50 users at no cost
                </p>
            </div>

            <div class="card variant-ghost p-6 text-center">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield class="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">
                    Your Infrastructure
                </h3>
                <p class="text-surface-600 dark:text-surface-400 text-sm">
                    Complete control over your deployment
                </p>
            </div>

            <div class="card variant-ghost p-6 text-center">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code class="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">
                    Open Source Future
                </h3>
                <p class="text-surface-600 dark:text-surface-400 text-sm">
                    Will transition to AGPLv3
                </p>
            </div>
        </div>

        <!-- License Details -->
        <div class="card variant-filled-surface p-6 mb-8">
            <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-warning-200 dark:bg-warning-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-warning-700 dark:text-warning-300 text-sm font-bold">!</span>
                </div>
                <div>
                    <h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">
                        Commercial Use & Licensing
                    </h3>
                    <p class="text-surface-600 dark:text-surface-400 text-sm mb-2">
                        Free for up to 50 users. For larger deployments or commercial services,
                        you can purchase a commercial license from us.
                    </p>
                    <p class="text-surface-600 dark:text-surface-400 text-sm">
                        Perfect for internal use, development, and personal projects under the BSL 1.1 terms.
                    </p>
                </div>
            </div>
        </div>

        <!-- CTA -->
        <div class="text-center">
            <a
                    href="https://github.com/axonotes/AxonotesCore"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn variant-filled-primary inline-flex items-center gap-2"
            >
                View on GitHub
                <ExternalLink class="h-4 w-4" />
            </a>
            <p class="text-sm text-surface-500 dark:text-surface-400 mt-3">
                Licensed under BSL 1.1 • Full terms available in repository
            </p>
        </div>
    </div>
</section>
