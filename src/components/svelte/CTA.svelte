<script>
  export let data;
</script>

<section class="py-24 px-6 relative">
  <div class="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/20 -z-10"></div>
  
  <div class="max-w-5xl mx-auto">
    <div class="relative p-12 md:p-20 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-sm overflow-hidden">
      
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-slate-400 to-transparent opacity-50"></div>

      <div class="text-center">
        <span class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 block">
          {data.label}
        </span>

        <h2 class="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8">
          {data.title} <br />
          <span class="text-slate-500 italic">{data.highlight}</span>
        </h2>
        
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">
          {data.description}
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href={data.primaryBtn.link} 
             class="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            {data.primaryBtn.text}
          </a>
          
          <a href={data.secondaryBtn.link} 
             class="px-10 py-4 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 font-bold rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
            {data.secondaryBtn.text}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>