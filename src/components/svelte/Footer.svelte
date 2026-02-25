<script>
  const year = new Date().getFullYear();
  const links = [
    { name: "LinkedIn", url: "#" },
    { name: "GitHub", url: "#" },
    { name: "WhatsApp", url: "#" },
    { name: "Email", url: "mailto:hello@example.com" }
  ];
</script>

<footer class="w-full py-16 px-6 border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
    
    <div class="flex flex-col gap-1">
      <div class="text-sm font-extrabold tracking-tight text-slate-900 dark:text-white">
        DevPort <span class="text-slate-400 dark:text-slate-600">/ 2026</span>
      </div>
      <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
        © {year} All Rights Reserved
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
      <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
      <span class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
        Available
      </span>
    </div>

  </div>
</footer>