import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
  initials: string;
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  name,
  role,
  initials,
  isActive,
}) => {
  return (
    <div 
      className={`absolute w-full max-w-3xl bg-indigo-50 p-8 md:p-10 rounded-2xl transition-all duration-500 border border-purple-100 ${
        isActive 
          ? 'opacity-100 scale-100 pointer-events-auto shadow-xl' 
          : 'opacity-0 scale-90 pointer-events-none'
      }`}
    >
      <Quote className="w-12 h-12 text-purple-200 mb-6" />
      <p className="text-lg md:text-xl text-indigo-900 mb-8 italic leading-relaxed">
        "{text}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
          {initials}
        </div>
        <div>
          <h4 className="text-lg font-bold text-indigo-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;