<script lang="ts">
    import {GraduationCap, Shield, Users, Workflow} from '@lucide/svelte';

    const features = [
        {
            icon: Workflow,
            title: 'Unify Your Workflow',
            description: 'No more app-switching. Notes, tasks, chat, and learning tools seamlessly integrated.'
        },
        {
            icon: Users,
            title: 'Collaborate Effortlessly',
            description: 'Work together in real-time with line-level locking, integrated chat, and shared channels.'
        },
        {
            icon: GraduationCap,
            title: 'Boost Your Learning & Teaching',
            description: 'Interactive exercises, reimagined flashcards with spaced repetition, and powerful note-taking tools.'
        },
        {
            icon: Shield,
            title: 'Smart, Secure & Always Accessible',
            description: 'Offline-first, robust version history, powerful global search, and Swiss-grade privacy with E2EE.'
        }
    ];
</script>

<section class="section-alt py-20 px-4">
    <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
            <h2 class="h2 text-3xl lg:text-4xl font-bold mb-4 text-surface-900">
                Everything You Need, All in One Place
            </h2>
            <p class="text-lg text-surface-600 max-w-2xl mx-auto">
                Discover the key features that make Axonotes the ultimate academic companion
            </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {#each features as feature}
                <div class="card p-6 feature-card bg-surface-50 hover:bg-surface-100">
                    <div class="text-center space-y-4">
                        <div class="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center">
                            <svelte:component this={feature.icon} class="text-primary-600" size={32}/>
                        </div>
                        <h3 class="h3 text-xl font-semibold text-surface-900">
                            {feature.title}
                        </h3>
                        <p class="text-surface-600 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
