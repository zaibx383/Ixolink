import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedCaseStudies = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const firstColumnY = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const thirdColumnY = useTransform(scrollYProgress, [0, 1], [-100, 50]);

  // Use one-line titles & short descriptions, remove 250% note.
  const cards = [
    {
      title: 'Fashion Platform: 100K+ Transactions',
      description: 'Scaling a resale marketplace for high transaction volume.',
      image: 'https://picsum.photos/seed/fashion/800/600',
    },
    {
      title: 'Cloud: Small Biz Growth',
      description: 'Cloud strategies that empower small businesses to expand.',
      image: 'https://picsum.photos/seed/cloud/800/600',
    },
    {
      title: 'Web App: Quick Guide',
      description: 'A simple breakdown of custom web development.',
      image: 'https://picsum.photos/seed/web/800/600',
    },
    {
      title: 'Mobile Trends 2024',
      description: 'Latest mobile UI patterns and business advantages.',
      image: 'https://picsum.photos/seed/mobile/800/600',
    },
    {
      title: 'AI for Hospitality',
      description: 'Automating hotel operations with tailored AI tools.',
      image: 'https://picsum.photos/seed/hotel/800/600',
    },
    {
      title: 'Furniture Brand: Shopify Success',
      description: 'E-commerce migration boosting sales for furniture giant.',
      image: 'https://picsum.photos/seed/furniture/800/600',
    },
    {
      title: 'Gen AI in Operations',
      description: 'Modernizing work with cutting-edge generative AI.',
      image: 'https://picsum.photos/seed/ai/800/600',
    },
    {
      title: 'Fintech AI: Funded!',
      description: 'Financial modeling AI drives millions in investment.',
      image: 'https://picsum.photos/seed/fintech/800/600',
    },
  ];

  const firstColumnCards = cards.slice(0, 2);
  const secondColumnCards = cards.slice(2, 5);
  const thirdColumnCards = cards.slice(5, 8);

  return (
    <section 
      ref={containerRef} 
      className="py-32 bg-brand-indigo-50 relative overflow-hidden"
      id="case-studies"
    >
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-brand-purple-600/40 to-brand-indigo-900/40 blur-3xl"></div>
      {/* Increased max-w and made container wider */}
      <div className="container mx-auto px-4 relative z-10 max-w-screen-2xl">
        <div className="lg:flex gap-32 max-w-[1500px] mx-auto">
          <div className="lg:w-1/3 flex flex-col lg:sticky lg:top-32 h-fit mb-16 lg:mb-0 pr-12">
            <h2 className="text-5xl font-bold text-brand-indigo-900 mb-8 leading-tight">
              Delivering Real Impact Through Innovation
            </h2>
            <p className="text-xl text-brand-indigo-800/80 leading-relaxed mb-12">
              From revolutionizing lead conversion to transforming data processes, 
              our solutions have helped businesses achieve extraordinary results 
              across industries.
            </p>
            <div>
              <button className="bg-gradient-to-r from-brand-purple-600 to-brand-indigo-600 text-white px-10 py-5 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                View All Case Studies
              </button>
            </div>
          </div>

          {/* Card container: wider & cards are wider and a bit shorter */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <motion.div 
              className="flex flex-col gap-8"
              style={{ y: firstColumnY }}
            >
              {firstColumnCards.map((card, index) => (
                <div 
                  key={`col1-${index}`}
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative h-72 w-full max-w-md mx-auto"
                >
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-lg font-bold text-white mb-2 truncate">{card.title}</h3>
                    <div className="text-white/90 font-medium text-sm mb-4 truncate">{card.description}</div>
                    <div className="text-white font-medium group-hover:text-white transition-colors flex items-center text-sm">
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="flex flex-col gap-8">
              {secondColumnCards.map((card, index) => (
                <div 
                  key={`col2-${index}`}
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative h-72 w-full max-w-md mx-auto"
                >
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-lg font-bold text-white mb-2 truncate">{card.title}</h3>
                    <div className="text-white/90 font-medium text-sm mb-4 truncate">{card.description}</div>
                    <div className="text-white font-medium group-hover:text-white transition-colors flex items-center text-sm">
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <motion.div 
              className="flex flex-col gap-8"
              style={{ y: thirdColumnY }}
            >
              {thirdColumnCards.map((card, index) => (
                <div 
                  key={`col3-${index}`}
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative h-72 w-full max-w-md mx-auto"
                >
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-lg font-bold text-white mb-2 truncate">{card.title}</h3>
                    <div className="text-white/90 font-medium text-sm mb-4 truncate">{card.description}</div>
                    <div className="text-white font-medium group-hover:text-white transition-colors flex items-center text-sm">
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedCaseStudies;