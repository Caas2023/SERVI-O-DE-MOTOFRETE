import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { OrderHeroCard } from './components/OrderHeroCard';
import { ServicePageDetail } from './components/ServicePageDetail';
import { ServicesDirectory50 } from './components/ServicesDirectory50';
import { CoverageMapSection } from './components/CoverageMapSection';
import { CorporateB2BSection } from './components/CorporateB2BSection';
import { GoogleTrustSection } from './components/GoogleTrustSection';
import { Footer } from './components/Footer';
import { SERVICES_CATALOG, COMPANY_INFO } from './data/servicesCatalog';

export default function App() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Sync with browser URL / hash for direct linking of all 50 SEO landing pages
  useEffect(() => {
    const handleUrlChange = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const serviceParam = urlParams.get('servico');
      const hashParam = window.location.hash.replace('#/servico/', '').replace('#', '');
      
      const targetSlug = serviceParam || hashParam;
      if (targetSlug && SERVICES_CATALOG.some(s => s.id === targetSlug)) {
        setActiveServiceId(targetSlug);
      } else {
        setActiveServiceId(null);
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const handleSelectService = (id: string) => {
    setActiveServiceId(id);
    setModalOpen(false);
    window.history.pushState(null, '', `?servico=${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActiveServiceId(null);
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeService = activeServiceId 
    ? SERVICES_CATALOG.find(s => s.id === activeServiceId) 
    : null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Dynamic SEO schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CourierService",
            "name": COMPANY_INFO.name,
            "telephone": COMPANY_INFO.phone,
            "image": window.location.origin + "/assets/aistudio/image_e1b29636.png",
            "url": window.location.href,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rod. Pres. Dutra-Pista Lateral, 225 - Vila Itapegica",
              "addressLocality": "Guarulhos",
              "addressRegion": "SP",
              "postalCode": "07034-911",
              "addressCountry": "BR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "148"
            }
          })
        }}
      />

      {/* Enterprise Institutional Header */}
      <Navbar
        onNavigateHome={handleBackToHome}
        onOpenDirectory={() => setModalOpen(true)}
        activeServiceId={activeServiceId}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {activeService ? (
          <ServicePageDetail
            service={activeService}
            onBack={handleBackToHome}
            onSelectService={handleSelectService}
          />
        ) : (
          <div className="w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-12">
            
            {/* Primary Order Dispatcher Hero */}
            <OrderHeroCard
              onSelectService={handleSelectService}
              onOpenAllNeighborhoods={() => setModalOpen(true)}
            />

            {/* Coverage Map with Real Asset */}
            <CoverageMapSection
              onSelectService={handleSelectService}
            />

            {/* Corporate B2B Billing (NF-e & Faturamento) */}
            <div className="max-w-7xl mx-auto">
              <CorporateB2BSection />
            </div>

            {/* Google Verified Customer Reviews */}
            <div className="max-w-7xl mx-auto">
              <GoogleTrustSection />
            </div>

            {/* Directory of 50 Pages */}
            <ServicesDirectory50
              onSelectService={handleSelectService}
            />

          </div>
        )}
      </main>

      {/* Modal for 50 Bairros */}
      {modalOpen && (
        <ServicesDirectory50
          onSelectService={handleSelectService}
          isOpenModal={true}
          onCloseModal={() => setModalOpen(false)}
        />
      )}

      {/* Enterprise Full-Width Footer */}
      <Footer
        onSelectService={handleSelectService}
      />

    </div>
  );
}
