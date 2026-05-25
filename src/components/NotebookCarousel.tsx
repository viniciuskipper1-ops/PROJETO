import React, { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Layers, CheckCircle2 } from "lucide-react";

interface WorksheetPage {
  id: string;
  level: string;
  levelTitle: string;
  word: string;
  syllables: string;
  imageIcon: string;
  bgColor: string;
  textColor: string;
  svgDrawing: React.ReactNode;
}

const PAGES: WorksheetPage[] = [
  {
    id: "sheet-1",
    level: "nivel-1",
    levelTitle: "Nível 01: Palavras com 2 Sílabas",
    word: "MA - LA",
    syllables: "2 Sílabas",
    imageIcon: "💼",
    bgColor: "bg-sky-50 border-sky-200",
    textColor: "text-sky-800",
    svgDrawing: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-sky-500 fill-none stroke-2">
        <rect x="25" y="35" width="50" height="40" rx="5" />
        <path d="M40,35 C40,25 60,25 60,35" strokeWidth="3" />
        <line x1="50" y1="35" x2="50" y2="75" strokeDasharray="3,3" />
      </svg>
    )
  },
  {
    id: "sheet-2",
    level: "nivel-1",
    levelTitle: "Nível 01: Palavras com 2 Sílabas",
    word: "BO - CA",
    syllables: "2 Sílabas",
    imageIcon: "👄",
    bgColor: "bg-sky-50 border-sky-200",
    textColor: "text-sky-800",
    svgDrawing: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-sky-500 fill-none stroke-2">
        <path d="M20,50 Q50,20 80,50 Q50,80 20,50 Z" />
        <path d="M20,50 Q50,55 80,50" />
      </svg>
    )
  },
  {
    id: "sheet-3",
    level: "nivel-2",
    levelTitle: "Nível 02: Palavras com 3 Sílabas",
    word: "SA - PA - TO",
    syllables: "3 Sílabas",
    imageIcon: "👟",
    bgColor: "bg-orange-50 border-orange-200",
    textColor: "text-orange-850",
    svgDrawing: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-orange-500 fill-none stroke-2">
        <path d="M20,70 L35,40 L70,40 L80,70 Z" />
        <circle cx="45" cy="50" r="3" />
        <circle cx="60" cy="50" r="3" />
      </svg>
    )
  },
  {
    id: "sheet-4",
    level: "nivel-2",
    levelTitle: "Nível 02: Palavras com 3 Sílabas",
    word: "CE - NOU - RA",
    syllables: "3 Sílabas",
    imageIcon: "🥕",
    bgColor: "bg-orange-50 border-orange-200",
    textColor: "text-orange-850",
    svgDrawing: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-orange-500 fill-none stroke-2">
        <path d="M30,30 L70,30 L50,80 Z" />
        <path d="M45,30 Q50,15 40,10" />
        <path d="M55,30 Q55,15 60,10" />
      </svg>
    )
  },
  {
    id: "sheet-5",
    level: "nivel-3",
    levelTitle: "Nível 03: Palavras com 4 Sílabas",
    word: "TAR - TA - RU - GA",
    syllables: "4 Sílabas",
    imageIcon: "🐢",
    bgColor: "bg-red-50 border-red-200",
    textColor: "text-red-900",
    svgDrawing: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-red-500 fill-none stroke-2">
        <circle cx="50" cy="50" r="28" />
        <circle cx="83" cy="50" r="7" />
        <line x1="30" y1="30" x2="70" y2="70" />
        <line x1="70" y1="30" x2="30" y2="70" />
      </svg>
    )
  },
  {
    id: "sheet-6",
    level: "letra-cursiva",
    levelTitle: "Nivel Escrita: Letra Cursiva",
    word: "Alfabeto Caligrafia",
    syllables: "Letras A-Z",
    imageIcon: "✏️",
    bgColor: "bg-amber-50 border-amber-200",
    textColor: "text-amber-900",
    svgDrawing: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-amber-500 fill-none stroke-2">
        <path d="M20,80 Q40,40 50,20 Q60,40 80,80" strokeWidth="2.5" />
        <path d="M35,60 Q50,60 65,60" />
        {/* Curvy letter decorations */}
        <path d="M15,80 C20,70 25,75 30,80" strokeDasharray="2,2" />
      </svg>
    )
  }
];

export default function NotebookCarousel() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredPages = activeTab === "all" ? PAGES : PAGES.filter(p => p.level === activeTab);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredPages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredPages.length) % filteredPages.length);
  };

  const currentPage = filteredPages[currentIndex] || filteredPages[0];

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-1.5 justify-center mb-6 px-1">
        {[
          { id: "all", label: "Ver Tudo" },
          { id: "nivel-1", label: "Nível 1" },
          { id: "nivel-2", label: "Nível 2" },
          { id: "nivel-3", label: "Nível 3" },
          { id: "letra-cursiva", label: "Cursiva & Bastão" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setCurrentIndex(0);
            }}
            className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-black transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-amber-500 text-amber-950 shadow-sm scale-102"
                : "bg-slate-100 text-slate-650 hover:bg-slate-205"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main card representation */}
      <div className="relative bg-white border-3 border-amber-200 rounded-3xl p-6 sm:p-8 shadow-md">
        {/* Binder side graphic simulating notebook holes */}
        <div className="absolute left-3 top-0 bottom-0 flex flex-col justify-around py-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div key={n} className="w-4 h-4 rounded-full bg-slate-200 border-2 border-slate-300 shadow-inner" />
          ))}
        </div>

        <div className="pl-6 flex flex-col sm:flex-row items-center gap-6">
          {/* Page Image Simulation */}
          <div className={`w-full sm:w-44 h-48 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed ${currentPage.bgColor} p-4 transition-all relative shrink-0`}>
            <span className="absolute top-2 right-3 font-mono text-[9px] text-slate-400">PÁG {currentIndex + 12}</span>
            <div className="text-4xl mb-2">{currentPage.imageIcon}</div>
            
            {/* SVG drawing place */}
            <div className="opacity-80 scale-105 my-1">
              {currentPage.svgDrawing}
            </div>

            <span className="text-center font-sans font-black text-slate-800 text-sm mt-2 font-mono">
              {currentPage.word}
            </span>
          </div>

          {/* Details column */}
          <div className="flex-1 space-y-4 text-center sm:text-left">
            <div>
              <span className="text-emerald-600 font-mono text-[10px] uppercase font-extrabold tracking-widest bg-emerald-50 px-2.5 py-1 rounded-full">
                {currentPage.syllables}
              </span>
              <h4 className="font-sans font-black text-slate-800 text-lg sm:text-xl tracking-tight leading-tight mt-2">
                {currentPage.levelTitle}
              </h4>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Cada caderno contém folhas com pautas caligráficas largas, setas de orientação de escrita e conexões visuais diretas para prender a atenção da criança.
            </p>

            {/* Checklist highlights */}
            <div className="space-y-2 text-left inline-block">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                <span>Pautas largas ultra legíveis em PDF</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                <span>Letras tracejadas com sentido de direção</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                <span>Simples e barato de imprimir sob demanda</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        {filteredPages.length > 1 && (
          <div className="flex justify-between items-center mt-6 pt-5 border-t border-slate-100">
            <span className="text-xs text-slate-400 font-mono">
              Slide {currentIndex + 1} de {filteredPages.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg transition-colors cursor-pointer"
                title="Página Anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg transition-colors cursor-pointer"
                title="Próxima Página"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
