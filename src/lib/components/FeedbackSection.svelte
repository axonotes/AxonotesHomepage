<script lang="ts">
    import {FileText, Mail, MessageCircle} from '@lucide/svelte';
</script>

<section id="feedback" class="py-20 px-4 bg-gradient-to-br from-primary-50 to-surface-50">
    <div class="container mx-auto max-w-4xl text-center">
        <h2 class="h2 text-3xl lg:text-4xl font-bold mb-6 text-surface-900">
            Your Voice is Crucial – Shape Axonotes!
        </h2>

        <p class="text-lg text-surface-600 mb-8 leading-relaxed">
            Because we're building Axonotes right now, your feedback is invaluable.
            Tell us what you need to succeed. Help us build the ultimate tool for
            students and educators!
        </p>

        <div class="grid md:grid-cols-2 gap-6 mb-12">
            <a
                    href="mailto:oliver@axonotes.ch"
                    class="btn variant-filled-primary text-lg px-8 py-4 flex items-center justify-center gap-3"
            >
                <Mail size={20}/>
                Share Thoughts via Email
            </a>
            <a
                    href="https://forms.gle/N2qFoXn4PonD6EnA9"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn variant-outline-primary text-lg px-8 py-4 flex items-center justify-center gap-3"
            >
                <FileText size={20}/>
                Fill Out Our Quick Survey
            </a>
        </div>

        <div class="card p-8 bg-surface-100 text-left">
            <h3 class="h3 text-xl font-semibold mb-4 text-surface-900 flex items-center gap-2">
                <MessageCircle size={24}/>
                Consider these questions:
            </h3>
            <ul class="space-y-3 text-surface-700">
                <li class="flex items-start gap-2">
                    <span class="text-primary-500 font-bold">•</span>
                    In which specific situations or for which tasks do you feel current software doesn't support you
                    well enough?
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-primary-500 font-bold">•</span>
                    What's your biggest frustration with software you currently use (Notion, Word, Google Docs, etc.)?
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-primary-500 font-bold">•</span>
                    Describe an ideal workflow you wish was possible. What problem would this solve?
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-primary-500 font-bold">•</span>
                    Would you be excited to try an Axonotes beta?
                </li>
            </ul>
        </div>
    </div>
</section>
