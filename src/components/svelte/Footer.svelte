<script>
  const year = new Date().getFullYear();
  const links = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/luisfgaviria/" },
    { name: "GitHub", url: "https://github.com/luisgaviria/" },
    // Formatted for direct messaging functionality
    { name: "WhatsApp", url: "https://wa.me/15087627639" }, 
    { name: "Email", url: "mailto:luis.aptx@gmail.com" }
  ];
</script>

<footer class="w-full py-16 px-6 border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
    
    <div class="flex flex-col gap-1 text-center md:text-left">
      <div class="text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
        luisgaviria <span class="text-slate-500 dark:text-slate-400">.dev</span>
      </div>
      <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        © {year} Logic & Pixels
      </p>
    </div>

    <nav class="flex flex-wrap justify-center gap-x-8 gap-y-4">
      {#each links as link}
        <a 
          href={link.url} 
          class="group relative text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          {link.name}
          <span class="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-slate-900 dark:bg-white group-hover:w-full transition-all duration-300"></span>
        </a>
      {/each}
    </nav>

    <div class="flex items-center gap-3">
      <div class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
      <span class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400">
        Available
      </span>
    </div>

  </div>
</footer>