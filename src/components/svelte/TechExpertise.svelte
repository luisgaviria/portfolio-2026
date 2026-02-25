<script>
  // You can pass these as props if you want to change them later
  export let title = "Technical Expertise";
</script>

<section class="mt-24 py-24 border-t border-slate-100 dark:border-slate-900">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-20">
      <h2 class="text-[12px] uppercase tracking-[0.4em] font-black text-slate-600">
        {title}
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-center">
      
      <div class="flex flex-col items-center">
        <h3 class="text-[12px] uppercase tracking-[0.3em] font-black text-slate-500 dark:text-slate-400 mb-6 border-b border-slate-100 dark:border-slate-800 pb-2 w-20">
          Backend
        </h3>
        <ul class="space-y-4 font-bold text-xl md:text-2xl text-slate-900 dark:text-white tracking-tight">
          <li>Go / Gin</li>
          <li>REST APIs</li>
          <li>Microservices</li>
          <li>Node.js</li>
        </ul>
      </div>

      <div class="flex flex-col items-center">
        <h3 class="text-[12px] uppercase tracking-[0.3em] font-black text-slate-500 dark:text-slate-400 mb-6 border-b border-slate-100 dark:border-slate-800 pb-2 w-20">
          Frontend
        </h3>
        <ul class="space-y-4 font-bold text-xl md:text-2xl text-slate-900 dark:text-white tracking-tight">
          <li>Svelte / Astro</li>
          <li>Tailwind CSS</li>
          <li>TypeScript</li>
          <li>React</li>
        </ul>
      </div>

      <div class="flex flex-col items-center">
        <h3 class="text-[12px] uppercase tracking-[0.3em] font-black text-slate-500 dark:text-slate-400 mb-6 border-b border-slate-100 dark:border-slate-800 pb-2 w-20">
          Data
        </h3>
        <ul class="space-y-4 font-bold text-xl md:text-2xl text-slate-900 dark:text-white tracking-tight">
          <li>Drupal</li>
          <li>Headless</li>
          <li>PostgreSQL</li>
          <li>Supabase</li>
        </ul>
      </div>

      <div class="flex flex-col items-center">
        <h3 class="text-[12px] uppercase tracking-[0.3em] font-black text-slate-500 dark:text-slate-400 mb-6 border-b border-slate-100 dark:border-slate-800 pb-2 w-20">
          Ops
        </h3>
        <ul class="space-y-4 font-bold text-xl md:text-2xl text-slate-900 dark:text-white tracking-tight">
          <li>Docker</li>
          <li>CI/CD</li>
          <li>Linux</li>
          <li>Vercel</li>
        </ul>
      </div>

    </div>
  </div>
</section>