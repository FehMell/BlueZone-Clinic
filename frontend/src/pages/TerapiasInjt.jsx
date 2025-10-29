import Local from "../images/localblue.png";
import Logo from "../images/logobluezonee.webp";
import Thiago from "../images/thiago3.webp";
import Footer from "../components/footer";
import Desfoque from "../images/desfoque.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ServiceCard from "../components/serviceCard";
import React, { useRef, useEffect, useState } from "react";
import { FaDumbbell, FaSyringe } from "react-icons/fa";
import { FaHandSparkles } from "react-icons/fa";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { GiPill } from "react-icons/gi";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import WhatsAppButton from "../components/whatsappButton";
import Agendar from "../components/agendar"

function TerapiasInjt() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

const services = [
    {
        title: "Reposição Rápida",
        description:
            "Reposição rápida de vitaminas, minerais, aminoácidos e antioxidantes diretamente na corrente sanguínea, resultando em melhora acelerada dos sintomas.",
        icon: FaSyringe,
        showButton: false,
    },
    {
        title: "Fortalecimento da Imunidade",
        description:
            "Fortaleça suas defesas com nutrientes selecionados que ajudam a proteger o corpo contra infecções e promover recuperação mais rápida.",
        icon: FaHandSparkles,
        showButton: false,
    },
    {
        title: "Aumento do Metabolismo",
        description:
            "Protocolos que aceleram o metabolismo e potencializam a queima de calorias, auxiliando na perda de peso saudável.",
        icon: FaDumbbell,
        showButton: false,
    },
    {
        title: "Melhora da Performance nos Treinos",
        description:
            "Nutrientes essenciais para melhorar performance física, recuperação e ganho de massa muscular durante o treinamento.",
        icon: FaDumbbell,
        showButton: false,
    },
    {
        title: "Redução do Estresse e Ansiedade",
        description:
            "Terapias que combatem o estresse, reduzindo tensões e promovendo equilíbrio emocional para um dia a dia mais leve.",
        icon: LiaFileMedicalAltSolid,
        showButton: false,
    },
    {
        title: "Melhora Cognitiva e da Memória",
        description:
            "Suplementação de nutrientes chave para aprimorar memória, concentração e foco, favorecendo o desempenho mental.",
        icon: GiPill,
        showButton: false,
    },
    {
        title: "Combate ao Estresse Oxidativo",
        description:
            "Antioxidantes e nutrientes que neutralizam radicais livres, prevenindo danos celulares e contribuindo para envelhecimento saudável.",
        icon: FaHandSparkles,
        showButton: false,
    },
    {
        title: "Redução de Inflamações",
        description:
            "Protocolos com ação anti-inflamatória para aliviar processos inflamatórios e promover bem-estar contínuo.",
        icon: FaSyringe,
        showButton: false,
    },
    {
        title: "Alívio dos Sintomas da Menopausa e TPM",
        description:
            "Tratamentos que reduzem ondas de calor, irritabilidade e outros sintomas hormonais, restaurando a qualidade de vida e equilíbrio.",
        icon: LiaFileMedicalAltSolid,
        showButton: false,
    },
];

  return (
    <div className="overflow-x-hidden">
      <div className="lg:grid lg:grid-cols-[1.65fr_1fr] bg-white ">
        <div className="relative flex flex-col justify-center items-center p-6 lg:p-10 w-full mx-auto lg:mt-0 h-auto lg:h-[720px]">
          <div
            className="lg:absolute lg:inset-0 lg:bg-cover lg:bg-center lg:z-0"
            style={{ backgroundImage: `url(${Desfoque})` }}
          ></div>

          <div className="lg:absolute lg:inset-0 lg:bg-white/80 lg:backdrop-blur-sm lg:z-10"></div>

          <div className="relative z-20 flex flex-col items-center text-center max-w-[600px] lg:max-w-[800px] xl:max-w-[750px] overflow-hidden">
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

            <h1 className="font-marcellus text-2xl lg:text-[38px] xl:text-[42px] font-bold text-[#463D34] leading-tight pb-4">
              Terapias Injetáveis
            </h1>

            <h2 className="uppercase pb-2 font-marcellus text-base lg:text-xl xl:text-2xl font-semibold text-[#D3AF37]">
              Descubra o impacto que esse tratamento pode promover na sua
              qualidade de vida!
            </h2>

            <p className="pb-4 lg:pb-2 font-manrope text-gray-700 text-sm lg:text-[15px] xl:text-[16px] leading-relaxed">
              As terapias injetáveis são realizadas por via intramuscular ou
              endovenosa, garantindo a absorção completa dos nutrientes
              utilizados, que são entregues diretamente na corrente sanguínea.
            </p>

            <p className="pb-2 lg:pb-2 font-manrope text-gray-700 text-sm lg:text-[15px] xl:text-[16px] leading-relaxed">
              Essa abordagem é mais vantajosa do que a via oral, que apresenta
              uma absorção muito menor, promovendo uma melhora mais rápida dos
              sintomas.
            </p>

            <div className="border-2 border-[#D3AF37] px-1 py-1 hover:scale-110 transform transition-transform duration-300 mb-4 mt-8 ">
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

              <div className="text-center pt-20">
                <h2 className="font-manrope pt-6 lg:pt-10 pb-3 lg:pb-4 text-xs lg:text-sm text-gray-600 font-semibold">
                  O QUE AS TERAPIAS INJETÁVEIS PODEM OFERECER
                </h2>
                <h2 className="font-marcellus font-semibold pb-3 lg:pb-4 text-xl lg:text-3xl text-[#D3AF37]">
                  Benefícios clínicos e práticos
                </h2>
                <p className="font-manrope pb-6 lg:pb-8 text-gray-500 text-xs lg:text-sm max-w-2xl mx-auto px-4">
                  Nossas terapias injetáveis proporcionam reposição rápida e eficaz de vitaminas, minerais
                  e antioxidantes diretamente na corrente sanguínea. 
                </p>
              </div>

              <div className="px-4 pb-16 relative">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={1}
                  slidesPerView={1}
                  loop={false}
                  onSwiper={setSwiperInstance}
                  onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="pb-8 lg:pb-10"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} style={{ height: "auto" }}>
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

        <button
          onClick={() => swiperInstance?.slidePrev()}
          className={`absolute left-[-12px] top-[160px] -translate-y-1/2 z-10 p-2 lg:p-3 hover:scale-110 lg:hover:scale-125 transform transition duration-300 ${
            isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <BsChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-[#D3AF37]" />
        </button>
        <button
          onClick={() => swiperInstance?.slideNext()}
          className={`absolute right-[-12px] top-[160px] -translate-y-1/2 z-10 p-2 lg:p-3 hover:scale-110 lg:hover:scale-125 transform transition duration-300 ${
            isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <BsChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-[#D3AF37]" />
        </button>
      </div>

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
      <Agendar />
      <WhatsAppButton />
    
    </div>
  );
}

export default TerapiasInjt;
