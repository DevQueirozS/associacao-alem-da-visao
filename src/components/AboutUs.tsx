import React from 'react';
import { speakText } from '../hooks/useAcessibility'; 
// Use um ícone de áudio (se FontAwesome estiver configurado ou um emoji)// Exemplo de um ícone popular (instalação opcional)

// O texto deve ser extraído do seu index.html
const ABOUT_TEXT = `
  A Associação Além da Visão (AAV), sediada em São José dos Pinhais, 
  atua na defesa dos direitos e na inclusão da pessoa cega e com baixa visão 
  e suas famílias, através de atividades de apoio psicossocial, educação, 
  acessibilidade, esportes e cultura.
  \n\n
  Com 7 anos de atuação, o trabalho da AAV já alcança cerca de 500 pessoas 
  em todo o Paraná e em mais 12 estados do Brasil.
  \n\n
  Missão: Defender os direitos e promover a autonomia e inclusão social da 
  pessoa com deficiência visual e seus familiares.
  \n\n
  Visão: Ser referência no Paraná em defesa dos direitos e inclusão social 
  da pessoa com deficiência visual.
  \n\n
  Valores: Ética, Transparência, Respeito, Dedicação e Cooperação.
`;

const AboutUs: React.FC = () => {
  
  const handleReadText = () => {
    // A função speakText precisa de tratamento para as quebras de linha
    speakText(ABOUT_TEXT.replace(/\n\n/g, ' '));
  };

  return (
    <section 
      id="sobre"
      // Estilo da Seção: Fundo claro/escuro, padding, largura máxima
      className="py-12 px-4 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          // Estilo do Título
          className="text-3xl font-extrabold text-aav-primary dark:text-aav-secondary mb-8 border-b-2 border-aav-primary/50 pb-2 text-center"
        >
          Sobre Nós
        </h2>
        
        <div className="content">
          <div className="text-area text-lg text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
            {ABOUT_TEXT.split('\n\n').map((paragraph, index) => (
              <p key={index} className="indent-8 first:indent-0">{paragraph}</p>
            ))}
            
            <div className="pt-6">
              <button 
                className={`
                  btn-audio flex items-center gap-2 
                  bg-aav-secondary text-aav-primary dark:text-gray-800 
                  px-6 py-3 rounded-full font-bold shadow-md 
                  hover:bg-yellow-500 transition duration-300
                `}
                onClick={handleReadText}
              >
                {/* Ícone de volume, se você tiver uma lib de ícones instalada */}
                 {/* <Volum className="h-6 w-6" />  */}
                🔊 Ouvir Texto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;