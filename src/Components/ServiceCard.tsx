import React from 'react';
import { Briefcase, Users, Globe, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: 'b2b' | 'b2c' | 'web' | 'verification';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  number, 
  title, 
  description, 
  icon 
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'b2b':
        return <Briefcase className="w-9 h-9" />;
      case 'b2c':
        return <Users className="w-9 h-9" />;
      case 'web':
        return <Globe className="w-9 h-9" />;
      case 'verification':
        return <CheckCircle className="w-9 h-9" />;
      default:
        return <Briefcase className="w-9 h-9" />;
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-100 overflow-hidden relative group">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></div>
      <div className="text-5xl font-extrabold text-purple-100 mb-4">{number}</div>
      <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-6">
        {getIcon()}
      </div>
      <h3 className="text-xl font-bold text-indigo-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;