import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  image: string; 
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah",
    title: "Driving with Confidence",
    content:
      "After struggling with high insurance premiums for years, I found the perfect auto insurance plan through this service. The process was simple, and the savings were immediate. Not only did I get the coverage I needed, but I also gained the peace of mind knowing I'm protected on the road. I feel safe and secure knowing I made the right choice for my car."
      ,
      image: "/Sarah.jpg" 
  },
  {
    id: 2,
    name: "Michael",
    title: "Exceptional Service",
    content:
      "I was involved in an accident and the claims process was incredibly smooth. The representative walked me through everything step by step. I was amazed at how quickly my claim was processed and how supportive the team was during a stressful time. I couldn't recommend their service more highly.",
  
      image: "/Michael.jpg"   },
  {
    id: 3,
    name: "Jessica",
    title: "Budget-Friendly Options",
    content:
      "As a college student with limited funds, I was worried about finding affordable coverage. Speedy Quote Auto provided me with multiple affordable options that didn't compromise on quality. Their team helped me understand exactly what I was getting and how to maximize my coverage within my budget.",
      image: "/jesica.jpg" 
    }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1D184E] mb-12">
          What our clients says about us
        </h2>

        <div className="max-w-3xl mx-auto relative px-14">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="bg-white rounded-lg shadow-lg p-8 relative"
            >
              {/* Avatar */}
              <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 flex justify-center">
              <motion.img
  src={current.image}
  alt={current.name}
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.2 }}
  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
/>

              </div>

              {/* Quote symbol */}
              <div className="text-right absolute top-4 right-8">
                <span className="text-6xl text-gray-200">"</span>
              </div>

              {/* Content */}
              <div className="pt-8 text-center">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl font-bold text-[#1D184E]"
                >
                  {current.name}'s Testimonial:
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg font-bold text-[#F26624] mb-6"
                >
                  {current.title}
                </motion.p>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-600 italic"
                >
                  "{current.content}"
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation - Repositioned outside the content box */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-2 md:-left-5 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#1D184E] text-white hover:bg-[#08509E] transition shadow-md z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-2 md:-right-5 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#1D184E] text-white hover:bg-[#08509E] transition shadow-md z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? "bg-[#F26624] w-6" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-3 px-8 bg-gradient-to-r from-[#ED2228] to-[#F26624] text-white font-bold rounded-md hover:opacity-90 transition duration-200 inline-flex items-center"
          >
            Get a Quote
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;