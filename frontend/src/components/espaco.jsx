import React from "react";

function Espaco() {
  const images = [
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz3-768x512.webp" },
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz6.webp" },
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz4-1024x683.webp" },
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz2-1024x683.webp" },
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz8.webp" },
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz4-1024x683.webp" },
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz3-768x512.webp" },
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz7.webp" }, 
  ];

  return (
    <div className="relative w-full bg-white flex flex-col items-center justify-start pt-12 pb-16">
      <div className="w-full">
        <div className="flex gap-1 justify-center">
          {images.map((img, index) => (
            <div key={index} className="flex-shrink-0 w-64 h-80 relative">
              <div className="w-full h-full overflow-hidden flex items-start justify-center">
                <img
                  src={img.src}
                  alt={`Espaço ${index + 1}`}
                  className="min-w-full min-h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Espaco;