<script lang="ts">
    import {CheckCircle} from "@lucide/svelte";
</script>

<section class="px-4 py-20">
    <div class="container mx-auto max-w-6xl">
        <div class="grid items-center gap-12 lg:grid-cols-2">
            <!-- Content -->
            <div class="space-y-6">
                <h2 class="h2 text-surface-900 text-3xl font-bold lg:text-4xl">
                    End the Chaos: Axonotes is Your
                    <span class="text-primary-600"
                        >Unified Academic Command Center</span
                    >
                </h2>

                <p class="text-surface-600 text-lg leading-relaxed">
                    What if there was a single, streamlined platform designed to
                    end this chaos? A place where your notes, collaboration,
                    planning, learning tools, and communication live together
                    seamlessly, built specifically for academic life.
                </p>

                <p class="text-surface-600 text-lg leading-relaxed">
                    This is the vision behind Axonotes. We're blending the best
                    of note-taking, collaboration, and learning management into
                    one intuitive experience.
                </p>

                <div class="space-y-3">
                    {#each ["One platform for everything", "Built for academic workflows", "Seamless collaboration", "Privacy-focused design"] as benefit (benefit.id)}
                        <div class="flex items-center gap-3">
                            <CheckCircle class="text-success-500" size={20} />
                            <span class="text-surface-700">{benefit}</span>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- Visual -->
            <div class="flex justify-center">
                <div
                    class="from-success-200 to-success-400 w-full max-w-md rounded-3xl bg-gradient-to-br p-8 shadow-xl"
                >
                    <div class="space-y-4 text-center">
                        <div
                            class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl"
                        >
                            🐙
                        </div>
                        <p class="font-semibold text-white">
                            Everything organized, everything connected
                        </p>
                        <div class="mt-4 grid grid-cols-2 gap-2">
                            {#each ["📝 Notes", "💬 Chat", "📅 Planning", "🎯 Learning"] as feature (feature.id)}
                                <div
                                    class="rounded-lg bg-white/20 p-2 text-sm text-white"
                                >
                                    {feature}
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
