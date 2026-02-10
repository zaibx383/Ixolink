import React from 'react';
import { Check, Eye, BarChart2, Zap, Users } from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: 'accuracy' | 'transparency' | 'data' | 'scalability' | 'partnerships';
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'accuracy':
        return <Check className="w-8 h-8" />;
      case 'transparency':
        return <Eye className="w-8 h-8" />;
      case 'data':
        return <BarChart2 className="w-8 h-8" />;
      case 'scalability':
        return <Zap className="w-8 h-8" />;
      case 'partnerships':
        return <Users className="w-8 h-8" />;
      default:
        return <Check className="w-8 h-8" />;
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-100 group">
      <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 transition-colors group-hover:bg-purple-600 group-hover:text-white">
        {getIcon()}
      </div>
      <h3 className="text-xl font-bold text-indigo-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ValueCard;