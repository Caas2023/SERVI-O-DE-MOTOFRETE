import React from 'react';
import { 
  Bike, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_CATALOG } from '../data/servicesCatalog';

interface FooterProps {
  onSelectService: (serviceId: string) => void;
  onFilterRegion: (region: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectService,
  onFilterRegion
}) => {
  // Group 50 services by region
  const guarulhosServices = SERVICES_CATALOG.filter(s => s.region === 'Guarulhos');
  const brasServices = SERVICES_CATALOG.filter(s => s.region === 'Centro & Brás');
  const zonaNorteServices = SERVICES_CATALOG.filter(s => s.region === 'Zona Norte SP');
  const zonaLesteServices = SERVICES_CATALOG.filter(s => s.region === 'Zona Leste SP');

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & NAP Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold">
                <Bike className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-heading font-black text-lg text-white block">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Perfil Verificado no Google
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Empresa especializada em motoboy expresso, logística rápida para e-commerce, retiradas em shoppings, documentos e compras no atacado do Brás.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Endereço Comercial Oficial:</strong>
                  <span>{COMPANY_INFO.address}</span>
                  <span className="block text-[11px] text-amber-400/90">
                    (Vila Itapegica, próximo ao Internacional Shopping Guarulhos)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span>WhatsApp e Chamadas: </span>
                  <a href={`tel:${COMPANY_INFO.rawPhone}`} className="text-emerald-400 font-bold hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span>Atendimento: </span>
                  <span className="text-white">{COMPANY_INFO.openingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Region 1: Guarulhos (Base & Entorno) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm border-b border-slate-800 pb-2">
              Guarulhos ({guarulhosServices.length} Rotas)
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              {guarulhosServices.map(s => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s.id)}
                    className="hover:text-amber-400 transition text-left cursor-pointer truncate max-w-full block"
                  >
                    • {s.neighborhood.split('/')[0].trim()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Region 2: Centro & Brás */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm border-b border-slate-800 pb-2">
              Brás & Centro ({brasServices.length} Rotas)
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              {brasServices.map(s => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s.id)}
                    className="hover:text-amber-400 transition text-left cursor-pointer truncate max-w-full block"
                  >
                    • {s.neighborhood.split('/')[0].trim()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Region 3: Zona Norte SP */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm border-b border-slate-800 pb-2">
              Zona Norte SP ({zonaNorteServices.length} Rotas)
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              {zonaNorteServices.map(s => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s.id)}
                    className="hover:text-amber-400 transition text-left cursor-pointer truncate max-w-full block"
                  >
                    • {s.neighborhood.split('/')[0].trim()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Region 4: Zona Leste SP */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm border-b border-slate-800 pb-2">
              Zona Leste SP ({zonaLesteServices.length} Rotas)
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              {zonaLesteServices.map(s => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s.id)}
                    className="hover:text-amber-400 transition text-left cursor-pointer truncate max-w-full block"
                  >
                    • {s.neighborhood.split('/')[0].trim()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Index of All 50 Programmatic Landing Pages for Google SEO Architecture */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
            Diretório Completo de 50 Páginas de Serviços Indexadas:
          </h4>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-500">
            {SERVICES_CATALOG.map((item, idx) => (
              <span key={item.id} className="inline-flex items-center gap-1">
                <button
                  onClick={() => onSelectService(item.id)}
                  className="hover:text-amber-400 hover:underline transition cursor-pointer text-slate-400"
                >
                  {item.title}
                </button>
                {idx < SERVICES_CATALOG.length - 1 && <span className="text-slate-700">|</span>}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Copyright & Disclaimer Bar */}
      <div className="bg-slate-950 border-t border-slate-900 py-6 text-center text-slate-500 text-[11px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Sede: Rod. Pres. Dutra 225, Guarulhos - SP</span>
            <span>•</span>
            <a href={`tel:${COMPANY_INFO.rawPhone}`} className="text-amber-400 hover:underline">
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
