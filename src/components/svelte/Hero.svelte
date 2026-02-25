<script>
  export let title = "";
  export let highlight = "";
  export let bio = "";
</script>

<section class="relative pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden">
  <div class="relative z-10">
    <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
      {title} <br />
      <span class="text-slate-500 dark:text-slate-400">
        {highlight}
      </span>
    </h1>
    
    <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
      {bio}
    </p>

    <div class="flex flex-wrap gap-4">
      <a href="#grid" class="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold rounded-xl hover:bg-slate-700 dark:hover:bg-slate-200 transition-all shadow-lg shadow-slate-200 dark:shadow-none">
        Explore Work
      </a>
      
      <a href="/contact" class="px-8 py-4 bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 font-bold rounded-xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all">
        Get In Touch
      </a>
    </div>
  </div>
</section>