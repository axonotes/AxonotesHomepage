<script lang="ts">
    import {Github, Star} from '@lucide/svelte';

    const socialLinks = [
        {name: 'X (Twitter)', url: 'https://twitter.com/axonotes', icon: '𝕏'},
        {name: 'YouTube', url: 'https://youtube.com/@axonotes', icon: '📺'},
        {name: 'Instagram', url: 'https://instagram.com/axonotes', icon: '📷'},
        {name: 'TikTok', url: 'https://tiktok.com/@axonotes_ch', icon: '🎵'},
        {name: 'BlueSky', url: 'https://bsky.app/profile/axonotes.bsky.social', icon: '🦋'},
        {name: 'Reddit', url: 'https://reddit.com/r/Axonotes', icon: '🤖'}
    ];
</script>

<section class="section-alt py-20 px-4">
    <div class="container mx-auto max-w-4xl text-center">
        <h2 class="h2 text-3xl lg:text-4xl font-bold mb-8 text-surface-900">
            Join the Axonotes Community & Stay Updated!
        </h2>

        <!-- GitHub Section -->
        <div class="mb-12">
            <a
                    href="https://github.com/axonotes/AxonotesCore"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn variant-filled-surface text-lg px-8 py-4 inline-flex items-center gap-3 hover:variant-filled-primary transition-all"
            >
                <Github size={24}/>
                <Star size={20}/>
                Star our GitHub Repository
            </a>
            <p class="text-surface-600 mt-2">Follow our development progress</p>
        </div>

        <!-- Social Media Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {#each socialLinks as social}
                <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="card p-4 social-icon hover:bg-primary-100 transition-all"
                >
                    <div class="text-center">
                        <div class="text-2xl mb-2">{social.icon}</div>
                        <p class="text-sm font-medium text-surface-700">{social.name}</p>
                    </div>
                </a>
            {/each}
        </div>

        <!-- Website Coming Soon -->
        <div class="card p-6 bg-surface-100">
            <p class="text-lg text-surface-700">
                <span class="font-semibold">Website:</span>
                <span class="text-primary-600">axonotes.ch</span>
                <span class="text-surface-500">(Coming Soon!)</span>
            </p>
        </div>
    </div>
</section>
