import React from 'react';

const CaliforniaPrivacy: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#1D184E]">California Consumer Privacy Act (CCPA) Notice</h1>
      
      <p className="text-gray-600">
        Last updated: January 20, 2026
      </p>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">Your Rights Under the CCPA</h2>
        <p>
          The California Consumer Privacy Act (CCPA) provides California residents with specific rights regarding their personal information. This section describes your CCPA rights and explains how to exercise those rights.
        </p>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">Right to Know</h2>
        <p>
          You have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request, we will disclose to you:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The categories of personal information we collected about you.</li>
          <li>The categories of sources for the personal information we collected about you.</li>
          <li>Our business or commercial purpose for collecting that personal information.</li>
          <li>The categories of third parties with whom we share that personal information.</li>
          <li>The specific pieces of personal information we collected about you.</li>
        </ul>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">Right to Delete</h2>
        <p>
          You have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions. Once we receive and confirm your verifiable consumer request, we will delete (and direct our service providers to delete) your personal information from our records, unless an exception applies.
        </p>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">Right to Opt-Out of Sale</h2>
        <p>
          If we sell your personal information, you have the right to opt-out of the sale of your information. We do not sell personal information for monetary consideration. However, we may share certain information with third-party partners, which may be considered a "sale" under the CCPA.
        </p>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">Right to Non-Discrimination</h2>
        <p>
          We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, we will not:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Deny you goods or services.</li>
          <li>Charge you different prices or rates for goods or services.</li>
          <li>Provide you a different level or quality of goods or services.</li>
          <li>Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services.</li>
        </ul>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">Exercising Your Rights</h2>
        <p>
          To exercise the rights described above, please submit a verifiable consumer request to us by:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Calling us at: 1-800-555-CCPA</li>
          <li>Emailing us at: ccpa@speedyquote.com</li>
          <li>Visiting our website: www.speedyquote.com/ccpa-request</li>
        </ul>
        <p>
          Only you, or a person registered with the California Secretary of State that you authorize to act on your behalf, may make a verifiable consumer request related to your personal information.
        </p>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">Response Timing and Format</h2>
        <p>
          We endeavor to respond to a verifiable consumer request within forty-five (45) days of its receipt. If we require more time, we will inform you of the reason and extension period in writing.
        </p>
        <p>
          Any disclosures we provide will only cover the 12-month period preceding the verifiable consumer request's receipt. The response we provide will also explain the reasons we cannot comply with a request, if applicable.
        </p>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1D184E]">Contact Information</h2>
        <p>
          If you have any questions or comments about this notice, the ways in which we collect and use your information, or your choices and rights regarding such use, please contact us at:
        </p>
        <p>
          Website: www.speedyquote.com
        </p>
      </section>
    </div>
  );
};

export default CaliforniaPrivacy;