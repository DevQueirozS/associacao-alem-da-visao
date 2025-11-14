import React, { useState } from 'react';
import { useAcessibility } from '../hooks/useAcessibility';
import type { FontSize, Theme } from '../types';
import LoginModal from './LoginModal';

const Header: React.FC = () => {
  const {
    theme, setTheme,
    fontSize, setFontSize, // Usaremos fontSize para aplicar classes Tailwind
    bgColor, setBgColor,
    fontColor, setFontColor,
    resetColors
  } = useAcessibility();
  
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Mapeamento das classes de fonte do hook para classes Tailwind
  const FONT_SIZE_MAP: Record<FontSize, string> = {
    'font-normal': 'text-base',      // 16px
    'font-medium': 'text-lg',       // 18px
    'font-large': 'text-xl',        // 20px
    'font-xlarge': 'text-2xl',      // 24px
  };

  return (
    <header 
      // Tailwind para o Header:
      className={`
        flex justify-between items-center p-4 shadow-md sticky top-0 z-20 
        bg-white dark:bg-gray-800 text-aav-primary dark:text-gray-100
        ${FONT_SIZE_MAP[fontSize]} 
      `}
      style={{ 
        backgroundColor: bgColor === '#f0f4f8' ? undefined : bgColor, // Permitir que o Tailwind gerencie o padrão
        color: fontColor === '#333' ? undefined : fontColor,
      }}
    >
      {/* Botão de Login */}
      <button 
        onClick={() => setIsLoginModalOpen(true)}
        className="bg-aav-primary text-white px-4 py-2 rounded-lg hover:bg-aav-secondary hover:text-aav-primary transition duration-300 font-semibold"
      >
        Login
      </button>
      
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />

      {/* Seção do Logo e Título */}
      <div className="flex items-center gap-4">
        <img 
          src="/nova-logo.png" 
          alt="Logo da Associação Além da Visão" 
          className="h-16 w-16"
        />
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold text-aav-primary dark:text-aav-secondary">
            Associação Além da Visão
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            Defendendo os direitos da pessoa cega e com baixa visão.
          </p>
        </div>
      </div>

      {/* Submenu de Configurações de Acessibilidade */}
      <div className="flex flex-wrap gap-4 text-sm items-center">
        
        {/* Tamanho da Fonte */}
        <div className="flex flex-col">
          <label htmlFor="font-size-selector" className="font-medium">Tamanho da Fonte:</label>
          <select 
            id="font-size-selector" 
            value={fontSize} 
            onChange={(e) => setFontSize(e.target.value as FontSize)}
            className="border border-gray-300 rounded-md p-1 bg-white dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="font-normal">Normal</option>
            <option value="font-medium">Médio</option>
            <option value="font-large">Grande</option>
            <option value="font-xlarge">Muito Grande</option>
          </select>
        </div>

        {/* Contraste (Tema) */}
        <div className="flex flex-col">
          <label htmlFor="theme-selector" className="font-medium">Contraste:</label>
          <select 
            id="theme-selector" 
            value={theme} 
            onChange={(e) => setTheme(e.target.value as Theme)}
            className="border border-gray-300 rounded-md p-1 bg-white dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="light-mode">Modo Claro</option>
            <option value="dark-mode">Modo Escuro</option>
          </select>
        </div>

        {/* Cores Personalizadas */}
        <div className="flex flex-col items-center">
          <label htmlFor="bg-color-selector" className="font-medium">Fundo:</label>
          <input type="color" id="bg-color-selector" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="font-color-selector" className="font-medium">Fonte:</label>
          <input type="color" id="font-color-selector" value={fontColor} onChange={(e) => setFontColor(e.target.value)} />
        </div>

        {/* Botão Restaurar Padrão */}
        <button 
          onClick={resetColors}
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-md hover:bg-gray-300 transition duration-150"
        >
          Restaurar Padrão
        </button>
      </div>
    </header>
  );
};

export default Header;