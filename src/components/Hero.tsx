import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-digital-network-connections-2654/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professionelles IT-Monitoring für Ihre Infrastruktur
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Maximieren Sie die Verfügbarkeit Ihrer IT-Systeme mit unseren
            maßgeschneiderten Monitoring-Lösungen
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Beratung anfordern
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
