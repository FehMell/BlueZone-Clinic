import React, { useState } from "react";

function Espaco() {
  const images = [
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz3-768x512.webp" },
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz6.webp" },
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz4-1024x683.webp" },
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz2-1024x683.webp" },
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz8.webp" },
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz7.webp" },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  const openImage = (index) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
    setImageLoading(false);
  };

  const nextImage = () => {
    setImageLoading(true);
    setTimeout(() => {
      setSelectedImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setImageLoading(false);
    }, 150);
  };

  const prevImage = () => {
    setImageLoading(true);
    setTimeout(() => {
      setSelectedImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setImageLoading(false);
    }, 150);
  };

  return (
    <section className="relative w-full bg-white flex flex-col items-center justify-start py-16 px-4">
      
      <div className="max-w-6xl w-full text-center mb-10">
        <h2 className="text-3xl font-semibold text-[#D3AF37] mb-2 font-marcellus pb-2 uppercase">
          CONHEÇA NOSSO LOCAL
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-manrope">
          Conheça um pouco mais do ambiente acolhedor e moderno da nossa clínica,
          pensado para proporcionar conforto e bem-estar em cada detalhe.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-6xl">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-64 overflow-hidden cursor-pointer group"
            onClick={() => openImage(index)}
          >
            <img
              src={img.src}
              alt={`Espaço ${index + 1}`}
              className={`
                w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110
                 ${index === images.length - 1 ? "object-[center_-230px]" : ""}
              `}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center">
           
            <img
              src={images[selectedImageIndex].src}
              alt={`Espaço ${selectedImageIndex + 1}`}
              className={`max-w-full max-h-full object-contain shadow-lg rounded-lg transition-opacity duration-300 ${imageLoading ? 'opacity-50' : 'opacity-100'}`}
              onClick={(e) => e.stopPropagation()}
            />
            
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-black p-2 rounded-full shadow-lg transition-all duration-200 w-10 h-10 flex items-center justify-center text-xl font-bold hover:scale-110"
            >
              ✕
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              disabled={imageLoading}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg transition-all duration-200 w-12 h-12 flex items-center justify-center ${imageLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}`}
            >
              <span className="text-2xl font-bold -mt-0.5">‹</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              disabled={imageLoading}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg transition-all duration-200 w-12 h-12 flex items-center justify-center ${imageLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}`}
            >
              <span className="text-2xl font-bold -mt-0.5">›</span>
            </button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {images.length}
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
}

export default Espaco;