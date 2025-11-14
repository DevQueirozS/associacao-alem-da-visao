import React from 'react';
import { partners } from '../data/partnerships'; // Certifique-se de que os dados estão completos

const Partnership: React.FC = () => {
  return (
    <section 
      id="parcerias"
      className="py-12 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 
        className="text-3xl font-extrabold text-aav-primary dark:text-aav-secondary mb-8 text-center"
      >
        Parcerias
      </h2>
      
      {/* Container de Scroll Horizontal (scroll-container) */}
      <div 
        className="flex overflow-x-auto gap-8 p-6 max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-inner border border-gray-200 dark:border-gray-700"
        style={{ scrollbarWidth: 'none' }} // Esconde a barra de rolagem
      >
        {partners.map((partner, index) => (
          <a 
            key={index} 
            href={partner.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            // Estilo do Cartão de Parceria
            className="card-parceria flex-shrink-0 flex items-center justify-center h-24 w-40 p-2 
                       hover:opacity-75 transition duration-300 transform hover:scale-105"
          >
            <img 
                src={partner.logo} 
                alt={`Logo da ${partner.name}`}
                className="max-h-full max-w-full object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Partnership;