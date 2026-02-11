import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform values for left content's Y position
  const leftContentY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1], // Progress points
    ['0%', '-50vh', '-50vh', '-100vh'] // Y position at each progress point
  );

  useEffect(() => {
    // Calculate the height needed for proper scrolling
    if (containerRef.current) {
      // Height should be enough to accommodate all cards plus some extra space
      setContainerHeight(window.innerHeight * 4); 
    }
  }, []);

  const featureCards: FeatureCard[] = [
    {
      id: 1,
      title: "Tailored Approach",
      description: "We craft personalized go-to-market plans that align perfectly with your unique business objectives.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>,
    },
    {
      id: 2,
      title: "World-class Talent",
      description: "Our carefully selected teams act as an extension of your own with narrow industry knowledge and relevant certifications.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>,
    },
    {
      id: 3,
      title: "First Results Within a Month",
      description: "We set up and launch your campaign in the first 14 days. Within 30 days, you'll start seeing the first appointments in your calendar.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>,
    },
    {
      id: 4,
      title: "Cross-functional Approach",
      description: "Our end-to-end strategy covers every stage of the deal generation process, raising sales by 25% on average.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    },
    {
      id: 5,
      title: "Omnichannel Strategies",
      description: "We integrate both outbound and inbound efforts with cutting-edge tools to deliver targeted, result-oriented solutions.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" /></svg>,
    },
  ];

  return (
    <div 
      ref={containerRef} 
      className="relative w-full bg-gradient-to-b from-[#140F23] to-[#7340FF]"
      style={{ height: `${containerHeight}px` }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col lg:flex-row">
        {/* Left column with fixed content */}
        <motion.div 
          ref={leftContentRef}
          className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-16 py-12"
          style={{ y: leftContentY }}
        >
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F5F7FF] mb-6">
              What sets us apart
            </h2>
            <p className="text-lg text-[#E9D9FE] mb-8">
              Since 2017, Belkins has been the top outbound lead generation agency for B2B companies across 50+ industries. We deliver tailored strategies that drive measurable results.
            </p>
            <button className="bg-[#7340FF] hover:bg-[#6030DD] transition-colors text-white font-semibold py-3 px-8 rounded-md shadow-lg">
              Get a quote
            </button>
          </div>
        </motion.div>

        {/* Right column with scrolling cards */}
        <div className="w-full lg:w-1/2 relative flex flex-col items-center justify-center px-6 py-12">
          {featureCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="w-full max-w-md bg-[#F5F7FF] rounded-xl shadow-xl p-8 mb-8 transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.5, 
                  delay: index * 0.1 
                }
              }}
              viewport={{ once: false, margin: "-20% 0px" }}
            >
              <div className="rounded-full bg-[#E9D9FE] p-3 w-14 h-14 flex items-center justify-center text-[#7340FF] mb-4">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#140F23] mb-3">{card.title}</h3>
              <p className="text-[#140F23]/80">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;