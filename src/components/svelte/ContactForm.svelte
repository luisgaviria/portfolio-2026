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

  const medellinTime = new Date().toLocaleTimeString('en-US', { 
    timeZone: 'America/Bogota', 
    hour: '2-digit', 
    minute: '2-digit' 
  });
</script>

<div class="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4 md:p-8">
  <div class="max-w-6xl w-full bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col lg:flex-row">
    
    <aside class="lg:w-[400px] bg-slate-900 dark:bg-white p-10 md:p-14 text-white dark:text-slate-950 flex flex-col justify-between relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 dark:bg-black/5 rounded-full -mr-32 -mt-32"></div>

      <div class="relative z-10 space-y-12">
        <div class="space-y-4">
          <h1 class="text-5xl font-black tracking-tighter leading-none">Let's <br/>Build.</h1>
          <div class="h-1.5 w-12 bg-white/20 dark:bg-slate-900/20"></div>
        </div>

        <div class="space-y-8">
          <div>
            <p class="text-[10px] font-black uppercase tracking-[0.3em] opacity-50 mb-3">Professional Edge</p>
<p class="text-lg font-bold leading-tight">
  20 years of operational logic, now engineering high-performance systems.
</p>
          </div>
          
          <div class="flex items-center gap-4 p-4 bg-white/10 dark:bg-slate-900/5 rounded-2xl border border-white/10 dark:border-slate-900/10">
            <div class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <p class="text-xs font-black uppercase tracking-widest">Available for Q2 2026</p>
          </div>
        </div>
      </div>

      <div class="relative z-10 pt-12">
        <div class="space-y-1">
          <p class="text-[10px] font-black uppercase tracking-widest opacity-50">Current Location</p>
          <p class="text-xl font-bold italic">Boston, MA — {medellinTime}</p>
        </div>
      </div>
    </aside>

    <main class="flex-grow p-10 md:p-16 flex flex-col justify-between">
      {#if status === 'success'}
        <div in:fly={{ y: 20, duration: 800, easing: expoOut }} class="h-full flex flex-col justify-center items-center text-center space-y-6">
          <div class="w-20 h-20 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-full flex items-center justify-center text-4xl">✓</div>
          <h2 class="text-4xl font-black tracking-tighter">Transmission Received</h2>
          <p class="text-slate-500 max-w-xs">Your data has been logged. I'll get back to you within 24 standard hours.</p>
          <button on:click={() => status = 'idle'} class="text-xs font-black uppercase tracking-widest underline pt-4">Reset Form</button>
        </div>
      {:else}
        <div class="space-y-10">
          <header class="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-8">
            <h3 class="text-sm font-black uppercase tracking-[0.3em] text-slate-400">System Inquiry Form</h3>
            <span class="text-[10px] font-mono opacity-30">REF: CONTACT_v2.0</span>
          </header>

          <form on:submit|preventDefault={handleSubmit} class="space-y-8" in:fade>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Identification</label>
                <input name="identification" required type="text" placeholder="Full Name" class="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-transparent focus:border-slate-200 dark:focus:border-slate-700 outline-none font-bold transition-all" />
              </div>
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Return Address</label>
                <input name="return_address" required type="email" placeholder="Email@domain.com" class="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-transparent focus:border-slate-200 dark:focus:border-slate-700 outline-none font-bold transition-all" />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Briefing</label>
              <textarea name="briefing" required rows="4" placeholder="Tell me about your system requirements or business goals..." class="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-transparent focus:border-slate-200 dark:focus:border-slate-700 outline-none font-bold transition-all resize-none"></textarea>
            </div>

            <button 
              disabled={status === 'sending'}
              class="group relative w-full py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black uppercase tracking-[0.4em] text-xs rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-4 overflow-hidden"
            >
              <span class="relative z-10">{status === 'sending' ? 'Transmitting...' : 'Send Inquiry'}</span>
              {#if status !== 'sending'}
                <span class="text-xl group-hover:translate-x-2 transition-transform relative z-10">→</span>
              {/if}
            </button>
          </form>
        </div>

        <footer class="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <p class="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">WhatsApp</p>
            <p class="text-sm font-bold">+1 508 762 7639</p>
          </div>
          <div>
            <p class="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Direct Email</p>
            <p class="text-sm font-bold">luis.aptx@gmail.com</p>
          </div>
          <div class="hidden md:block">
            <p class="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Status</p>
            <p class="text-sm font-bold">Available</p>
          </div>
        </footer>
      {/if}
    </main>

  </div>
</div>