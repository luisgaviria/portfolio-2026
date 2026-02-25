<script>
  export let data;
</script>

<section class="py-24 px-6 relative">
  <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
    
    <div class="lg:col-span-7 p-10 md:p-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col justify-center">
      <h2 class="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-8">Service Philosophy</h2>
      <h3 class="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tighter leading-[0.9] mb-8">
        {data.philosophy.title} <br/> 
        <span class="text-slate-500 dark:text-slate-400">{data.philosophy.highlight}</span>
      </h3>
      <p class="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-lg">
        {data.philosophy.bio}
      </p>
    </div>

    <div class="lg:col-span-5 flex flex-col gap-6">
      <div class="flex-1 p-8 bg-slate-900 dark:bg-white rounded-xl text-white dark:text-slate-900 flex flex-col justify-between">
        <p class="text-[10px] font-black uppercase tracking-widest opacity-60">Tech Stack</p>
        <div class="text-3xl font-extrabold tracking-tight">{data.stack}</div>
      </div>
      
      <div class="flex-1 p-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <p class="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Core Focus</p>
        <ul class="space-y-3">
          {#each data.focus as item}
            <li class="flex items-center gap-3 text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              <span class="w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full"></span>
              {item}
            </li>
          {/each}
        </ul>
      </div>
    </div>
    
  </div>
</section>