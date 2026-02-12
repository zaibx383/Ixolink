import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Icon SVGs, can be swapped for lucide icons if desired
const icons = [
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" /></svg>,
];

const featureCards = [
  {
    id: 1,
    title: "Tailored Approach",
    description: "We craft personalized go-to-market plans that align perfectly with your unique business objectives.",
    icon: icons[0],
    image:
      "https://images.unsplash.com/photo-1515165562835-cffeb31da2fd?auto=format&fit=crop&w=800&q=80", // strategy team
  },
  {
    id: 2,
    title: "World-class Talent",
    description: "Our carefully selected teams act as an extension of your own with narrow industry knowledge and relevant certifications.",
    icon: icons[1],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", // people meeting
  },
  {
    id: 3,
    title: "First Results Within a Month",
    description: "We set up and launch your campaign in the first 14 days. Within 30 days, you'll start seeing the first appointments in your calendar.",
    icon: icons[2],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80", // calendar/phone
  },
  {
    id: 4,
    title: "Cross-functional Approach",
    description: "Our end-to-end strategy covers every stage of the deal generation process, raising sales by 25% on average.",
    icon: icons[3],
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // process, hands
  },
  {
    id: 5,
    title: "Omnichannel Strategies",
    description: "We integrate both outbound and inbound efforts with cutting-edge tools to deliver targeted, result-oriented solutions.",
    icon: icons[4],
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80", // multi-devices comms
  },
];

function FeatureSection() {
  const containerRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Section scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [1, 1, 0.3, 0]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      // Split scroll evenly between cards
      const newIndex = Math.min(Math.floor(value * 5.5), 4);
      setActiveCardIndex(newIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Main render
  return (
    <div
      ref={containerRef}
      className="relative w-full bg-gradient-to-b from-[#140F23] to-[#7340FF]"
      style={{ height: "400vh" }}
      id="features"
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col lg:flex-row">
        
        {/* LEFT COLUMN */}
        <motion.div
          className="w-full lg:w-2/5 flex items-center justify-center px-6 lg:px-16 py-12"
          style={{ opacity: headingOpacity }}
        >
          <div className="max-w-xl">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-[#F5F7FF] mb-6"
            >
              What sets us apart
            </motion.h2>
            <motion.p className="text-lg text-[#E9D9FE] mb-8">
              Since 2017, Belkins has been the top outbound lead generation agency for B2B companies across 50+ industries. We deliver tailored strategies that drive measurable results.
            </motion.p>
            <motion.button
              className="bg-[#7340FF] hover:bg-[#6030DD] transition-colors text-white font-semibold py-3 px-8 rounded-md shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
            >
              Get a quote
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT: CARDS */}
        <div className="w-full lg:w-3/5 relative flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-2xl relative h-96">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.id}
                className="w-full h-full absolute top-0 left-0 rounded-xl shadow-2xl overflow-hidden"
                animate={{
                  opacity: activeCardIndex === index ? 1 : 0.25,
                  scale: activeCardIndex === index ? 1 : 0.86,
                  y: (index - activeCardIndex) * 40,
                  rotateY: activeCardIndex === index ? 0 : -5,
                  rotateX: activeCardIndex === index ? 0 : 2,
                  zIndex: 5 - Math.abs(index - activeCardIndex),
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.19, 1, 0.22, 1],
                }}
                style={{
                  pointerEvents: activeCardIndex === index ? "auto" : "none",
                  backgroundImage: `url('${card.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                whileHover={activeCardIndex === index ? { scale: 1.02 } : {}}
              >
                {/* Gradient overlays for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140F23]/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#7340FF]/20 to-transparent"></div>

                {/* ICON bubble */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="rounded-full bg-[#E9D9FE] p-3 w-14 h-14 flex items-center justify-center text-[#7340FF] shadow-lg backdrop-blur-sm">
                    {card.icon}
                  </div>
                </div>
                
                {/* Text overlay bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-[#F5F7FF] z-10">
                  <h3 className="text-3xl font-bold mb-3 text-[#F5F7FF]">{card.title}</h3>
                  <p className="text-lg text-[#E9D9FE]/90 max-w-lg">{card.description}</p>
                </div>

                <motion.div
                  className="absolute inset-0 bg-[#7340FF]/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.18 }}
                />
              </motion.div>
            ))}
          </div>

          {/* DOTS */}
          <div className="absolute bottom-8 flex space-x-3">
            {featureCards.map((_, index) => (
              <motion.button
                key={index}
                className="w-3 h-3 rounded-full focus:outline-none"
                animate={{
                  backgroundColor: activeCardIndex === index ? "#F5F7FF" : "rgba(245, 247, 255, 0.2)",
                  scale: activeCardIndex === index ? 1.2 : 1
                }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  const targetScrollProgress = (index + 0.5) / 5;
                  const containerHeight = containerRef.current.scrollHeight - window.innerHeight;
                  const targetScrollPosition = containerHeight * targetScrollProgress;
                  window.scrollTo({
                    top: targetScrollPosition + containerRef.current.offsetTop,
                    behavior: 'smooth'
                  });
                }}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to feature ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;