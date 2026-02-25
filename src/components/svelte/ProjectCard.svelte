<script>
  import { createEventDispatcher } from 'svelte';
  export let project;
  
  const dispatch = createEventDispatcher();

  function handleViewClick(e) {
    // We prevent the default link behavior so we can stay on the page
    e.preventDefault();
    dispatch('viewDetails', project);
  }
</script>

<div class="group flex flex-col bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 backdrop-blur-sm transition-all hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none">
  
  <div class="flex flex-wrap gap-2 mb-6">
    {#each project.tech as tag}
      <span class="px-3 py-1 text-[10px] uppercase tracking-widest font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full border border-slate-200 dark:border-slate-700">
        {tag}
      </span>
    {/each}
  </div>

  <div class="flex-grow">
    <h3 class="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
      {project.title}
    </h3>
    
    <p class="text-slate-500 dark:text-slate-400 font-bold text-sm mb-4">
      {project.role}
    </p>

    <p class="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
      {project.desc}
    </p>
  </div>

  <div class="flex flex-wrap items-center gap-6">
    <a 
      href="#details"
      on:click={handleViewClick}
      class="inline-block px-6 py-3 bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 font-bold rounded-xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all text-sm"
    >
      View Project
    </a>
    
    {#if project.github}
      <a href={project.github} target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-bold">
        Source Code →
      </a>
    {/if}
  </div>
</div>