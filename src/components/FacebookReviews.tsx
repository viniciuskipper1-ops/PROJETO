import React, { useState } from "react";
import { ThumbsUp, ShieldCheck, Star } from "lucide-react";

interface Comment {
  id: string;
  name: string;
  avatar: string;
  comment: string;
  likes: number;
  time: string;
  userLiked?: boolean;
  badge?: string;
  badgeColor?: string;
}

const INITIAL_COMMENTS: Comment[] = [
  {
    id: "comment-1",
    name: "Gabriela Azevedo",
    avatar: "https://i.imgur.com/O4KvgZk.jpg",
    comment: "Meu filho de 5 anos mal juntava duas letras e só se frustrava. Em **exatos 12 dias** com o Grafismo Fonético, ele simplesmente deslanchou e **começou a ler e escrever sozinho**. É chocante o resultado!",
    likes: 47,
    time: "28 min",
    badge: "🔥 ALFABETIZAÇÃO EM EXATOS 12 DIAS!",
    badgeColor: "bg-red-50 text-red-700 border-red-200"
  },
  {
    id: "comment-2",
    name: "Ana Oliveira",
    avatar: "https://i.imgur.com/jyVWN27.jpg",
    comment: "Gastei fortunas com fonoaudiologia e não tive metade do progresso que esse kit entregou em **apenas duas semanas**. Minha filha de 4 anos de fato abandonou as telas para ficar brincando de ler no caderno!",
    likes: 38,
    time: "55 min",
    badge: "💸 ECONOMIA COM TRATAMENTOS",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    id: "comment-3",
    name: "Marisa Correia",
    avatar: "https://i.imgur.com/gcXxdDz.jpg",
    comment: "Fiquei desconfiada pelo preço, mas foi o melhor investimento que fiz. Meu filho superou o atraso de fala e escrita **em poucos dias**, recuperando toda a sua confiança e interesse em aprender.",
    likes: 52,
    time: "1 h",
    badge: "🏆 EVOLUÇÃO RÁPIDA E REAL",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200"
  }
];

export default function FacebookReviews() {
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);

  const handleLike = (id: string) => {
    setComments((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const userLiked = !c.userLiked;
          return {
            ...c,
            userLiked,
            likes: userLiked ? c.likes + 1 : c.likes - 1
          };
        }
        return c;
      })
    );
  };

  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="text-amber-900 font-extrabold bg-amber-100/60 px-1 rounded">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl border-2 border-amber-100 shadow-xl p-4 sm:p-7">
      {/* FB Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3.5 border-b border-slate-100 pb-4 mb-5">
        <div>
          <span className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-tight">Depoimentos Reais de Impacto</span>
          <div className="flex flex-wrap items-center gap-1.5 mt-1">
            <span className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-4 w-4 fill-amber-400 stroke-amber-500" />
              ))}
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-slate-700">(4.9/5 estrelas baseado em 183 pais ativos)</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-emerald-700 font-extrabold bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-200 shrink-0 select-none">
          <ShieldCheck className="h-4.5 w-4.5" />
          Compra Verificada Cem por Cento
        </div>
      </div>

      {/* Main Comment Area */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3 p-3.5 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-xs hover:border-amber-300 transition-colors">
            {/* Avatar block */}
            <div className="shrink-0">
              <img
                src={comment.avatar}
                alt={comment.name}
                referrerPolicy="no-referrer"
                className="h-11 w-11 sm:h-14 sm:w-14 rounded-full object-cover border-2 border-white shadow-md"
              />
            </div>

            {/* Comment details */}
            <div className="flex-1 min-w-0 space-y-2">
              <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1">
                <div className="space-y-0.5 min-w-0">
                  <span className="font-extrabold text-slate-900 text-base sm:text-lg hover:underline cursor-pointer block truncate">
                    {comment.name}
                  </span>
                  <div className="flex flex-wrap items-center gap-1">
                    <span className="flex items-center gap-0.5 shrink-0">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="h-3 w-3 fill-amber-400 stroke-amber-500" />
                      ))}
                    </span>
                    <span className="text-[11px] sm:text-xs text-emerald-750 font-bold">Recomendou o produto</span>
                  </div>
                </div>
                <span className="text-slate-500 text-xs sm:text-sm font-semibold whitespace-nowrap">{comment.time}</span>
              </div>

              {/* Outstanding Badge */}
              {comment.badge && (
                <div className="flex flex-wrap max-w-full">
                  <span className={`text-[10px] sm:text-xs font-black tracking-wider py-0.5 px-2 rounded-md border break-all sm:break-normal ${comment.badgeColor}`}>
                    {comment.badge}
                  </span>
                </div>
              )}

              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-semibold break-words">
                {renderFormattedText(comment.comment)}
              </p>

              {/* Interactions line */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 mt-3 pt-2.5 border-t border-slate-200/80 text-slate-500 text-xs sm:text-sm font-bold">
                <div className="flex gap-4">
                  <button
                    onClick={() => handleLike(comment.id)}
                    className={`flex items-center gap-1 transition-colors hover:text-blue-600 ${
                      comment.userLiked ? "text-blue-600 font-extrabold" : ""
                    }`}
                  >
                    <ThumbsUp className={`h-4 w-4 ${comment.userLiked ? "fill-current" : ""}`} />
                    {comment.userLiked ? "Você curtiu" : "Curtir"}
                  </button>
                </div>

                {comment.likes > 0 && (
                  <div className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-600 bg-white px-2 py-0.5 rounded-full shadow-xs border border-slate-100">
                    <span className="flex h-3 w-3 items-center justify-center rounded-full bg-blue-500 text-white font-sans text-[7px]">👍</span>
                    <span className="whitespace-nowrap">{comment.likes} curtiram</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center py-2 border-t border-slate-200 mt-4">
        <span className="text-xs text-slate-400 font-mono flex items-center justify-center gap-1">
          💬 Depoimentos reais retirados dos nossos canais oficiais
        </span>
      </div>
    </div>
  );
}
