import test from 'node:test';
import assert from 'node:assert/strict';
import { SERVICES_CATALOG, COMPANY_INFO } from '../data/servicesCatalog';
import { calculateFreightQuote, generateWhatsAppLink, getEstimatedDistanceKm, formatCurrencyBRL } from './pricing';

test('services catalog has exactly 50 unique programmatic landing pages', () => {
  assert.equal(SERVICES_CATALOG.length, 50, `Expected 50 pages, but got ${SERVICES_CATALOG.length}`);
  
  const idSet = new Set<string>();
  for (const page of SERVICES_CATALOG) {
    assert.ok(page.id, 'Page must have an id');
    assert.ok(page.title, 'Page must have a title');
    assert.ok(page.h1, 'Page must have an h1');
    assert.ok(page.metaDescription, 'Page must have a meta description');
    assert.ok(page.deliveryTimeEstimate, 'Page must have a delivery time');
    assert.ok(page.faqs.length >= 1, 'Page must have at least 1 FAQ item');
    assert.ok(page.stepByStep.length >= 3, 'Page must have at least 3 steps');
    
    assert.equal(idSet.has(page.id), false, `Duplicate ID detected: ${page.id}`);
    idSet.add(page.id);
  }
});

test('freight calculator returns consistent estimates and bounds', () => {
  const quote = calculateFreightQuote({
    origin: 'Vila Itapegica',
    destination: 'Brás (Polo de Confecções)',
    serviceCategory: 'bras-moda',
    isUrgent: true,
    needsReturn: false
  });

  assert.ok(quote.estimatedPriceMin > 0, 'Min price should be positive');
  assert.ok(quote.estimatedPriceMax >= quote.estimatedPriceMin, 'Max price should be >= min price');
  assert.ok(quote.distanceKmEstimate > 0, 'Distance should be positive');
  assert.ok(quote.estimatedTimeMinMinutes > 0, 'Min time should be positive');
  assert.ok(quote.estimatedTimeMaxMinutes >= quote.estimatedTimeMinMinutes, 'Max time should be >= min time');
  assert.ok(quote.whatsappMessage.includes('Brás (Polo de Confecções)'), 'Message should mention destination');
});

test('whatsapp link generator formats correct target and phone number', () => {
  const link = generateWhatsAppLink('Olá teste');
  assert.ok(link.startsWith(`https://wa.me/${COMPANY_INFO.rawPhone}?text=`), 'Link should target correct phone number');
  assert.ok(link.includes('Ol%C3%A1%20teste'), 'Text should be URL encoded');
});

test('distance calculation handles known hubs properly', () => {
  const dist = getEstimatedDistanceKm('Internacional Shopping Guarulhos', 'Centro de Guarulhos');
  assert.ok(dist >= 2 && dist <= 15, `Distance was unexpected: ${dist}`);
});

test('currency formatter produces valid BRL string', () => {
  const formatted = formatCurrencyBRL(45);
  assert.ok(formatted.includes('45'), 'Should format value with 45');
});
