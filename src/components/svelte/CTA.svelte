<script>
  export let data;
</script>

<section class="py-12 md:py-24 px-4 md:px-6 relative">
  <div class="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/20 -z-10"></div>
  
  <div class="max-w-5xl mx-auto">
    <div class="relative px-6 py-12 md:p-20 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[1.5rem] md:rounded-[2rem] shadow-sm overflow-hidden">
      
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-slate-400 to-transparent opacity-30"></div>

      <div class="text-center">
        <span class="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-6 md:mb-8 block">
          {data.label}
        </span>

        <h2 class="text-3xl md:text-6xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-6 md:mb-8 leading-[1.1]">
          {data.title} <br class="hidden md:block" />
          <span class="text-slate-500 italic font-medium">{data.highlight}</span>
        </h2>
        
        <p class="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10 md:mb-12 leading-relaxed">
          {data.description}
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
          <a href={data.primaryBtn.link} 
             class="w-full sm:w-auto px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-sm font-bold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center">
            {data.primaryBtn.text}
          </a>
          
          <a href={data.secondaryBtn.link} 
             class="w-full sm:w-auto px-10 py-4 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-center">
            {data.secondaryBtn.text}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>