import React from 'react';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Datenschutz auf einen Blick</h2>
          <p>
            Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            Johann Zehner<br />
            E-Mail: office@dcms.at
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Datenerfassung auf unserer Website</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          </p>

          {/* Weitere Datenschutzinformationen hier */}
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
