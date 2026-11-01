export type RegionType = 'Guarulhos' | 'Zona Norte SP' | 'Centro & Brás' | 'Zona Leste SP';

export type ServiceCategory = 
  | 'shopping' 
  | 'documentos' 
  | 'bras-moda' 
  | 'ecommerce' 
  | 'saude' 
  | 'autopecas' 
  | 'bancario' 
  | 'aeroporto' 
  | 'corporativo';

export interface ServiceLandingPage {
  id: string; // unique slug e.g. 'retirada-pacote-internacional-shopping-guarulhos'
  serviceCategory: ServiceCategory;
  categoryLabel: string;
  region: RegionType;
  neighborhood: string;
  title: string;
  h1: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  deliveryTimeEstimate: string; // e.g. "15 a 30 min"
  distanceFromBaseKm: number; // km from Dutra 225
  keyHighlights: string[];
  localLandmarks: string[];
  whyHireUs: string;
  serviceOverview: string;
  stepByStep: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
  whatsappMessage: string;
}

export interface QuoteCalculationRequest {
  origin: string;
  destination: string;
  serviceCategory: ServiceCategory;
  isUrgent?: boolean;
  needsReturn?: boolean;
}

export interface QuoteCalculationResult {
  estimatedPriceMin: number;
  estimatedPriceMax: number;
  estimatedTimeMinMinutes: number;
  estimatedTimeMaxMinutes: number;
  distanceKmEstimate: number;
  suggestedRoute: string;
  whatsappMessage: string;
}
