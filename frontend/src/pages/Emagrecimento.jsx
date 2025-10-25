import Local from "../images/localblue.png";
import Logo from "../images/logobluezonee.webp";
import Thiago from "../images/thiago3.webp";
import Footer from "../components/footer";
import Desfoque from "../images/desfoque.png";
import Dieta from "../images/dieta.png";

function Emagrecimento() {
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
              Na Blue Zone Clinic, durante o processo de emagrecimento, realizamos um
              monitoramento contínuo e rigoroso da composição corporal por meio da
              bioimpedância, permitindo acompanhar seu progresso e identificar
              necessidades de ajustes no tratamento.
            </p>

            <p className="pb-8 lg:pb-10 font-manrope text-gray-700 text-sm lg:text-[15px] xl:text-[16px] leading-relaxed">
              Após uma avaliação detalhada que abrange consulta médica, consulta com
              nutricionista, avaliação de exames laboratoriais e da composição corporal
              por bioimpedância, elaboramos um plano de tratamento personalizado e
              específico pro seu caso.
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

     
        <div className="hidden lg:block relative order-1 lg:order-2 h-96 lg:h-auto overflow-visible">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${Local})` }}
          ></div>
          <div className="absolute inset-0 overflow-hidden z-20 pointer-events-none">
            <div className="absolute left-[5%] w-[90%] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-reflexoLocal"></div>
          </div>
          <img
            src={Thiago}
            alt="Dr. Thiago"
            className="
              absolute bottom-0 translate-x-[-20%] w-5/6 lg:w-[55%] xl:w-[60%] 2xl:w-[55%] lg:right-16 xl:right-56 2xl:right-62 max-w-full object-contain
              transition-transform duration-1000 ease-in-out
              hover:-translate-y-1 z-50
            "
          />
        </div>
      </div>

      
      <div className="bg-gray-50 relative flex flex-col lg:flex-row items-center justify-start min-h-[600px] mt-[-1px]">
       
        <div className="absolute left-0 top-0 bottom-0 w-[45%] hidden lg:block overflow-hidden">
          <img
            src={Dieta}
            alt="Programa Blue Health++"
            className="w-full h-full object-cover object-left"
          />
        </div>

        
        <div className="relative z-10 flex-1 lg:ml-[28%] xl:ml-[30%] 2xl:ml-[32%] px-6 lg:px-16 xl:px-20 py-14 max-w-[800px] xl:max-w-[900px] 2xl:max-w-[1000px]">
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
            Um programa diferenciado que apenas em 2024, já transformou a vida de <span className="font-semibold"> mais
            de 800 pessoas. </span>
          </p>
          <p className="pb-4 font-manrope text-[13px] lg:text-[14px] xl:text-[15px] text-gray-600 text-center">
            Nossa missão vai muito além de entregar resultados. Promovemos uma
            reeducação real dos seus hábitos, com acompanhamento próximo e estratégico,
            para que sua transformação seja não apenas eficaz, mas também sustentável ao
            longo do tempo.
          </p>

          <h2 className="font-marcellus text-2xl lg:text-3xl xl:text-4xl font-semibold text-center text-[#D3AF37] ">
            COMO É O PROGRAMA
          </h2>
          <h2 className="pb-4 font-marcellus text-2xl lg:text-3xl xl:text-4xl font-semibold text-center text-[#D3AF37]">
            BLUE HEALTH++?
          </h2>

          <p className="pb-2 font-manrope text-[13px] lg:text-[14px] xl:text-[15px] text-gray-600 text-center">
            Após uma avaliação detalhada que abrange consulta médica, consulta com
            nutricionista, avaliação de exames laboratoriais e da composição corporal
            por bioimpedância, elaboramos um plano de tratamento personalizado e
            específico pro seu caso.
          </p>
          <p className="pb-2 font-manrope text-[13px] lg:text-[14px] xl:text-[15px] text-gray-600 text-center">
            O programa envolve <span className="font-semibold"> um acompanhamento semanal rigoroso e monitoramento
            recorrente da composição corporal por bioimpedância </span>, possibilitando ajustes
            contínuos no protocolo e promovendo a preservação da massa muscular durante
            todo o processo.
          </p>
          <p className="pb-2 font-manrope text-[13px] lg:text-[14px] xl:text-[15px] text-gray-600 text-center">
            Administramos nutrientes injetáveis cuidadosamente selecionados, conduzindo
            o tratamento para restaurar o equilíbrio metabólico, aumentar os níveis de
            energia e saciedade — fatores essenciais para acelerar e sustentar a perda
            de peso.
          </p>
          <p className="pb-2 font-manrope text-[13px] lg:text-[14px] xl:text-[15px] text-gray-600 text-center">
            Quando indicados, podem ser incorporados ao protocolo medicamentos como
           <span className="font-semibold"> Tirzepatida e Semaglutida. </span>
          </p>
        </div>
      </div>

  
    <div className="bg-black relative py-12 lg:py-0">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-transparent pointer-events-none z-0"></div>
      
      
      <div className="lg:hidden relative z-10 flex flex-col items-center px-6">
        <div className="w-full max-w-md text-center mb-8">
          <h2 className="text-gray-50 pb-4 pt-4 font-manrope text-xs">POR QUE ESCOLHER</h2>
          <h2 className="text-[#D3AF37] pb-6 font-marcellus text-2xl font-semibold">O PROGRAMA BLUE HEALTH?</h2>
          <p className="text-gray-50 pb-4 text-justify font-manrope text-[14px]">O acompanhamento semanal é um dos grandes diferenciais do nosso programa. Com o monitoramento contínuo da nossa equipe, você desenvolve uma sensação constante de responsabilidade e comprometimento com os resultados. Entre os pacientes que passam pelo programa, a opinião é unânime: o fator decisivo para o sucesso está justamente nesse acompanhamento próximo, estratégico e personalizado.</p>
          <p className="text-gray-50 text-justify font-manrope text-[14px]">O Programa Blue Health é fundamentado no respeito à individualidade de cada paciente. Mesmo com metas ousadas de emagrecimento em curto prazo, desenvolvemos estratégias seguras e sustentáveis, garantindo que todos os resultados sejam alcançados.</p>
        </div>
        <div className="w-full flex justify-center">
          <img src={Logo} alt="Logo Blue Zone" className="h-48 w-auto" />
        </div>
      </div>

    
      <div className="hidden lg:flex relative z-10 items-center justify-center">
        <div className="w-full max-w-[420px] lg:ml-36 xl:ml-32 2xl:ml-48">
          <h2 className="text-gray-50 pb-4 pt-10 font-manrope text-xs">POR QUE ESCOLHER</h2>
          <h2 className="text-[#D3AF37] pb-8 font-marcellus text-2xl xl:text-3xl font-semibold">O PROGRAMA BLUE HEALTH?</h2>
          <p className="text-gray-50 pb-4 text-justify font-manrope text-[14px] xl:text-[15px]">O acompanhamento semanal é um dos grandes diferenciais do nosso programa. Com o monitoramento contínuo da nossa equipe, você desenvolve uma sensação constante de responsabilidade e comprometimento com os resultados. Entre os pacientes que passam pelo programa, a opinião é unânime: o fator decisivo para o sucesso está justamente nesse acompanhamento próximo, estratégico e personalizado.</p>
          <p className="text-gray-50 text-justify font-manrope text-[14px] xl:text-[15px] pb-20">O Programa Blue Health é fundamentado no respeito à individualidade de cada paciente. Mesmo com metas ousadas de emagrecimento em curto prazo, desenvolvemos estratégias seguras e sustentáveis, garantindo que todos os resultados sejam alcançados.</p>
        </div>
        <div className="flex-1 flex justify-center lg:justify-start">
          <img src={Logo} alt="Logo Blue Zone" className="h-72 lg:h-80 xl:h-96 w-auto lg:ml-52 xl:ml-32" />
        </div>
      </div>
    </div>

   
    <div className="py-12 lg:py-16 xl:py-20">
      <h2 className="text-center text-2xl lg:text-3xl xl:text-4xl font-marcellus text-[#D3AF37] pb-6 lg:pb-8 font-semibold">
        RESULTADOS COMPROVADOS
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 xl:gap-12 px-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12">
          <img src="" alt="" className="w-full max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] h-auto" />
          <img src="" alt="" className="w-full max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] h-auto" />
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12">
          <img src="" alt="" className="w-full max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] h-auto" />
          <img src="" alt="" className="w-full max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] h-auto" />
        </div>
      </div>
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

      <Footer />
    </div>
  );
}

export default Emagrecimento;