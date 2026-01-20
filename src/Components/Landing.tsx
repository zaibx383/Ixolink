import React from 'react';

import { ModalType } from '../App';
import Header from './Header';
import HeroSection from './HeroSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';
import Footer from './Footer';

interface HomePageProps {
  setActiveModal: (modal: ModalType) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActiveModal }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer setActiveModal={setActiveModal} />
    </div>
  );
};

export default HomePage;