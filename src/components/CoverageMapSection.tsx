import React from 'react';
import { MapPin, Phone, ShieldCheck, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, SERVICES_CATALOG } from '../data/servicesCatalog';
import { generateWhatsAppLink } from '../utils/pricing';

interface CoverageMapSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const CoverageMapSection: React.FC<CoverageMapSectionProps> = ({
  onSelectService
}) => {
  const hubs = [
    { name: "Internacional Shopping / Dutra 225", eta: "Saída Imediata", desc: "Matriz operacional e base de saída imediata para Guarulhos e Dutra." },
    { name: "Polo do Brás & Pari", eta: "Coleta Rápida", desc: "Coleta em confecções, fardos de pronta-entrega e despacho em ônibus de sacoleiros." },
    { name: "Shopping Center Norte & Lar Center", eta: "Despacho Ágil", desc: "Retirada em lojas, quiosques e feiras do Expo Center Norte na Zona Norte." },
    { name: "Tatuapé & Anália Franco", eta: "Envio Prioritário", desc: "Torres comerciais (Platina 220), shopping metrô e cartórios na Radial Leste." },
    { name: "Penha, Vila Matilde & Vila Carrão", eta: "Coleta Rápida", desc: "Comércio tradicional, imobiliárias, Tiquatira e Parque Ecológico do Tietê." },
    { name: "Santana & Fórum Regional", eta: "Despacho Ágil", desc: "Polos clínicos na Av. Braz Leme, Fórum e cartórios na Voluntários da Pátria." },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto pt-6 space-y-6">
      
      {/* Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              <Navigation className="w-3.5 h-3.5" /> Raio de Atendimento
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-white tracking-tight">
              Região de Cobertura e Principais Hubs Mapeados
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl">
              Nossa base operacional na pista lateral da Rodovia Presidente Dutra 225 conecta com rapidez máxima Guarulhos, Brás, Zona Norte e Zona Leste.
            </p>
          </div>

          <div className="text-xs text-slate-400 shrink-0">
            <span className="text-emerald-400 font-bold block flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Base física homologada
            </span>
            <span>Vila Itapegica, Guarulhos - SP</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Map Preview Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl group">
              <img 
                src="/assets/aistudio/image_180ec8bb.png" 
                alt="Mapa da Região Atendida - Internacional Shopping Guarulhos, Santana, Brás, Tatuapé" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md border border-slate-800 py-2 px-3.5 rounded-xl text-xs text-slate-300 flex items-center justify-between">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
                  Ponto de Saída: Rod. Pres. Dutra 225
                </span>
                <span className="text-amber-400 font-semibold">Coleta rápida e entrega sob demanda</span>
              </div>
            </div>
          </div>

          {/* Hub list */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Principais Polos Atendidos Diariamente:
            </h3>

            {hubs.map((hub, idx) => (
              <div 
                key={idx}
                className="bg-slate-950/70 border border-slate-800/80 p-3.5 rounded-xl space-y-1"
              >
                <div className="flex items-center justify-between text-xs">
                  <strong className="text-white font-bold">{hub.name}</strong>
                  <span className="text-[11px] font-bold text-emerald-400">{hub.eta}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {hub.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};
