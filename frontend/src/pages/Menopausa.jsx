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
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { MdOutlineNoFood } from "react-icons/md";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import WhatsAppButton from "../components/whatsappButton";

function Menopausa() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const services = [
    {
      title: "Avaliação Médica",
      description:
        "A avaliação é conduzida por meio de uma consulta médica detalhada, complementada por exames laboratoriais específicos, com o objetivo de identificar todas as deficiências e diagnosticar a menopausa com precisão. Com base nos resultados, é definido o tratamento mais adequado, incluindo a avaliação da necessidade de terapia hormonal.",
      icon: LiaFileMedicalAltSolid,
      showButton: false,
    },
    {
      title: "Nutricionista",
      description: (
        <>
          Elaboração de um plano alimentar personalizado por nossa{" "}
          <span className="font-semibold"> nutricionista Ana Paula </span>, com
          foco na otimização do ganho de massa muscular e na redução da gordura
          corporal e visceral.
        </>
      ),
      icon: MdOutlineNoFood,
      showButton: false,
    },
   
    {
      title: "Exercício Físico",
      description:
        "O programa inclui orientações sobre os exercícios mais adequados aos objetivos, promovendo o combate ao sedentarismo. Com foco em estratégias para o aumento de massa muscular, buscamos educar nossos pacientes sobre a importância do exercício físico na melhoria da saúde global, garantindo que essa prática seja incorporada de forma duradoura ao estilo de vida.",
      icon: FaDumbbell,
      showButton: false,
    },
    {
      title: "Terapia de Reposição Hormonal",
      description:
        <>É o tratamento recomendado para esses casos, com o objetivo de reduzir os sintomas da menopausa e restaurar a qualidade de vida da paciente.<br /> A reposição pode ser realizada por diferentes vias, como implantes hormonais, gel transdérmico ou por via oral.</>,
      icon: FaSyringe,
      showButton: false,
    },
   
  ];

  return (
    <div className="overflow-x-hidden">
      <div className="lg:grid lg:grid-cols-[1.65fr_1fr] bg-white">
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
              Menopausa
            </h1>

            <h2 className="uppercase pb-2 font-marcellus text-base lg:text-xl xl:text-2xl font-semibold text-[#D3AF37]">
              Descubra como a Blue Zone Clinic pode te ajudar a passar por essa
              fase com tranquilidade!
            </h2>

            <p className="pb-4 lg:pb-2 font-manrope text-gray-700 text-sm lg:text-[15px] xl:text-[16px] leading-relaxed">
              A menopausa é uma etapa natural na vida da mulher, caracterizada
              pelo encerramento dos ciclos menstruais e da capacidade
              reprodutiva, sendo confirmada oficialmente após 12 meses
              consecutivos sem menstruação. Geralmente ocorre entre os 45 e 55
              anos, quando os ovários{" "}
              <span className="font-semibold">
                reduzem significativamente a produção dos hormônios estrogênio e
                progesterona.
              </span>
            </p>

            <p className="pb-2 lg:pb-2 font-manrope text-gray-700 text-sm lg:text-[15px] xl:text-[16px] leading-relaxed">
              Os sintomas comuns dessa fase incluem{" "}
              <span className="font-semibold">
                {" "}
                ondas de calor, suores noturnos, queda de libido, ressecamento
                vaginal, alterações de humor, fadiga, insônia, perda de massa
                muscular e óssea (osteoporose)
              </span>
              , entre outros.
            </p>

            <p className="pb-2 lg:pb-2 font-manrope text-gray-700 text-sm lg:text-[15px] xl:text-[16px] leading-relaxed">
              {" "}
              Na <span className="font-semibold">Blue Zone Clinic </span>,
              realizamos uma avaliação detalhada do seu quadro para identificar
              o tratamento mais adequado. Nossa abordagem abrange orientações
              para mudanças no estilo de vida, incluindo uma alimentação
              equilibrada, prática regular de atividades físicas e, quando
              necessário, terapias hormonais, sempre com o objetivo de promover
              seu bem-estar e qualidade de vida.
            </p>

            <div className="border-2 border-[#D3AF37] px-1 py-1 hover:scale-110 transform transition-transform duration-300 mb-4 mt-8 ">
              <a
                href="https://wa.me/5511945197405?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20oferecidos%20pela%20Blue%20Zone."
                target="_blank"
              >
                <button className="font-marcellus bg-[#D3AF37] text-white px-6 lg:px-7 xl:px-8 font-semibold py-2 lg:py-2 hover:bg-[#B38A4B] text-sm lg:text-base xl:text-lg">
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
          
          {/* wrapper ensures the PNG stays fully inside the background and doesn't overflow */}
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
          BASES DO PROTOCOLO BLUE ZONE
        </h2>
        <h2 className="font-marcellus font-semibold pb-10 lg:pb-4 text-xl lg:text-3xl text-[#D3AF37]">
          MENOPAUSA
        </h2>
       
      </div>

      <div className="px-4 pb-16 relative pt-10">
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
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default Menopausa;
