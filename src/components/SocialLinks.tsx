import React from 'react';

// Dados dos links sociais e Vakinha
const SOCIAL_LINKS = [
    { icon: '📸', name: 'Instagram', url: 'https://www.instagram.com/alemdavisaosjp/' },
    { icon: '👍', name: 'Facebook', url: 'https://www.facebook.com/alemdavisaosjp' },
    { icon: '▶️', name: 'YouTube', url: 'https://www.youtube.com/@alemdavisaosjp550' },
];

const VAKINHA_LINK = {
    title: 'Faça sua Doação (Vakinha)',
    url: 'https://www.vakinha.com.br/vaquinha/ajude-a-associacao-alem-da-visao-a-defender-os-direitos-da-pessoa-cega-e-com-baixa-visao',
};

const SocialLinks: React.FC = () => {
    return (
        <section 
          id="redes-sociais"
          className="py-12 px-4 bg-white dark:bg-gray-800 transition-colors duration-300"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-3xl font-extrabold text-aav-primary dark:text-aav-secondary mb-8"
            >
              Mídias Sociais e Apoio
            </h2>
            
            {/* Links Sociais */}
            <div className="social-links-container flex flex-wrap justify-center gap-6 mb-12">
              {SOCIAL_LINKS.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  // Estilo do Link Social
                  className="social-link flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                             px-6 py-3 rounded-full font-semibold text-lg hover:bg-aav-secondary hover:text-aav-primary transition duration-300 shadow-md"
                >
                  {link.icon} {link.name}
                </a>
              ))}
            </div>

            {/* Link de Doação (Vakinha) */}
            <div className="donation-link p-6 bg-yellow-100 dark:bg-yellow-900 rounded-xl shadow-inner border border-yellow-300 dark:border-yellow-700">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-yellow-200 mb-4">
                    Ajude Nossa Causa
                </h3>
                <a 
                    href={VAKINHA_LINK.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    // Estilo do Botão de Doação
                    className="btn-doar inline-block bg-aav-secondary text-aav-primary font-extrabold text-xl px-8 py-3 rounded-full 
                               hover:bg-yellow-400 transition duration-300 shadow-lg transform hover:scale-105"
                >
                    {VAKINHA_LINK.title}
                </a>
            </div>
          </div>
        </section>
    );
};

export default SocialLinks;