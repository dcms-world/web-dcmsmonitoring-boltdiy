import React from 'react';
import { Server, Cloud, Code, Activity } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Server,
      title: 'On-Premise Monitoring',
      description: 'Überwachen Sie Ihre gesamte IT-Infrastruktur direkt vor Ort mit unserer Enterprise-Lösung.',
    },
    {
      icon: Cloud,
      title: 'Cloud Monitoring',
      description: 'Flexibles Monitoring Ihrer Cloud-Infrastruktur ohne eigene Hardware-Investitionen.',
    },
    {
      icon: Code,
      title: 'Software-Überwachung',
      description: 'Kontinuierliche Überwachung Ihrer Anwendungen und Services für optimale Performance.',
    },
    {
      icon: Activity,
      title: 'Performance Analyse',
      description: 'Detaillierte Einblicke in die Leistung Ihrer Systeme und Anwendungen.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Unsere Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-slate-600"
            >
              <service.icon className="h-12 w-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
