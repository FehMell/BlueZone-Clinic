import React, { useRef, useEffect, useState } from 'react';
import ServiceCard from './serviceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { FaLeaf, FaHeartbeat, FaDumbbell, FaSyringe, FaHeart, FaUserNurse, FaSpa, FaWeight } from 'react-icons/fa';

function ServicesSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const services = [
    {
      title: "Emagrecimento Saudável",
      description: (
        <>
          Conheça o <span className="font-semibold">Programa Blue Health+</span>, 
          um método que vai além da perda de peso, promovendo saúde, bem-estar e autoconfiança.
        </>
      ),
      icon: FaLeaf,
      showButton: true,
      link: "/#/emagrecimento"
    },
    {
      title: "Reposição Hormonal",
      description:
        "Indicada para homens com baixos níveis de testosterona. Melhora energia, libido e desempenho físico.",
      icon: FaHeartbeat,
      showButton: true,
      link: "/#/reposicao-hormonal-masculina"
    },
    {
      title: "Hipertrofia Muscular e Alta Performance",
      description:
        "Plano personalizado para ganho de força e massa muscular, com orientações nutricionais e hormonais.",
      icon: FaDumbbell,
      showButton: true,
      link: "/#/hipertrofia"
    },
    {
      title: "Implantes Hormonais",
      description:
        "Implantes subcutâneos que equilibram hormônios e reduzem sintomas como cansaço e baixa libido.",
      icon: FaSyringe,
      showButton: true,
      link: "/#/implantes-hormonais"
    },
    {
      title: "Menopausa",
      description:
        "Tratamento que alivia sintomas da menopausa e melhora o bem-estar e a qualidade de vida das mulheres.",
      icon: FaHeart,
      showButton: true,
      link: "/#/menopausa"
    },
    {
      title: "Terapias Injetáveis",
      description:
        "Vitaminas, minerais e antioxidantes aplicados de forma personalizada para mais energia e vitalidade.",
      icon: FaSyringe,
      showButton: true,
      link: "/#/terapias-injetaveis"
    },
    {
      title: "Bioimpedância",
      description:
        "Exame que avalia sua composição corporal, indicando massa magra, gordura e outros indicadores de saúde.",
      icon: FaWeight,
      showButton: false,
      link: null
    },
    {
      title: "Nutricionista",
      description: (
        <>
          Plano alimentar personalizado elaborado pela{" "}
          <span className="font-semibold">Nutricionista Ana Paula</span>, 
          alinhado aos seus objetivos de saúde e bem-estar.
        </>
      ),
      icon: FaUserNurse,
      showButton: false,
      link: null
    },
    {
      title: "Estética Corporal e Facial",
      description:
        "Procedimentos que promovem firmeza, rejuvenescimento e valorizam sua autoestima.",
      icon: FaSpa,
      showButton: true,
      link: "/#/estetica"
    }
  ];

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();

      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);

      swiperInstance.on('slideChange', () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, [swiperInstance]);

  return (
    <div className="py-8 lg:py-10 px-4 lg:px-6 bg-neutral-100" id="tratamentos">
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="font-manrope pt-6 lg:pt-10 pb-3 lg:pb-4 text-xs lg:text-sm text-gray-600 font-semibold">TRATAMENTOS ENCONTRADOS</h2>
        <h3 className="font-marcellus font-semibold pb-3 lg:pb-4 text-xl lg:text-3xl text-[#463D34]">NA BLUE ZONE CLINIC</h3>
        <p className="font-manrope pb-6 lg:pb-8 text-gray-700 text-xs lg:text-sm max-w-2xl mx-auto px-4">
          Unimos conforto às mais avançadas tecnologias médicas para refletir nosso compromisso com o seu cuidado integral.
        </p>

        <div className="relative pt-6 lg:pt-8">
          <Swiper 
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={false}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="pb-12 lg:pb-16"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} style={{ height: 'auto' }}>
                <div className="h-full pt-2 lg:pt-4"> 
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    showButton={service.showButton}
                    link={service.link}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

         
          <div className="swiper-pagination !relative !bottom-[-20px]"></div>

        
          <button 
            ref={prevRef} 
            className={`absolute left-2 lg:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 lg:p-3 hover:scale-110 lg:hover:scale-125 transform transition duration-300 ${isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label="Slide anterior"
          >
            <BsChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-[#D3AF37]" />
          </button>
          <button 
            ref={nextRef} 
            className={`absolute right-2 lg:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 lg:p-3 hover:scale-110 lg:hover:scale-125 transform transition duration-300 ${isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label="Próximo slide"
          >
            <BsChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-[#D3AF37]" />
          </button>
        </div>
      </div>

      
      <style global jsx>{`
        .swiper-pagination-bullet {
          background-color: #D3AF37 !important;
          opacity: 0.4;
          display: none;
        }
        .swiper-pagination-bullet-active {
          background-color: #D3AF37 !important;
          opacity: 1;
          display: none;
        }
      `}</style>
    </div>
  );
}

export default ServicesSection;
