import React from 'react';
import { ModalType } from '../App';

interface FooterProps {
  setActiveModal: (modal: ModalType) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveModal }) => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between pb-8 border-b border-gray-300">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-[#1D184E] mb-4">SPEEDY QUOTE AUTO</h3>
            <p className="text-gray-600 max-w-xs">
              Get personalized auto insurance quotes quickly and easily. Save money while getting the coverage you need.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* <div>
              <h4 className="text-lg font-bold text-[#1D184E] mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setActiveModal('contact')}
                    className="text-gray-600 hover:text-[#F26624]"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#F26624]">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#F26624]">Our Partners</a>
                </li>
              </ul>
            </div> */}
            
            {/* <div>
              <h4 className="text-lg font-bold text-[#1D184E] mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#F26624]">Auto Insurance</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#F26624]">Claims Process</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#F26624]">Coverage Types</a></li>
              </ul>
            </div>
             */}
            <div>
              <h4 className="text-lg font-bold text-[#1D184E] mb-4">Get in Touch</h4>
              <ul className="space-y-2">
              
                <li>
                  <a href="mailto:info@speedyquote.com" className="text-gray-600 hover:text-[#F26624] flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    info@speedyquote.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Speedy Quote Auto. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center space-x-4">
            <button 
              onClick={() => setActiveModal('privacy')}
              className="text-gray-600 hover:text-[#F26624] text-sm"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setActiveModal('terms')}
              className="text-gray-600 hover:text-[#F26624] text-sm"
            >
              Terms and Conditions
            </button>
            <button 
              onClick={() => setActiveModal('cookies')}
              className="text-gray-600 hover:text-[#F26624] text-sm"
            >
              Cookies
            </button>
            <button 
              onClick={() => setActiveModal('california')}
              className="text-gray-600 hover:text-[#F26624] text-sm"
            >
              California Consumer Privacy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;