import React, { useState } from 'react';
import Modal from './Modal';
import type { LoginResponse } from '../types'; 

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Simulação da chamada de serviço (mantida a simplicidade)
const mockLoginRequest = async (username: string, password: string): Promise<LoginResponse> => {
  console.log(`Tentativa de Login para: ${username}`);
  await new Promise(resolve => setTimeout(resolve, 1000)); 
  
  if (username === 'admin' && password === '12345') {
    return { ok: true, message: 'Login realizado com sucesso!' };
  } else {
    return { ok: false, message: 'Usuário ou senha incorretos.' };
  }
};


const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await mockLoginRequest(username, password);
      
      if (response.ok) {
        setMessage(response.message || 'Sucesso! Redirecionando...');
        // Aqui você faria o redirecionamento
        setTimeout(onClose, 1500); 
      } else {
        setMessage(response.message || 'Erro ao logar.');
      }
    } catch (error) {
      setMessage('Ocorreu um erro na requisição.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Modal de Login" size="sm"> {/* 🚨 Usando size="sm" */}
      <div className="login-content space-y-4">
        <h2 className="text-2xl font-bold text-center mb-6">Acesso Administrativo</h2>
        
        {/* Mensagem de Feedback (Dinamica) */}
        {message && (
            <div className={`p-3 rounded-lg text-center font-semibold ${
                isLoading ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                message.includes('Sucesso') ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
            }`}>
                {message}
            </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">
                Usuário:
            </label>
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
              disabled={isLoading}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-aav-primary focus:border-aav-primary dark:bg-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
                Senha:
            </label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              disabled={isLoading}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-aav-primary focus:border-aav-primary dark:bg-gray-600 dark:text-white"
            />
          </div>

          {/* Botões */}
          <div className="flex flex-col space-y-3 pt-2">
            <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-aav-primary text-white font-bold py-2 rounded-lg hover:bg-aav-secondary hover:text-aav-primary transition duration-300 disabled:opacity-50"
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
            
            <button 
                type="button" 
                onClick={onClose} 
                disabled={isLoading}
                className="w-full bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-200 font-semibold py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition duration-300 disabled:opacity-50"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;