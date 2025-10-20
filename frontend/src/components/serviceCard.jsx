import React from 'react';

const ServiceCard = ({ 
  icon,
  title, 
  description, 
  className = "" 
}) => {
  return (
   <div className={`bg-white border border-[#D3AF37] rounded-tr-[50px] rounded-bl-[50px] p-8 max-w-md mx-auto ${className}  bg-white 
        p-6 
        rounded-2xl 
        shadow-md 
        hover:shadow-xl 
        transform 
        transition 
        duration-300 
        hover:scale-105`}>


      <div className="flex justify-center">
        {icon}
      </div>
      
     
      <h3 className="text-xl font-semibold text-gray-600 mb-4 text-center pb-6 font-marcellus">
        {title}
      </h3>

      
      <div className="text-gray-700 leading-relaxed font-manrope text-xs">
        {description}
      </div>

      <div className="text-center pt-20">

      <button className="bg-[#D3AF37] text-white font-bold  px-6 py-2 rounded-md  transform transition-transform duration-300 hover:scale-110 hover:bg-[#B38A4B] text-sm">SAIBA MAIS</button>
      </div>
    </div>
  );
};

export default ServiceCard;