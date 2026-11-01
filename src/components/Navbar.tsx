import React, { useState } from 'react';
import { 
  Bike, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Menu, 
  X, 
  Search, 
  FileText, 
  ShoppingBag, 
  Building2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_CATALOG } from '../data/servicesCatalog';
import { generateWhatsAppLink } from '../utils/pricing';

interface NavbarProps {
  onNavigateHome: () => void;
  onNavigateDirectory: (filterCategory?: string) => void;
  onNavigateMap: () => void;
  onNavigateCalculator: () => void;
  onNavigateCorporate: () => void;
  onSelectService: (serviceId: string) => void;
  activeServiceId: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateHome,
  onNavigateDirectory,
  onNavigateMap,
  onNavigateCalculator,
  onNavigateCorporate,
  onSelectService,
  activeServiceId
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSearchResults = searchQuery.trim()
    ? SERVICES_CATALOG.filter(s => 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.neighborhood.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 6)
    : [];

  const handleServiceClick = (id: string) => {
    onSelectService(id);
    setSearchModalOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      {/* Top micro announcement bar */}
      <div className="bg-amber-500 text-slate-950 text-xs font-semibold px-4 py-1.5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 truncate">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
          </span>
          <span className="truncate text-[11px] sm:text-xs">
            <strong className="hidden sm:inline">Base Operacional: </strong>
            <span className="hidden sm:inline">{COMPANY_INFO.shortAddress}</span>
            <span className="sm:hidden font-bold">Base Dutra 225, Guarulhos</span>
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] sm:text-xs font-bold shrink-0">
          <a 
            href={`tel:${COMPANY_INFO.rawPhone}`} 
            className="hover:underline flex items-center gap-1 font-black"
          >
            <Phone className="w-3 h-3" /> {COMPANY_INFO.phone}
          </a>
          <span className="hidden md:inline bg-slate-950/20 px-2 py-0.5 rounded text-[10px]">
            ⚡ Plantão Expresso
          </span>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button 
            onClick={onNavigateHome}
            className="flex items-center gap-3 text-left group transition cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Bike className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-xl tracking-tight text-white group-hover:text-amber-400 transition">
                  MOTOBOY & LOGÍSTICA
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                  <ShieldCheck className="w-3 h-3" /> Verificado Google
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Guarulhos • Brás • Tatuapé • Zona Norte
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-300">
            <button 
              onClick={onNavigateHome}
              className={`px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition ${!activeServiceId ? 'text-amber-400 font-semibold' : ''}`}
            >
              Início
            </button>
            <button 
              onClick={() => onNavigateDirectory()}
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition flex items-center gap-1.5"
            >
              50 Serviços & Bairros
              <span className="bg-amber-500/20 text-amber-300 text-[11px] font-bold px-1.5 py-0.5 rounded-full border border-amber-500/30">
                50
              </span>
            </button>
            <button 
              onClick={onNavigateMap}
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition flex items-center gap-1"
            >
              <MapPin className="w-4 h-4 text-amber-400" /> Mapa da Região
            </button>
            <button 
              onClick={onNavigateCalculator}
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition"
            >
              Simular Frete
            </button>
            <button 
              onClick={onNavigateCorporate}
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition flex items-center gap-1"
            >
              <Building2 className="w-4 h-4 text-sky-400" /> Empresas (Faturamento)
            </button>
          </nav>

          {/* Search Trigger & Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button 
              onClick={() => setSearchModalOpen(true)}
              aria-label="Buscar entre as 50 páginas de serviços"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition flex items-center gap-2 text-xs"
            >
              <Search className="w-4 h-4 text-amber-400" />
              <span className="hidden xl:inline text-slate-400">Buscar bairro ou serviço...</span>
            </button>

            <a
              href={generateWhatsAppLink("Olá! Preciso de um motoboy com saída imediata da base na Dutra 225.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-950/50 hover:shadow-emerald-600/30 transition-all hover:-translate-y-0.5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              Chamar no WhatsApp
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="p-2.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
              aria-label="Pesquisar"
            >
              <Search className="w-5 h-5 text-amber-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button 
              onClick={() => { onNavigateHome(); setMobileMenuOpen(false); }}
              className="w-full text-left p-3 rounded-xl bg-slate-900 text-slate-200 hover:bg-slate-800 font-medium text-sm"
            >
              Início
            </button>
            <button 
              onClick={() => { onNavigateDirectory(); setMobileMenuOpen(false); }}
              className="w-full text-left p-3 rounded-xl bg-slate-900 text-slate-200 hover:bg-slate-800 font-medium text-sm flex items-center justify-between"
            >
              50 Serviços <span className="bg-amber-500/20 text-amber-300 text-xs px-1.5 py-0.5 rounded font-bold">50</span>
            </button>
            <button 
              onClick={() => { onNavigateMap(); setMobileMenuOpen(false); }}
              className="w-full text-left p-3 rounded-xl bg-slate-900 text-slate-200 hover:bg-slate-800 font-medium text-sm flex items-center gap-1.5"
            >
              <MapPin className="w-4 h-4 text-amber-400" /> Mapa da Região
            </button>
            <button 
              onClick={() => { onNavigateCalculator(); setMobileMenuOpen(false); }}
              className="w-full text-left p-3 rounded-xl bg-slate-900 text-slate-200 hover:bg-slate-800 font-medium text-sm"
            >
              Simular Frete
            </button>
          </div>

          <button 
            onClick={() => { onNavigateCorporate(); setMobileMenuOpen(false); }}
            className="w-full text-left p-3 rounded-xl bg-sky-950/40 border border-sky-800/40 text-sky-200 font-medium text-sm flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-sky-400" /> Faturamento para Empresas
            </span>
            <ChevronRight className="w-4 h-4 text-sky-400" />
          </button>

          <div className="pt-2">
            <a
              href={generateWhatsAppLink("Olá! Preciso de um motoboy express agora.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-lg text-sm"
            >
              <Phone className="w-4 h-4" /> Chamar Motoboy no WhatsApp: {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      )}

      {/* Quick Search Modal for 50 pages */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-start justify-center p-4 pt-20 animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-slate-800 flex items-center gap-3">
              <Search className="w-5 h-5 text-amber-400 shrink-0" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Busque por shopping, Brás, documentos, Tatuapé, Santana, Dutra..."
                className="w-full bg-transparent text-white placeholder-slate-500 text-base focus:outline-none"
                autoFocus
              />
              <button 
                onClick={() => setSearchModalOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 max-h-96 overflow-y-auto space-y-2">
              {searchQuery.trim() === '' ? (
                <div className="text-center py-6 text-slate-400 text-sm">
                  <p className="font-semibold text-slate-300">Navegue pelas 50 páginas de serviços</p>
                  <p className="text-xs text-slate-500 mt-1">Digite um bairro, tipo de entrega ou shopping da região</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {['Internacional Shopping', 'Brás Confecções', 'Tatuapé', 'Cartório Guarulhos', 'Center Norte', 'Autopeças'].map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-lg border border-slate-700"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : filteredSearchResults.length > 0 ? (
                filteredSearchResults.map(service => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className="w-full text-left p-3 rounded-xl bg-slate-950/60 hover:bg-slate-800 border border-slate-800/80 transition flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
                        <span>{service.region}</span>
                        <span>•</span>
                        <span>{service.categoryLabel}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition mt-0.5">
                        {service.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {service.neighborhood} • SLA: {service.deliveryTimeEstimate}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-amber-400 transition shrink-0 ml-2" />
                  </button>
                ))
              ) : (
                <div className="text-center py-8 text-slate-400 text-sm">
                  Nenhuma página encontrada para &quot;{searchQuery}&quot;. Veja todo o catálogo de 50 serviços.
                </div>
              )}
            </div>

            <div className="bg-slate-950 p-3 border-t border-slate-800 text-center">
              <button
                onClick={() => {
                  onNavigateDirectory();
                  setSearchModalOpen(false);
                }}
                className="text-amber-400 hover:text-amber-300 text-xs font-bold"
              >
                Ver lista completa com todas as 50 páginas de serviço →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
