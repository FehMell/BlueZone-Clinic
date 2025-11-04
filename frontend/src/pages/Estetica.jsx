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
      description: "Reduz rugas e linhas de expressão ao relaxar os músculos da face, proporcionando um aspecto mais suave e rejuvenescido.",
      image: Estetica1,
    },
    { 
      title: "Bioestimuladores de Colágeno", 
      description: "Estimula a produção natural de colágeno, melhorando a firmeza e a textura da pele, com resultados progressivos e duradouros.",
      image: Estetica2,
    },
    { 
      title: "Tratamento para Gordura Localizada", 
      description: "Aplicação de enzimas que auxiliam na quebra e eliminação da gordura localizada, contribuindo para a redução de medidas e flacidez.",
      image: Estetica3,
    },
    { 
      title: "Preenchimento Labial", 
      description: "Define e realça o formato natural dos lábios com harmonia e equilíbrio, garantindo volume e simetria sem exageros.",
      image: Estetica4,
    },
    { 
      title: "Preenchimento com Ácido Hialurônico", 
      description: "Restaura o volume e hidrata a pele, suavizando linhas e promovendo harmonia facial de forma natural e personalizada.",
      image: Estetica5,
    },
    { 
      title: "Harmonização Corporal", 
      description: "Procedimentos que equilibram volume, firmeza e contorno corporal com bioestimuladores, enzimas e suplementações específicas.",
      image: Estetica6,
    },
    { 
      title: "Harmonização Glútea", 
      description: "Modela e aumenta o volume dos glúteos com preenchedores e bioestimuladores, melhorando o contorno e a firmeza da pele.",
      image: Estetica7,
    },
  ];

  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [indiceImagem, setIndiceImagem] = useState(0);
  const imagensResultados = [Resultado1, Resultado2, Resultado3, Resultado4];

  const abrirImagem = (img, index) => {
    setImagemSelecionada(img);
    setIndiceImagem(index);
  };

  const fecharImagem = () => {
    setImagemSelecionada(null);
    setIndiceImagem(0);
  };

  const imagemAnterior = () => {
    const novoIndice = indiceImagem === 0 ? imagensResultados.length - 1 : indiceImagem - 1;
    setIndiceImagem(novoIndice);
    setImagemSelecionada(imagensResultados[novoIndice]);
  };

  const proximaImagem = () => {
    const novoIndice = indiceImagem === imagensResultados.length - 1 ? 0 : indiceImagem + 1;
    setIndiceImagem(novoIndice);
    setImagemSelecionada(imagensResultados[novoIndice]);
  };

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
    <div className="overflow-x-hidden">
      <div className="lg:grid lg:grid-cols-[1.65fr_1fr] bg-white">
        <div className="relative flex flex-col justify-center items-center p-6 lg:p-10 w-full mx-auto lg:mt-0 h-auto lg:h-[720px]">
          <div
            className="lg:absolute lg:inset-0 lg:bg-cover lg:bg-center lg:z-0"
            style={{ backgroundImage: `url(${Desfoque})` }}
          ></div>

          <div className="lg:absolute lg:inset-0 lg:bg-white/80 lg:backdrop-blur-sm lg:z-10"></div>

          <div className="relative z-20 flex flex-col items-center text-center max-w-[600px] lg:max-w-[800px] xl:max-w-[750px] px-4">
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

            <h1 className="font-marcellus text-2xl lg:text-[38px] font-bold text-[#463D34] leading-tight pb-6">
              Realce sua Beleza Natural
            </h1>
            <h2 className="uppercase pb-4 font-marcellus text-base lg:text-xl font-semibold text-[#D3AF37]">
              Procedimentos personalizados que trazem harmonia, rejuvenescimento e confiança, valorizando sua autoestima.
            </h2>
            <p className="pb-4 lg:pb-2 font-manrope text-gray-700 text-sm lg:text-[15px] leading-relaxed">
              A Blue Zone Clinic é referência em estética avançada. Oferecemos protocolos eficazes de harmonização facial e corporal, com técnicas exclusivas e resultados naturais.
            </p>
            <p className="pb-8 lg:pb-10 font-manrope text-gray-700 text-sm lg:text-[15px] leading-relaxed">
              Nossa equipe combina cuidados estéticos e de saúde para promover bem-estar, equilíbrio e autoconfiança em cada paciente.
            </p>

            <div className="w-full flex justify-center mt-8 mb-4">
              <div className="border-2 border-[#D3AF37] px-1 py-1 hover:scale-110 transform transition-transform duration-300">
                <a
                  href="https://wa.me/5511945197405?text=Olá!%20Quero%20mais%20informações%20sobre%20implantes%20hormonais%20e%20agendar%20uma%20avaliação."
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="font-marcellus bg-[#D3AF37] text-white px-6 lg:px-7 xl:px-8 font-semibold py-2 lg:py-2 hover:bg-[#B38A4B] text-sm lg:text-base xl:text-lg">
                    Agendar Avaliação
                  </button>
                </a>
              </div>
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
              className="object-contain max-w-full max-h-full w-auto h-auto lg:w-[50%] xl:w-[55%] 2xl:w-[50%] transition-transform duration-1000 ease-in-out hover:-translate-y-1 z-30"
            />
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pt-24 pb-8">
        <div className="px-6 py-3">
          <div className="flex items-center gap-1">
            {[...Array(17)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full bg-[#D3AF37] ${
                  i % 3 === 0 ? 'opacity-100' : i % 3 === 1 ? 'opacity-70' : 'opacity-40'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-8 lg:py-10 px-4 lg:px-6 bg-white" id="tratamentos">
        <div className="text-center max-w-7xl mx-auto">
          <h2 className="font-manrope pt-6 lg:pt-10 pb-3 lg:pb-4 text-xs lg:text-sm text-gray-600 font-semibold">TRATAMENTOS DE ESTÉTICA ENCONTRADOS</h2>
          <h3 className="font-marcellus font-semibold pb-3 lg:pb-4 text-xl lg:text-3xl text-[#463D34]">NA BLUE ZONE CLINIC</h3>
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
              aria-label="Slide anterior"
            >
              <BsChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-[#D3AF37]" />
            </button>

            <button
              ref={nextRef}
              className={`absolute right-2 lg:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 lg:p-3 hover:scale-110 lg:hover:scale-125 transform transition duration-300 ${
                isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
              aria-label="Próximo slide"
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

       <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 mt-8 pb-8">
        <div className="px-6 py-3">
          <div className="flex items-center gap-1">
            {[...Array(17)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full bg-[#D3AF37] ${
                  i % 3 === 0 ? 'opacity-100' : i % 3 === 1 ? 'opacity-70' : 'opacity-40'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-8 lg:py-12">
        <h2 className="font-marcellus font-semibold lg:pb-8 text-xl lg:text-3xl text-[#463D34] text-center">
          RESULTADOS COMPROVADOS
        </h2>

        <div className="flex flex-wrap justify-center gap-4 bg-transparent pt-10 pb-12">
          {imagensResultados.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Resultado ${i + 1}`}
              className="w-full max-w-[280px] h-auto object-cover cursor-pointer rounded-lg hover:opacity-90 transition"
              onClick={() => abrirImagem(img, i)}
            />
          ))}
        </div>

        {imagemSelecionada && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={fecharImagem}
          >
            <div className="flex items-center justify-center gap-4 lg:gap-8">
             
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  imagemAnterior();
                }}
                className="bg-white/90 hover:bg-white text-black p-4 rounded-full shadow-lg transition-all duration-200 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center hover:scale-110"
                aria-label="Imagem anterior"
              >
                <BsChevronLeft className="w-6 h-6 lg:w-7 lg:h-7 text-[#D3AF37]" />
              </button>

              
              <div className="flex items-center justify-center">
                <img
                  src={imagemSelecionada}
                  alt={`Resultado ${indiceImagem + 1}`}
                  className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                  style={{ 
                    width: 'auto', 
                    height: 'auto',
                    maxWidth: '680px',
                    maxHeight: '680px'
                  }}
                />
              </div>

           
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  proximaImagem();
                }}
                className="bg-white/90 hover:bg-white text-black p-4 rounded-full shadow-lg transition-all duration-200 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center hover:scale-110"
                aria-label="Próxima imagem"
              >
                <BsChevronRight className="w-6 h-6 lg:w-7 lg:h-7 text-[#D3AF37]" />
              </button>
            </div>

           
            <button
              onClick={fecharImagem}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-black p-2 rounded-full shadow-lg transition-all duration-200 w-10 h-10 flex items-center justify-center text-xl font-bold hover:scale-110"
              aria-label="Fechar imagem"
            >
              ✕
            </button>

           
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {indiceImagem + 1} / {imagensResultados.length}
            </div>
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