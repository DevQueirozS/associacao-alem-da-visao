import React, { useEffect } from 'react';
import Gallery from './components/Gallery';
import Partnership from './components/Partnership';
import AboutUs from './components/AboutUs';
import Navigation from './components/Navigation';
import TransparencyPortal from './components/TransparencyPortal';
import ContactForm from './components/ContactForm';
import SocialLinks from './components/SocialLinks';
import Header from './components/Header';
import Footer from './components/Footer';


const App: React.FC = () => {

  useEffect(() => {
    // Scroll para a seção correta ao clicar nos links do menu
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const target = document.querySelector((e.currentTarget as HTMLAnchorElement).getAttribute('href') as string);
        target?.scrollIntoView({ behavior: 'smooth' });
      });
    });
    
  }, []);

  return (
    <>
      <Header />
      <Navigation />
      
      <main className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300">
        <Gallery />
        <AboutUs />
        <Partnership />
        <TransparencyPortal />
        <ContactForm />
        <SocialLinks />
      </main>

      <Footer />
    </>
  );
};

export default App;