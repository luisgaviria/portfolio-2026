<script>
  export let services = [];
</script>

<section class="relative py-16 md:py-32 overflow-hidden border-t border-slate-100 dark:border-slate-900">
  <div class="absolute bottom-0 -right-4 w-72 h-72 bg-slate-200/20 dark:bg-slate-800/10 blur-[120px] rounded-full"></div>
  
  <div class="relative z-10 max-w-6xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
      {#each services as service (service.title)}
        <div class="flex flex-col">
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-6 leading-tight">
            {service.title} <br />
            <span class="text-slate-600 dark:text-slate-400 text-2xl md:text-3xl font-medium italic">
              {service.highlight}
            </span>
          </h2>
          
          <p class="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-grow">
            {service.bio}
          </p>

          <div>
            <a 
              href="/contact" 
              aria-label="Learn more about {service.title}"
              class="inline-block px-8 py-3 bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 font-bold rounded-xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white transition-all text-xs uppercase tracking-widest"
            >
              Learn More
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>