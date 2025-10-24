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
      <div className="w-full overflow-hidden">
        <div className="flex flex-wrap md:flex-nowrap">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={`Espaço ${index + 1}`}
              className="object-cover h-80 flex-1 w-full md:w-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Espaco;
