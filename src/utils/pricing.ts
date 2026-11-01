import { QuoteCalculationRequest, QuoteCalculationResult, ServiceCategory } from '../types';
import { COMPANY_INFO, SERVICES_CATALOG } from '../data/servicesCatalog';

// Distance table approx in km from Base (Rod. Pres. Dutra 225, Vila Itapegica, Guarulhos)
const DISTANCE_MATRIX_KM: Record<string, number> = {
  "Vila Itapegica": 0.5,
  "Internacional Shopping Guarulhos": 0.8,
  "Ponte Grande": 1.8,
  "Gopouva": 2.1,
  "Parque Novo Mundo": 2.8,
  "Centro de Guarulhos": 3.2,
  "Vila Galvão": 4.2,
  "Macedo / Bom Clima": 4.8,
  "Vila Maria": 5.0,
  "Tiquatira": 5.2,
  "Parque Shopping Maia": 5.5,
  "Cangaíba": 5.6,
  "Penha de França": 6.5,
  "Vila Guilherme": 6.2,
  "Expo Center Norte": 7.5,
  "Shopping Center Norte": 7.2,
  "Carandiru": 7.0,
  "Vila Matilde": 7.8,
  "Santana": 8.0,
  "Shopping D Marginal": 8.0,
  "Vila Carrão": 8.8,
  "Canindé": 8.8,
  "Ponte Pequena / Armênia": 9.0,
  "Tatuapé / Metrô": 9.5,
  "Pari": 9.8,
  "Cumbica / Aeroporto GRU": 9.5,
  "Brás (Polo de Confecções)": 10.5,
  "Mooca / Bresser": 11.2,
  "Anália Franco": 11.2,
  "25 de Março / Centro": 12.0,
};

export function getEstimatedDistanceKm(origin: string, destination: string): number {
  const originDist = DISTANCE_MATRIX_KM[origin] ?? 5;
  const destDist = DISTANCE_MATRIX_KM[destination] ?? 6;
  
  // Approximate triangular distance or hub cross
  const calculated = Math.abs(originDist - destDist) + Math.min(originDist, destDist) * 0.4 + 2;
  return Math.max(2, Math.round(calculated * 10) / 10);
}

export function calculateFreightQuote(req: QuoteCalculationRequest): QuoteCalculationResult {
  const dist = getEstimatedDistanceKm(req.origin, req.destination);
  
  // Base rate R$ 20,00 + R$ 2,50/km
  let basePrice = 22 + (dist * 2.6);
  
  // Service category adjustments
  if (req.serviceCategory === 'bras-moda') {
    basePrice += 6; // handling packages / multiple volumes
  } else if (req.serviceCategory === 'shopping') {
    basePrice += 5; // pedestrian mall pickup / waiting
  } else if (req.serviceCategory === 'saude') {
    basePrice += 4; // thermal / expedited care
  } else if (req.serviceCategory === 'documentos') {
    basePrice += 3; // protocol / signature
  } else if (req.serviceCategory === 'bancario') {
    basePrice += 10; // bank line / security
  } else if (req.serviceCategory === 'aeroporto') {
    basePrice += 12; // airport terminal clearance
  }

  if (req.isUrgent) {
    basePrice *= 1.35; // 35% priority surcharge
  }

  if (req.needsReturn) {
    basePrice *= 1.6; // return trip 60% discount on second leg
  }

  const minPrice = Math.round(basePrice * 0.95);
  const maxPrice = Math.round(basePrice * 1.15);

  // SLA time calculation
  let timeMin = Math.round(15 + dist * 2);
  let timeMax = Math.round(25 + dist * 3);

  if (req.isUrgent) {
    timeMin = Math.max(10, Math.round(timeMin * 0.75));
    timeMax = Math.max(20, Math.round(timeMax * 0.8));
  }

  const suggestedRoute = dist > 8 
    ? "Corredor Rodovia Pres. Dutra / Marginal Tietê / Salim Farah Maluf"
    : "Corredor Express Dutra / Avenidas Locais";

  const message = `Olá! Gostaria de cotar um motoboy:\n` +
    `📍 Origem: ${req.origin}\n` +
    `🎯 Destino: ${req.destination}\n` +
    `📦 Tipo: ${req.serviceCategory}\n` +
    `${req.isUrgent ? '⚡ Urgente: SIM (prioritário)\n' : ''}` +
    `${req.needsReturn ? '🔄 Retorno: SIM (ida e volta)\n' : ''}` +
    `💰 Estimativa online: R$ ${minPrice} a R$ ${maxPrice}\n` +
    `⚡ Atendimento: Coleta rápida e entrega ágil sob demanda\n` +
    `Poderia confirmar a disponibilidade para envio imediato?`;

  return {
    estimatedPriceMin: minPrice,
    estimatedPriceMax: maxPrice,
    estimatedTimeMinMinutes: timeMin,
    estimatedTimeMaxMinutes: timeMax,
    distanceKmEstimate: dist,
    suggestedRoute,
    whatsappMessage: message
  };
}

export function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}

export function generateWhatsAppLink(text: string): string {
  const cleanPhone = COMPANY_INFO.rawPhone;
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export function getAllNeighborhoods(): string[] {
  return Object.keys(DISTANCE_MATRIX_KM);
}

export function findPageBySlug(slug: string) {
  return SERVICES_CATALOG.find(p => p.id === slug) || null;
}
