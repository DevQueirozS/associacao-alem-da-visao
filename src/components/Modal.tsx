import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

// Tipos para controlar o tamanho do modal
type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  // Nova propriedade para controlar a largura máxima
  size?: ModalSize; 
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  children, 
  title = "Janela Modal",
  size = 'lg' // Valor padrão: largura grande
}) => {
  
  // Mapeamento do tamanho (size) para classes de largura máxima (max-w-) do Tailwind
  const sizeMap: Record<ModalSize, string> = {
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    'full': 'max-w-full',
  };

  const maxWidthClass = sizeMap[size] || sizeMap.lg; // Seleciona a classe, ou usa 'lg' como fallback

  return (
    <Transition appear show={isOpen} as={Fragment}>
      {/* z-50 para garantir que fique acima de todos os outros elementos */}
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        
        {/* Camada de Fundo (Overlay) */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Fundo preto semi-transparente */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            
            {/* Conteúdo do Modal (Card) */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel 
                // Classes de Estilo Dinâmico:
                // 1. Largura Máxima (dinâmica)
                // 2. Cores e Texto: Adaptam-se ao modo Dark/Light
                className={`
                  modal-content w-full transform overflow-hidden rounded-xl p-6 shadow-2xl transition-all text-left 
                  ${maxWidthClass} 
                  bg-white dark:bg-gray-700 
                  text-gray-800 dark:text-gray-100
                  max-h-[90vh]
                `}
              >
                {/* O título da Dialog é importante para a leitura de tela (sr-only) */}
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 sr-only" 
                >
                  {title}
                </Dialog.Title>
                
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;