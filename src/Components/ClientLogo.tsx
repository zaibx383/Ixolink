import React, { useEffect, useRef } from "react";
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
  { name: 'Airbnb', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg' }, // Substitute for Airbnb
  { name: 'Uber', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' }, // Substitute for Uber
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
      className="group relative shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] rounded-lg md:rounded-xl overflow-hidden flex items-center justify-center p-4 transition-transform duration-300"
      style={{ maxWidth: "100vw" }}
    >
      <img
        src={image}
        alt={name}
        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
        draggable={false}
        title={name}
        loading="lazy"
      />
    </div>
  );
}

export default function ClientsSection() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    let frameId;

    const animate = () => {
      // Row 1: scroll left
      if (scrollRef1.current) {
        scrollRef1.current.scrollLeft += 0.75;
        if (scrollRef1.current.scrollLeft >= scrollRef1.current.scrollWidth / 2) {
          scrollRef1.current.scrollLeft = 0;
        }
      }
      // Row 2: scroll right
      if (scrollRef2.current) {
        scrollRef2.current.scrollLeft -= 0.75;
        if (scrollRef2.current.scrollLeft <= 0) {
          scrollRef2.current.scrollLeft = scrollRef2.current.scrollWidth / 2;
        }
      }
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const scroll = (direction) => {
    const scrollAmount = 350;
    if (direction === "left") {
      if (scrollRef1.current) {
        scrollRef1.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
      if (scrollRef2.current) {
        scrollRef2.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      if (scrollRef1.current) {
        scrollRef1.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
      if (scrollRef2.current) {
        scrollRef2.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-gray-50 overflow-hidden w-full" style={{ maxWidth: "100vw", position: "relative" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full" style={{ maxWidth: "100%" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-4 mb-10 md:mb-14 lg:mb-16"
        >
          <h2
            className="text-[#133664]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(20px, 4vw, 40px)',
              fontWeight: 600,
              lineHeight: '1.2',
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

        <div className="relative w-full overflow-hidden" style={{ maxWidth: '100vw', clipPath: 'inset(0)' }}>
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#3B7DD8] items-center justify-center shadow-lg shadow-[#3B7DD8]/30 transition-all duration-300 hover:scale-110 hover:bg-[#1E5092]"
            aria-label="Scroll left"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#3B7DD8] items-center justify-center shadow-lg shadow-[#3B7DD8]/30 transition-all duration-300 hover:scale-110 hover:bg-[#1E5092]"
            aria-label="Scroll right"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Row 1 - Auto-scrolls Left */}
          <div
            ref={scrollRef1}
            className="flex gap-3 md:gap-6 lg:gap-8 overflow-x-hidden scrollbar-hide px-2 md:px-8 py-2 md:py-3 mb-5 md:mb-8 lg:mb-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', maxWidth: '100%', clipPath: 'inset(0)' }}
          >
            {clientLogosRow1Duplicated.map((client, index) => (
              <ClientLogo
                key={`row1-${index}`}
                name={client.name}
                image={client.image}
              />
            ))}
          </div>

          {/* Row 2 - Auto-scrolls Right */}
          <div
            ref={scrollRef2}
            className="flex gap-3 md:gap-6 lg:gap-8 overflow-x-hidden scrollbar-hide px-2 md:px-8 py-2 md:py-3"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', maxWidth: '100%', clipPath: 'inset(0)' }}
          >
            {clientLogosRow2Duplicated.map((client, index) => (
              <ClientLogo
                key={`row2-${index}`}
                name={client.name}
                image={client.image}
              />
            ))}
          </div>

          {/* Gradient fades */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 lg:w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 lg:w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}