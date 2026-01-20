import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './Components/modals/PrivacyPolicy';
import TermsAndConditions from './Components/modals/TermsAndConditions';
import ContactUs from './Components/modals/ContactUs';
import Cookies from './Components/modals/Cookies';
import CaliforniaPrivacy from './Components/modals/CaliforniaPrivacy';
import Modal from './Components/Modal';


export type ModalType = '' | 'privacy' | 'terms' | 'contact' | 'cookies' | 'california';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>('');

  const closeModal = () => setActiveModal('');

  const renderModalContent = () => {
    switch (activeModal) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsAndConditions />;
      case 'contact':
        return <ContactUs />;
      case 'cookies':
        return <Cookies />;
      case 'california':
        return <CaliforniaPrivacy />;
      default:
        return null;
    }
  };

  return (
    <div className="font-tomato">
      <HomePage setActiveModal={setActiveModal} />
      
      {activeModal && (
        <Modal onClose={closeModal}>
          {renderModalContent()}
        </Modal>
      )}
    </div>
  );
};

export default App;