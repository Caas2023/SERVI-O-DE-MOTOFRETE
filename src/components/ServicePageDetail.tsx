import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Phone, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Share2, 
  Send,
  Zap,
  Building,
  Route,
  Navigation,
  FileCheck
} from 'lucide-react';
import { ServiceLandingPage } from '../types';
import { COMPANY_INFO, SERVICES_CATALOG } from '../data/servicesCatalog';
import { generateWhatsAppLink, formatCurrencyBRL } from '../utils/pricing';

interface ServicePageDetailProps {
  service: ServiceLandingPage;
  onBack: () => void;
  onSelectService: (serviceId: string) => void;
}

export const ServicePageDetail: React.FC<ServicePageDetailProps> = ({
  service,
  onBack,
  onSelectService
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Sync document title and description dynamically
  React.useEffect(() => {
    document.title = service.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', service.metaDescription);
    }
    return () => {
      document.title = "Motoboy e Logística Express | Entregas Rápidas em Guarulhos, Brás, Tatuapé e SP";
    };
  }, [service]);

  // Find related services in the same region or category
  const relatedServices = SERVICES_CATALOG.filter(
    s => s.id !== service.id && (s.region === service.region || s.serviceCategory === service.serviceCategory)
  ).slice(0, 4);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <article className="min-h-screen bg-slate-950 py-10">
      
      {/* Dynamic SEO schema tag preview for audit and inspection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "serviceType": service.categoryLabel,
            "provider": {
              "@type": "LocalBusiness",
              "name": COMPANY_INFO.name,
              "telephone": COMPANY_INFO.phone,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rod. Pres. Dutra-Pista Lateral, 225 - Vila Itapegica",
                "addressLocality": "Guarulhos",
                "addressRegion": "SP",
                "postalCode": "07034-911",
                "addressCountry": "BR"
              }
            },
            "areaServed": service.neighborhood,
            "description": service.metaDescription
          })
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumbs & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-amber-400 px-3 py-1.5 rounded-lg border border-slate-800 transition cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Voltar ao Catálogo de 50 Serviços
          </button>

          <div className="flex items-center gap-2">
            <span>Início</span>
            <span>/</span>
            <span className="text-slate-300 font-medium">{service.region}</span>
            <span>/</span>
            <span className="text-amber-400 font-semibold truncate max-w-xs">{service.neighborhood}</span>
          </div>
        </div>

        {/* Hero Banner for this Specific Landing Page */}
        <header className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="space-y-4 max-w-3xl">
            
            {/* Category and Verification Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="bg-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                {service.categoryLabel}
              </span>
              <span className="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                {service.neighborhood}
              </span>
              <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Tempo médio: {service.deliveryTimeEstimate}
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              {service.h1}
            </h1>

            {/* Subhead Tagline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {service.tagline}
            </p>

            {/* Distance from base */}
            <div className="inline-flex items-center gap-2 text-xs text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl">
              <Navigation className="w-3.5 h-3.5" />
              <span>Base Oficial: Rod. Pres. Dutra 225 (~{service.distanceFromBaseKm} km de distância)</span>
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={generateWhatsAppLink(service.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-black text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-950/60 transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                Pedir Motoboy em {service.neighborhood} no WhatsApp
              </a>

              <button
                onClick={handleShare}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-3.5 rounded-xl transition cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                {copiedLink ? 'Link Copiado!' : 'Compartilhar Rota'}
              </button>
            </div>

          </div>
        </header>

        {/* Key Highlights Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.keyHighlights.map((highlight, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">
                {highlight}
              </p>
            </div>
          ))}
        </section>

        {/* Detailed Content & Why Choose Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Body */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview */}
            <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-amber-400" /> Visão Geral do Atendimento
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {service.serviceOverview}
              </p>
              
              <div className="pt-2">
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  Por Que Escolher Nossa Rota em {service.neighborhood}?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {service.whyHireUs}
                </p>
              </div>
            </section>

            {/* Step by Step Execution Process */}
            <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Route className="w-5 h-5 text-emerald-400" /> Como Funciona a Coleta e Entrega
              </h2>

              <div className="space-y-4">
                {service.stepByStep.map((step) => (
                  <div 
                    key={step.step}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80"
                  >
                    <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Localized FAQs */}
            <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-400" /> Dúvidas Frequentes sobre {service.neighborhood}
              </h2>

              <div className="space-y-3 pt-2">
                {service.faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/50"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full text-left p-4 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-200 hover:text-white transition cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {openFaqIndex === idx ? (
                        <ChevronUp className="w-4 h-4 text-amber-400 shrink-0 ml-2" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500 shrink-0 ml-2" />
                      )}
                    </button>

                    {openFaqIndex === idx && (
                      <div className="p-4 pt-0 text-xs text-slate-400 leading-relaxed border-t border-slate-800/40">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: Local Landmarks & Local Contact Widget */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Quick Dispatch Card */}
            <div className="bg-gradient-to-br from-slate-900 to-amber-950/20 border border-amber-500/30 rounded-2xl p-6 shadow-xl space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                Atendimento Rápido Local
              </span>
              <h3 className="font-heading text-lg font-bold text-white">
                Precisa de um motoboy agora em {service.neighborhood}?
              </h3>
              <p className="text-xs text-slate-300">
                Nosso motoboy mais próximo está a aproximadamente <strong className="text-amber-400">{service.deliveryTimeEstimate}</strong> de você.
              </p>

              <div className="pt-2">
                <a
                  href={generateWhatsAppLink(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl text-xs shadow-lg transition"
                >
                  <Send className="w-3.5 h-3.5" /> Chamar via WhatsApp
                </a>
              </div>

              <div className="text-center pt-1">
                <span className="text-[11px] text-slate-400 block">Ou ligue diretamente:</span>
                <a href={`tel:${COMPANY_INFO.rawPhone}`} className="text-xs font-bold text-white hover:text-amber-400">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            {/* Local Landmarks Served */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-400" /> Pontos de Referência Atendidos:
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {service.localLandmarks.map((landmark, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{landmark}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Keywords / Semantic Tags */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Palavras e Buscas Relacionadas:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {service.keywords.map((kw, idx) => (
                  <span 
                    key={idx}
                    className="bg-slate-950 text-slate-400 border border-slate-800 text-[11px] px-2 py-0.5 rounded"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

          </aside>

        </div>

        {/* Related Services in the Same Quadrant (Internal Links for SEO) */}
        <section className="pt-8 border-t border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-lg font-bold text-white">
              Outras Rotas Relacionadas em {service.region}
            </h3>
            <button
              onClick={onBack}
              className="text-xs text-amber-400 hover:underline font-semibold cursor-pointer"
            >
              Ver todas as 50 rotas →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map(rel => (
              <div
                key={rel.id}
                onClick={() => onSelectService(rel.id)}
                className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-amber-500/40 transition cursor-pointer space-y-2 group"
              >
                <span className="text-[10px] text-amber-400 font-bold uppercase">
                  {rel.categoryLabel}
                </span>
                <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition line-clamp-2">
                  {rel.title}
                </h4>
                <p className="text-[11px] text-slate-400 truncate">
                  {rel.neighborhood} • {rel.deliveryTimeEstimate}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
};
