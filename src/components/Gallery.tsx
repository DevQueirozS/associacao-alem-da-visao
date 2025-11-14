import React, { useState } from 'react';
import { publications } from '../data/publications';
import type { Publication } from '../types';
import Modal from './Modal';
import PublicationCard from './PublicationCard';

const Gallery: React.FC = () => {
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);

  const openPublicationModal = (pub: Publication) => {
    setSelectedPub(pub);
  };

  const closeModal = () => {
    setSelectedPub(null);
  };
  
  // Conteúdo do Modal de Publicação
  const modalContent = selectedPub ? (
    <div className="flex flex-col items-center">
      {/* Botão de Fechar */}
      <button 
        onClick={closeModal} 
        className="absolute top-2 right-2 text-3xl font-bold text-gray-800 dark:text-gray-200 hover:text-red-500 transition"
        aria-label="Fechar Modal"
      >
        &times;
      </button>

      {/* Mídia (Imagem/Vídeo) */}
      <div className="w-full max-h-[50vh] overflow-hidden rounded-lg mb-4">
        {selectedPub.type === "image" && selectedPub.image ? (
          <img 
            src={selectedPub.image} 
            alt="Imagem da Publicação em destaque" 
            className="w-full h-auto object-contain" 
          />
        ) : selectedPub.video ? (
          <video 
            src={selectedPub.video} 
            controls 
            autoPlay 
            className="w-full h-full"
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
        ) : null}
      </div>

      {/* Descrição */}
      <p 
        id="modal-description" 
        className="text-gray-800 dark:text-gray-200 text-base overflow-y-auto max-h-[20vh] w-full"
        dangerouslySetInnerHTML={{ __html: selectedPub.description.replace(/\n/g, "<br>") }}
      />
    </div>
  ) : null;


  return (
    <section 
      id="galeria" 
      className="py-12 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 
        // Estilo do Título Principal
        className="text-3xl font-extrabold text-aav-primary dark:text-aav-secondary mb-8 text-center"
      >
        Galeria de Eventos
      </h2>
      
      <section id="ultimas-publicacoes">
        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 border-b border-gray-300 pb-2 max-w-7xl mx-auto px-4">
          Últimas Publicações
        </h3>
        
        {/* Container de Scroll Horizontal (scroll-container) */}
        <div 
          className="flex overflow-x-auto gap-6 p-4 scroll-smooth max-w-7xl mx-auto"
          // Classes para esconder a barra de scroll em navegadores compatíveis
          style={{ scrollbarWidth: 'none' /* Firefox */ }} 
          // Se necessário, adicione aqui o seu CSS de 'scroll-container' para esconder a barra
        >
          {publications.map((pub, index) => (
            <PublicationCard key={index} pub={pub} onOpen={openPublicationModal} />
          ))}
        </div>
      </section>
      
      {/* Modal Reutilizável (Configurado no passo anterior) */}
      <Modal 
        isOpen={!!selectedPub} 
        onClose={closeModal} 
        title={selectedPub?.description || "Publicação"}
      >
          {modalContent}
      </Modal>
    </section>
  );
};

export default Gallery;