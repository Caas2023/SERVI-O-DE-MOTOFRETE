import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickQuoteCalculator } from './components/QuickQuoteCalculator';
import { CoverageMapSection } from './components/CoverageMapSection';
import { ServicesDirectory50 } from './components/ServicesDirectory50';
import { ServicePageDetail } from './components/ServicePageDetail';
import { CorporateB2BSection } from './components/CorporateB2BSection';
import { GoogleTrustSection } from './components/GoogleTrustSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SERVICES_CATALOG, COMPANY_INFO } from './data/servicesCatalog';

export default function App() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  // Initialize and synchronize with URL parameters or hash
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
    window.history.pushState(null, '', `?servico=${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActiveServiceId(null);
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (activeServiceId) {
      setActiveServiceId(null);
      window.history.pushState(null, '', window.location.pathname);
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const activeService = activeServiceId 
    ? SERVICES_CATALOG.find(s => s.id === activeServiceId) 
    : null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Dynamic SEO schema markup for Google Rich Results */}
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
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "20:00"
              }
            ],
            "priceRange": "$$"
          })
        }}
      />

      {/* Primary Navigation */}
      <Navbar
        onNavigateHome={handleBackToHome}
        onNavigateDirectory={() => scrollToSection('catalogo-50')}
        onNavigateMap={() => scrollToSection('mapa')}
        onNavigateCalculator={() => scrollToSection('simulador')}
        onNavigateCorporate={() => scrollToSection('empresas')}
        onSelectService={handleSelectService}
        activeServiceId={activeServiceId}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeService ? (
          <ServicePageDetail
            service={activeService}
            onBack={handleBackToHome}
            onSelectService={handleSelectService}
          />
        ) : (
          <>
            <HeroSection
              onOpenCalculator={() => scrollToSection('simulador')}
              onOpenDirectory={() => scrollToSection('catalogo-50')}
              onOpenMap={() => scrollToSection('mapa')}
            />

            <QuickQuoteCalculator />

            <CoverageMapSection
              onSelectService={handleSelectService}
              onFilterRegion={() => scrollToSection('catalogo-50')}
            />

            <ServicesDirectory50
              onSelectService={handleSelectService}
            />

            <CorporateB2BSection />

            <GoogleTrustSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectService={handleSelectService}
        onFilterRegion={() => scrollToSection('catalogo-50')}
      />

      {/* Fixed Floating WhatsApp Button */}
      <FloatingWhatsApp />

    </div>
  );
}
