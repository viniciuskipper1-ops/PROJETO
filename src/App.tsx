/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { 
  Flame, 
  Check
} from "lucide-react";

// Primary hero image URL
const heroBundleMockup = "https://i.imgur.com/Fimfi0M.png";

// Sub components (Lazy Loaded to reduce initial bundle payload & split JS chunks)
const MainContent = React.lazy(() => import("./components/MainContent"));

export default function App() {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const [shouldLoadAll, setShouldLoadAll] = React.useState(false);

  React.useEffect(() => {
    // Highly-optimized Interactive Lazy Loading listener
    const triggerLazyLoad = () => {
      setShouldLoadAll(true);
      cleanUp();
    };

    const cleanUp = () => {
      window.removeEventListener("scroll", triggerLazyLoad);
      window.removeEventListener("touchmove", triggerLazyLoad);
      window.removeEventListener("touchstart", triggerLazyLoad);
      document.removeEventListener("mousemove", triggerLazyLoad);
    };

    // Attach passive listeners to verify any early mobile scrolling/touch interactions
    window.addEventListener("scroll", triggerLazyLoad, { passive: true });
    window.addEventListener("touchmove", triggerLazyLoad, { passive: true });
    window.addEventListener("touchstart", triggerLazyLoad, { passive: true });
    document.addEventListener("mousemove", triggerLazyLoad, { passive: true });

    // Fallback timer: load background sections in 2 seconds of zero-idle to be safe
    const fallbackTimer = setTimeout(triggerLazyLoad, 2000);

    // Warm-up timer of VSL iframe: loads after initial paint is fully compiled (1.5s)
    const videoTimer = setTimeout(() => {
      setIsVideoPlaying(true);
    }, 1500);

    return () => {
      cleanUp();
      clearTimeout(fallbackTimer);
      clearTimeout(videoTimer);
    };
  }, []);

  const scrollToCheckout = () => {
    // Wrap inside requestAnimationFrame to completely avoid layout thrashing / forced reflow
    requestAnimationFrame(() => {
      const el = document.getElementById("pricing-section-container");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#FCFAF5] text-slate-800 selection:bg-amber-100 selection:text-amber-950">
      
      {/* Top Announcement bar */}
      <div className="w-full bg-amber-600 text-[#291305] py-2.5 px-4 text-center text-sm font-black tracking-wide flex justify-center items-center gap-1.5 shadow-sm">
        <Flame className="h-5 w-5 text-amber-955 shrink-0" />
        <span className="flex items-center gap-1.5 flex-wrap justify-center font-extrabold">
          De <span className="line-through text-amber-950 font-black">R$ 79,90</span> por apenas <span className="bg-white text-emerald-800 px-2.5 py-0.5 rounded-lg font-black shadow-xs">R$ 19,90</span> <span className="bg-red-700 text-white font-black px-2 py-0.5 rounded-md text-[11px] uppercase tracking-wider">SOMENTE HOJE!</span>
        </span>
      </div>

      {/* Hero Section (File 14) */}
      <header className="relative pt-6 pb-12 md:pb-16 px-4 max-w-7xl mx-auto flex flex-col items-center">
        {/* Background glow graphics */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-48 h-48 bg-emerald-200/15 rounded-full blur-3xl pointer-events-none" />

        {/* 4. Top Bundle Mockup Image (Moved above the title for optimized initial visual context) */}
        <div id="hero-bundle-image-container" className="w-full max-w-2xl mx-auto pb-6 relative z-10 flex justify-center">
          <div className="bg-amber-50/50 p-1 rounded-3xl border border-amber-200/30 max-w-md md:max-w-lg shadow-sm">
            <img 
              id="hero-bundle-image"
              src={heroBundleMockup} 
              alt="Kit Completo Grafismo Fonético" 
              width={500}
              height={220}
              referrerPolicy="no-referrer"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto object-contain mx-auto max-h-[180px] sm:max-h-[220px]"
            />
          </div>
        </div>

        {/* Text elements and structure (Now placed after high-impact visual context) */}
        <div className="text-center max-w-4xl space-y-6 relative z-10 w-full font-sans mb-6">
          
          <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-800 tracking-tight leading-[1.3] max-w-4xl mx-auto px-2">
            Descubra a{" "}
            <span className="inline-block relative px-3 py-1.5 bg-[#FEF9E6] border-l-2 border-r-2 border-amber-400 text-slate-800 font-bold mx-0.5 rounded-sm max-w-full text-balance">
              <span className="absolute left-0 top-0 bottom-0 flex items-center text-amber-500 font-bold -ml-1 select-none">|</span>
              técnica americana que ensina as crianças a ler
              <span className="absolute right-0 top-0 bottom-0 flex items-center text-amber-500 font-bold -mr-1 select-none">|</span>
            </span>{" "}
            até <strong className="font-black text-slate-900">10 vezes mais rápido</strong>, sem pressão!
          </h1>

          {/* Subtitle / time commitment - larger/bolder on mobile */}
          <p className="font-sans font-extrabold text-[#78350f] text-lg sm:text-xl">
            Com apenas <span className="underline decoration-wavy decoration-2 decoration-amber-500">10 minutos por dia</span>.
          </p>
        </div>

        {/* VSL Video Container */}
        <div id="hero-vsl-container" className="w-full max-w-[324px] mx-auto mb-8 relative z-10 font-sans px-2">
          <div 
            onClick={() => setIsVideoPlaying(true)}
            className="bg-slate-950 rounded-3xl overflow-hidden border-4 border-amber-500 shadow-2xl relative w-full aspect-[9/16] cursor-pointer group"
          >
            {isVideoPlaying ? (
              <iframe 
                width="324" 
                height="576" 
                src="https://www.youtube.com/embed/Upyib64CrAU?autoplay=1" 
                title="Pv Grafismo Fonético V2 Kit Educação Kids" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full object-cover border-0"
              ></iframe>
            ) : (
              <div className="absolute inset-0 w-full h-full">
                {/* Visual Placeholder: Instantly paints on screen without hitting Youtube asset bottlenecks */}
                <img 
                  src="https://img.youtube.com/vi/Upyib64CrAU/hqdefault.jpg" 
                  alt="Assista ao Vídeo Informativo" 
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45">
                  <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center border-2 border-white shadow-xl">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white stroke-white ml-1">
                      <path d="M8 5v14l11-7z" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="mt-4 bg-slate-900/90 text-[11px] font-bold tracking-wider text-white px-4 py-1.5 rounded-full border border-white/10 uppercase font-sans">
                    ▶ TOQUE PARA ASSISTIR
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3. Sub text and benefits elements */}
        <div className="text-center max-w-4xl space-y-6 relative z-10 w-full font-sans">
          
          {/* Quick core bullets list with optimized larger text for mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 max-w-4xl mx-auto pt-2 text-left">
            <div className="p-4 bg-[#FEF9E6] rounded-2xl border border-amber-200/40 flex items-center gap-3 shadow-xs">
              <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <Check className="h-4 w-4 text-white stroke-[3]" />
              </div>
              <span className="text-slate-700 text-sm font-bold leading-relaxed">
                Ideal para crianças de 2 a 12 anos, no ritmo natural de cada uma
              </span>
            </div>

            <div className="p-4 bg-[#FEF9E6] rounded-2xl border border-amber-200/40 flex items-center gap-3 shadow-xs">
              <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <Check className="h-4 w-4 text-white stroke-[3]" />
              </div>
              <span className="text-slate-700 text-sm font-bold leading-relaxed">
                Mesmo que ainda não reconheça letras ou sons
              </span>
            </div>

            <div className="p-4 bg-[#FEF9E6] rounded-2xl border border-amber-200/40 flex items-center gap-3 shadow-xs">
              <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <Check className="h-4 w-4 text-white stroke-[3]" />
              </div>
              <span className="text-slate-700 text-sm font-bold leading-relaxed">
                Funciona também com TDAH, Autismo ou foco disperso
              </span>
            </div>
          </div>

          {/* Core Green conversion button */}
          <div className="pt-6 flex flex-col items-center gap-2">
            <button
              onClick={scrollToCheckout}
              className="w-full sm:w-auto px-10 py-4 sm:py-4.5 bg-[#00D084] hover:bg-[#00B975] text-white font-black text-base sm:text-base md:text-lg rounded-2xl shadow-lg cursor-pointer uppercase tracking-wide"
            >
              Quero meu pequeno lendo rápido!
            </button>
            <span className="text-slate-500 text-xs sm:text-sm font-bold flex items-center gap-1 mt-1">
              🔑 Acesso Imediato ao Material • Compra 100% Segura
            </span>
          </div>

          {/* Text below the main action */}
          <p className="text-slate-700 text-sm sm:text-base max-w-4xl mx-auto pt-4 leading-relaxed font-semibold px-2">
            Com o <strong className="text-slate-900 font-bold">Kit de Grafismo Fonético</strong>, baseado no <strong className="text-slate-900 font-bold">método americano</strong> de alfabetização, seu filho aprende a ler até <strong className="text-slate-900 font-bold">10x mais rápido</strong> — de forma divertida, simples e eficaz, direto de casa!
          </p>
        </div>

      </header>

      {shouldLoadAll ? (
        <React.Suspense fallback={
          <div className="w-full h-96 py-12 flex justify-center items-center">
            <div className="h-8 w-8 rounded-full border-4 border-amber-500 border-t-transparent animate-spin" />
          </div>
        }>
          <MainContent />
        </React.Suspense>
      ) : (
        <div className="w-full h-96 py-12 flex justify-center items-center">
          <div className="h-8 w-8 rounded-full border-4 border-amber-100 border-t-transparent animate-spin" />
        </div>
      )}

    </div>
  );
}
