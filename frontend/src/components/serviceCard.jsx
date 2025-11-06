import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, showButton = true, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!link) return;
    // link já deve ser apenas '/emagrecimento', '/hipertrofia', etc
    navigate(link);
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative bg-white border border-[#D3AF37] rounded-tr-[50px] rounded-bl-[50px] p-6 max-w-md mx-auto min-h-[300px] flex flex-col">
      {icon && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#D3AF37] text-white p-4 shadow-lg z-10 flex items-center justify-center">
          {React.createElement(icon, { className: "w-6 h-6" })}
        </div>
      )}

      <h3 className="text-lg font-semibold pt-3 text-gray-600 mb-4 text-center pb-6 font-marcellus">{title}</h3>

      <div className="text-gray-700 leading-relaxed font-manrope text-xs flex-grow text-center">{description}</div>

      {showButton && link && (
        <div className="text-center pt-6">
          <button
            className="inline-block bg-white border-[#D3AF37] border-2 text-[#463D34] font-bold px-6 py-2 rounded-md transform transition-transform duration-300 hover:scale-110 hover:bg-[#B38A4B] text-sm cursor-pointer"
            onClick={handleClick}
          >
            SAIBA MAIS
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
