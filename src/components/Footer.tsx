import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer 
      // Estilo do Rodapé: Fundo azul escuro, texto branco, padding
      className="bg-aav-primary dark:bg-gray-900 text-white p-4 shadow-inner mt-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Associação Além da Visão | Desenvolvido por 
          <a 
            href="https://www.linkedin.com/in/gustavo-souza-%F0%9F%92%BB%F0%9F%91%A8%F0%9F%8F%BD%E2%80%8D%F0%9F%92%BB-52863a1a2/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-aav-secondary hover:underline ml-1 font-semibold"
          >
            DevQueirozS
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;