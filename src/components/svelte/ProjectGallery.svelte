<script>
  import ProjectCard from './ProjectCard.svelte';
  import Hero from './Hero.svelte'; 
  import TechExpertise from './TechExpertise.svelte'; 
  import ProContext from './ProContext.svelte';
  import CTA from './CTA.svelte';
  import { fade, fly } from 'svelte/transition';
  import { expoOut } from 'svelte/easing';

  export let projects = [];
  let selectedProject = null;
  let isTransitioning = false;

  // Data for your reused CTA component
  const ctaData = {
    label: "Available for Projects",
    title: "Let's build the",
    highlight: "next system.",
    description: "Ready to bridge the gap between business logic and high-performance software? Whether it's a real estate platform or a Go-based backend, let's talk.",
    primaryBtn: { text: "Get in Touch", link: "/contact" },
    secondaryBtn: { text: "View GitHub", link: "https://github.com" }
  };

  async function openProject(event) {
    isTransitioning = true;
    setTimeout(() => {
      selectedProject = event.detail;
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTimeout(() => {
        isTransitioning = false;
      }, 50);
    }, 300);
  }

  function close() {
    isTransitioning = true;
    setTimeout(() => {
      selectedProject = null;
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTimeout(() => {
        isTransitioning = false;
      }, 50);
    }, 300);
  }
</script>

<div class="relative w-full min-h-[80vh]">
  {#if isTransitioning}
    <div 
      out:fade={{ duration: 400 }} 
      class="fixed top-0 left-0 w-full h-1 bg-slate-900 dark:bg-white z-[200]"
    ></div>
  {/if}

  {#if !selectedProject && !isTransitioning}
    <div 
      in:fade={{ duration: 400 }} 
      out:fade={{ duration: 300 }}
    >
    <Hero 
    title="Selected"
    highlight="Software Projects"
    bio="A gallery of full-stack applications and automated systems engineered for performance."
    showCTA={false} 
    />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-slate-100 dark:border-slate-900 pt-20">
        {#each projects as project}
          <ProjectCard {project} on:viewDetails={openProject} />
        {/each}
      </div>

      <TechExpertise />
      <ProContext />
      <CTA data={ctaData} /> 
    </div>

  {:else if selectedProject && !isTransitioning}
    <article 
      in:fly={{ y: 40, duration: 800, easing: expoOut }} 
      out:fade={{ duration: 300 }}
      class="max-w-5xl mx-auto pt-12 pb-32"
    >
      <div class="flex justify-between items-center mb-16">
        <button 
          on:click={close} 
          class="group flex items-center gap-3 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
        >
          <span class="group-hover:-translate-x-1 transition-transform">←</span> Back to Gallery
        </button>
        <div class="hidden md:block h-px flex-grow mx-8 bg-slate-200 dark:bg-slate-800"></div>
        <span class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 italic">Project Detail</span>
      </div>

      <header class="mb-20">
        <h2 class="text-6xl md:text-9xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.85]">
          {selectedProject.title}
        </h2>
        <p class="text-2xl md:text-4xl font-bold text-slate-500 dark:text-slate-600">
          {selectedProject.role}
        </p>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div class="lg:col-span-8 space-y-12">
          <div class="prose prose-xl dark:prose-invert prose-slate max-w-none">
            <p class="text-xl leading-relaxed text-slate-600 dark:text-slate-400">
              {selectedProject.desc}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <div class="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800">
              <h4 class="font-black uppercase tracking-widest text-xs text-slate-400 mb-4">Architecture</h4>
              <p class="text-slate-900 dark:text-white font-bold">Built for scale with {selectedProject.tech[0]} and {selectedProject.tech[1] || 'modern patterns'}.</p>
            </div>
            <div class="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800">
              <h4 class="font-black uppercase tracking-widest text-xs text-slate-400 mb-4">Focus</h4>
              <p class="text-slate-900 dark:text-white font-bold">Performance-first indexing and responsive UI/UX design.</p>
            </div>
          </div>
        </div>

        <aside class="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-12">
          <div class="space-y-6">
            <h4 class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Tech Stack</h4>
            <div class="flex flex-wrap gap-2">
              {#each selectedProject.tech as tag}
                <span class="px-3 py-1 text-[10px] font-bold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700">
                  {tag}
                </span>
              {/each}
            </div>
          </div>

          <div class="pt-8 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" class="flex items-center justify-between w-full px-8 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black text-sm uppercase tracking-widest hover:bg-slate-700 dark:hover:bg-slate-200 transition-all">
              Launch Project <span class="text-xl">↗</span>
            </a>
            {#if selectedProject.github}
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" class="flex items-center justify-between w-full px-8 py-5 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-black text-sm uppercase tracking-widest hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-all">
                Source Code <span class="text-xl">⌘</span>
              </a>
            {/if}
          </div>
        </aside>
      </div>
    </article>
  {/if}
</div>