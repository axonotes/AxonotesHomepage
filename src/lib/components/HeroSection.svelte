<script lang="ts">
    import {ArrowRight, Users} from '@lucide/svelte';
</script>

<section class="hero-gradient py-20 px-4">
    <div class="container mx-auto max-w-6xl">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Content -->
            <div class="space-y-8">
                <div class="space-y-4">
                    <h1 class="h1 text-4xl lg:text-6xl font-bold text-primary-900">
                        Tired of Juggling Apps for School & Studies?
                        <span class="text-primary-600">Meet Axonotes!</span>
                    </h1>
                    <p class="text-xl text-surface-600 leading-relaxed">
                        Your central academic hub for notes, collaboration, planning, and
                        learning – all in one intuitive experience. Currently in planning
                        and early development – help us build the tool you need!
                    </p>
                </div>

                <div class="flex flex-col sm:flex-row gap-4">
                    <a
                            href="#feedback"
                            class="btn variant-filled-primary text-lg px-8 py-4 flex items-center gap-2"
                    >
                        <Users size={20}/>
                        Join the Waitlist & Shape Axonotes!
                        <ArrowRight size={20}/>
                    </a>
                    <a
                            href="#problem"
                            class="btn variant-outline-primary text-lg px-8 py-4"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            <!-- Visual -->
            <div class="flex justify-center">
                <div
                        class="w-full max-w-md aspect-square bg-gradient-to-br from-primary-200 to-primary-400 rounded-3xl flex items-center justify-center shadow-2xl"
                >
                    <div class="text-center space-y-4 p-8">
                        <!-- Octopus Mascot Placeholder -->
                        <div
                                class="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center text-6xl"
                        >
                            🐙
                        </div>
                        <p class="text-white font-semibold text-lg">
                            Organizing your academic life
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>