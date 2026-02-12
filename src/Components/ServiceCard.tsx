import React from 'react';

interface ServiceCardProps {
  title: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image }) => {
  return (
    <div className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative group h-72">
      {/* Image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
      </div>
      
      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;