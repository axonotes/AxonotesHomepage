<script lang="ts">
    import {CheckCircle} from '@lucide/svelte';
</script>

<section class="py-20 px-4">
    <div class="container mx-auto max-w-6xl">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Content -->
            <div class="space-y-6">
                <h2 class="h2 text-3xl lg:text-4xl font-bold text-surface-900">
                    End the Chaos: Axonotes is Your
                    <span class="text-primary-600">Unified Academic Command Center</span>
                </h2>

                <p class="text-lg text-surface-600 leading-relaxed">
                    What if there was a single, streamlined platform designed to end this
                    chaos? A place where your notes, collaboration, planning, learning
                    tools, and communication live together seamlessly, built specifically
                    for academic life.
                </p>

                <p class="text-lg text-surface-600 leading-relaxed">
                    This is the vision behind Axonotes. We're blending the best of
                    note-taking, collaboration, and learning management into one intuitive
                    experience.
                </p>

                <div class="space-y-3">
                    {#each ['One platform for everything', 'Built for academic workflows', 'Seamless collaboration', 'Privacy-focused design'] as benefit}
                        <div class="flex items-center gap-3">
                            <CheckCircle class="text-success-500" size={20}/>
                            <span class="text-surface-700">{benefit}</span>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- Visual -->
            <div class="flex justify-center">
                <div
                        class="w-full max-w-md bg-gradient-to-br from-success-200 to-success-400 rounded-3xl p-8 shadow-xl"
                >
                    <div class="text-center space-y-4">
                        <div
                                class="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-4xl"
                        >
                            🐙
                        </div>
                        <p class="text-white font-semibold">
                            Everything organized, everything connected
                        </p>
                        <div class="grid grid-cols-2 gap-2 mt-4">
                            {#each ['📝 Notes', '💬 Chat', '📅 Planning', '🎯 Learning'] as feature}
                                <div class="bg-white/20 rounded-lg p-2 text-white text-sm">
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
