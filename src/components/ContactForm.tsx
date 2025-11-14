import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  // O número de telefone real da associação
  const WHATSAPP_NUMBER = '5541998595500'; // Exemplo: +55 (41) 99859-5500

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Constrói a mensagem padrão do WhatsApp
    const defaultMessage = `Olá! Meu nome é ${name}. Assunto: ${subject}. Mensagem: ${message}`;
    
    // Codifica a URL para evitar problemas com caracteres especiais
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;
    
    // Abre a URL em uma nova aba
    window.open(whatsappUrl, '_blank');
    
    // Limpa o formulário
    setName('');
    setSubject('');
    setMessage('');
  };

  return (
    <section 
      id="contato"
      className="py-12 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-xl mx-auto">
        <h2 
          className="text-3xl font-extrabold text-aav-primary dark:text-aav-secondary mb-4 text-center"
        >
          Fale Conosco
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 text-center">
          Preencha os campos abaixo e inicie uma conversa diretamente pelo WhatsApp.
        </p>
        
        <form 
          id="contact-form" 
          onSubmit={handleSubmit}
          // Estilo do Formulário: Fundo branco, padding, sombra, arredondamento
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl space-y-4 border border-gray-200 dark:border-gray-700"
        >
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Seu Nome:
            </label>
            <input 
              type="text" 
              id="contact-name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-aav-primary focus:border-aav-primary dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Assunto:
            </label>
            <input 
              type="text" 
              id="contact-subject" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              required 
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-aav-primary focus:border-aav-primary dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Mensagem:
            </label>
            <textarea 
              id="contact-message" 
              rows={4} 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-aav-primary focus:border-aav-primary dark:bg-gray-700 dark:text-white"
            />
          </div>

          <button 
            type="submit"
            // Estilo do Botão WhatsApp (cor verde)
            className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition duration-300 shadow-md"
          >
            Enviar pelo WhatsApp 🟢
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;