import React from 'react';

const navItems = [
  { href: '#galeria', label: 'Galeria de Eventos' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#parcerias', label: 'Parcerias' },
  { href: '#transparencia', label: 'Transparência' },
  { href: '#redes-sociais', label: 'Mídias Sociais' },
  { href: '#contato', label: 'Fale Conosco' },
];

const Navigation: React.FC = () => {
  return (
    <nav 
      // Estilo da Barra de Navegação:
      // Fundo azul primário, sticky abaixo do header (se o header for sticky)
      // Usamos shadow-lg, padding e flexbox para layout
      className="bg-aav-primary dark:bg-gray-800 shadow-lg sticky top-[4.5rem] md:top-[5rem] z-10"
    >
      <div 
        // Container dos Links: flexbox para alinhamento horizontal
        className="flex overflow-x-auto whitespace-nowrap p-2 md:p-3 max-w-7xl mx-auto"
        // Estilo para esconder a barra de scroll horizontal em navegadores compatíveis
        style={{ scrollbarWidth: 'none' /* Firefox */ }} 
      >
        {navItems.map((item, index) => (
          <a 
            key={index} 
            href={item.href}
            // Estilo de cada Link: cor branca, padding horizontal, arredondamento, hover
            className={`
              text-white dark:text-gray-200 px-4 py-2 text-sm md:text-base 
              font-semibold rounded-full transition-colors duration-200 
              hover:bg-aav-secondary hover:text-aav-primary flex-shrink-0
            `}
            // O evento de scroll suave deve ser gerenciado no App.tsx
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;