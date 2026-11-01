import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesCatalog';
import { generateWhatsAppLink } from '../utils/pricing';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Tooltip bubble (Desktop only to prevent mobile occlusion) */}
      {showTooltip && (
        <div className="hidden md:flex bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-2xl shadow-2xl max-w-xs items-start gap-2 animate-fadeIn relative">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 bg-slate-800 text-slate-400 hover:text-white rounded-full p-0.5 border border-slate-700 cursor-pointer"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0 animate-pulse"></div>
          <div>
            <strong className="text-amber-400 block font-bold">Plantão Expresso Online</strong>
            <p className="text-[11px] text-slate-300 mt-0.5">
              Motoboy na Dutra 225 pronto para saída imediata.
            </p>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={generateWhatsAppLink("Olá! Preciso de um motoboy urgente. Vocês têm disponibilidade agora?")}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold p-3.5 sm:p-4 rounded-full shadow-2xl shadow-emerald-950/80 hover:shadow-emerald-600/50 hover:scale-105 transition-all"
        aria-label="Abrir conversa no WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
        <span className="hidden sm:inline font-bold text-xs pr-1">
          WhatsApp: (11) 95724-8425
        </span>
      </a>
    </div>
  );
};
