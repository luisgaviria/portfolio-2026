<script>
  // Receiving the data array from index.astro
  export let projects = [];
</script>

<section class="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[800px] h-[400px] bg-slate-200/20 dark:bg-slate-800/10 blur-[80px] md:blur-[120px] rounded-full -z-10"></div>

  <div class="max-w-6xl mx-auto">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
      <div class="max-w-2xl">
        <h2 class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-3">
          Selected Projects
        </h2>
        <p class="text-3xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tighter leading-[1.1]">
          Proven solutions for the <span class="text-slate-400 dark:text-slate-500">modern</span> market.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {#each projects as project}
        <div 
          class="group relative flex flex-col bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-10 transition-all hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
        >
          <div class="flex justify-between items-start mb-6 md:mb-8">
            <div class="px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 rounded-md text-[9px] md:text-[10px] font-black uppercase tracking-widest">
              {project.role}
            </div>
            
            <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="View {project.title} live site" 
            class="p-2 -mr-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          </div>

          <h3 class="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
            {project.title}
          </h3>
          
          <p class="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
            {project.desc}
          </p>

          <div class="flex flex-wrap gap-2 mt-auto">
            {#each project.tech as t}
              <span class="text-[10px] md:text-[11px] font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/40 px-2.5 py-1 rounded-md border border-slate-200/50 dark:border-slate-700/50">
                {t}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>