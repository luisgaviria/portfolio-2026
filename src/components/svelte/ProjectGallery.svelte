<script>
  import ProjectCard from './ProjectCard.svelte';
  import Hero from './Hero.svelte'; 
  import TechExpertise from './TechExpertise.svelte'; 
  import ProContext from './ProContext.svelte';
  import CTA from './CTA.svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { expoOut } from 'svelte/easing';
  import { onMount } from 'svelte'; // Added for keyboard listener

  export let projects = [];
  let selectedProject = null;
  let isTransitioning = false;
  let showMetrics = false;

  const ctaData = {
    label: "Available for Projects",
    title: "Let's build the",
    highlight: "next system.",
    description: "Ready to bridge the gap between business logic and high-performance software? Whether it's a real estate platform or a Go-based backend, let's talk.",
    primaryBtn: { text: "Get in Touch", link: "/contact" },
    secondaryBtn: { text: "View GitHub", link: "https://github.com/luisgaviria" }
  };

  // Keyboard listener to close overlay on ESC
  onMount(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Escape' && showMetrics) toggleMetrics();
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });

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

  function toggleMetrics() {
    showMetrics = !showMetrics;
    if (showMetrics) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
</script>

<div class="relative w-full min-h-[80vh]">
  {#if isTransitioning}
    <div 
      out:fade={{ duration: 400 }} 
      class="fixed top-0 left-0 w-full h-1 bg-slate-900 dark:bg-white z-[200]"
    ></div>
  {/if}

  {#if !selectedProject}
    <div 
      in:fade|local={{ duration: 400 }} 
      out:fade|local={{ duration: 300 }}
      class:opacity-30={isTransitioning}
      class="transition-opacity duration-300"
    >
      <div class="min-h-[320px] md:min-h-[400px]">
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
      in:fly|local={{ y: 20, duration: 600, easing: expoOut }} 
      out:fade|local={{ duration: 300 }}
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
        <span class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 italic">Project Detail</span>
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
              <h4 class="font-black uppercase tracking-widest text-[10px] text-slate-500 dark:text-slate-400 mb-4">Architecture</h4>
              <p class="text-slate-900 dark:text-white font-bold">Built for scale with {selectedProject.tech[0]} and {selectedProject.tech[1] || 'modern patterns'}.</p>
            </div>
            <div class="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800">
              <h4 class="font-black uppercase tracking-widest text-[10px] text-slate-500 dark:text-slate-400 mb-4">Focus</h4>
              <p class="text-slate-900 dark:text-white font-bold">Performance-first indexing and responsive UI/UX design.</p>
            </div>
          </div>

          {#if selectedProject.metricsImage}
            <div class="mt-16 space-y-6">
              <h4 class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Vitals & Core Performance</h4>
              
              <button 
                on:click={toggleMetrics}
                class="relative w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl group cursor-zoom-in"
              >
                <img 
                  src={selectedProject.metricsImage} 
                  alt="PageSpeed Insights Score" 
                  class="w-full h-auto transition-all duration-700 group-hover:scale-[1.02]"
                />
                <div class="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                  <span class="opacity-0 group-hover:opacity-100 bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all shadow-lg border border-slate-100 dark:border-slate-800">
                    Expand Metrics
                  </span>
                </div>
              </button>
              
              <p class="text-sm text-slate-500 italic font-medium">
                Verified PageSpeed Insights performance: 100/100 across all core web vitals.
              </p>
            </div>
          {/if}
        </div>

        <aside class="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-12">
          <div class="space-y-6">
            <h4 class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Tech Stack</h4>
            <div class="flex flex-wrap gap-2">
              {#each selectedProject.tech as tag}
                <span class="px-3 py-1 text-[10px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded border border-slate-200 dark:border-slate-700">
                  {tag}
                </span>
              {/each}
            </div>
          </div>

          <div class="pt-8 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <a href={selectedProject.projectUrl} target="_blank" rel="noopener noreferrer" class="flex items-center justify-between w-full px-8 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black text-sm uppercase tracking-widest hover:bg-slate-700 dark:hover:bg-slate-200 transition-all">
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

  {#if showMetrics && selectedProject}
  <div 
    class="fixed inset-0 z-[1000] flex items-center justify-center p-6 md:p-24"
    transition:fade={{ duration: 200 }}
  >
    <button 
      type="button"
      class="absolute inset-0 bg-slate-950/70 backdrop-blur-md cursor-zoom-out w-full h-full border-none"
      on:click={toggleMetrics}
      aria-label="Close metrics overlay"
    ></button>
    
    <div class="absolute top-12 left-1/2 -translate-x-1/2 text-white/40 text-[10px] font-black uppercase tracking-[0.5em] pointer-events-none">
      Click anywhere or press Esc to minimize
    </div>

    <div 
      class="relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border border-white/10"
      transition:scale={{ start: 0.98, duration: 300, easing: expoOut }}
    >
      <img 
        src={selectedProject.metricsImage} 
        alt="Full Metrics Overlay" 
        class="w-full h-auto block"
      />
    </div>
  </div>
{/if}
</div>