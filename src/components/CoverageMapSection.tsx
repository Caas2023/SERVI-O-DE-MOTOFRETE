import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Compass, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Layers,
  CheckCircle2,
  Building2,
  Phone
} from 'lucide-react';
import { COMPANY_INFO, NEIGHBORHOOD_COORDINATES, SERVICES_CATALOG } from '../data/servicesCatalog';
import { generateWhatsAppLink } from '../utils/pricing';

interface CoverageMapSectionProps {
  onSelectService: (serviceId: string) => void;
  onFilterRegion: (region: string) => void;
}

export const CoverageMapSection: React.FC<CoverageMapSectionProps> = ({
  onSelectService,
  onFilterRegion
}) => {
  const [selectedHub, setSelectedHub] = useState<string>("Vila Itapegica / Internacional Shopping");

  const matchingServices = SERVICES_CATALOG.filter(s => 
    s.neighborhood.toLowerCase().includes(selectedHub.split('/')[0].trim().toLowerCase()) ||
    s.neighborhood.toLowerCase().includes(selectedHub.split('/')[1]?.trim().toLowerCase() || '')
  ).slice(0, 3);

  const hubsList = [
    { 
      name: "Vila Itapegica / Internacional Shopping", 
      label: "Internacional Shopping / Dutra 225 (Base)", 
      x: "71%", 
      y: "14%", 
      isBase: true,
      eta: "5 a 15 min",
      highlight: "Nossa sede oficial física. Saída instantânea para Guarulhos e Dutra."
    },
    { 
      name: "Shopping Center Norte / Vila Guilherme", 
      label: "Shopping Center Norte & Lar Center", 
      x: "24%", 
      y: "43%", 
      isBase: false,
      eta: "20 a 35 min",
      highlight: "Maior polo varejista da Zona Norte de São Paulo."
    },
    { 
      name: "Expo Center Norte / Carandiru", 
      label: "Expo Center Norte (Feiras & Eventos)", 
      x: "29%", 
      y: "36%", 
      isBase: false,
      eta: "20 a 35 min",
      highlight: "Entrega urgente de brindes, catálogos e suprimentos para estandes."
    },
    { 
      name: "Santana / Fórum Regional", 
      label: "Santana & Fórum Regional", 
      x: "10%", 
      y: "25%", 
      isBase: false,
      eta: "25 a 40 min",
      highlight: "Cartórios, consultórios na Voluntários da Pátria e Braz Leme."
    },
    { 
      name: "Brás (Polo de Confecções)", 
      label: "Brás, Pari & Feirinha da Concórdia", 
      x: "14%", 
      y: "73%", 
      isBase: false,
      eta: "25 a 45 min",
      highlight: "Atacado de roupas, fardos, aviamentos e despacho em ônibus de sacoleiros."
    },
    { 
      name: "Tatuapé / Metrô Tatuapé", 
      label: "Tatuapé & Shopping Boulevard", 
      x: "48%", 
      y: "71%", 
      isBase: false,
      eta: "20 a 35 min",
      highlight: "Centros empresariais (Platina 220), shoppings e cartórios."
    },
    { 
      name: "Penha de França", 
      label: "Penha de França & Tiquatira", 
      x: "74%", 
      y: "74%", 
      isBase: false,
      eta: "15 a 30 min",
      highlight: "Comércio tradicional, cartórios e Parque Linear Tiquatira."
    },
    { 
      name: "Vila Matilde / Radial Leste", 
      label: "Vila Matilde & Vila Carrão", 
      x: "88%", 
      y: "75%", 
      isBase: false,
      eta: "20 a 35 min",
      highlight: "Corredor da Radial Leste e Av. Conselheiro Carrão."
    },
  ];

  const currentHubData = hubsList.find(h => h.name === selectedHub) || hubsList[0];

  return (
    <section id="mapa" className="py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold text-emerald-400 mb-3">
            <Compass className="w-3.5 h-3.5" /> Área de Atendimento Estratégica
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
            Mapa de Cobertura Expressa na Região
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Base centralizada na Rodovia Presidente Dutra 225 com rotas ultrarrápidas para o Internacional Shopping, Brás, Zona Norte e Zona Leste.
          </p>
        </div>

        {/* Map and Detail Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Map using User Asset */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              
              {/* Map Asset sent by user */}
              <img 
                src="/assets/aistudio/image_180ec8bb.png" 
                alt="Mapa de Atendimento Motoboy e Logística Express - Guarulhos, Brás, Tatuapé e Zona Norte" 
                className="w-full h-auto object-cover opacity-95 transition-transform duration-700"
              />

              {/* Hotspot Markers over Map */}
              {hubsList.map((hub) => (
                <button
                  key={hub.name}
                  onClick={() => setSelectedHub(hub.name)}
                  style={{ left: hub.x, top: hub.y }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all transform hover:scale-125 focus:outline-none z-20 ${
                    selectedHub === hub.name ? 'scale-125 ring-4 ring-amber-400' : 'hover:z-30'
                  }`}
                  title={hub.label}
                >
                  <div className={`flex items-center justify-center rounded-full p-2 shadow-xl ${
                    hub.isBase 
                      ? 'bg-rose-600 text-white animate-bounce ring-4 ring-rose-500/50' 
                      : selectedHub === hub.name 
                        ? 'bg-amber-400 text-slate-950 font-bold' 
                        : 'bg-slate-950/80 text-white border border-slate-700 hover:bg-amber-500 hover:text-slate-950'
                  }`}>
                    <MapPin className="w-4 h-4 fill-current" />
                  </div>
                </button>
              ))}

              {/* Map Legend Overlay */}
              <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md border border-slate-800 p-3 rounded-xl flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 font-bold text-rose-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Base Dutra 225
                  </span>
                  <span className="flex items-center gap-1.5 font-medium text-amber-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Hubs Comerciais
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 hidden sm:inline">
                  Clique nos pontos do mapa para ver serviços
                </span>
              </div>
            </div>

            {/* Quick Hub Navigation Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {hubsList.map((h) => (
                <button
                  key={h.name}
                  onClick={() => setSelectedHub(h.name)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition cursor-pointer ${
                    selectedHub === h.name
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {h.label.split('&')[0].trim()}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Active Hub Details & Associated Services */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Hub Spotlight Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    {currentHubData.isBase ? 'Matriz Operacional Principal' : 'Hub de Atendimento Frequente'}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white mt-1">
                    {currentHubData.label}
                  </h3>
                </div>
                <div className="bg-slate-800 text-emerald-400 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {currentHubData.eta}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {currentHubData.highlight}
              </p>

              {/* Verified Address Snippet if Base */}
              {currentHubData.isBase && (
                <div className="bg-slate-950/80 border border-amber-500/30 p-3 rounded-xl text-xs space-y-1">
                  <span className="text-amber-400 font-bold block flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> Endereço Oficial Cadastrado no Google:
                  </span>
                  <p className="text-slate-300 font-medium">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              )}

              {/* Services in this region */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold text-slate-400 block">
                  Páginas de Serviços Dedicadas nesta Área:
                </span>
                
                {matchingServices.map(service => (
                  <div 
                    key={service.id}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between group hover:border-amber-500/40 transition cursor-pointer"
                    onClick={() => onSelectService(service.id)}
                  >
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition">
                        {service.title}
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        {service.categoryLabel} • SLA: {service.deliveryTimeEstimate}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition shrink-0 ml-2" />
                  </div>
                ))}
              </div>

              {/* Direct WhatsApp Call */}
              <div className="pt-2">
                <a
                  href={generateWhatsAppLink(`Olá! Preciso de um motoboy urgente para atender na região de ${currentHubData.label}. Podem passar orçamento?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Pedir Motoboy para {currentHubData.label.split('&')[0].trim()}
                </a>
              </div>
            </div>

            {/* Google Profile Card Snippet Asset from user */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
              <img 
                src="/assets/aistudio/image_e1b29636.png" 
                alt="Perfil Google Meu Negócio - Motoboy e Logística Express" 
                className="w-24 h-24 object-cover rounded-xl border border-slate-700 shrink-0"
              />
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Perfil Verificado Oficial
                </span>
                <h4 className="text-xs font-bold text-white">
                  Motoboy e Logística Express
                </h4>
                <p className="text-[11px] text-slate-400">
                  Vila Itapegica, Guarulhos - SP, 07034-911
                </p>
                <div className="text-[11px] text-amber-400 font-bold">
                  (11) 95724-8425
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
