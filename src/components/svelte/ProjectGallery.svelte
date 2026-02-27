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

  const ctaData = {
    label: "Available for Projects",
    title: "Let's build the",
    highlight: "next system.",
    description: "Ready to bridge the gap between business logic and high-performance software? Whether it's a real estate platform or a Go-based backend, let's talk.",
    primaryBtn: { text: "Get in Touch", link: "/contact" },
    secondaryBtn: { text: "View GitHub", link: "https://github.com/luisgaviria" }
  };

  async function openProject(event) {
    if (isTransitioning) return;
    isTransitioning = true;
    
    // We scroll first, then swap content to keep the browser happy
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      selectedProject = event.detail;
      isTransitioning = false;
    }, 400);
  }

  function close() {
    if (isTransitioning) return;
    isTransitioning = true;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      selectedProject = null;
      isTransitioning = false;
    }, 400);
  }
</script>

<div class="relative w-full min-h-screen">
  
  {#if isTransitioning}
    <div 
      out:fade={{ duration: 200 }} 
      class="fixed top-0 left-0 w-full h-1 bg-slate-900 dark:bg-white z-[200]"
    ></div>
  {/if}

  {#if !selectedProject}
    <div 
      in:fade|local={{ duration: 400, delay: 200 }} 
      out:fade|local={{ duration: 300 }}
      class:opacity-0={isTransitioning}
      class="transition-opacity duration-300"
    >
      <div class="min-h-[400px]">
        <Hero 
          title="Selected"
          highlight="Software Projects"
          bio="A gallery of full-stack applications and automated systems engineered for performance."
          showCTA={false} 
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-slate-100 dark:border-slate-900 pt-20">
        {#each projects as project}
          <ProjectCard {project} on:viewDetails={openProject} />
        {/each}
      </div>

      <TechExpertise />
      <ProContext />
      <CTA data={ctaData} /> 
    </div>

  {:else}
    <article 
      in:fly|local={{ y: 15, duration: 500, delay: 200, easing: expoOut }} 
      out:fade|local={{ duration: 300 }}
      class="max-w-5xl mx-auto pt-12 pb-32 px-4 md:px-0"
    >
      <div class="flex justify-between items-center mb-16">
        <button 
          on:click={close} 
          class="group flex items-center gap-3 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
        >
          <span class="group-hover:-translate-x-1 transition-transform">←</span> Back to Gallery
        </button>
        <div class="hidden md:block h-px flex-grow mx-8 bg-slate-200 dark:bg-slate-800"></div>
        <span class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 italic">Project Detail</span>
      </div>

      <header class="mb-20">
        <h2 class="text-6xl md:text-9xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.85] uppercase">
          {selectedProject.title}
        </h2>
        <p class="text-2xl md:text-4xl font-bold text-slate-400 dark:text-slate-500">
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
            <div class="p-8 bg-slate-50/50 dark:bg-slate-900/30 rounded-3xl border border-slate-200 dark:border-slate-800">
              <h4 class="font-black uppercase tracking-widest text-[10px] text-slate-500 mb-4">Architecture</h4>
              <p class="text-slate-900 dark:text-white font-bold leading-snug">Built for scale with {selectedProject.tech[0]} and {selectedProject.tech[1] || 'modern patterns'}.</p>
            </div>
            <div class="p-8 bg-slate-50/50 dark:bg-slate-900/30 rounded-3xl border border-slate-200 dark:border-slate-800">
              <h4 class="font-black uppercase tracking-widest text-[10px] text-slate-500 mb-4">Focus</h4>
              <p class="text-slate-900 dark:text-white font-bold leading-snug">Performance-first indexing and responsive UI/UX design.</p>
            </div>
          </div>
        </div>

        <aside class="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-12">
          <div class="space-y-6">
            <h4 class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Tech Stack</h4>
            <div class="flex flex-wrap gap-2">
              {#each selectedProject.tech as tag}
                <span class="px-3 py-1.5 text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700">
                  {tag}
                </span>
              {/each}
            </div>
          </div>

          <div class="pt-8 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" class="flex items-center justify-between w-full px-8 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black text-sm uppercase tracking-widest hover:opacity-80 transition-all rounded-xl shadow-lg">
              Launch Project <span class="text-xl">↗</span>
            </a>
            {#if selectedProject.github}
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" class="flex items-center justify-between w-full px-8 py-5 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-black text-sm uppercase tracking-widest hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-all rounded-xl">
                Source Code <span class="text-xl">⌘</span>
              </a>
            {/if}
          </div>
        </aside>
      </div>
    </article>
  {/if}
</div>