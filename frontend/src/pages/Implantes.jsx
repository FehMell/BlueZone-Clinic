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
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6   } from "react-icons/ri";
import ImplanteHormonal from "../images/ImplanteHormonal.png"


function Implantes() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const services = [

    {
      title: "Menopausa",
      description:
        "Focado em melhorar a qualidade de vida das mulheres durante a menopausa, nosso tratamento tem como objetivo aliviar sintomas frequentemente incômodos, como ondas de calor, instabilidade emocional, fadiga, insônia, baixa libido, suores noturnos, ressecamento vaginal, entre outros.",
      icon: FaDumbbell,
      showButton: false,
    },
    {
      title: "Endometriose",
      description:
        "É uma causa frequente de dor abdominal intensa em mulheres, podendo levar à incapacidade e impactar significativamente a qualidade de vida. Frequentemente cursa com sangramento excessivo e cólicas abdominais.",
      icon: FaSyringe,
      showButton: false,
    },
    {
      title: "Distúrbios Menstruais",
      description:
        "Sangramento excessivo, associado a cólicas abdominais. Inclui irregularidades do ciclo, fluxo anormal e dismenorreia que podem comprometer as atividades diárias e a qualidade de vida.",
      icon: GiPill,
      showButton: false,
    },
    {
      title: "Tensão Pré-Menstrual (TPM)",
      description:
        "A Tensão Pré-Menstrual é um conjunto de sintomas físicos, emocionais e comportamentais decorrentes das variações hormonais do ciclo menstrual, podendo impactar significativamente a qualidade de vida.",
      icon: LiaFileMedicalAltSolid,
      showButton: false,
    },

    {
      title: "Anticoncepção",
      description:
        "Método contraceptivo altamente eficaz, que elimina o risco de esquecimento no uso.",
      icon: GiPill,
      showButton: false,
    },

    {
      title: "Doenças do Útero (Miomas)",
      description:
        "Miomas uterinos podem estar associados a sangramentos menstruais excessivos e impacto na qualidade de vida; avaliamos e orientamos o manejo adequado.",
      icon: LiaFileMedicalAltSolid,
      showButton: false,
    },

    {
      title: "Melhora da Disposição",
      description:
        "Com equilíbrio hormonal é possível restaurar a energia, reduzir fadiga e melhorar o bem-estar geral.",
      icon: FaHandSparkles,
      showButton: false,
    },

    {
      title: "Reposição Hormonal Masculina",
      description:
        "Indicada para homens com baixos níveis de testosterona, a reposição hormonal visa aliviar sintomas como baixa libido, disfunção erétil, cansaço, desânimo, dificuldade para emagrecer e para ganhar massa muscular.",
      icon: FaDumbbell,
      showButton: false,
    },

    {
      title: "Tratamento da Sarcopenia",
      description:
        "Sarcopenia é a perda progressiva de massa, força e função muscular, geralmente associada ao envelhecimento, mas também decorrente de inatividade, doenças crônicas ou má nutrição; nosso foco é preservar e recuperar função muscular.",
      icon: FaDumbbell,
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

                    <h1 className="font-marcellus text-2xl lg:text-[38px] xl:text-[42px] font-bold text-[#463D34] leading-tight pb-4">
                        Implantes Hormonais
                    </h1>

                    <h2 className="uppercase pb-2 font-marcellus text-base lg:text-xl xl:text-2xl font-semibold text-[#D3AF37]">
                        Solução contínua, discreta e eficaz para equilibrar seus hormônios
                    </h2>

                    <p className="pb-4 lg:pb-2 font-manrope text-gray-700 text-sm lg:text-[15px] xl:text-[16px] leading-relaxed">
                        Implantes hormonais liberam doses estáveis e controladas diretamente
                        na corrente sanguínea, oferecendo praticidade (sem doses diárias),
                        maior constância nos níveis hormonais e duração prolongada
                        (meses). Indicados para quem busca <span className="font-semibold"> alívio de sintomas, melhora da
                        energia, sono, libido e performance metabólica. </span>
                    </p>

                    <p className="pb-2 lg:pb-2 font-manrope text-gray-700 text-sm lg:text-[15px] xl:text-[16px] leading-relaxed">
                        Na <span className="font-semibold"> Blue Zone Clinic</span> avaliamos cada caso individualmente e
                        indicamos o implante mais adequado — seja para <span className="font-semibold"> reposição,
                        anticoncepção, manejo da menopausa, ganho de massa muscular ou
                        melhora da qualidade de vida. </span>
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
        <div className="bg-black">
          
          <h2 className="uppercase text-center font-marcellus text-xl lg:text-[24px] xl:text-[24px] font-bold text-[#D3AF37] leading-tight pb-4 pt-12">Benefícios dos Implantes Hormonais</h2>
          <h2 className="uppercase text-center font-marcellus text-xl lg:text-[24px] xl:text-[24px] font-bold text-[#D3AF37] leading-tight pb-12">em comparação a outras formas de reposição</h2>
          <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
 <div className="relative bg-black text-center py-10 lg:py-20 px-4 lg:px-40 overflow-hidden">
 
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400/15 via-purple-500/10 to-blue-400/15 transform -rotate-6 opacity-40"></div>
  <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[90px]"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-[90px]"></div>

 
  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 relative z-10">
    
    <div className="flex flex-col items-center order-1 lg:order-1">
      <div className="h-64 lg:h-[700px] w-full max-w-xs lg:max-w-none">
        <img
          src={ImplanteHormonal}
          alt="Procedimento de Implante Hormonal"
          className="h-full w-full object-cover rounded-3xl lg:rounded-b-full"
        />
      </div>
    </div>

  
    <div className="flex flex-col justify-start text-gray-100 max-w-full lg:max-w-md text-center lg:text-left order-2 lg:order-2">
      <h3 className="flex items-center gap-2 justify-center lg:justify-start text-lg font-marcellus pb-2">
        <RiNumber1 className="text-[#D3AF37]" />
        Liberação Contínua e Controlada
      </h3>
      <p className="text-center lg:text-left font-manrope pb-4 text-sm">
        Proporcionam uma liberação gradual de hormônios, evitando flutuações hormonais comuns em outros métodos,
       
        como comprimidos e injeções, garantindo maior estabilidade no tratamento.
      </p>

      <h3 className="flex items-center gap-2 justify-center lg:justify-start text-lg font-marcellus pb-2">
        <RiNumber2 className="text-[#D3AF37]" />
        Praticidade
      </h3>
      <p className="font-manrope pb-4 text-sm">
        Não exigem administração diária, eliminando o risco de esquecimentos, típico de comprimidos e géis transdérmicos.
      </p>

      <h3 className="flex items-center gap-2 justify-center lg:justify-start text-lg font-marcellus pb-2">
        <RiNumber3 className="text-[#D3AF37]" />
        Maior Durabilidade
      </h3>
      <p className="font-manrope pb-4 text-sm">
        Implantes absorvíveis liberam hormônios por até 6 meses, enquanto os não absorvíveis podem durar até 12 meses,
        <br />
        reduzindo a necessidade de reposições frequentes.
      </p>

      <h3 className="flex items-center gap-2 justify-center lg:justify-start text-lg font-marcellus pb-2">
        <RiNumber4 className="text-[#D3AF37]" />
        Conforto
      </h3>
      <p className="font-manrope pb-4 text-sm">
        Evitam o desconforto de injeções intramusculares regulares, tornando o método mais prático e confortável para o paciente.
      </p>

      <h3 className="flex items-center gap-2 justify-center lg:justify-start text-lg font-marcellus pb-2">
        <RiNumber5 className="text-[#D3AF37]" />
        Melhor Resposta Terapêutica
      </h3>
      <p className="font-manrope pb-4 text-sm">
        A liberação constante de hormônios bioidênticos, semelhantes aos produzidos naturalmente pelo organismo,
        reduz os efeitos colaterais indesejados e promove maior eficácia terapêutica.
      </p>

      <h3 className="flex items-center gap-2 justify-center lg:justify-start text-lg font-marcellus pb-2">
        <RiNumber6 className="text-[#D3AF37]" />
        Discrição
      </h3>
      <p className="font-manrope pb-4 text-sm">
        Inseridos sob a pele, os implantes são praticamente imperceptíveis, permitindo que o tratamento seja realizado sem interferir na rotina do paciente.
      </p>
    </div>
  </div>
</div>

</div>

        </div>
       <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <path d="M0,0 C480,120 960,0 1440,120 L1440,0 L0,0 Z" fill="#B58E4F"/>
</svg>



        <div className="text-center ">
            <h2 className="font-manrope  lg:pt-10 pb-3 lg:pb-4 text-xs lg:text-sm text-gray-600 font-semibold">
                O QUE OS IMPLANTES PODEM TRATAR
            </h2>
            <h2 className="font-marcellus font-semibold pb-3 lg:pb-4 text-xl lg:text-3xl text-[#D3AF37]">
                Benefícios clínicos e práticos
            </h2>
            <p className="font-manrope lg:pb-8 text-gray-500 text-xs lg:text-sm max-w-2xl mx-auto px-4">
                Nossos tratamentos visam estabilizar hormônios, reduzir sintomas da
                menopausa, regular ciclos, melhorar libido, sono, humor e
                desempenho físico, além de oferecer opções contraceptivas e suporte na
                reposição masculina.
            </p>
        </div>

        <div className="px-4 pb-16 relative pt-8">
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
       
    </div>
);
}

export default Implantes;
