import React, { useState } from "react";
import { motion } from "framer-motion";

const clientLogosRow1 = [
  { name: 'Google', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
  { name: 'Microsoft', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg' },
  { name: 'Amazon', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'Apple', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
  { name: 'Facebook', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg' },
  { name: 'Slack', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
  { name: 'Twitter', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg' },
  { name: 'Dropbox', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dropbox/dropbox-original.svg' },
  { name: 'LinkedIn', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg' },
  { name: 'Adobe', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobe/adobe-original.svg' },
  { name: 'Figma', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
];

const clientLogosRow2 = [
  { name: 'Netflix', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netflix/netflix-original.svg' },
  { name: 'Salesforce', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg' },
  { name: 'Shopify', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg' },
  { name: 'WordPress', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
  { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Airbnb', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg' },
  { name: 'Uber', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
  { name: 'Stripe', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg' },
  { name: 'PayPal', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/paypal/paypal-original.svg' },
  { name: 'IBM', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ibm/ibm-original.svg' },
  { name: 'Intel', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intel/intel-original.svg' },
  { name: 'Trello', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
];

const clientLogosRow1Duplicated = [...clientLogosRow1, ...clientLogosRow1];
const clientLogosRow2Duplicated = [...clientLogosRow2, ...clientLogosRow2];

function ClientLogo({ name, image }) {
  return (
    <div
      className="group relative shrink-0 w-24 sm:w-28 md:w-32 lg:w-36 h-12 sm:h-14 md:h-16 lg:h-20 rounded-lg flex items-center justify-center p-2 md:p-3 transition-transform duration-300"
      title={name}
      style={{ maxWidth: "100vw" }}
    >
      <img
        src={image}
        alt={name}
        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
        draggable={false}
        loading="lazy"
      />
    </div>
  );
}

export default function ClientsSection() {
  const [marqueePaused, setMarqueePaused] = useState(false);

  return (
    <section className="py-8 md:py-14 bg-gray-50 overflow-hidden w-full" style={{ maxWidth: "100vw", position: "relative" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full" style={{ maxWidth: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-4 mb-7 md:mb-10"
        >
          <h2
            className="text-[#133664] font-semibold"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(20px, 3vw, 34px)',
              lineHeight: '1.16',
              letterSpacing: '-0.02em'
            }}
          >
            Trusted by Industry Leaders
          </h2>
          <p
            className="text-gray-500 max-w-md text-sm md:text-base"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              lineHeight: '1.6'
            }}
          >
            Join the growing list of businesses transforming their operations with our innovative solutions.
          </p>
        </motion.div>

        <div
          className={`relative w-full overflow-hidden ${marqueePaused ? 'marquee-paused' : ''}`}
          style={{ maxWidth: '100vw', clipPath: 'inset(0)' }}
        >
          <button
            onClick={() => setMarqueePaused((p) => !p)}
            className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#3876bc] items-center justify-center shadow-md shadow-[#3B7DD8]/20 transition-all duration-300 hover:scale-110 hover:bg-[#1E5092] border border-gray-200"
            aria-label={marqueePaused ? "Play marquee" : "Pause marquee"}
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={() => setMarqueePaused((p) => !p)}
            className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#3876bc] items-center justify-center shadow-md shadow-[#3B7DD8]/20 transition-all duration-300 hover:scale-110 hover:bg-[#1E5092] border border-gray-200"
            aria-label={marqueePaused ? "Play marquee" : "Pause marquee"}
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Row 1: scrolls left-to-right (track moves left) */}
          <div className="overflow-hidden px-1 md:px-6 py-1 md:py-2 mb-3">
            <div className="flex gap-2 md:gap-4 w-max marquee-track-row1">
              {clientLogosRow1Duplicated.map((client, index) => (
                <ClientLogo
                  key={`row1-${index}`}
                  name={client.name}
                  image={client.image}
                />
              ))}
            </div>
          </div>

          <div className="h-1" />

          {/* Row 2: scrolls right-to-left (track moves right) */}
          <div className="overflow-hidden px-1 md:px-6 py-1 md:py-2">
            <div className="flex gap-2 md:gap-4 w-max marquee-track-row2">
              {clientLogosRow2Duplicated.map((client, index) => (
                <ClientLogo
                  key={`row2-${index}`}
                  name={client.name}
                  image={client.image}
                />
              ))}
            </div>
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
