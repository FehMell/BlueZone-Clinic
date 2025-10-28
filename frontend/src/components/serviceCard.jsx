import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, className = "", showButton = true, link }) => {
  return (
    <div className={`relative bg-white border border-[#D3AF37] rounded-tr-[50px] rounded-bl-[50px] p-8 max-w-md mx-auto min-h-[300px] flex flex-col
      ${className} `}>

      
      {icon && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#D3AF37] text-white p-3 shadow-lg z-10 flex items-center justify-center">
          {React.createElement(icon, { className: "w-6 h-6" })}
        </div>
      )}

      <h3 className="text-lg font-semibold pt-3 text-gray-600 mb-4 text-center pb-6 font-marcellus">
        {title}
      </h3>

      <div className="text-gray-700 leading-relaxed font-manrope text-xs flex-grow text-center">
        {description}
      </div>

      {showButton && link ? (
        <div className="text-center pt-6">
          <Link 
            to={link}
            className="inline-block bg-[#D3AF37] text-white font-bold px-6 py-2 rounded-md transform transition-transform duration-300 hover:scale-110 hover:bg-[#B38A4B] text-sm cursor-pointer"
            onClick={(e) => {
              console.log('Link clicado:', link);
              console.log('Tipo do link:', typeof link);
              e.preventDefault();
           
              window.location.href = link;
            }}
          >
            SAIBA MAIS
          </Link>
        </div>
      ) : showButton && !link ? (
        <div className="text-center pt-6">
          <button 
            className="bg-gray-400 text-white font-bold px-6 py-2 rounded-md text-sm cursor-not-allowed opacity-70"
            disabled
          >
            SAIBA MAIS
          </button>
        </div>
      ) : (
        <div className="h-8"></div> 
      )}
    </div>
  );
};

export default ServiceCard;