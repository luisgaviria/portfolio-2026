<script>
  export let data;
</script>

<section class="relative overflow-hidden transition-colors duration-500">
  <div class="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-24">
    
    <div class="relative px-6 py-12 md:p-20 bg-white dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-[2rem] shadow-2xl overflow-hidden transition-all duration-500">
      
      <div class="absolute inset-0 bg-gradient-to-tr from-slate-100/50 to-white dark:from-slate-800/10 dark:to-transparent -z-10"></div>

      <div class="text-center relative z-10">
        <span class="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 dark:text-slate-500 mb-8 block">
          {data.label}
        </span>

        <h2 class="text-4xl md:text-7xl font-black tracking-tighter text-slate-950 dark:text-white mb-8 leading-[1.05]">
          {data.title} <br class="hidden md:block" />
          <span class="text-slate-400 dark:text-slate-500 italic font-medium">{data.highlight}</span>
        </h2>
        
        <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed font-medium">
          {data.description}
        </p>

        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href={data.primaryBtn.link} 
             class="w-full sm:w-auto px-12 py-5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-xs font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all duration-300 text-center shadow-xl">
            {data.primaryBtn.text}
          </a>
          
          <a href="https://github.com/luisgaviria" target="_blank"
             class="w-full sm:w-auto px-12 py-5 bg-transparent text-slate-600 dark:text-white text-xs font-black uppercase tracking-widest rounded-2xl border-2 border-slate-200 dark:border-white/10 hover:bg-white/5 transition-all text-center flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            View GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</section>