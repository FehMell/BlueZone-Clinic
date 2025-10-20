import React from 'react';

const ServiceCard = ({ 
  title, 
  description, 
  className = "" 
}) => {
  return (
    <div className={`bg-white border border-gray-300 rounded-tr-[100px] rounded-bl-[100px] p-8 ${className}`}>
      
      {/* Título */}
      <h3 className="text-2xl font-bold text-black mb-4">
        {title}
      </h3>

      {/* Descrição */}
      <div className="text-gray-700 leading-relaxed">
        {description}
      </div>

    </div>
  );
};

export default ServiceCard;