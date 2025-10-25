import React from 'react';

const ServiceCardImage = ({ image, title, description, className = "" }) => {
  return (
    <div className={`relative bg-white border border-[#D3AF37] rounded-tr-[50px] rounded-bl-[50px] overflow-hidden max-w-md mx-auto min-h-[300px] flex flex-col
      ${className} `}>

     
      {image && (
        <div className="w-full h-32 bg-gray-200 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}

   
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg  text-gray-600 mb-4 text-center font-marcellus">
          {title}
        </h3>

        <div className="text-gray-500 leading-relaxed font-manrope text-xs flex-grow">
          {description}
        </div>

        <div className="h-12"></div>
      </div>
    </div>
  );
};

export default ServiceCardImage;