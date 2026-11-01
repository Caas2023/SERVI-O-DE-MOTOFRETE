import React from 'react';
import { Bike, ShieldCheck, MapPin, Phone, Clock } from 'lucide-react';
import { COMPANY_INFO, SERVICES_CATALOG } from '../data/servicesCatalog';

interface FooterProps {
  onSelectService: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950 py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Company NAP & Accreditation */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <img 
                src="/favicon.svg" 
                alt="Logo Oficial - Motoboy e Logística Express" 
                className="w-10 h-10 rounded-xl shadow-md shadow-amber-500/20 border border-slate-800 shrink-0"
              />
              <div>
                <span className="font-heading font-black text-base text-white block">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Perfil Verificado no Google Meu Negócio
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Transportadora e serviço de motofrete homologado para Guarulhos, São Paulo, Brás, Tatuapé e Zona Norte. Atendimento expresso com protocolo digital, seguro de carga e faturamento quinzenal para empresas.
            </p>

            <div className="space-y-1.5 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Sede e Ponto Operacional:</strong>
                  <span>{COMPANY_INFO.address}</span>
                  <span className="block text-[11px] text-amber-400/90 mt-0.5">
                    (Vila Itapegica, ao lado do Internacional Shopping Guarulhos)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span>WhatsApp & Chamadas: </span>
                  <a href={`tel:${COMPANY_INFO.rawPhone}`} className="text-emerald-400 font-bold hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span>Horário: </span>
                  <span className="text-white font-medium">{COMPANY_INFO.openingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Hub Links */}
          <div className="lg:col-span-7 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-300 border-b border-slate-800 pb-2">
              Índice das 50 Páginas de Serviços e Bairros:
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5 text-[11px]">
              {SERVICES_CATALOG.map((s) => (
                <button
                  key={s.id}
                  onClick={() => onSelectService(s.id)}
                  className="text-left text-slate-400 hover:text-amber-400 hover:underline transition truncate cursor-pointer"
                  title={s.title}
                >
                  • {s.neighborhood.split('/')[0].trim()}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Disclaimer Bar */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados. CNPJ e Alvará regularizados.
          </div>
          <div className="flex items-center gap-4">
            <a href={COMPANY_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
              Ver no Google Maps
            </a>
            <span>•</span>
            <span className="text-slate-400">Rod. Pres. Dutra 225, Guarulhos - SP</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
