import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ShoppingBag, 
  FileText, 
  Truck, 
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Navigation,
  Building2,
  Star,
  Wrench
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_CATALOG } from '../data/servicesCatalog';
import { generateWhatsAppLink } from '../utils/pricing';
import { ServiceCategory } from '../types';

interface OrderHeroCardProps {
  onSelectService: (serviceId: string) => void;
  onOpenAllNeighborhoods: () => void;
}

export const OrderHeroCard: React.FC<OrderHeroCardProps> = ({
  onSelectService,
  onOpenAllNeighborhoods
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('shopping');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('Vila Itapegica / Internacional Shopping');

  // Filter service matching this selection
  const matchingService = SERVICES_CATALOG.find(
    s => s.serviceCategory === selectedCategory && s.neighborhood.includes(selectedNeighborhood.split('/')[0].trim())
  ) || SERVICES_CATALOG.find(s => s.serviceCategory === selectedCategory) || SERVICES_CATALOG[0];

  const quickCategories = [
    { id: 'shopping' as ServiceCategory, label: 'Shoppings', icon: ShoppingBag, desc: 'Internacional Shopping, Center Norte, Tatuapé' },
    { id: 'bras-moda' as ServiceCategory, label: 'Brás & Pari', icon: Sparkles, desc: 'Roupas, sacolas e despacho em ônibus' },
    { id: 'documentos' as ServiceCategory, label: 'Documentos', icon: FileText, desc: 'Cartórios, fóruns e contratos' },
    { id: 'autopecas' as ServiceCategory, label: 'Autopeças', icon: Wrench, desc: 'Peças & baterias na Dutra' }
  ];

  const topNeighborhoods = [
    'Vila Itapegica / Internacional Shopping',
    'Brás (Polo de Confecções)',
    'Tatuapé / Metrô Tatuapé',
    'Shopping Center Norte / Vila Guilherme',
    'Santana / Fórum Regional',
    'Penha de França',
    'Vila Matilde / Radial Leste',
    'Vila Carrão / Conselheiro Carrão',
    'Centro de Guarulhos / Cartórios',
    'Parque Novo Mundo / Fernão Dias',
  ];

  const whatsappMessage = `Olá! Gostaria de pedir um motoboy para ${matchingService.title} em ${selectedNeighborhood}. Vocês têm disponibilidade agora?`;

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      
      {/* Executive Hero Container */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Direct Dispatcher Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Base Status Pill */}
            <div className="inline-flex items-center gap-2 bg-slate-950 border border-slate-800 px-3.5 py-1.5 rounded-full text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300 font-medium">Base Operacional Dutra 225:</span>
              <strong className="text-amber-400 font-bold">Saída imediata sob demanda</strong>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Logística Expressa e Motoboy em <span className="text-amber-400">Guarulhos, Brás</span> e Região
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Base própria na pista lateral da Rodovia Presidente Dutra 225, ao lado do Internacional Shopping. Atendimento corporativo e avulso para comércios, escritórios e lojistas.
              </p>
            </div>

            {/* Category Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-300">
                1. Selecione a modalidade da entrega:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {quickCategories.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      type="button"
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold shadow-lg shadow-amber-500/20'
                          : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-1 ${isSelected ? 'text-slate-950' : 'text-amber-400'}`} />
                      <div className="text-xs font-bold leading-tight">{cat.label}</div>
                      <div className={`text-[10px] leading-tight mt-0.5 truncate ${isSelected ? 'text-slate-900 font-medium' : 'text-slate-400'}`}>
                        {cat.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Neighborhood Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-300">
                2. Selecione a região ou bairro atendido:
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-rose-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={selectedNeighborhood}
                  onChange={(e) => setSelectedNeighborhood(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-2xl pl-11 pr-10 py-3.5 text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-amber-400 appearance-none cursor-pointer"
                >
                  {topNeighborhoods.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  Atendimento expresso: <strong className="text-emerald-400">Coleta e entrega rápida</strong>
                </span>

                <button
                  type="button"
                  onClick={onOpenAllNeighborhoods}
                  className="text-amber-400 hover:text-amber-300 font-bold hover:underline cursor-pointer"
                >
                  Ver todos os 50 bairros cadastrados →
                </button>
              </div>
            </div>

            {/* Big Action Button */}
            <div className="pt-2 space-y-2">
              <a
                href={generateWhatsAppLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl shadow-emerald-500/25 transition-all transform hover:scale-[1.01] active:scale-[0.99] text-center cursor-pointer"
              >
                <Phone className="w-5 h-5 fill-slate-950 shrink-0" />
                <span>Pedir no WhatsApp Agora: (11) 95724-8425</span>
              </a>
              <span className="text-center block text-[11px] text-slate-400 font-medium">
                Atendimento direto com despachante na Rodovia Presidente Dutra 225
              </span>
            </div>

            {/* Operational Guarantees */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Protocolo digital com foto</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Baús homologados até 20kg</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Boleto quinzenal para empresas</span>
              </div>
            </div>

          </div>

          {/* Right Column: Verified Google Business Card Asset & Office Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Google Profile Verification Box */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
              
              <div className="flex items-start gap-4">
                <img 
                  src="/assets/aistudio/image_e1b29636.png" 
                  alt="Perfil Verificado Google Meu Negócio - Motoboy e Logística Express" 
                  className="w-20 h-20 rounded-2xl object-cover border border-slate-700 shrink-0"
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Perfil Verificado no Google
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-base text-white">
                    {COMPANY_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {COMPANY_INFO.category}
                  </p>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold pt-0.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>4.9</span>
                    <span className="text-slate-500 font-normal">(148 avaliações reais)</span>
                  </div>
                </div>
              </div>

              {/* Exact Location & Contact Details */}
              <div className="space-y-3 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Endereço Comercial Físico:</strong>
                    <span>{COMPANY_INFO.address}</span>
                    <span className="block text-[11px] text-amber-400/90 mt-0.5">
                      (Vila Itapegica, ao lado do Internacional Shopping Guarulhos)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-slate-400">WhatsApp Oficial: </span>
                    <a href={`tel:${COMPANY_INFO.rawPhone}`} className="text-emerald-400 font-bold hover:underline">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-slate-400">Horário de Funcionamento: </span>
                    <span className="text-white font-medium">{COMPANY_INFO.openingHours}</span>
                  </div>
                </div>
              </div>

              {/* Maps Route Button */}
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 py-3 rounded-xl border border-slate-700 text-xs font-bold transition"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  Ver Rota no Google Maps
                </a>
              </div>

            </div>

            {/* Quick Service Link Box */}
            <div 
              onClick={() => onSelectService(matchingService.id)}
              className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-4 flex items-center justify-between transition cursor-pointer group"
            >
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-bold text-amber-400 block">
                  Página Dedicada Disponível:
                </span>
                <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition">
                  {matchingService.title}
                </h4>
                <p className="text-[11px] text-slate-400">
                  {matchingService.neighborhood} • Coleta e entrega rápida
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-transform shrink-0 ml-3" />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
