import Local from "../images/localblue.png";
import Logo from "../images/logobluezonee.webp";
import Thiago from "../images/thiago3.webp";
import Footer from "../components/footer";
import Desfoque from "../images/desfoque.png";
import Dieta from "../images/dieta.png";
import React, { useRef, useEffect, useState } from "react";
import { FaDumbbell, FaSyringe, FaWeight } from 'react-icons/fa';
import { FaHandSparkles } from "react-icons/fa";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { MdOutlineNoFood } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ServiceCard from "../components/serviceCard";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import WhatsAppButton from "../components/whatsappButton";

function Emagrecimento() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const services = [
    {
      title: "Avaliação Médica",
      description: "A investigação é conduzida por meio de uma consulta médica minuciosa, complementada por exames laboratoriais, com o objetivo de identificar as possíveis causas do ganho de peso e direcionar o tratamento mais eficaz.",
      icon: LiaFileMedicalAltSolid,
      showButton: false,
    },
    {
      title: "Nutricionista",
      description:
        <>Elaboração de um plano alimentar personalizado por nossa <span className="font-semibold"> nutricionista Ana Paula </span>, alinhado aos seus objetivos de saúde, estética e bem-estar geral. Nossa abordagem busca ampliar o conhecimento dos pacientes sobre nutrição, capacitando-os a fazer escolhas conscientes em suas refeições e a manter uma dieta equilibrada e rica em nutrientes.</>,
      icon: MdOutlineNoFood,
      showButton: false,
    },
    {
      title: "Acompanhamento",
      description: <>Acompanhamento semanal na clínica, onde são avaliados por uma equipe multidisciplinar dedicada a monitorar o progresso do tratamento.<br /> <br />
      <div className="text-left">
1) Pesagem semanal. <br />
2) Análises detalhadas da composição corporal por bioimpedância. <br />
3) Interrogatório sobre dieta e treino da semana. <br />
4) Administração de medicamentos. <br />
5) Ajustes e orientações direcionadas.
</div></>,
      icon: FaHandSparkles,
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
      title: "Terapias Hormonais",
      description:
        "Diagnóstico e correção de possíveis deficiências que estejam comprometendo os resultados.",
      icon: FaSyringe,
      showButton: false,
    },
    {
      title: "Obesidade",
      description:
        <>A obesidade é uma doença crônica que, assim como outras condições de saúde, exigem o uso de medicamentos para seu controle. Após uma avaliação médica detalhada, é possível determinar o tratamento mais adequado, respeitando a individualidade de cada paciente. Sempre serão indicados os tratamentos mais efetivos e seguros, além de outras opções de segunda linha aos pacientes, que terão autonomia para realizar a escolha. <br /> <br /> Também realizamos uma abordagem comportamental em todos os encontros, incentivando reflexões sobre o comportamento alimentar e o estilo de vida, além de orientar na criação de estratégias eficazes para superar essas barreiras e alcançar resultados sustentáveis.</>,
      icon: FaWeight,
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

          <div className="relative z-20 flex flex-col items-center text-center max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] overflow-hidden">
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
              Emagrecimento Saudável
            </h1>

            <h2 className="uppercase pb-2 font-marcellus text-base lg:text-xl xl:text-2xl font-semibold text-[#D3AF37]">
              a Blue Zone Clinic PROMOVE emagrecimento saudável e sustentável!
            </h2>

            <p className="pb-4 lg:pb-2 font-manrope text-gray-700 text-sm lg:text-[15px] xl:text-[16px] leading-relaxed">
              Na Blue Zone Clinic, durante o processo de emagrecimento,
              realizamos um monitoramento contínuo e rigoroso da composição
              corporal por meio da bioimpedância, permitindo acompanhar seu
              progresso e identificar necessidades de ajustes no tratamento.
            </p>

            <p className="pb-8 lg:pb-10 font-manrope text-gray-700 text-sm lg:text-[15px] xl:text-[16px] leading-relaxed">
              Após uma avaliação detalhada que abrange consulta médica, consulta
              com nutricionista, avaliação de exames laboratoriais e da
              composição corporal por bioimpedância, elaboramos um plano de
              tratamento personalizado e específico pro seu caso.
            </p>

            <div className="border-2 border-[#D3AF37] px-1 py-1 hover:scale-110 transform transition-transform duration-300 mb-4">
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

      {/*SESSÃO BLUE HEALTH++*/}

      <div className="bg-gray-50 relative flex flex-col lg:flex-row items-center justify-start min-h-[600px] mt-[-1px]">
        <div className="absolute left-0 top-0 bottom-0 w-[45%] hidden lg:block overflow-hidden">
          <img
            src={Dieta}
            alt="Programa Blue Health++"
            className="w-full h-full object-cover object-left"
          />
        </div>

        <div className="relative z-10 flex-1 lg:ml-[28%] xl:ml-[30%] 2xl:ml-[32%] px-6 lg:px-16 xl:px-20 py-14 max-w-[800px] xl:max-w-[800px] 2xl:max-w-[1000px]">
          <h2 className="text-xs font-semibold font-manrope pb-2 text-center">
            PROGRAMA BLUE HEALTH++
          </h2>
          <h2 className="font-semibold font-marcellus text-2xl lg:text-3xl xl:text-4xl text-center text-[#D3AF37]">
            TRANSFORMANDO VIDAS COM
          </h2>
          <h2 className="pb-4 font-semibold font-marcellus text-2xl lg:text-3xl xl:text-4xl text-center text-[#D3AF37]">
            EMAGRECIMENTO
          </h2>

          <p className="pb-2 font-manrope text-[13px] lg:text-[14px] xl:text-[15px] text-gray-600 text-center ">
            Um programa diferenciado que apenas em 2024, já transformou a vida
            de <span className="font-semibold"> mais de 800 pessoas. </span>
          </p>
          <p className="pb-4 font-manrope text-[13px] lg:text-[14px] xl:text-[15px] text-gray-600 text-center">
            Nossa missão vai muito além de entregar resultados. Promovemos uma
            reeducação real dos seus hábitos, com acompanhamento próximo e
            estratégico, para que sua transformação seja não apenas eficaz, mas
            também sustentável ao longo do tempo.
          </p>

          <h2 className="font-marcellus text-2xl lg:text-3xl xl:text-4xl font-semibold text-center text-[#D3AF37] ">
            COMO É O PROGRAMA
          </h2>
          <h2 className="pb-4 font-marcellus text-2xl lg:text-3xl xl:text-4xl font-semibold text-center text-[#D3AF37]">
            BLUE HEALTH++?
          </h2>

          <p className="pb-2 font-manrope text-[13px] lg:text-[14px] xl:text-[15px] text-gray-600 text-center">
            Após uma avaliação detalhada que abrange consulta médica, consulta
            com nutricionista, avaliação de exames laboratoriais e da composição
            corporal por bioimpedância, elaboramos um plano de tratamento
            personalizado e específico pro seu caso.
          </p>
          <p className="pb-2 font-manrope text-[13px] lg:text-[14px] xl:text-[15px] text-gray-600 text-center">
            O programa envolve{" "}
            <span className="font-semibold">
              {" "}
              um acompanhamento semanal rigoroso e monitoramento recorrente da
              composição corporal por bioimpedância{" "}
            </span>
            , possibilitando ajustes contínuos no protocolo e promovendo a
            preservação da massa muscular durante todo o processo.
          </p>
          <p className="pb-2 font-manrope text-[13px] lg:text-[14px] xl:text-[15px] text-gray-600 text-center">
            Administramos nutrientes injetáveis cuidadosamente selecionados,
            conduzindo o tratamento para restaurar o equilíbrio metabólico,
            aumentar os níveis de energia e saciedade — fatores essenciais para
            acelerar e sustentar a perda de peso.
          </p>
          <p className="pb-2 font-manrope text-[13px] lg:text-[14px] xl:text-[15px] text-gray-600 text-center">
            Quando indicados, podem ser incorporados ao protocolo medicamentos
            como
            <span className="font-semibold"> Tirzepatida e Semaglutida. </span>
          </p>
        </div>
      </div>

      {/*SESSÃO BLUE HEALTH++ - POR QUE ESCOLHER?*/}

      <div className="bg-black relative py-12 lg:py-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-transparent pointer-events-none z-0"></div>

        <div className="lg:hidden relative z-10 flex flex-col items-center px-6">
          <div className="w-full max-w-md text-center mb-8">
            <h2 className="text-gray-50 pb-4 pt-4 font-manrope text-xs">
              POR QUE ESCOLHER
            </h2>
            <h2 className="text-[#D3AF37] pb-6 font-marcellus text-2xl font-semibold">
              O PROGRAMA BLUE HEALTH?
            </h2>
            <p className="text-gray-50 pb-4 text-justify font-manrope text-[14px]">
              O acompanhamento semanal é um dos grandes diferenciais do nosso
              programa. Com o monitoramento contínuo da nossa equipe, você
              desenvolve uma sensação constante de responsabilidade e
              comprometimento com os resultados. Entre os pacientes que passam
              pelo programa, a opinião é unânime: o fator decisivo para o
              sucesso está justamente nesse acompanhamento próximo, estratégico
              e personalizado.
            </p>
            <p className="text-gray-50 text-justify font-manrope text-[14px]">
              O Programa Blue Health é fundamentado no respeito à
              individualidade de cada paciente. Mesmo com metas ousadas de
              emagrecimento em curto prazo, desenvolvemos estratégias seguras e
              sustentáveis, garantindo que todos os resultados sejam alcançados.
            </p>
          </div>
          <div className="w-full flex justify-center">
            <img src={Logo} alt="Logo Blue Zone" className="h-48 w-auto" />
          </div>
        </div>

        <div className="hidden lg:flex relative z-10 items-center justify-center">
          <div className="w-full max-w-[420px] lg:ml-36 xl:ml-32 2xl:ml-48">
            <h2 className="text-gray-50 pb-4 pt-10 font-manrope text-xs">
              POR QUE ESCOLHER
            </h2>
            <h2 className="text-[#D3AF37] pb-8 font-marcellus text-2xl xl:text-3xl font-semibold">
              O PROGRAMA BLUE HEALTH?
            </h2>
            <p className="text-gray-50 pb-4 text-justify font-manrope text-[14px] xl:text-[15px]">
              O acompanhamento semanal é um dos grandes diferenciais do nosso
              programa. Com o monitoramento contínuo da nossa equipe, você
              desenvolve uma sensação constante de responsabilidade e
              comprometimento com os resultados. Entre os pacientes que passam
              pelo programa, a opinião é unânime: o fator decisivo para o
              sucesso está justamente nesse acompanhamento próximo, estratégico
              e personalizado.
            </p>
            <p className="text-gray-50 text-justify font-manrope text-[14px] xl:text-[15px] pb-20">
              O Programa Blue Health é fundamentado no respeito à
              individualidade de cada paciente. Mesmo com metas ousadas de
              emagrecimento em curto prazo, desenvolvemos estratégias seguras e
              sustentáveis, garantindo que todos os resultados sejam alcançados.
            </p>
          </div>
          <div className="flex-1 flex justify-center lg:justify-start">
            <img
              src={Logo}
              alt="Logo Blue Zone"
              className="h-72 lg:h-80 xl:h-96 w-auto lg:ml-52 xl:ml-72"
            />
          </div>
        </div>
      </div>

     {/*SESSÃO DE RESULTADOS*/}

<div className="py-12 lg:py-16 xl:py-20">
  <h2 className="text-center text-2xl lg:text-3xl xl:text-4xl font-marcellus text-[#D3AF37] pb-6 lg:pb-8 font-semibold">
    RESULTADOS COMPROVADOS
  </h2>

  <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-8 xl:gap-12 px-6">
   
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-col lg:flex-row gap-2">
        <img
          src="https://bluezoneclinic.com.br/wp-content/uploads/2024/12/canetas-1.webp"
          alt=""
          className="h-64 lg:h-96 w-auto hidden lg:block"
        />

        <div className="relative">
          <img
            src="https://bluezoneclinic.com.br/wp-content/uploads/2024/12/Tizerpatina-1.svg"
            alt=""
            className="h-48 lg:h-64 mt-8 lg:mt-32 w-auto"
          />
          <h3 className="absolute top-4 lg:top-20 left-1/2 lg:left-[135px] -translate-x-1/2 lg:-translate-x-1/2 -translate-y-1/2 text-black font-semibold font-marcellus text-xs lg:text-base uppercase text-center lg:text-left w-full lg:w-auto">
            paciente em uso de tirzepatida
          </h3>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-1 mt-2 lg:ml-6 text-xs font-semibold font-manrope text-gray-700 text-center lg:text-left">
        <p>13,3 kg perdidos em 2 meses</p>
        <p>+1,4 kg de músculo</p>
        <p>-8,7% de gordura corporal</p>
      </div>
    </div>

   
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="relative">
          <img
            src="https://bluezoneclinic.com.br/wp-content/uploads/2024/12/Tizerpatina-2.svg"
            alt=""
            className="h-48 lg:h-64 mt-8 lg:mt-32 w-auto"
          />
          <h3 className="absolute top-4 lg:top-20 right-1/2 lg:right-[115px] -translate-y-1/2 translate-x-1/2 lg:-translate-x-1/2 text-black font-semibold font-marcellus text-xs lg:text-base uppercase text-center lg:text-right w-full lg:w-auto">
            paciente em uso de tirzepatida
          </h3>
        </div>

        <img
          src="https://bluezoneclinic.com.br/wp-content/uploads/2024/12/canetas-1.webp"
          alt=""
          className="h-64 lg:h-96 w-auto hidden lg:block"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-1 mt-2 lg:mr-8 text-xs font-semibold font-manrope text-gray-700 text-center lg:text-right">
        <p>12,8 kg perdidos em 2 meses</p>
        <p>+1,2 kg de músculo</p>
        <p>-7,9% de gordura corporal</p>
      </div>
    </div>
  </div>


  <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-2 mt-8 lg:mt-0">
    <div className="relative">
      <img
        src="https://bluezoneclinic.com.br/wp-content/uploads/2024/12/Semaglutida.svg"
        alt=""
        className="h-48 lg:h-64 mt-8 lg:mt-32 w-auto"
      />
      <h3 className="absolute top-4 lg:top-20 left-1/2 lg:left-36 -translate-x-1/2 lg:-translate-x-1/2 text-black font-semibold font-marcellus text-xs lg:text-base uppercase text-center lg:text-left w-full lg:w-auto">
        paciente em uso de semaglutida
      </h3>
      <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-2 pt-4 lg:pt-4 font-semibold text-xs lg:ml-12 text-gray-700 text-center lg:text-left">
        <p>10,6 kg perdidos em 3 meses</p>
        <p>+0,3 kg de músculo</p>
        <p>-8% de gordura corporal</p>
      </div>
    </div>

    <img
      src="https://bluezoneclinic.com.br/wp-content/uploads/2024/12/canetas.webp"
      alt=""
      className="h-64 lg:h-96 w-auto mt-4 hidden lg:block"
    />
  </div>
</div>

      {/*SESSÃO DE TRATAMENTO*/}

          

      <div className="text-center pt-20">
        <h2 className="font-manrope pt-6 lg:pt-10 pb-3 lg:pb-4 text-xs lg:text-sm text-gray-600 font-semibold">
          TRATAMENTOS DE EMAGRECIMENTO ENCONTRADOS
        </h2>
        <h2 className="font-marcellus font-semibold pb-3 lg:pb-4 text-xl lg:text-3xl text-[#D3AF37]">
          NA BLUE ZONE CLINIC
        </h2>
        <p className="font-manrope pb-6 lg:pb-8 text-gray-500 text-xs lg:text-sm max-w-2xl mx-auto px-4">
          Aliamos conhecimento, tecnologia e cuidado personalizado para ajudar
          você a conquistar seu corpo e saúde ideais.
        </p>
      </div>

      {/* CARROSSEL DE SERVIÇOS */}
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
  
  
  <button 
    onClick={() => swiperInstance?.slidePrev()}
    className={`absolute left-[-12px] top-[160px] -translate-y-1/2 z-10 p-2 lg:p-3 hover:scale-110 lg:hover:scale-125 transform transition duration-300 ${
      isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}
  >
    <BsChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-[#D3AF37]" />
  </button>
  <button 
    onClick={() => swiperInstance?.slideNext()}
    className={`absolute right-[-12px] top-[160px] -translate-y-1/2 z-10 p-2 lg:p-3 hover:scale-110 lg:hover:scale-125 transform transition duration-300 ${
      isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'
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

export default Emagrecimento;