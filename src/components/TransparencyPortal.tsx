import React from 'react';
import { documents } from '../data/transparency'; // Certifique-se de que os dados estão completos

const TransparencyPortal: React.FC = () => {
  return (
    <section 
      id="transparencia"
      className="py-12 px-4 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-3xl font-extrabold text-aav-primary dark:text-aav-secondary mb-10 text-center"
        >
          Portal da Transparência
        </h2>
        
        {/* Grid para os Cartões de PDF */}
        <div 
          id="pdf-cards-container"
          // Grid responsivo: 1 coluna em telas pequenas, 2 em md, 3 em lg
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {documents.map((doc, index) => (
              <div 
                  key={index} 
                  // Estilo do Cartão PDF
                  className="pdf-card p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-xl hover:shadow-2xl transition duration-300"
              >
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                      {doc.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {doc.description}
                  </p>
                  <a 
                      href={`/files/${doc.fileName}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      // Estilo do Botão de Download
                      className="btn-download inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700 transition duration-300"
                  >
                      Baixar PDF
                  </a>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransparencyPortal;