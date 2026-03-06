<script>
  import { fade, fly } from 'svelte/transition';
  import { expoOut } from 'svelte/easing';
  
  let status = 'idle'; // 'idle', 'sending', 'success'

  async function handleSubmit(event) {
    status = 'sending';
    const formData = new FormData(event.target);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        status = 'success';
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'System Error');
        status = 'idle';
      }
    } catch (err) {
      status = 'idle';
      console.error("Connection failed", err);
    }
  }

  const localTime = new Date().toLocaleTimeString('en-US', { 
    timeZone: 'America/New_York', 
    hour: '2-digit', 
    minute: '2-digit' 
  });
</script>

<section class="min-h-screen bg-zinc-100 dark:bg-slate-950 flex items-center justify-center p-4 md:p-12 transition-colors duration-500">
  <div class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
    
    <aside class="lg:col-span-4 space-y-8 lg:space-y-10 lg:pt-10 px-2 lg:px-0">
      <div class="space-y-6">
        <h1 class="text-5xl md:text-6xl font-black tracking-tighter leading-tight text-slate-900 dark:text-white">
          Let’s <span class="text-slate-500 dark:text-slate-400 italic font-medium">Build.</span>
        </h1>
        
        <p class="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-sm">
          Senior Web Developer & Full-Stack Architect. 20 years of operational logic applied to high-performance systems.
        </p>
      </div>

      <div class="space-y-1 pt-4 border-t border-slate-300 dark:border-slate-800 inline-block">
        <p class="text-[10px] font-black uppercase tracking-widest text-slate-500">Current Base</p>
        <p class="text-lg font-bold italic text-slate-900 dark:text-white uppercase text-nowrap">Boston, {localTime}</p>
      </div>
    </aside>

    <main class="lg:col-span-8 w-full">
      <div class="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[2rem] p-6 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] transition-all duration-300">
        {#if status === 'success'}
          <div in:fly={{ y: 20, duration: 800, easing: expoOut }} class="py-12 md:py-16 flex flex-col items-center text-center space-y-6">
            <div class="w-16 h-16 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-full flex items-center justify-center text-2xl font-black">✓</div>
            <h2 class="text-2xl font-black tracking-tight uppercase">Transmission Received</h2>
            <p class="text-slate-500 dark:text-slate-400 max-w-xs text-sm">Your data has been logged. Response pending within 24 hours.</p>
            <button on:click={() => status = 'idle'} class="text-[10px] font-black uppercase tracking-widest border-b-2 border-slate-900 dark:border-white pb-1 mt-4">Reset Form</button>
          </div>
        {:else}
          <form on:submit|preventDefault={handleSubmit} class="space-y-10 md:space-y-12" in:fade>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12">
              <div class="group flex flex-col-reverse">
                <input 
                  id="name" name="identification" required type="text" placeholder="Full Name" 
                  class="peer w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-700 focus:border-slate-900 dark:focus:border-white py-2 outline-none font-bold text-lg transition-all placeholder:text-slate-600 dark:placeholder:text-slate-300" 
                />
                <label for="name" class="text-[10px] font-black uppercase tracking-widest text-slate-500 peer-focus:text-slate-900 dark:peer-focus:text-white transition-colors">Identification</label>
              </div>

              <div class="group flex flex-col-reverse">
                <input 
                  id="email" name="return_address" required type="email" placeholder="email@domain.com" 
                  class="peer w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-700 focus:border-slate-900 dark:focus:border-white py-2 outline-none font-bold text-lg transition-all placeholder:text-slate-600 dark:placeholder:text-slate-300" 
                />
                <label for="email" class="text-[10px] font-black uppercase tracking-widest text-slate-500 peer-focus:text-slate-900 dark:peer-focus:text-white transition-colors">Return Path</label>
              </div>
            </div>

            <div class="group flex flex-col-reverse">
              <textarea 
                id="msg" name="briefing" required rows="4" placeholder="Briefly describe your goals or system requirements..." 
                class="peer w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-700 focus:border-slate-900 dark:focus:border-white py-2 outline-none font-bold text-lg transition-all resize-none placeholder:text-slate-600 dark:placeholder:text-slate-300"
              ></textarea>
              <label for="msg" class="text-[10px] font-black uppercase tracking-widest text-slate-500 peer-focus:text-slate-900 dark:peer-focus:text-white transition-colors">System Briefing</label>
            </div>

            <button 
              disabled={status === 'sending'}
              class="w-full py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black uppercase tracking-[0.5em] text-[11px] rounded-xl hover:bg-black dark:hover:bg-slate-200 hover:-translate-y-1 active:translate-y-0 transition-all shadow-xl shadow-slate-900/10 dark:shadow-none disabled:opacity-50"
            >
              {status === 'sending' ? 'Transmitting...' : 'Initiate Inquiry'}
            </button>

            <footer class="pt-8 md:pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-x-12 gap-y-6">
              <div>
                <p class="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">WhatsApp</p>
                <a href="https://wa.me/15087627639" class="text-sm font-bold hover:text-slate-500 transition-colors">+1 508 762 7639</a>
              </div>
              <div>
                <p class="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Direct</p>
                <a href="mailto:luis.aptx@gmail.com" class="text-sm font-bold hover:text-slate-500 transition-colors">luis.aptx@gmail.com</a>
              </div>
            </footer>
          </form>
        {/if}
      </div>
    </main>
  </div>
</section>

<style>
  :global(body) {
    @apply antialiased;
  }
</style>