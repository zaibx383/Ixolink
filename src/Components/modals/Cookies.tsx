import React from 'react';

const Cookies: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#1D184E]">Cookie Policy</h1>
      
      <p className="text-gray-600">
        Last updated: January 20, 2026
      </p>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
        </p>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">How We Use Cookies</h2>
        <p>
          We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. We also use cookies to serve you with advertisements that may be relevant to you and your interests.
        </p>
        
        <p>The types of cookies we use include:</p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Essential cookies:</strong> These cookies are necessary for the website to function properly. They enable you to navigate around the site and use its features.
          </li>
          <li>
            <strong>Analytics cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.
          </li>
          <li>
            <strong>Functional cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization.
          </li>
          <li>
            <strong>Targeting cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.
          </li>
        </ul>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">How to Control Cookies</h2>
        <p>
          You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
        </p>
        
        <p>
          Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.allaboutcookies.org" className="text-[#F26624] hover:underline">www.allaboutcookies.org</a>.
        </p>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
        </p>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">Contact Us</h2>
        <p>
          If you have any questions about our use of cookies or other technologies, please email us at info@speedyquoteauto.org.
        </p>
       
      </section>
    </div>
  );
};

export default Cookies;