import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Users, Clock, Grid, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const FeatureSection = () => {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  const featureCards = [
    {
      id: 1,
      title: "Tailored Approach",
      description: "We craft personalized go-to-market plans that align perfectly with your unique business objectives.",
      icon: <Settings className="h-8 w-8" />
    },
    {
      id: 2,
      title: "World-class Talent",
      description: "Our carefully selected teams act as an extension of your own with narrow industry knowledge and relevant certifications.",
      icon: <Users className="h-8 w-8" />
    },
    {
      id: 3,
      title: "First Results Within a Month",
      description: "We set up and launch your campaign in the first 14 days. Within 30 days, you'll start seeing the first appointments in your calendar.",
      icon: <Clock className="h-8 w-8" />
    },
    {
      id: 4,
      title: "Cross-functional Approach",
      description: "Our end-to-end strategy covers every stage of the deal generation process, raising sales by 25% on average.",
      icon: <Grid className="h-8 w-8" />
    },
    {
      id: 5,
      title: "Omnichannel Strategies",
      description: "We integrate both outbound and inbound efforts with cutting-edge tools to deliver targeted, result-oriented solutions.",
      icon: <MessageCircle className="h-8 w-8" />
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the left content
      const leftTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: leftContentRef.current,
          anticipatePin: 1,
        }
      });

      // Fade in the left content
      leftTimeline.fromTo(
        ".left-content-item", 
        { opacity: 0, y: 30 }, 
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.1,
          duration: 0.3,
        },
        0
      );

      // Hold the content visible through the middle of the scroll
      leftTimeline.to(".left-content-item", { opacity: 1, duration: 2 }, 0.3);
      
      // Fade out at the end
      leftTimeline.to(
        ".left-content-item", 
        { 
          opacity: 0, 
          y: -30, 
          stagger: 0.1,
          duration: 0.3 
        }, 
        2.3
      );

      // Card animations
      cardRefs.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            y: 100, 
            x: 50 
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              end: "bottom center",
              toggleActions: "play none none reverse",
              scrub: 0.5,
            }
          }
        );
        
        // Add a parallax effect to the cards
        gsap.to(card, {
          y: -50 * (cardRefs.current.length - index),
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });
      
      // Animation for icon rotation on scroll
      gsap.utils.toArray('.card-icon').forEach(icon => {
        gsap.to(icon, {
          rotation: 360,
          scrollTrigger: {
            trigger: icon,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }, sectionRef);
    
    return () => ctx.revert(); // Cleanup
  }, []);
  
  return (
    <div 
      ref={sectionRef} 
      className="bg-gradient-to-b from-[#140F23] to-[#7340FF] relative w-full overflow-hidden"
      style={{ height: "300vh" }} // Taller height for scrolling
    >
      <div className="sticky top-0 w-full h-screen flex flex-col lg:flex-row">
        {/* Left column with content */}
        <div 
          ref={leftContentRef}
          className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-16 py-12 h-screen"
        >
          <div className="max-w-xl">
            <h2 className="left-content-item text-4xl lg:text-5xl font-bold text-[#F5F7FF] mb-6">
              What sets us apart
            </h2>
            <p className="left-content-item text-lg text-[#E9D9FE] mb-8">
              Since 2017, Belkins has been the top outbound lead generation agency for B2B companies across 50+ industries. We deliver tailored strategies that drive measurable results.
            </p>
            <button 
              className="left-content-item bg-[#7340FF] hover:bg-[#6030DD] transition-all text-white font-semibold py-3 px-8 rounded-md shadow-lg"
            >
              Get a quote
            </button>
          </div>
        </div>

        {/* Right column with cards */}
        <div 
          ref={cardsContainerRef} 
          className="w-full lg:w-1/2 h-screen overflow-visible"
        >
          <div className="w-full max-w-md mx-auto space-y-20 pt-24 px-6">
            {featureCards.map((card, index) => (
              <div
                key={card.id}
                ref={el => cardRefs.current[index] = el}
                className="feature-card w-full bg-[#F5F7FF] rounded-xl shadow-xl p-8 transform cursor-pointer hover:shadow-2xl transition-shadow duration-300"
              >
                <div 
                  className="card-icon rounded-full bg-[#E9D9FE] p-3 w-14 h-14 flex items-center justify-center text-[#7340FF] mb-4"
                >
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#140F23] mb-3">{card.title}</h3>
                <p className="text-[#140F23]/80">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;