<script lang="ts">
    import HeroSection from '$lib/components/HeroSection.svelte';
    import ProblemSection from '$lib/components/ProblemSection.svelte';
    import SolutionSection from '$lib/components/SolutionSection.svelte';
    import FeaturesSection from '$lib/components/FeaturesSection.svelte';
    import FeedbackSection from '$lib/components/FeedbackSection.svelte';
    import CommunitySection from '$lib/components/CommunitySection.svelte';
</script>

<svelte:head>
    <title>Axonotes - Your Unified Academic Command Center</title>
    <meta
            name="description"
            content="End the chaos of juggling multiple apps for school. Axonotes is your central academic hub for notes, collaboration, planning, and learning – all in one intuitive experience."
    />
</svelte:head>

<HeroSection/>
<ProblemSection/>
<SolutionSection/>
<FeaturesSection/>
<FeedbackSection/>
<CommunitySection/>