<script>
  // Receiving the data array from index.astro
  export let projects = [];
</script>

<section class="py-24 px-6 relative overflow-hidden">
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-slate-200/20 dark:bg-slate-800/10 blur-[120px] rounded-full -z-10"></div>

  <div class="max-w-6xl mx-auto">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
      <div class="max-w-2xl">
        <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-4">
          Selected Projects
        </h2>
        <p class="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Proven solutions for the <span class="text-slate-500 dark:text-slate-400">modern</span> market.
        </p>
      </div>
      
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each projects as project}
        <div 
          class="group relative flex flex-col bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-xl p-8 md:p-10 transition-all hover:border-slate-300 dark:hover:border-slate-700"
        >
          <div class="flex justify-between items-start mb-8">
            <div class="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-lg text-[10px] font-bold uppercase tracking-widest">
              {project.role}
            </div>
            <a href={project.url} target="_blank" class="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <h3 class="text-3xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            {project.title}
          </h3>
          
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
            {project.desc}
          </p>

          <div class="flex flex-wrap gap-2 mt-auto">
            {#each project.tech as t}
              <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-lg">
                {t}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>