import React, { useRef, useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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
      description: <> Conheça o Programa <span className="font-semibold"> Blue Health+ de Emagrecimento </span>, um método diferenciado que transforma a vida de centenas de pessoas todos os meses. Muito além da perda de peso, promovemos saúde, qualidade de vida e autoconfiança.</>,
      icon: FaLeaf,
      showButton: true
    },
    {
      title: "Reposição Hormonal",
      description: "Indicada para homens com baixos níveis de testosterona. O tratamento melhora sintomas de cansaço, baixa libido, disfunção erétil, dificuldade para emagrecer e ganhar massa muscular.",
      icon: FaHeartbeat,
      showButton: true
    },
    {
      title: "Hipertrofia Muscular e Alta Performance",
      description: "Elaboração de um plano personalizado às suas necessidades, visando melhoria do condicionamento físico, aumento da força e massa muscular. Inclui orientações sobre exercícios, alimentação e correção de distúrbios hormonais.",
      icon: FaDumbbell,
      showButton: true
    },
    {
      title: "Implantes Hormonais",
      description: "Implantes subcutâneos liberam hormônios como testosterona e estrogênio de forma contínua, corrigindo déficits hormonais e aliviando sintomas como cansaço, queda de libido, dificuldade para emagrecer e ganho de gordura.",
      icon: FaSyringe,
      showButton: true
    },
    {
      title: "Menopausa",
      description: "Focado em melhorar a qualidade de vida das mulheres durante a menopausa, nosso tratamento alivia sintomas como ondas de calor, instabilidade emocional, fadiga, insônia, baixa libido, suores noturnos e ressecamento vaginal.",
      icon: FaHeart,
      showButton: true
    },
    {
      title: "Terapias Injetáveis",
      description: "Administração direta de vitaminas, minerais, aminoácidos, antioxidantes e outros ativos, indicados de acordo com suas necessidades específicas, via intramuscular ou intravenosa.",
      icon: FaSyringe,
      showButton: true
    },
    {
      title: "Bioimpedância",
      description: "Exame para avaliar a composição corporal, fornecendo informações essenciais como percentual de massa magra e gordura, além de análises detalhadas do corpo.",
      icon: FaWeight,
      showButton: false
    },
    {
      title: "Nutricionista",
      description: <> Elaboração de um plano alimentar personalizado por nossa <span className="font-semibold">Nutricionista Ana Paula </span>, alinhado aos seus objetivos de saúde, estética e bem-estar geral. </>,
      icon: FaUserNurse,
      showButton: false
    },
    {
      title: "Estética Corporal e Facial",
      description: "Procedimentos que promovem harmonia, rejuvenescimento, firmeza e confiança, auxiliando na recuperação da autoestima.",
      icon: FaSpa,
      showButton: true
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
    <div className="py-8 lg:py-10 px-4 lg:px-6 bg-neutral-100">
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="font-manrope pt-6 lg:pt-10 pb-3 lg:pb-4 text-xs lg:text-sm text-gray-600 font-semibold">TRATAMENTOS ENCONTRADOS</h2>
        <h3 className="font-marcellus font-semibold pb-3 lg:pb-4 text-xl lg:text-3xl text-[#D3AF37]">NA BLUE ZONE CLINIC</h3>
        <p className="font-manrope pb-6 lg:pb-8 text-gray-500 text-xs lg:text-sm max-w-2xl mx-auto px-4">
          Unimos conforto às mais avançadas tecnologias médicas para refletir nosso compromisso com o seu cuidado integral.
        </p>

        <div className="relative pt-6 lg:pt-8">
          <div className="pt-6 lg:pt-8">
            <Swiper 
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop={false}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              breakpoints={{
                640: { 
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                768: { 
                  slidesPerView: 2,
                  spaceBetween: 25
                },
                1024: { 
                  slidesPerView: 3,
                  spaceBetween: 30
                },
              }}
              className="pb-8 lg:pb-10"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index} style={{ height: 'auto' }}>
                  <div className="h-full pt-2 lg:pt-4"> 
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      showButton={service.showButton}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          
          <button 
            ref={prevRef} 
            className={`absolute left-2 lg:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 lg:p-3 hover:scale-110 lg:hover:scale-125 transform transition duration-300 ${
              isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <BsChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-[#D3AF37]" />
          </button>
          <button 
            ref={nextRef} 
            className={`absolute right-2 lg:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 lg:p-3 hover:scale-110 lg:hover:scale-125 transform transition duration-300 ${
              isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <BsChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-[#D3AF37]" />
          </button>
        </div>
      </div>

      <style jsx>{`
        :global(.swiper-slide) {
          height: auto !important;
        }
        
        :global(.swiper-wrapper) {
          align-items: stretch;
        }
      `}</style>

      <div className="text-center pt-12 lg:pt-20">
        <a href="https://wa.me/5511945197405?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20oferecidos%20pela%20Blue%20Zone." target='_blank' rel="noopener noreferrer">
          <button className="bg-[#D3AF37] p-3 px-8 lg:px-10 rounded-lg font-semibold text-white transform transition-transform duration-300 hover:scale-105 lg:hover:scale-110 hover:bg-[#B38A4B] text-sm lg:text-base">
            Agendar Consulta
          </button>
        </a>
      </div>
    </div>
  );
}

export default ServicesSection;