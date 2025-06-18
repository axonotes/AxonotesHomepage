<script lang="ts">
    import {GraduationCap, Shield, Users, Workflow} from "@lucide/svelte";

    const features = [
        {
            icon: Workflow,
            title: "Unify Your Workflow",
            description:
                "No more app-switching. Notes, tasks, chat, and learning tools seamlessly integrated.",
        },
        {
            icon: Users,
            title: "Collaborate Effortlessly",
            description:
                "Work together in real-time with line-level locking, integrated chat, and shared channels.",
        },
        {
            icon: GraduationCap,
            title: "Boost Your Learning & Teaching",
            description:
                "Interactive exercises, reimagined flashcards with spaced repetition, and powerful note-taking tools.",
        },
        {
            icon: Shield,
            title: "Smart, Secure & Always Accessible",
            description:
                "Offline-first, robust version history, powerful global search, and Swiss-grade privacy with E2EE.",
        },
    ];
</script>

<section class="section-alt px-4 py-20">
    <div class="container mx-auto max-w-6xl">
        <div class="mb-16 text-center">
            <h2 class="text-surface-900 mb-4 text-xl font-bold md:text-2xl">
                Everything You Need, All in One Place
            </h2>
            <p class="text-surface-600 mx-auto max-w-2xl text-lg">
                Discover the key features that make Axonotes the ultimate
                academic companion
            </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {#each features as feature (feature.id)}
                <div
                    class="card feature-card bg-surface-50 hover:bg-surface-100 p-6"
                >
                    <div class="space-y-4 text-center">
                        <div
                            class="bg-primary-100 mx-auto flex h-16 w-16 items-center justify-center rounded-full"
                        >
                            <svelte:component
                                this={feature.icon}
                                class="text-primary-600"
                                size={32}
                            />
                        </div>
                        <h3 class="h3 text-surface-900 text-md font-semibold">
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
