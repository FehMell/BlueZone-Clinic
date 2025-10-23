import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Espaco() {
  const images = [
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/12/IMG_2033-768x512.jpg" },
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz6.webp" },
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz7.webp" },
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz1-768x512.webp" },
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz2-1024x683.webp" },
    { src: "https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz8.webp" },
    {src:"https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz4-1024x683.webp"},
    {src:"https://bluezoneclinic.com.br/wp-content/uploads/2024/08/bz3-768x512.webp"},

  ];

  const settings = {
    dots: true, 
    arrows: true,
    infinite: false, 
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 2, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="relative w-full bg-neutral-100 flex flex-col items-center justify-start pt-12 pb-16">
     
      <div className="text-center px-4 max-w-3xl mb-12 z-10">
        <h3 className="font-marcellus text-4xl py-6 text-[#D3AF37]">
          CONHEÇA NOSSO ESPAÇO DE ATENDIMENTO
        </h3>
        <p className="font-manrope text-xs text-gray-500 pb-10 pt-2">
          Um espaço projetado para oferecer conforto aos nossos pacientes,
          equipado com os últimos recursos em tecnologia.
        </p>
      </div>

      <div className="w-full max-w-4xl px-4 mb-8">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className=""> 
              <div className="flex justify-center">
                <img
                  src={img.src}
                  alt={`Espaço ${index + 1}`}
                  className="rounded-xs object-cover w-90 h-72 mx-auto"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

  
      <style jsx>{`
        
        .slick-dots li button:before {
          color: #D3AF37 !important;
          opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
        }
       
        .slick-prev:before, 
        .slick-next:before {
          color: #D3AF37 !important;
        }
       
        .slick-prev, .slick-next {
          width: 30px;
          height: 30px;
        }
        .slick-prev { left: -35px; }
        .slick-next { right: -35px; }
      `}</style>
    </div>
  );
}

export default Espaco;