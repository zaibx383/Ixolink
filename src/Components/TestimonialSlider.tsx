import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Ixolink transformed our lead generation process. The quality of B2B leads we receive is exceptional, and their data accuracy is unmatched. Our conversion rates have increased by 45%.",
    name: "John Davidson",
    role: "CEO, TechFlow Solutions",
    initials: "JD"
  },
  {
    id: 2,
    text: "Working with Ixolink has been a game-changer for our marketing campaigns. Their web data solutions provide insights we never had access to before. Highly recommended!",
    name: "Sarah Mitchell",
    role: "Marketing Director, GrowthHub",
    initials: "SM"
  },
  {
    id: 3,
    text: "The transparency and professionalism of Ixolink is outstanding. They deliver exactly what they promise, and their data-driven approach has helped us make better business decisions.",
    name: "Michael Rodriguez",
    role: "Founder, DataDrive Inc",
    initials: "MR"
  }
];

const TestimonialSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Autoplay functionality
  useEffect(() => {
    let interval: number;
  
    if (autoplay) {
      interval = window.setInterval(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
  
    return () => clearInterval(interval);
  }, [autoplay]);
  
  
  // Handle next and previous
  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  
  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <div 
      className="max-w-3xl mx-auto relative py-12"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="relative h-80">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            text={testimonial.text}
            name={testimonial.name}
            role={testimonial.role}
            initials={testimonial.initials}
            isActive={index === activeIndex}
          />
        ))}
      </div>
      
      <div className="flex items-center justify-center mt-12">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-purple-500 hover:text-purple-600 transition-colors mr-4"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 transition-all duration-300 rounded-full ${
                index === activeIndex 
                  ? 'w-8 bg-purple-600' 
                  : 'w-2.5 bg-gray-300 hover:bg-purple-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all ml-4"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;