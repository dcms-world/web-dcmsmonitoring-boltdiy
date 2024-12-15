import React, { useState } from 'react';
import { Check, ArrowRight, CloudCog, Server } from 'lucide-react';

interface PricingTier {
  name: string;
  type: 'cloud' | 'onpremise';
  price?: {
    monthly: number;
  };
  description: string;
  features: string[];
  cta: string;
}

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cloud' | 'onpremise'>('cloud');

  const cloudPricing: PricingTier = {
    name: 'Hosted Cloud Monitoring',
    type: 'cloud',
    price: {
      monthly: 39
    },
    description: 'Flexible Cloud-Monitoring-Lösung ohne Infrastruktur-Investitionen',
    features: [
      'Sofort einsatzbereit',
      'Automatische Updates',
      'Skalierbare Infrastruktur',
      'Hochverfügbare Systeme',
      'Monatlich kündbar',
      'Pay-per-Use Modell',
      'Integrierte Sicherheitsfunktionen',
      'Globale Monitoring-Abdeckung'
    ],
    cta: 'Cloud-Lösung starten'
  };

  const onPremisePricing: PricingTier = {
    name: 'On-Premise Monitoring',
    type: 'onpremise',
    description: 'Maßgeschneiderte Lösung für Ihre lokale Infrastruktur',
    features: [
      'Vollständige Kontrolle',
      'Individuelle Anpassung',
      'Keine Cloud-Abhängigkeit',
      'Höchste Datensicherheit',
      'Compliance-konform',
      'Direkte Hardware-Integration',
      'Kundenspezifische Lizenzierung',
      'Persönliche Beratung'
    ],
    cta: 'Beratungstermin vereinbaren'
  };

  return (
    <section id="pricing" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Unsere Monitoring-Lösungen</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Wählen Sie zwischen unserer flexiblen Cloud-Lösung oder einer maßgeschneiderten On-Premise-Implementierung.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-slate-800 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('cloud')}
              className={`
                px-6 py-2 rounded-lg flex items-center transition-colors
                ${activeTab === 'cloud' 
                  ? 'bg-emerald-500 text-white' 
                  : 'text-gray-400 hover:bg-slate-700'}
              `}
            >
              <CloudCog className="mr-2 h-5 w-5" />
              Cloud Monitoring
            </button>
            <button
              onClick={() => setActiveTab('onpremise')}
              className={`
                px-6 py-2 rounded-lg flex items-center transition-colors
                ${activeTab === 'onpremise' 
                  ? 'bg-emerald-500 text-white' 
                  : 'text-gray-400 hover:bg-slate-700'}
              `}
            >
              <Server className="mr-2 h-5 w-5" />
              On-Premise
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          <div className="bg-slate-800 rounded-lg p-8 border-2 border-slate-700">
            {activeTab === 'cloud' ? (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {cloudPricing.name}
                    </h3>
                    <p className="text-gray-400">{cloudPricing.description}</p>
                  </div>
                  {cloudPricing.price && (
                    <div className="text-right">
                      <span className="text-3xl font-bold text-white">€{cloudPricing.price.monthly}</span>
                      <span className="text-gray-400 block">/ Monat</span>
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {cloudPricing.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-emerald-400 mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <a 
                    href="#contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                  >
                    {cloudPricing.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {onPremisePricing.name}
                  </h3>
                  <p className="text-gray-400">{onPremisePricing.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {onPremisePricing.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-emerald-400 mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <a 
                    href="#contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {onPremisePricing.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            * Preise für On-Premise-Lösungen werden individuell nach Aufwand und Anforderungen berechnet.
            Kontaktieren Sie uns für ein maßgeschneidertes Angebot.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
