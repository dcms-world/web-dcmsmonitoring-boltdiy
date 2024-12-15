import React from 'react';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-6 mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            Johann Zehner<br />
            DCMS Monitoring
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Kontakt</h2>
          <p>
            E-Mail: office@dcms.at
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Unternehmensdaten</h2>
          <p>
            Einzelunternehmer: Johann Zehner<br />
            Unternehmensgegenstand: IT-Monitoring Services
          </p>

          {/* Weitere rechtliche Informationen hier */}
        </div>
      </div>
    </div>
  );
};

export default Impressum;
