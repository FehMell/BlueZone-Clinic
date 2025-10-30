import Local from "../images/localblue.png";
import Logo from "../images/logobluezonee.webp";
import Thiago from "../images/thiago3.webp";
import Footer from "../components/footer";
import Desfoque from "../images/desfoque.png";
import React, { useRef, useEffect, useState } from 'react';
import ServiceCardImage from '../components/serviceCardImage'; 
import WhatsAppButton from "../components/whatsappButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Estetica1 from "../images/estetica01.webp";
import Estetica2 from "../images/estetica02.webp";
import Estetica3 from "../images/estetica03.webp";
import Estetica4 from "../images/estetica04.webp";
import Estetica5 from "../images/estetica05.png";
import Estetica6 from "../images/estetica06.webp";
import Estetica7 from "../images/estetica07.webp";
import Resultado1 from "../images/resultado1.webp";
import Resultado2 from "../images/resultado2.webp";
import Resultado3 from "../images/resultado3.webp";
import Resultado4 from "../images/resultado4.webp";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";



function Estetica() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const services = [
    { 
      title: "Toxina Botulínica", 
      description:"A toxina botulínica age inibindo a contração dos músculos na área aplicada, paralisando temporariamente os movimentos. Essa ação previne o aparecimento de rugas e suaviza as linhas de expressão, tornando-se uma importante aliada no combate ao envelhecimento.", 
      image: Estetica1,
    },
    { 
      title: "Bioestimuladores de Colágeno", 
      description: "Os bioestimuladores são utilizados para a reestruturação da pele, estimulando a produção de colágeno, que é naturalmente reduzida com o envelhecimento. O colágeno é responsável pela sustentação da pele, e seu aumento proporciona uma pele mais firme e com menos flacidez.", 
      image: Estetica2,
    },
    { 
      title: "Tratamento Para Gordura Localizada", 
      description: "Realizado com a aplicação de enzimas lipolíticas, o procedimento promove a quebra de gordura localizada. Esses ativos desestabilizam as células de gordura, facilitando sua eliminação pelo organismo. A técnica auxilia na redução de medidas, combate à flacidez e diminuição da celulite.", 
      image: Estetica3,
    },
    { 
      title: "Preenchimento Labial", 
      description: "Nossa técnica é focada em refinar os detalhes pré-existentes na anatomia do paciente, proporcionando definição, simetria, volume e naturalidade. Feita de maneira personalizada, visa destacar e realçar a beleza natural dos lábios.", 
      image: Estetica4,
    },
    { 
      title: "Preenchimento com Ácido Hialurônico", 
      description: "O ácido hialurônico contribui para a sustentação e hidratação da pele, reduzindo a flacidez, linhas e sinais de expressão. Ele pode ser aplicado em pontos estratégicos da face, corrigindo perda de volume ou assimetrias, além de ser utilizado nos lábios e no contorno facial. Nossa abordagem foca em promover harmonia facial, sem seguir padrões pré-determinados, realçando a beleza de forma natural.", 
      image: Estetica5,
    },
    { 
      title: "Harmonização Corporal", 
      description: "Procedimentos realizados para melhorar os três principais aspectos do corpo: perfil tissular, perfil muscular e perfil de gordura. Os protocolos mais utilizados nesses tratamentos incluem bioestimuladores de colágeno, suplementações e enzimas lipolíticas.", 
      image: Estetica6,
    },
    { 
      title: "Harmonização Glútea", 
      description: "Trata-se de uma técnica utilizada para remodelar, harmonizar e aumentar o volume dos glúteos através da aplicação de preenchedores. É indicada também para a correção de assimetrias, irregularidades e depressões nos glúteos, além de melhorar a flacidez e a firmeza da pele, quando combinada com bioestimuladores de colágeno.", 
      image: Estetica7,
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

  const [imagemSelecionada, setImagemSelecionada] = useState(null);


  return (
    <div>
    
      <div className="lg:grid lg:grid-cols-[1.65fr_1fr] bg-white">
      
        <div className="relative flex flex-col justify-center items-center p-6 lg:p-10 w-full mx-auto lg:mt-0">
          <div className="lg:absolute lg:inset-0 lg:bg-cover lg:bg-center lg:z-0"
            style={{ backgroundImage: `url(${Desfoque})` }}>
          </div>

          <div className="lg:absolute lg:inset-0 lg:bg-white/80 lg:backdrop-blur-sm lg:z-10"></div>

          <div className="relative z-20 flex flex-col items-center text-center max-w-[700px] overflow-hidden">
            <div className="lg:absolute lg:inset-0 lg:z-30 pointer-events-none animate-[reflexo_6s_linear_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

            <style>
              {`
                @keyframes reflexo {
                  0% {
                    transform: translateX(-100%);
                    opacity: 0.1;
                  }
                  50% {
                    transform: translateX(0%);
                    opacity: 0.5;
                  }
                  100% {
                    transform: translateX(100%);
                    opacity: 0.1;
                  }
                }
              `}
            </style>

            <img 
              src={Logo}
              alt="Logo Bluezone" 
              className="w-14 lg:w-16 pb-4 lg:pb-6"
            />
            
            <h1 className="font-marcellus text-2xl lg:text-[38px] font-bold text-[#463D34] leading-tight">
              Realce a sua Beleza 
            </h1>
            <h1 className="pb-4 font-marcellus text-2xl lg:text-[38px] font-bold text-[#463D34] leading-tight">
              Natural
            </h1>
            <h2 className="uppercase pb-2 font-marcellus text-base lg:text-xl font-semibold text-[#D3AF37]">
              Com procedimentos personalizados que combinam harmonia, rejuvenescimento, firmeza e confiança, ajudamos você a recuperar sua autoestima.
            </h2>
            <p className="pb-4 lg:pb-2 font-manrope text-gray-700 text-sm lg:text-[15px] leading-relaxed">
              A Blue Zone Clinic é o seu espaço de estética avançada!
              Aqui você encontra os protocolos mais eficazes em estética, voltados para Harmonização Corporal e Facial. Utilizamos técnicas exclusivas e aperfeiçoadas, combinando o que há de mais recente em tratamentos com expertise especializada para garantir resultados efetivos, duradouros e naturais.
            </p>
            <p className="pb-8 lg:pb-10 font-manrope text-gray-700 text-sm lg:text-[15px] leading-relaxed">
              Nosso compromisso é garantir que você se sinta mais confiante e satisfeito com sua aparência. Contamos com uma equipe de profissionais qualificados, dedicada a oferecer um cuidado integral que une tratamentos para hipertrofia e emagrecimento com procedimentos estéticos avançados. Nosso objetivo é proporcionar um atendimento completo que harmonize saúde e estética, elevando sua autoestima!
            </p>
            
            <div className="border-2 border-[#D3AF37] px-1 py-1 hover:scale-110 transform transition-transform duration-300 mb-4">
              <a 
                href="https://wa.me/5511945197405?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20oferecidos%20pela%20Blue%20Zone." 
                target="_blank"
              >
                <button className="font-marcellus bg-[#D3AF37] text-white px-6 lg:px-7 font-semibold py-2 lg:py-2 hover:bg-[#B38A4B] text-sm lg:text-base">
                  Agendar Consulta
                </button>
              </a>
            </div>
          </div>
        </div>

      
        <div className="hidden lg:block relative order-1 lg:order-2 h-96 lg:h-auto overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center relative z-10"
            style={{ backgroundImage: `url(${Local})` }}
          ></div>
          <div className="absolute inset-0 overflow-hidden z-20 pointer-events-none">
            <div className="absolute left-[5%] w-[90%] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-reflexoLocal"></div>
          </div>
          
        
          <div className="absolute inset-0 z-30 flex items-end justify-center lg:justify-end lg:pr-8 xl:pr-16">
            <img 
              src={Thiago} 
              alt="Dr. Thiago" 
              className="
                object-contain max-w-full max-h-full
                w-auto h-auto lg:w-[50%] xl:w-[55%] 2xl:w-[50%]
                transition-transform duration-1000 ease-in-out hover:-translate-y-1
                z-30
              "
            />
          </div>
        </div>
      </div>

     
      <div className="py-8 lg:py-10 px-4 lg:px-6 bg-white" id="tratamentos">
        
        <div className="text-center max-w-7xl mx-auto">
          <h2 className="font-manrope pt-6 lg:pt-10 pb-3 lg:pb-4 text-xs lg:text-sm text-gray-600 font-semibold">TRATAMENTOS DE ESTÉTICA ENCONTRADOS</h2>
          <h3 className="font-marcellus font-semibold pb-3 lg:pb-4 text-xl lg:text-3xl text-[#D3AF37]">NA BLUE ZONE CLINIC</h3>
          <p className="font-manrope pb-6 lg:pb-2 text-gray-500 text-xs lg:text-sm max-w-2xl mx-auto px-4">
           Descubra tratamentos personalizados que realçam sua beleza e elevam sua autoestima.
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
                      <ServiceCardImage
                        image={service.image}
                        title={service.title}
                        description={service.description}
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
      </div>

      
<div className="bg-white py-8 lg:py-12">
  <h2 className="font-marcellus font-semibold lg:pb-8 text-xl lg:text-3xl text-[#D3AF37] text-center">
    RESULTADOS COMPROVADOS
  </h2>

 
  <div className="flex flex-wrap justify-center gap-4 bg-transparent pt-10 pb-12">
    {[Resultado1, Resultado2, Resultado3, Resultado4].map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`Resultado ${i + 1}`}
        className="w-full max-w-[280px] h-auto object-cover cursor-pointer rounded-lg hover:opacity-90 transition"
        onClick={() => setImagemSelecionada(img)}
      />
    ))}
  </div>

 
  {imagemSelecionada && (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={() => setImagemSelecionada(null)}
    >
      <img
        src={imagemSelecionada}
        alt="Imagem ampliada"
        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
      />
    </div>
  )}
</div>

   

      
      <WhatsAppButton />
      
      <style>
        {`
          @keyframes reflexoLocal {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            50% {
              transform: translateX(0%);
              opacity: 0.9;
            }
            100% {
              transform: translateX(100%);
              opacity: 0;
            }
          }
          .animate-reflexoLocal {
            animation: reflexoLocal 6s linear infinite;
          }
        `}
      </style>
    
    </div>
  );
}

export default Estetica;