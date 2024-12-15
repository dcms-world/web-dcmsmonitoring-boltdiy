import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import { fetchContactInfo } from '../utils/api';

const Footer = () => {
  const [contactInfo, setContactInfo] = useState<{ name: string; email: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContactInfo = async () => {
      try {
        const info = await fetchContactInfo();
        setContactInfo(info);
      } catch (error) {
        console.error('Failed to load contact info:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadContactInfo();
  }, []);

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="h-6 w-6 text-emerald-400" />
              <span className="text-lg font-bold text-white">DCMS Monitoring</span>
            </div>
            <p className="text-sm">
              Professionelle IT-Monitoring-Lösungen für Unternehmen jeder Größe.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Kontakt</h3>
            <div className="space-y-2 text-sm">
              {isLoading ? (
                <p>Lade Kontaktinformationen...</p>
              ) : contactInfo ? (
                <>
                  <p>{contactInfo.name}</p>
                  <p>E-Mail: <span className="contact-email">{contactInfo.email}</span></p>
                </>
              ) : (
                <p>Kontaktinformationen nicht verfügbar</p>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Rechtliches</h3>
            <div className="space-y-2 text-sm">
              <a href="/datenschutz" className="hover:text-emerald-400">Datenschutz</a>
              <br />
              <a href="/impressum" className="hover:text-emerald-400">Impressum</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <div className="space-y-2 text-sm">
              <p>On-Premise Monitoring</p>
              <p>Cloud Monitoring</p>
              <p>Software-Überwachung</p>
              <p>Performance Analyse</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} DCMS Monitoring. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
