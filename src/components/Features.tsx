import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    '24/7 Überwachung aller kritischen Systeme',
    'Automatische Alarmierung bei Störungen',
    'Umfangreiche Reporting-Funktionen',
    'Anpassbare Dashboards',
    'Integration mit bestehenden Systemen',
    'Skalierbare Architektur',
    'Echtzeit-Benachrichtigungen',
    'Historische Datenanalyse',
  ];

  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-white">Zabbix Enterprise Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="Dashboard Visualisierung"
              className="rounded-lg shadow-xl border-2 border-slate-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
