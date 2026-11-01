import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Phone, 
  Sparkles,
  ShoppingBag,
  FileText,
  Truck,
  HeartPulse,
  Wrench,
  Building,
  Plane,
  Layers
} from 'lucide-react';
import { SERVICES_CATALOG } from '../data/servicesCatalog';
import { ServiceCategory, RegionType } from '../types';
import { generateWhatsAppLink } from '../utils/pricing';

interface ServicesDirectory50Props {
  onSelectService: (serviceId: string) => void;
  initialCategory?: string;
}

export const ServicesDirectory50: React.FC<ServicesDirectory50Props> = ({
  onSelectService,
  initialCategory
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('Todas');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const regions: (string)[] = ['Todas', 'Guarulhos', 'Zona Norte SP', 'Centro & Brás', 'Zona Leste SP'];

  const categories = [
    { id: 'Todas', label: 'Todas as Categorias', icon: Layers },
    { id: 'shopping', label: 'Shoppings', icon: ShoppingBag },
    { id: 'bras-moda', label: 'Brás & Moda', icon: Sparkles },
    { id: 'documentos', label: 'Documentos & Cartórios', icon: FileText },
    { id: 'ecommerce', label: 'E-commerce & Same Day', icon: Truck },
    { id: 'saude', label: 'Saúde & Remédios', icon: HeartPulse },
    { id: 'autopecas', label: 'Autopeças', icon: Wrench },
    { id: 'corporativo', label: 'Corporativo PJ', icon: Building },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_CATALOG.filter(item => {
      const matchRegion = selectedRegion === 'Todas' || item.region === selectedRegion;
      const matchCategory = selectedCategory === 'Todas' || item.serviceCategory === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchSearch = query === '' || 
        item.title.toLowerCase().includes(query) ||
        item.neighborhood.toLowerCase().includes(query) ||
        item.h1.toLowerCase().includes(query) ||
        item.keywords.some(k => k.toLowerCase().includes(query));

      return matchRegion && matchCategory && matchSearch;
    });
  }, [selectedRegion, selectedCategory, searchQuery]);

  return (
    <section id="catalogo-50" className="py-16 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold text-amber-400 mb-3">
            <Layers className="w-3.5 h-3.5" /> Catálogo Completo de 50 Serviços
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
            50 Páginas de Serviços Especializados por Bairro
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Rotas dedicadas, prazos garantidos e atendimento presencial em cada região mapeada. Escolha seu bairro para ver detalhes completos.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 sm:p-6 mb-8 space-y-4 shadow-xl">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-amber-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquise por bairro (ex: Brás, Tatuapé, Santana, Gopouva) ou serviço (ex: shopping, cartório, roupas)..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Region Tabs */}
          <div>
            <span className="text-xs font-bold text-slate-400 block mb-2">Filtrar por Região:</span>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`text-xs px-3.5 py-2 rounded-xl border transition cursor-pointer ${
                    selectedRegion === region
                      ? 'bg-amber-500 text-slate-950 font-black border-amber-500 shadow-md shadow-amber-500/20'
                      : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Category Pills */}
          <div>
            <span className="text-xs font-bold text-slate-400 block mb-2">Filtrar por Tipo de Serviço:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition flex items-center gap-1.5 cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-bold'
                        : 'bg-slate-900/40 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Results Counter */}
          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
            <span>
              Exibindo <strong className="text-white">{filteredServices.length}</strong> de <strong className="text-amber-400">{SERVICES_CATALOG.length}</strong> páginas de serviço disponíveis.
            </span>
            {(selectedRegion !== 'Todas' || selectedCategory !== 'Todas' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedRegion('Todas');
                  setSelectedCategory('Todas');
                  setSearchQuery('');
                }}
                className="text-amber-400 hover:underline font-semibold cursor-pointer"
              >
                Limpar filtros
              </button>
            )}
          </div>
        </div>

        {/* 50 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-slate-950 border border-slate-800/90 rounded-2xl p-5 shadow-lg hover:border-amber-500/40 hover:shadow-amber-500/5 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Micro header badge */}
                <div className="flex items-center justify-between text-xs">
                  <span className="bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2 py-0.5 rounded-md font-semibold text-[11px]">
                    {service.categoryLabel}
                  </span>
                  <span className="text-slate-500 font-mono text-[11px]">
                    Pág #{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 
                  onClick={() => onSelectService(service.id)}
                  className="font-heading text-base font-bold text-white group-hover:text-amber-400 transition cursor-pointer leading-snug"
                >
                  {service.title}
                </h3>

                {/* Neighborhood & SLA Pill */}
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300 font-medium truncate">
                    <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    {service.neighborhood}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400 font-bold shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    {service.deliveryTimeEstimate}
                  </span>
                </div>

                {/* Highlights preview */}
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {service.tagline}
                </p>

                <div className="text-[11px] text-slate-500">
                  📍 Aprox. {service.distanceFromBaseKm} km da Base Dutra 225
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectService(service.id)}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition cursor-pointer"
                >
                  Ver Página Completa
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={generateWhatsAppLink(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/50 text-emerald-300 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition"
                  title="Chamar no WhatsApp com dados desta página"
                >
                  <Phone className="w-3 h-3 text-emerald-400" /> WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
            <Layers className="w-10 h-10 text-slate-600 mx-auto" />
            <h4 className="text-base font-bold text-white">Nenhum serviço encontrado</h4>
            <p className="text-xs text-slate-400">Tente ajustar seus termos de pesquisa ou remover os filtros aplicados.</p>
            <button
              onClick={() => {
                setSelectedRegion('Todas');
                setSelectedCategory('Todas');
                setSearchQuery('');
              }}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold px-4 py-2 rounded-xl transition"
            >
              Resetar Filtros
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
