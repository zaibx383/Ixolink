import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#1D184E]">Privacy Policy</h1>
      
      <p className="text-gray-600">
        Last updated: January 20, 2026
      </p>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">1. Introduction</h2>
        <p>
          Speedy Quote Auto ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
        <p>
          Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
        </p>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">2. Information We Collect</h2>
        <p>
          We collect information that you provide directly to us, such as when you:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Complete forms on our website</li>
          <li>Request insurance quotes</li>
          <li>Register for an account</li>
          <li>Communicate with us</li>
          <li>Subscribe to our newsletter</li>
        </ul>
        <p>
          The types of information we may collect include your name, email address, postal address, phone number, vehicle information, driving history, insurance history, and other information relevant to providing insurance quotes.
        </p>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">3. How We Use Your Information</h2>
        <p>
          We may use the information we collect for various purposes, including to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide, maintain, and improve our services</li>
          <li>Process and complete transactions</li>
          <li>Send you technical notices and support messages</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Communicate with you about products, services, and events</li>
          <li>Monitor and analyze trends, usage, and activities</li>
          <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
          <li>Personalize and improve your experience</li>
        </ul>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">4. Sharing Your Information</h2>
        <p>
          We may share personal information in the following situations:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>With insurance providers to obtain quotes on your behalf</li>
          <li>With service providers who perform services on our behalf</li>
          <li>For legal purposes, if we believe disclosure is required by law</li>
          <li>In connection with a business transaction, such as a merger or acquisition</li>
        </ul>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">5. Your Choices</h2>
        <p>
          You can opt out of receiving promotional communications from us by following the instructions in those messages. Even if you opt out, we may still send you non-promotional communications, such as those about your account or our ongoing business relations.
        </p>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">6. Contact Information</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p>
          Email: info@speedyquoteauto.org<br />
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;