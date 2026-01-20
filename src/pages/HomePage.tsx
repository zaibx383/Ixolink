import React from 'react';
import Navbar from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import BenefitsSection from '../Components/CTASection';
import TestimonialsSection from '../Components/TestimonialsSection';
import CookieConsent from '../Components/modals/Cookies';
import Footer from '../Components/Footer';
import { ModalType } from '../App'; 

interface HomePageProps {
  setActiveModal: (modal: ModalType) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActiveModal }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <BenefitsSection />
        <TestimonialsSection />
      </main>
      <Footer setActiveModal={setActiveModal} />
    </div>
  );
};

export default HomePage;
