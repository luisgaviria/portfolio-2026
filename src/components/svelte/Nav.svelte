<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  export let currentPath = "";
  let isOpen = false;
  let isDark = false;

  // Sync theme state with the document class on mount
  onMount(() => {
    isDark = document.documentElement.classList.contains('dark');
  });

  const toggleTheme = () => {
    isDark = !isDark;
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const links = [
    { name: 'Projects', href: '/projects' },
    { name: 'Resume', href: '/resume' },
    // { name: 'Insights', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  $: isActive = (href) => {
    if (href === '/' && currentPath === '/') return true;
    if (href !== '/' && currentPath.startsWith(href)) return true;
    return false;
  };

  const toggleMenu = () => {
    isOpen = !isOpen;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }
  };
</script>

<nav class="fixed top-0 left-0 w-full z-[200] p-4 md:p-6">
  <div class="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between 
              bg-white/30 dark:bg-slate-900/30 backdrop-blur-2xl 
              border border-white/20 dark:border-white/10 
              shadow-xl shadow-black/5 rounded-2xl transition-all duration-500">
    
    <a href="/" class="z-[220] flex items-center gap-2 group">
      <div class="w-8 h-8 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-slate-900 font-bold text-xs transition-all group-hover:rotate-6">D</div>
      <span class="font-bold text-slate-900 dark:text-white tracking-tighter text-sm uppercase hidden xs:block">DevPort</span>
    </a>

    <div class="hidden md:flex items-center gap-1">
      {#each links as link}
        <a 
          href={link.href} 
          class="px-4 py-2 rounded-xl text-sm font-bold tracking-tight transition-all duration-200
          {isActive(link.href) 
            ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg' 
            : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50'}"
        >
          {link.name}
        </a>
      {/each}

      <button 
        on:click={toggleTheme} 
        class="ml-4 p-2 text-slate-700 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-lg transition-colors"
        aria-label="Toggle Theme"
      >
        {#if isDark}
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" /></svg>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
        {/if}
      </button>
    </div>

    <button 
      on:click={toggleMenu}
      class="z-[220] md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg active:scale-95 transition-all"
      aria-label="Toggle Menu"
    >
      {#if !isOpen}
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 8h16M4 16h16" />
        </svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      {/if}
    </button>
  </div>

  {#if isOpen}
    <div 
      transition:fade={{ duration: 200 }}
      class="fixed inset-0 z-[210] flex flex-col p-10 pt-32
             bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl"
    >
      <div class="flex flex-col gap-8">
        <p class="text-slate-400 dark:text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase">Menu</p>
        {#each links as link, i}
          <div transition:fly={{ x: -10, delay: i * 40 }}>
            <a 
              href={link.href} 
              on:click={toggleMenu}
              class="text-5xl font-black tracking-tighter transition-all 
              {isActive(link.href) 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-slate-900 dark:text-white active:text-blue-600'}"
            >
              {link.name}
            </a>
          </div>
        {/each}
      </div>

      <div class="mt-auto border-t border-slate-200/50 dark:border-slate-800/50 pt-8 flex flex-col gap-8">
        <div class="flex gap-8 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <a 
          href="/contact" 
          on:click={toggleMenu} 
          class="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-center font-black rounded-2xl shadow-xl active:scale-[0.98] transition-transform"
        >
          GET IN TOUCH
        </a>
      </div>
    </div>
  {/if}
</nav>

<style>
  :global(.backdrop-blur-2xl) {
    -webkit-backdrop-filter: blur(40px);
  }
</style>