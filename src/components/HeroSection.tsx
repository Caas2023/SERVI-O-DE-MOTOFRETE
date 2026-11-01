import React from 'react';
import { 
  Bike, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Zap,
  Building,
  Package
} from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesCatalog';
import { generateWhatsAppLink } from '../utils/pricing';

interface HeroSectionProps {
  onOpenCalculator: () => void;
  onOpenDirectory: () => void;
  onOpenMap: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCalculator,
  onOpenDirectory,
  onOpenMap,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 py-16 lg:py-24">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Google Profile Verified Pill */}
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-full px-4 py-1.5 shadow-md">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-semibold text-slate-300">
                Perfil de Empresa Verificado no Google
              </span>
              <span className="text-slate-600">•</span>
              <div className="flex items-center text-amber-400 text-xs font-bold gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>4.9</span>
                <span className="text-slate-500 text-[11px]">(148 avaliações)</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Motoboy Express em <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Guarulhos, Brás</span>, Tatuapé e Região
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Base operacional estratégica na <strong className="text-white">Rod. Pres. Dutra 225</strong> (ao lado do Internacional Shopping Guarulhos). Coleta rápida em <strong className="text-amber-400">até 20 minutos</strong>, transporte de encomendas, documentos, retiradas em shoppings e compras de atacado no Brás.
            </p>

            {/* Key feature pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-slate-300 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 p-2.5 rounded-xl">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Saída da Dutra em 10 min</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 p-2.5 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Protocolo digital com foto</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 p-2.5 rounded-xl col-span-2 sm:col-span-1">
                <Building className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Faturamento quinzenal PJ</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={generateWhatsAppLink("Olá! Preciso de um motoboy urgente. Qual o tempo para coleta no meu endereço?")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-black text-base px-8 py-4 rounded-xl shadow-xl shadow-emerald-950/60 hover:shadow-emerald-600/40 transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 fill-white" />
                Pedir no WhatsApp: (11) 95724-8425
              </a>

              <button
                onClick={onOpenCalculator}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-sm px-6 py-4 rounded-xl border border-amber-500/30 hover:border-amber-500/60 transition"
              >
                Simular Rota e Preço
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick links to regions */}
            <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-slate-500 font-semibold">Atendimento direto:</span>
              <button onClick={onOpenMap} className="hover:text-amber-400 underline cursor-pointer">
                Internacional Shopping
              </button>
              <span>•</span>
              <button onClick={onOpenMap} className="hover:text-amber-400 underline cursor-pointer">
                Polo Brás & Pari
              </button>
              <span>•</span>
              <button onClick={onOpenMap} className="hover:text-amber-400 underline cursor-pointer">
                Shopping Center Norte
              </button>
              <span>•</span>
              <button onClick={onOpenMap} className="hover:text-amber-400 underline cursor-pointer">
                Tatuapé
              </button>
              <span>•</span>
              <button onClick={onOpenDirectory} className="text-amber-400 font-bold hover:underline cursor-pointer">
                +50 Bairros
              </button>
            </div>
          </div>

          {/* Right Column: Google Profile Business Card & Quick Action Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* Google Business Profile Snapshot Card */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-black text-xl text-white">
                      {COMPANY_INFO.name}
                    </h3>
                  </div>
                  <p className="text-xs text-amber-400 font-medium mt-0.5">
                    {COMPANY_INFO.category}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                      <ShieldCheck className="w-3.5 h-3.5" /> Você gerencia este Perfil da Empresa
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Bike className="w-6 h-6" />
                </div>
              </div>

              {/* Business Details from Google Profile */}
              <div className="py-4 space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-medium">Endereço Físico Oficial:</span>
                    <strong className="text-white text-xs leading-snug">
                      {COMPANY_INFO.address}
                    </strong>
                    <span className="block text-[11px] text-amber-400/90 mt-0.5">
                      (Ao lado do Internacional Shopping Guarulhos / Saída Rod. Fernão Dias)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 font-medium">Telefone / WhatsApp: </span>
                    <a href={`tel:${COMPANY_INFO.rawPhone}`} className="text-emerald-400 font-bold hover:underline">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 font-medium">Horário de Atendimento: </span>
                    <span className="text-white font-medium">{COMPANY_INFO.openingHours}</span>
                  </div>
                </div>
              </div>

              {/* Action buttons inside Google Card */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  Ver Rota no Maps
                </a>
                <button
                  onClick={onOpenDirectory}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-bold transition cursor-pointer"
                >
                  <Package className="w-3.5 h-3.5" />
                  Ver 50 Serviços
                </button>
              </div>
            </div>

            {/* Quick highlight badge */}
            <div className="bg-gradient-to-r from-amber-950/30 via-slate-900 to-slate-900 border border-amber-500/20 rounded-xl p-3.5 text-xs text-slate-300 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span><strong>Motoboys em Rota:</strong> Vila Itapegica, Brás, Tatuapé e ZN</span>
              </div>
              <span className="text-amber-400 font-bold">Online agora</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
