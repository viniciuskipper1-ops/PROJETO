import React, { useState } from "react";
import { FAQItem } from "../types";
import FacebookReviews from "./FacebookReviews";
import NotebookCarousel from "./NotebookCarousel";
import { 
  Check, 
  ChevronDown, 
  HelpCircle, 
  ArrowDown,
} from "lucide-react";

const childLearningImg = "https://i.imgur.com/mTS9Z3A.png";

export default function MainContent() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const scrollToCheckout = () => {
    // Wrap inside requestAnimationFrame to completely avoid layout thrashing / forced reflow
    requestAnimationFrame(() => {
      const el = document.getElementById("pricing-section-container");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  };

  const faqData: Omit<FAQItem, "id">[] = [
    {
      question: "Quais são as Formas de Pagamento?",
      answer: "Você pode pagar instantaneamente via Pix (com liberação imediata), Cartão de Crédito (também com liberação em segundos) ou Boleto Bancário (compensação em até 3 dias úteis)."
    },
    {
      question: "Como acesso a plataforma?",
      answer: "O acesso de download é enviado automaticamente para o seu e-mail logo após a confirmação do pagamento. Você receberá um link exclusivo com os arquivos em formato PDF para salvar no celular, tablet ou computador."
    },
    {
      question: "Tenho que pagar todo mês?",
      answer: "Não! O pagamento é único. Você investe apenas R$ 19,90 na Oferta Básica ou R$ 27,90 na Oferta Premium Completa uma única vez, e garante acesso vitalício a todo o material do Kit e a todas as futuras adições gratuitamente."
    },
    {
      question: "Posso tirar dúvidas?",
      answer: "Com certeza! Contamos com suporte profissional e humano via e-mail e canal de WhatsApp exclusivo para todos os compradores sanarem qualquer dúvida sobre as pautas e roteiro educativo."
    },
    {
      question: "Para quem é indicado o material?",
      answer: "Indicado para crianças de 2 a 12 anos em fase pré-escolar, inicial ou complementar de alfabetização. O método motor-fônico também funciona incrivelmente bem para crianças com diagnóstico de TDAH, Autismo (TEA), Dislexia ou atraso geral na expressão da fala."
    },
    {
      question: "Quais são os benefícios Grafismos Fonéticos?",
      answer: "Este método acelera em até 10x a memorização natural dos fonemas através da ativação simultânea da área de coordenação motora fina (esboço de traços) e da área de pronúncia auditiva. O resultado é leitura firme, leve e livre de traumas de cobrança tradicional."
    }
  ];

  return (
    <>
    <main id="main-content">
      {/* Down arrow decorator */}
      <div className="flex justify-center my-6 text-amber-500">
        <ArrowDown className="h-6 w-6 stroke-[3]" />
      </div>

      {/* 1. Combined Pain Points Section (Very precise and direct) */}
      <section className="py-10 bg-white border-t border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-red-950 text-[11px] sm:text-xs uppercase font-extrabold tracking-wider bg-red-100 border border-red-200 px-3 py-1.5 rounded-full inline-block">
              O Desafio dos Métodos Antigos
            </span>
            <h2 className="font-display font-black text-xl sm:text-2xl text-slate-900 tracking-tight leading-normal">
              As tarefas de leitura viraram um sofrimento diário?
            </h2>
            <p className="text-slate-800 text-xs sm:text-sm max-w-2xl mx-auto font-bold leading-relaxed">
              A falta de estímulo fônico-motor na fase certa força a criança a fixar a palavra pelo visual chapado em vez do som sequencial, gerando ansiedade e frustração profunda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 border border-dashed border-red-300 bg-red-50/10 rounded-2xl text-left">
              <span className="text-xl block mb-1">😩 Sofrimento Familiar</span>
              <p className="text-slate-700 text-wrap text-xs font-bold leading-relaxed">
                Sessões de choro, cansaço mental e brigas estressantes todas as noites sobre a lição de casa.
              </p>
            </div>

            <div className="p-4 border border-dashed border-red-300 bg-red-50/10 rounded-2xl text-left">
              <span className="text-xl block mb-1">📉 Bloqueio Escolar</span>
              <p className="text-slate-700 text-wrap text-xs font-bold leading-relaxed">
                A dificuldade em acompanhar a turma diminui drasticamente a autoestima e confiança do pequeno.
              </p>
            </div>

            <div className="p-4 border border-dashed border-red-300 bg-red-50/10 rounded-2xl text-left">
              <span className="text-xl block mb-1">🧩 Silabação Lenta</span>
              <p className="text-slate-700 text-wrap text-xs font-bold leading-relaxed">
                A memorização visual cega de palavras inteiras torna o processo arrastado e livre de real sentido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Unified How it Works section (Extremely elegant & objective) */}
      <section className="py-12 bg-[#F6F3EB] border-t border-b border-amber-100">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-indigo-900 text-xs font-extrabold uppercase tracking-widest block font-mono">ENGENHARIA DIDÁTICA</span>
            <h2 className="font-display font-black text-2xl text-slate-900 tracking-tight leading-tight font-sans">
              Por que as atividades de Grafismo Fonético funcionam?
            </h2>
            <p className="text-slate-800 text-xs sm:text-sm font-bold max-w-xl mx-auto leading-relaxed">
              O método associa o trajeto motor do lápis ao som do fonema em tempo real. O cérebro fixa o traçado e a pronúncia simultaneamente, acelerando em até 10x o aprendizado.
            </p>
          </div>

          {/* Swipeable notebook carousel wrapped in lightweight Suspense skeleton */}
          <React.Suspense fallback={
            <div className="w-full h-56 sm:h-64 rounded-2xl bg-amber-50/50 border border-amber-200/40 p-6 flex flex-col justify-center items-center gap-4 text-center">
              <div className="h-6 w-1/3 bg-slate-200 animate-pulse rounded-md" />
              <div className="h-4 w-2/3 bg-slate-200/80 animate-pulse rounded-md" />
              <div className="h-2 w-1/2 bg-slate-200/50 animate-pulse rounded-md" />
            </div>
          }>
            <NotebookCarousel />
          </React.Suspense>

          {/* Theoretical Details (File 1 / Blue and Green panels translation) */}
          <div className="space-y-6 max-w-4xl mx-auto mt-8">
            
            {/* Pruned Blue and Green cards merged into simple, highly-scannable bullet list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-sky-50 rounded-2xl border border-sky-200 p-5 space-y-2 text-left">
                <span className="font-extrabold text-[#0F172A] text-sm sm:text-base flex items-center gap-1.5 font-sans">🧠 Estímulo Cognitivo Ativo</span>
                <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-semibold">
                  Ativa sinapses simultâneas nas áreas motora fina e auditiva. A criança aprende sem traumas, decorando sons individuais de forma leve e divertida.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-5 space-y-2 text-left">
                <span className="font-extrabold text-[#062F1F] text-sm sm:text-base flex items-center gap-1.5 font-sans">📈 Resultados em Poucos Dias</span>
                <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-semibold">
                  Seu pequeno passa a identificar fonemas com facilidade, ganha confiança para soletrar novas palavras e sente orgulho ao folhear livrinhos.
                </p>
              </div>
            </div>

            <div className="text-center pt-2 max-w-sm mx-auto font-sans font-extrabold">
              <button
                onClick={scrollToCheckout}
                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wide rounded-xl cursor-pointer shadow-md font-sans font-extrabold"
              >
                Quero meu filho(a) Lendo!
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* What they learn Section (O Que Seu Filho Vai Aprender 📚) (File 3) */}
      <section className="py-12 bg-white border-t border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono uppercase bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full font-bold">Conteúdo Pedagógico</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight flex items-center justify-center gap-1.5">
              O Que Seu Filho Vai Aprender 📚
            </h2>
          </div>

          {/* 4 dash cards with optimized larger description text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="p-5 border-2 border-dashed border-amber-500/30 rounded-2xl bg-[#FCFAF5] flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-3xl block">🔤</span>
                <h3 className="font-sans font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                  Reconhecimento de Sons e Letras
                </h3>
                <p className="text-slate-800 text-sm leading-relaxed font-bold">
                  Cada som é associado diretamente à imagem real e ao formato da letra, fortalecendo as conexões cerebrais de forma sólida, rápida e permanente.
                </p>
              </div>
              <div className="pt-3">
                <span className="text-[10px] text-amber-950 bg-amber-200/85 border border-amber-300 font-mono tracking-wider uppercase px-2.5 py-1 rounded-md font-black inline-block">Modulo 01</span>
              </div>
            </div>

            <div className="p-5 border-2 border-dashed border-amber-500/30 rounded-2xl bg-[#FCFAF5] flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-3xl block">🧩</span>
                <h3 className="font-sans font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                  Formação de Palavras do Cotidiano
                </h3>
                <p className="text-slate-800 text-sm leading-relaxed font-bold">
                  Exercícios dinâmicos que transformam a união de fonemas e o alinhamento de sílabas curtas em uma experiência palpável, intuitiva e natural.
                </p>
              </div>
              <div className="pt-3">
                <span className="text-[10px] text-amber-950 bg-amber-200/85 border border-amber-300 font-mono tracking-wider uppercase px-2.5 py-1 rounded-md font-black inline-block">Modulo 02</span>
              </div>
            </div>

            <div className="p-5 border-2 border-dashed border-amber-500/30 rounded-2xl bg-[#FCFAF5] flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-3xl block">💡</span>
                <h3 className="font-sans font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                  Compreensão e Leitura Fluida
                </h3>
                <p className="text-slate-800 text-sm leading-relaxed font-bold">
                  Exercícios sequenciados que desenvolvem o sentido prático do leitor sobre o que de fato está escutando, garantindo segurança na oralização da fala.
                </p>
              </div>
              <div className="pt-3">
                <span className="text-[10px] text-amber-950 bg-amber-200/85 border border-amber-300 font-mono tracking-wider uppercase px-2.5 py-1 rounded-md font-black inline-block">Modulo 03</span>
              </div>
            </div>

            <div className="p-5 border-2 border-dashed border-amber-500/30 rounded-2xl bg-[#FCFAF5] flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-3xl block">🖼️</span>
                <h3 className="font-sans font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                  Guia Passo-a-Passo Ilustrado
                </h3>
                <p className="text-slate-800 text-sm leading-relaxed font-bold">
                  Tutoriais lúdicos e referências pontilhadas perfeitas para guiar o pequeno de maneira absolutamente leve, sem necessidade de supervisão pesada.
                </p>
              </div>
              <div className="pt-3">
                <span className="text-[10px] text-amber-950 bg-amber-200/85 border border-amber-300 font-mono tracking-wider uppercase px-2.5 py-1 rounded-md font-black inline-block">Modulo 04</span>
              </div>
            </div>

          </div>

          {/* Visual Presentation of the Sheets (File 4) */}
          <div className="border-t border-slate-100 pt-10 text-center space-y-6">
            <h3 className="font-display font-black text-slate-900 text-lg sm:text-xl">
              Conheça as atividades do Kit de Grafismo Fonético por dentro...
            </h3>
            
            <p className="text-slate-800 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-bold">
              O design fônico exclusivo do material guia o pequeno no sentido exato do traçado, estimulando a coordenação motora fina ao mesmo tempo que fixa o fonema pronunciado de forma lúdica.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-4 text-left">
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden p-5 flex flex-col justify-between space-y-4">
                <div className="rounded-2xl overflow-hidden bg-slate-150 border border-slate-100 relative">
                  <img 
                    src="https://i.imgur.com/qYPOBIO.png" 
                    alt="Páginas do Caderno Atividades" 
                    width={400}
                    height={208}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-52 object-contain bg-slate-50"
                  />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-slate-900 text-sm sm:text-base">Associação Fonema-Desenho</h4>
                  <p className="text-slate-700 text-sm mt-1.5 font-bold leading-relaxed">Cada fonema possui setas direcionais coloridas e ilustrações cativantes correspondentes ao universo dos pequenos.</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden p-5 flex flex-col justify-between space-y-4">
                <div className="rounded-2xl overflow-hidden bg-slate-150 border border-slate-100 relative">
                  <img 
                    src={childLearningImg} 
                    alt="Criança Praticando Método de Grafismo" 
                    width={400}
                    height={208}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-52 object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-slate-900 text-sm sm:text-base">Foco & Aprendizado Natural</h4>
                  <p className="text-slate-700 text-sm mt-1.5 font-bold leading-relaxed">Com apenas 10 minutos diários, a criança experimenta um progresso perceptível, gerando autonomia real na escrita e interpretação correta das palavras sem cansaço mental.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Social Proof / Facebook Comments Section (File 6) */}
      <section className="py-12 sm:py-16 bg-[#F6F3EB] border-t border-b border-slate-200/50">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs uppercase bg-[#3b5998] text-white font-extrabold px-3 py-1 rounded-full font-mono">Feedback da Comunidade</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
              Veja o que Pais e educadores dizem sobre o Kit de Grafismo Fonético
            </h2>
          </div>

          <FacebookReviews />

        </div>
      </section>

      {/* Content Checklist and levels descriptions (File 7) */}
      <section className="py-12 bg-[#F9F6EE] border-t border-b border-amber-200/80">
        <div className="max-w-4xl mx-auto px-4 space-y-8 text-center">
          
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold bg-amber-100 text-amber-900 border border-amber-200 px-3 py-1 rounded-full">ENTREGA COMPLETA</span>
            <h2 className="font-display text-slate-900 font-black text-2xl sm:text-3xl uppercase tracking-wider">
              VEJA TUDO QUE VOCÊ VAI RECEBER NO KIT DE ATIVIDADES
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
              Ao obter seu código de download hoje, você desbloqueia o acervo total em PDF estruturado em trilhas ordenadas de coordenação motora:
            </p>
          </div>

          {/* Graphic slider preview placeholder & Levels pills list */}
          <div className="bg-white border-2 border-dashed border-amber-300 p-6 sm:p-8 rounded-3xl max-w-2xl mx-auto space-y-4 shadow-lg">
            <span className="text-[10px] font-mono text-amber-800 uppercase tracking-widest block font-bold">Acesso Imediato ao Painel do Membro</span>
            <div className="flex flex-col gap-2.5 max-w-md mx-auto">
              
              <div className="bg-emerald-50 border border-emerald-200/60 text-emerald-800 font-extrabold py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-2xl text-[11px] sm:text-xs md:text-sm flex items-center justify-between gap-2 shadow-xs text-left">
                <span>📚 + DE 100 ATIVIDADES DE GRAFISMO FONÉTICO</span>
                <span className="text-[9px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold shrink-0">COMPLETO</span>
              </div>

              <div className="bg-amber-50 border border-amber-200/60 text-amber-800 font-extrabold py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-2xl text-[11px] sm:text-xs md:text-sm flex items-center justify-between gap-2 shadow-xs text-left">
                <span>📘 ATIVIDADES NÍVEL 01: 2 SÍLABAS</span>
                <span className="text-[9px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold shrink-0">PDF</span>
              </div>

              <div className="bg-sky-50 border border-sky-200/60 text-sky-800 font-extrabold py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-2xl text-[11px] sm:text-xs md:text-sm flex items-center justify-between gap-2 shadow-xs text-left">
                <span>📙 ATIVIDADES NÍVEL 02: 3 SÍLABAS</span>
                <span className="text-[9px] bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full font-bold shrink-0">PDF</span>
              </div>

              <div className="bg-red-50 border border-red-200/60 text-red-800 font-extrabold py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-2xl text-[11px] sm:text-xs md:text-sm flex items-center justify-between gap-2 shadow-xs text-left">
                <span>🟥 ATIVIDADES NÍVEL 03: 4 SÍLABAS</span>
                <span className="text-[9px] bg-red-100 text-red-800 px-2 py-0.5 rounded-full font-bold shrink-0">PDF</span>
              </div>

              <div className="bg-indigo-50 border border-indigo-200/60 text-indigo-800 font-extrabold py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-2xl text-[11px] sm:text-xs md:text-sm flex items-center justify-between gap-2 shadow-xs text-left">
                <span>📙 LETRA CURSIVA E BASTÃO</span>
                <span className="text-[9px] bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full font-bold shrink-0">A-Z</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Simple usage steps (File 8) */}
      <section className="py-12 max-w-5xl mx-auto px-4 text-center space-y-8">
        <h2 className="font-display font-black text-slate-900 text-xl sm:text-2xl">
          Muito simples de começar a utilizar!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          <div className="p-6 bg-white border border-amber-200/55 rounded-3xl shadow-xs space-y-3">
            <span className="text-4xl block">📩</span>
            <h3 className="font-sans font-extrabold text-slate-900 text-sm sm:text-base leading-tight">1. Chega no seu e-mail</h3>
            <p className="text-slate-700 text-sm leading-relaxed font-bold">
              Imediatamente após a confirmação simples de compra, você recebe o acesso digital com os arquivos completos organizados em formato PDF de alta resolução.
            </p>
          </div>

          <div className="p-6 bg-white border border-amber-200/55 rounded-3xl shadow-xs space-y-3">
            <span className="text-4xl block">🖨️</span>
            <h3 className="font-sans font-extrabold text-slate-900 text-sm sm:text-base leading-tight">2. Você Imprime Livremente</h3>
            <p className="text-slate-700 text-sm leading-relaxed font-bold">
              Imprima as folhas sob demanda em qualquer impressora em casa ou na papelaria, quantas vezes desejar! O acesso ao material é <strong>totalmente vitalício</strong>.
            </p>
          </div>

          <div className="p-6 bg-white border border-amber-200/55 rounded-3xl shadow-xs space-y-3">
            <span className="text-4xl block">✏️</span>
            <h3 className="font-sans font-extrabold text-slate-900 text-sm sm:text-base leading-tight">3. Os Pequenos Amam!</h3>
            <p className="text-slate-700 text-sm leading-relaxed font-bold">
              Mãos à obra pedagógica! Estimule seu pequeno, sintonize com carinho os 10 minutinhos diários, e celebre orgulhosamente as primeiras sílabas soletradas sozinhas!
            </p>
          </div>

        </div>

        <div className="bg-amber-900 text-white font-mono text-xs font-bold py-2.5 px-4 rounded-xl max-w-xs mx-auto">
          e ainda não acabou...
        </div>
      </section>

      {/* Bonus Area (File 9/10) */}
      <section className="py-12 sm:py-16 bg-[#FFFDF7] border-t border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider">
              Mega Bônus Limitado
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
              GARANTINDO SEU ACESSO HOJE, VOCÊ LEVA REAIS <span className="text-amber-600 underline">6 SUPER BÔNUS</span> 🎁
            </h2>
            <p className="text-slate-700 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-semibold">
              Preparamos complementos excelentes indispensáveis para enriquecer o vocabulário e a interatividade caligráfica do seu filho:
            </p>
          </div>

          {/* Grid of 6 bonuses with 3D styled cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Bonus 1 */}
            <div className="bg-white p-5 rounded-3xl border border-amber-150 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                {/* Simulated flat book cover */}
                <div className="h-44 w-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg shadow-md mx-auto flex flex-col justify-between p-3 text-white font-sans text-center relative border-r-4 border-amber-600">
                  <span className="text-[7px] font-mono tracking-widest font-extrabold text-amber-200">INOVE KIDS</span>
                  <div>
                    <span className="text-xs font-black block leading-tight mt-1">CADERNO</span>
                    <span className="text-[10px] font-bold block text-amber-100 mt-0.5">ALFABETO IMAGEM</span>
                  </div>
                  <span className="text-2xl">🍎🐱🦁</span>
                  <span className="text-[6px] font-mono select-none block opacity-60">KIT GRAFISMO FONÉTICO</span>
                </div>

                <div className="text-center pt-2">
                  <h3 className="font-sans font-black text-slate-900 text-sm font-extrabold">
                    Caderno Alfabeto com Imagem
                  </h3>
                  <p className="text-slate-700 text-xs mt-1.5 leading-normal font-bold">
                    Associa visualmente cada letra de forma lúdica, acelerando a fixação mnemônica.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-center space-y-1">
                <span className="text-xs text-slate-500 font-sans font-extrabold line-through block">De R$ 37,00</span>
                <span className="text-xs text-emerald-800 font-black uppercase tracking-wider bg-emerald-100/90 border border-emerald-200 px-2.5 py-0.5 rounded-full inline-block">HOJE: GRÁTIS</span>
              </div>
            </div>

            {/* Bonus 2 */}
            <div className="bg-white p-5 rounded-3xl border border-amber-150 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-44 w-32 bg-gradient-to-br from-indigo-500 to-sky-600 rounded-lg shadow-md mx-auto flex flex-col justify-between p-3 text-white font-sans text-center relative border-r-4 border-indigo-700">
                  <span className="text-[7px] font-mono tracking-widest font-extrabold text-indigo-200">INOVE KIDS</span>
                  <div>
                    <span className="text-xs font-black block leading-tight mt-1">QUEBRA</span>
                    <span className="text-[10px] font-bold block text-indigo-100 mt-0.5">CABEÇA LETRAS</span>
                  </div>
                  <span className="text-2xl">🧩🎯🏁</span>
                  <span className="text-[6px] font-mono select-none block opacity-60">KIT RECORTE & COLAGEM</span>
                </div>

                <div className="text-center pt-2">
                  <h3 className="font-sans font-black text-slate-900 text-sm font-extrabold">
                    Caderno Quebra-Cabeça Alfabeto
                  </h3>
                  <p className="text-slate-700 text-xs mt-1.5 leading-normal font-bold">
                    Atividades de encaixe e recorte que estimulam o foco visual e a coordenação motora fina.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-center space-y-1">
                <span className="text-xs text-slate-500 font-sans font-extrabold line-through block">De R$ 47,00</span>
                <span className="text-xs text-emerald-800 font-black uppercase tracking-wider bg-emerald-100/90 border border-emerald-200 px-2.5 py-0.5 rounded-full inline-block">HOJE: GRÁTIS</span>
              </div>
            </div>

            {/* Bonus 3 */}
            <div className="bg-white p-5 rounded-3xl border border-amber-150 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-44 w-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg shadow-md mx-auto flex flex-col justify-between p-3 text-white font-sans text-center relative border-r-4 border-emerald-700">
                  <span className="text-[7px] font-mono tracking-widest font-extrabold text-emerald-200">INOVE KIDS</span>
                  <div>
                    <span className="text-xs font-black block leading-tight mt-1">FORMANDO</span>
                    <span className="text-[10px] font-bold block text-emerald-100 mt-0.5">PALAVRAS ATIVO</span>
                  </div>
                  <span className="text-2xl">✍️📝🧠</span>
                  <span className="text-[6px] font-mono select-none block opacity-60">KIT EXERCÍCIO ATIVO</span>
                </div>

                <div className="text-center pt-2">
                  <h3 className="font-sans font-black text-slate-900 text-sm font-extrabold">
                    Formando Palavras
                  </h3>
                  <p className="text-slate-700 text-xs mt-1.5 leading-normal font-bold">
                    Sequência guiada inteligente para impulsionar a transição natural da sílaba isolada para vocabulários completos.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-center space-y-1">
                <span className="text-xs text-slate-500 font-sans font-extrabold line-through block">De R$ 57,00</span>
                <span className="text-xs text-emerald-800 font-black uppercase tracking-wider bg-emerald-100/90 border border-emerald-200 px-2.5 py-0.5 rounded-full inline-block">HOJE: GRÁTIS</span>
              </div>
            </div>

            {/* Bonus 4 */}
            <div className="bg-white p-5 rounded-3xl border border-amber-150 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-44 w-32 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg shadow-md mx-auto flex flex-col justify-between p-3 text-white font-sans text-center relative border-r-4 border-pink-700">
                  <span className="text-[7px] font-mono tracking-widest font-extrabold text-pink-200">INOVE KIDS</span>
                  <div>
                    <span className="text-xs font-black block leading-tight mt-1">80 ATIVIDADES</span>
                    <span className="text-[10px] font-bold block text-pink-100 mt-0.5">MELHORAR A ESCRITA</span>
                  </div>
                  <span className="text-2xl">✍️📝🎯</span>
                  <span className="text-[6px] font-mono select-none block opacity-60">COORDENAÇÃO MOTORA</span>
                </div>

                <div className="text-center pt-2">
                  <h3 className="font-sans font-black text-slate-900 text-sm font-extrabold">
                    80 Atividades Para Melhorar a Escrita
                  </h3>
                  <p className="text-slate-700 text-xs mt-1.5 leading-normal font-bold">
                    Atividades exclusivas focadas no desenvolvimento da escrita, coordenação motora fina e firmeza do traçado.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-center space-y-1">
                <span className="text-xs text-slate-500 font-sans font-extrabold line-through block">De R$ 39,00</span>
                <span className="text-xs text-emerald-800 font-black uppercase tracking-wider bg-emerald-100/90 border border-emerald-200 px-2.5 py-0.5 rounded-full inline-block">HOJE: GRÁTIS</span>
              </div>
            </div>

            {/* Bonus 5 */}
            <div className="bg-white p-5 rounded-3xl border border-amber-150 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-44 w-32 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg shadow-md mx-auto flex flex-col justify-between p-3 text-white font-sans text-center relative border-r-4 border-amber-700">
                  <span className="text-[7px] font-mono tracking-widest font-extrabold text-amber-200">INOVE KIDS</span>
                  <div>
                    <span className="text-xs font-black block leading-tight mt-1">ALFABETO</span>
                    <span className="text-[10px] font-bold block text-amber-100 mt-0.5">TRAÇADO EXTREMO</span>
                  </div>
                  <span className="text-2xl">🖊️✍️📐</span>
                  <span className="text-[6px] font-mono select-none block opacity-60">KIT CALIGRAFIA SENSORIAL</span>
                </div>

                <div className="text-center pt-2">
                  <h3 className="font-sans font-black text-slate-900 text-sm font-extrabold">
                    Caderno Alfabeto Traçado
                  </h3>
                  <p className="text-slate-700 text-xs mt-1.5 leading-normal font-bold">
                    Contornos fáceis e pautas largas perfeitas para desenvolver a caligrafia bastão bonita e firme desde cedo.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-center space-y-1">
                <span className="text-xs text-slate-500 font-sans font-extrabold line-through block">De R$ 27,00</span>
                <span className="text-xs text-emerald-800 font-black uppercase tracking-wider bg-emerald-100/90 border border-emerald-200 px-2.5 py-0.5 rounded-full inline-block">HOJE: GRÁTIS</span>
              </div>
            </div>

            {/* Bonus 6 */}
            <div className="bg-white p-5 rounded-3xl border border-amber-150 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-44 w-32 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-lg shadow-md mx-auto flex flex-col justify-between p-3 text-white font-sans text-center relative border-r-4 border-purple-700">
                  <span className="text-[7px] font-mono tracking-widest font-extrabold text-purple-200">INOVE KIDS</span>
                  <div>
                    <span className="text-xs font-black block leading-tight mt-1">CARINHAS</span>
                    <span className="text-[10px] font-bold block text-purple-100 mt-0.5">EXPRESSIVAS FELIZ</span>
                  </div>
                  <span className="text-2xl">😊🐱🎭</span>
                  <span className="text-[6px] font-mono select-none block opacity-60">KIT INTELIGÊNCIA EMOCIONAL</span>
                </div>

                <div className="text-center pt-2">
                  <h3 className="font-sans font-black text-slate-900 text-sm font-extrabold">
                    Caderno Alfabeto com Carinhas
                  </h3>
                  <p className="text-slate-700 text-xs mt-1.5 leading-normal font-bold">
                    Treina a identificação emocional das crianças associando sílabas e rostos simpáticos.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-center space-y-1">
                <span className="text-xs text-slate-500 font-sans font-extrabold line-through block">De R$ 49,00</span>
                <span className="text-xs text-emerald-800 font-black uppercase tracking-wider bg-emerald-100/90 border border-emerald-200 px-2.5 py-0.5 rounded-full inline-block">HOJE: GRÁTIS</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. About the Author Section (Conheça a autora Beatriz Souza) */}
      <section className="py-12 bg-white border-t border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-amber-50/30 rounded-3xl border border-amber-200/50 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
            
            {/* Author image/portrait */}
            <div className="shrink-0 relative">
              <div className="absolute inset-0 bg-amber-400 rounded-2xl rotate-3 scale-102 opacity-40 z-0" />
              <img 
                src="https://i.imgur.com/tZWfM8V.png" 
                alt="Beatriz Souza - Autora" 
                width={224}
                height={224}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-2xl border-4 border-white shadow-lg relative z-10"
              />
            </div>

            {/* Author text info */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <span className="text-emerald-950 font-black uppercase text-[10px] sm:text-xs tracking-wider bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-full inline-block">
                Quem criou o método
              </span>
              
              <div className="space-y-1">
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  Conheça a Autora
                </h2>
                <h3 className="text-amber-600 font-extrabold text-base sm:text-lg">
                  Beatriz Souza
                </h3>
              </div>

              <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-bold">
                Pedagoga por vocação com especialidade em Neuroeducação Infantil, Beatriz dedica sua vida a aproximar as pautas da linguagem e a fonética ao desenvolvimento saudável das crianças de forma leve, divertida e sem pressões mecânicas tradicionais.
              </p>

              <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-bold">
                Após presenciar exaustivas sessões de choro em tarefas cotidianas e o travamento na autoestima infantil, ela elaborou o <strong className="text-slate-900 font-extrabold">Kit Grafismo Fonético</strong>. Um método comprovado de autoestimulação fônico-motora para acelerar em até 10x a alfabetização natural dos pequenos sem cansar a mente deles.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Recapitulation of offer & Pricing section (File 11) */}
      <section id="pricing-section-container" className="py-12 sm:py-20 max-w-5xl mx-auto px-4 space-y-8 scroll-mt-24">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase bg-amber-500 text-amber-950 font-black px-3.5 py-1 rounded-full font-mono tracking-wider animate-pulse">ESCOLHA A SUA OFERTA</span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
            Selecione a Melhor Opção para o Seu Filho(a)
          </h2>
          <p className="text-slate-605 text-slate-700 text-sm font-bold sm:text-base">
            Libere o acesso imediato em formato PDF de alta resolução. 100% livre de riscos com a nossa garantia de 7 dias.
          </p>
        </div>

        {/* Both Cards Container - Stacked with clean margins */}
        <div className="space-y-10 max-w-3xl mx-auto">
          
          {/* Card 1: OFERTA PREMIUM */}
          <div className="bg-white rounded-3xl border-3 border-amber-400 shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
            
            {/* Badge for Premium */}
            <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-black text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm z-20">
              Oferta Premium ★ Completo + 6 bônus
            </div>

            {/* Left panel of the pricing block */}
            <div className="p-6 sm:p-8 pt-14 md:pt-14 flex-1 space-y-5 bg-amber-50/15 border-b md:border-b-0 md:border-r border-slate-100">
              <h3 className="font-sans font-black text-slate-900 text-lg sm:text-xl">O Que Está Incluso na Oferta Premium:</h3>
              <ul className="space-y-3">
                {[
                  "Kit Principal de Grafismo Fonético (+100 atividades lúdicas)",
                  "Livro Didático Completo de Alfabetização por Grafismo",
                  "Bônus 1: Caderno Alfabeto com Imagem (Mnemônica visual)",
                  "Bônus 2: Caderno Quebra-Cabeça Alfabeto (Coordenação motora)",
                  "Bônus 3: Formando Palavras (Transição fônica suave)",
                  "Bônus 4: 80 Atividades Para Melhorar a Escrita (Firmeza e traçado)",
                  "Bônus 5: Caderno Alfabeto Traçado Extremo (Caligrafia bastão)",
                  "Bônus 6: Caderno Alfabeto com Carinhas Expressivas (Expressão emocional)",
                  "Acesso vitalício em PDF de alta resolução para impressão livre"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start text-xs sm:text-sm text-slate-700 font-bold">
                    <Check className="h-4.5 w-4.5 text-emerald-600 bg-emerald-50 p-0.5 rounded-full shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right panel of the pricing block focusing on value */}
            <div className="p-6 sm:p-8 w-full md:w-80 shrink-0 flex flex-col justify-center items-center text-center bg-slate-50/90 space-y-5 pt-12 md:pt-12 border-t md:border-t-0">
              
              {/* Anchor Pricing (Valor Real de R$ 197,90 - Extremamente Destacado) */}
              <div className="w-full bg-red-50 border border-red-200 rounded-2xl p-3 sm:p-4 text-center shadow-xs">
                <span className="text-red-700 text-[10px] font-black uppercase tracking-wider block font-sans">
                  🚨 PREÇO OFICIAL SEM DESCONTO:
                </span>
                <span className="text-red-500 text-2xl font-extrabold line-through block mt-1">
                  R$ 197,90
                </span>
                <span className="text-red-700 text-[11px] font-black block mt-1.5 uppercase tracking-wide bg-red-100 rounded-md py-1 px-2">
                  Você Economiza R$ 170,00 HOJE!
                </span>
              </div>

              {/* Main Selling Price (R$ 27,90 à vista) */}
              <div className="w-full">
                <span className="text-emerald-700 text-[11px] font-black uppercase tracking-widest block">
                  ⚡ OFERTA ÚNICA DE HOJE ⚡
                </span>
                <div className="flex items-baseline justify-center gap-1 mt-1 text-emerald-600">
                  <span className="text-xl font-extrabold">R$</span>
                  <span className="text-5xl sm:text-6xl font-black tracking-tight drop-shadow-xs">27,90</span>
                  <span className="text-sm font-black text-emerald-700 ml-1">à vista</span>
                </div>
              </div>

              {/* Installments Option: Highlighted underneath */}
              <div className="w-full bg-amber-50 border-2 border-dashed border-amber-400 rounded-2xl p-3.5 text-center shadow-xs">
                <span className="text-amber-950 text-[10px] font-black block uppercase tracking-wider">
                  ⚠️ OU PARCELE EM APENAS
                </span>
                <span className="text-slate-900 text-xl font-black block mt-0.5">
                  3x de R$ 9,82
                </span>
                <span className="text-slate-600 text-[10.5px] font-semibold block mt-1.5 leading-normal">
                  (Menos de R$ 0,33 por dia para garantir o futuro do seu filho!)
                </span>
              </div>

              {/* Simulated Checkout Redirection with safe action button */}
              <div className="w-full space-y-2">
                <a 
                  href="https://pay.hotmart.com/H105979275E?checkoutMode=10" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-2xl block shadow-lg cursor-pointer font-extrabold text-center"
                >
                  GARANTIR OFERTA PREMIUM
                </a>
                <span className="text-[10px] text-slate-400 font-bold block bg-amber-100/50 py-1.5 rounded-lg border border-amber-200/40">
                  ⚠️ Economize R$ 170,00 garantindo hoje!
                </span>
              </div>

              {/* Payment methods icons */}
              <div className="pt-2 border-t border-slate-200/60 w-full">
                <span className="text-[9px] text-slate-400 font-mono block uppercase mb-2">Formas de Pagamento</span>
                <div className="flex justify-center flex-wrap gap-2 text-[10px] text-slate-600 font-bold bg-white px-2 py-1 rounded-lg border border-slate-200/50">
                  <span>⚡ PIX</span>
                  <span>•</span>
                  <span>💳 CARTÃO</span>
                  <span>•</span>
                  <span>📄 BOLETO</span>
                </div>
              </div>
            </div>

          </div>

          {/* Card 2: OFERTA BÁSICA / PRODUTO PRINCIPAL ONLY */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col md:flex-row relative">
            
            {/* Badge for Basic */}
            <div className="absolute top-4 left-4 bg-slate-100 text-slate-600 font-black text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm z-20">
              Oferta Essencial
            </div>

            {/* Left panel */}
            <div className="p-6 sm:p-8 pt-14 md:pt-14 flex-1 space-y-5 bg-slate-50/5 border-b md:border-b-0 md:border-r border-slate-100">
              <h3 className="font-sans font-black text-slate-850 text-slate-900 text-lg sm:text-xl">Produto Principal:</h3>
              <ul className="space-y-2.5">
                {[
                  "Kit Principal de Grafismo Fonético (+100 atividades lúdicas)",
                  "Livro Didático de Grafismo Fonético Integrado",
                  "Acesso vitalício em PDF de alta resolução"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start text-xs sm:text-sm text-slate-700 font-bold">
                    <Check className="h-4.5 w-4.5 text-emerald-600 bg-emerald-50 p-0.5 rounded-full shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
                
                {/* Visual indications of what is excluded explicitly */}
                {[
                  "Sem Bônus 1: Caderno Alfabeto com Imagem",
                  "Sem Bônus 2: Caderno Quebra-Cabeça Alfabeto",
                  "Sem Bônus 3: Formando Palavras",
                  "Sem Bônus 4: 80 Atividades Para Melhorar a Escrita",
                  "Sem Bônus 5: Caderno Alfabeto Traçado Extremo",
                  "Sem Bônus 6: Caderno Alfabeto com Carinhas Expressivas"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start text-xs sm:text-sm text-slate-400 font-medium line-through">
                    <span className="text-red-500 font-black text-xs block h-4 w-4 shrink-0 text-center select-none">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right panel focusing on value */}
            <div className="p-6 sm:p-8 w-full md:w-80 shrink-0 flex flex-col justify-center items-center text-center bg-slate-50/40 space-y-6 pt-14 md:pt-14">
              <div>
                <span className="text-slate-400 text-xs font-mono line-through block uppercase">De R$ 97,00 por</span>
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest block mt-1">Apenas à vista por</span>
                <div className="flex items-baseline justify-center gap-1 mt-0.5 text-slate-800">
                  <span className="text-lg font-extrabold">R$</span>
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">19,90</span>
                </div>
                <span className="text-slate-500 text-xs block font-bold mt-2 text-red-650 bg-red-50/60 px-2.5 py-1 rounded-full border border-red-100/40">
                  ❌ Não acompanha os 6 bônus
                </span>
              </div>

              {/* Simulated Checkout Redirection with safe action button */}
              <div className="w-full space-y-2">
                <a 
                  href="https://pay.hotmart.com/B105979214S?checkoutMode=10" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-4 bg-slate-700 hover:bg-slate-850 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-2xl block shadow-md cursor-pointer text-center font-extrabold"
                >
                  GARANTIR ESSENCIAL
                </a>
              </div>

              {/* Payment methods icons */}
              <div className="pt-2 border-t border-slate-200/60 w-full">
                <span className="text-[9px] text-slate-400 font-mono block uppercase mb-1">Pagamento Autenticado</span>
                <div className="text-[10px] text-slate-500 font-bold">PIX • CARTÃO • BOLETO</div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Satisfaction Guarantee Section (File 12) */}
      <section className="py-12 sm:py-16 bg-[#FFFDF6] border-t border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          
          <div className="relative inline-block mx-auto mb-2">
            {/* Real Golden Guarantee Seal Image - Optimized with smart suffix to load instantly */}
            <img 
              src="https://i.imgur.com/iZvksAX.png" 
              alt="Garantia de 7 Dias" 
              width={128}
              height={128}
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="mx-auto h-28 sm:h-32 w-auto object-contain"
            />
          </div>

          <h3 className="font-display font-black text-slate-900 text-xl sm:text-2xl uppercase tracking-wider">
            GARANTIA DE SATISFAÇÃO TOTAL INCONDICIONAL
          </h3>

          <p className="text-slate-705 text-slate-800 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-bold">
            Estamos tão absolutamente convictos da eficácia e prazer que o Kit Atividades Grafismo Fonético trará ao seu filho nas primeiras horas, que garantimos satisfação absoluta por um prazo total de <strong>7 dias</strong> corridos após o faturamento.
          </p>

          <p className="text-slate-650 text-slate-700 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            Se, por qualquer motivo que seja, você concluir de boa fé que o material em PDF não se adaptou ou que a rotina do pequenino não teve sinergia imediata, basta entrar em contato com o suporte e devolveremos 100% de cada centavo — sem pegadinhas burocráticas ou desculpas evasivas.
          </p>

          <div className="flex justify-center flex-wrap gap-4 pt-4 shrink-0">
            <span className="flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-full">
              🛡️ SSL Compra Criptografada
            </span>
            <span className="flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-full">
              🔒 Site Blindado Protegido
            </span>
            <span className="flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-full">
              📦 Download 100% Liberado no E-mail
            </span>
          </div>

        </div>
      </section>

      {/* FAQ Section (File 13) */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 space-y-8">
        
        <div className="text-center space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 font-mono">SUPORTE & INFORMAÇÃO</span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-semibold">
            Abaixo respondemos às principais dúvidas enviadas pela nossa comunidade de mamães e papais preocupados:
          </p>
        </div>

        {/* State Accordion itemizer */}
        <div className="space-y-3.5 max-w-3xl mx-auto">
          {faqData.map((item, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex justify-between items-center gap-3 font-bold text-slate-800 text-sm sm:text-base cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="h-4.5 w-4.5 shrink-0 text-amber-600" />
                    {item.question}
                  </span>
                  <ChevronDown className={`h-4.5 w-4.5 shrink-0 text-slate-400 ${isOpen ? "rotate-180 text-amber-500" : ""}`} />
                </button>

                <div
                  className={`grid ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "hidden"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-4 pt-1 border-t border-slate-100 text-slate-700 text-sm leading-relaxed sm:text-base bg-amber-50/5 font-semibold">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* Primary Conversion floating banner or lower section trigger */}
      <section className="bg-amber-500 py-10 px-4 text-center text-amber-950">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-xl">🏆</span>
          <h3 className="font-display font-black text-xl sm:text-2xl shrink-1 tracking-tight leading-none">
            GARANTA AGORA O FUTURO DA LEITURA DO SEU FILHO!
          </h3>
          <p className="text-sm font-bold text-amber-950 leading-relaxed max-w-lg mx-auto">
            Não prolongue a frustração fônica na alfabetização dele. Libere o acesso a mais de 100 atividades lúdicas e garanta os 6 bônus exclusivos hoje mesmo!
          </p>
          <button
            onClick={scrollToCheckout}
            className="px-6 py-3 bg-slate-950 hover:bg-slate-900 text-white font-black text-xs uppercase tracking-wider rounded-xl cursor-pointer shadow-md inline-flex items-center gap-1.5"
          >
            Quero Começar Hoje!
          </button>
        </div>
      </section>

    </main>

    {/* Footer Branding section */}
    <footer className="bg-[#FAF8F2] text-slate-500 py-10 px-4 border-t border-amber-200/60 shadow-inner">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-1.5">
          <span className="bg-amber-100 text-amber-800 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-amber-200 inline-block font-mono">
            KIT EDUCAÇÃO KIDS
          </span>
          <p className="font-sans font-bold text-slate-800 text-sm sm:text-base leading-tight mt-1">
            Editora Inove Kids Ltda.
          </p>
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>

        <div className="text-center space-y-1">
          <p className="text-[10px] text-slate-500 max-w-sm leading-relaxed">
            Isenção de responsabilidade: Os resultados de aceleração de leitura dependem das peculiaridades de desenvolvimento motor e consistência de uso do material sugerido pelas orientações didáticas.
          </p>
          <p className="text-[9px] text-slate-500 hover:text-slate-700 transition-colors">
            Termos de Uso • Política de Privacidade
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
