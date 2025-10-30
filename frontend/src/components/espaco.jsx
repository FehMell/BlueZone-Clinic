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

  const [selectedImage, setSelectedImage] = useState(null);

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
            onClick={() => setSelectedImage(img.src)}
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

     
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="max-w-[90vw] max-h-[80vh] shadow-lg rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Espaco;
