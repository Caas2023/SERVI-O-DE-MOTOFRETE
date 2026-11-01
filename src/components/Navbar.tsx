import React from 'react';
import { Bike, Phone, ShieldCheck, MapPin, Building2, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesCatalog';
import { generateWhatsAppLink } from '../utils/pricing';

interface NavbarProps {
  onNavigateHome: () => void;
  onOpenDirectory: () => void;
  activeServiceId: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateHome,
  onOpenDirectory,
  activeServiceId
}) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800">
      
      {/* Top Institutional Line (Solid, Professional, Clean - Hidden on mobile) */}
      <div className="hidden sm:block bg-slate-900 border-b border-slate-800/80 text-[11px] text-slate-300 py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="truncate">
              <strong>Base Operacional:</strong> {COMPANY_INFO.shortAddress}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <a 
              href={`tel:${COMPANY_INFO.rawPhone}`} 
              className="text-amber-400 hover:underline flex items-center gap-1 font-bold"
            >
              <Phone className="w-3 h-3" /> {COMPANY_INFO.phone}
            </a>
            <span className="text-emerald-400 hidden sm:inline flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Google Verificado
            </span>
          </div>
        </div>
      </div>

      {/* Main Enterprise Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <button 
          onClick={onNavigateHome}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <img 
            src="/favicon.svg" 
            alt="Logo Oficial - Motoboy e Logística Express" 
            className="w-11 h-11 rounded-xl shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform shrink-0 border border-slate-800"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-base sm:text-lg tracking-tight text-white group-hover:text-amber-400 transition">
                MOTOBOY & LOGÍSTICA EXPRESS
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Guarulhos • Brás • Tatuapé • Zona Norte • SP
            </p>
          </div>
        </button>

        {/* Links & WhatsApp CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDirectory}
            className="hidden md:inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-slate-800 hover:bg-slate-900 transition cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>50 Bairros & Rotas</span>
          </button>

          {activeServiceId && (
            <button
              onClick={onNavigateHome}
              className="text-xs text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-slate-800 hover:bg-slate-900 transition cursor-pointer"
            >
              Início
            </button>
          )}

          <a
            href={generateWhatsAppLink("Olá! Gostaria de solicitar um motoboy agora.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02]"
          >
            <Phone className="w-4 h-4 fill-slate-950" />
            <span>Pedir no WhatsApp</span>
          </a>
        </div>

      </div>
    </header>
  );
};
