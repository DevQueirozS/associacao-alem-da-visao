import React from "react";
import type { Publication } from "../types";

interface PublicationCardProps {
  pub: Publication;
  onOpen: (pub: Publication) => void;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ pub, onOpen }) => {
  const isExternalLink = !!pub.link;

  const handleClick = () => {
    if (isExternalLink && pub.link) {
      window.open(pub.link, "_blank");
    } else {
      onOpen(pub);
    }
  };

  return (
    <div
      // Estilo do Cartão (Card)
      className={`
    flex flex-col w-64 md:w-80 lg:w-96 flex-shrink-0 
    bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden 
    transition-transform hover:scale-[1.02] duration-300
    border border-gray-200 dark:border-gray-600 
        // 🚨 Adicionamos altura fixa para igualar todos os cards
        h-[28rem] // Exemplo: 448px de altura total
   `}
    >
      {/* 1. Contêiner da Mídia com Altura Fixa (224px) */}
      <div className="h-56 overflow-hidden">
        {pub.type === "image" && pub.image ? (
          <img
            src={pub.image}
            alt={pub.description}
            // w-full h-full e object-cover garantem que a imagem preencha o espaço fixo
            className="w-full h-full object-cover"
          />
        ) : pub.video ? (
          <video
            src={pub.video}
            controls
            className="w-full h-full object-cover"
          >
            Seu navegador não suporta vídeos.
          </video>
        ) : null}
      </div>

      {/* 2. Contêiner do Conteúdo (Texto e Botão) */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <p
          // Estilo da descrição
          className={`
              text-gray-700 dark:text-gray-300 text-sm flex-grow mb-4 
              // 🚨 Adiciona limite de linhas (ex: 3 linhas)
              line-clamp-3 
              // 🚨 Garante que o texto não force o crescimento
              overflow-hidden
            `}
          dangerouslySetInnerHTML={{
            __html: pub.description.replace(/\n/g, "<br>"),
          }}
        />

        <button
          onClick={handleClick}
          // Estilo do Botão
          className={`
      mt-auto w-full py-2 rounded-lg font-semibold transition duration-200
      ${
        isExternalLink
          ? "bg-red-600 text-white hover:bg-red-700"
          : "bg-aav-primary text-white hover:bg-aav-secondary hover:text-aav-primary"
      }
     `}
        >
          {isExternalLink ? "Ver no Facebook" : "Ver Detalhes"}
        </button>
      </div>
    </div>
  );
};

export default PublicationCard;
