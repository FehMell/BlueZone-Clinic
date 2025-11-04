import Local from "../images/localblue.png";
import Logo from "../images/logobluezonee.webp";
import Thiago from "../images/thiagoSentado.webp";
import Desfoque from "../images/desfoque.png";
import WhatsAppButton from "../components/whatsappButton";
import VideoBlueZone from "../images/SobreBlueZone.mp4";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from "react-icons/ri";
import { LuAsterisk } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import Hipertrofia from "../images/Hipertrofia.png";
import Hipertrofia2 from "../images/Hipertrofia2.png";
import Emagrecimento from "../images/Emagrecimento.png";
import Agendar from "../components/agendar";

function Sobre() {
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
              Longevidade Saudável
            </h1>

            <h2 className="uppercase pb-2 font-marcellus text-base lg:text-xl xl:text-2xl font-semibold text-[#D3AF37]">
              Um espaço dedicado a promover não apenas qualidade de vida no
              presente, mas também saúde e bem-estar a longo prazo.
            </h2>

            <p className="pb-4 lg:pb-2 font-manrope text-gray-700 text-sm lg:text-[15px] xl:text-[16px] leading-relaxed">
              Inspirações para uma longevidade saudável podem ser encontradas
              nas práticas dos moradores das{" "}
              <span className="text-red-900 font-semibold"> “Blue Zones” </span>{" "}
              — regiões do mundo com a{" "}
              <span className="text-red-900 font-semibold">
                {" "}
                maior concentração de centenários{" "}
              </span>
              , pessoas que vivem acima dos 100 anos.
            </p>

            <p className="pb-8 lg:pb-10 font-manrope text-gray-700 text-sm lg:text-[15px] xl:text-[16px] leading-relaxed">
              Essas práticas inspiraram a escolha do nome da clínica e nosso
              propósito é compartilhar essas ideias com todos os nossos
              pacientes,{" "}
              <span className="text-red-900 font-semibold">
                {" "}
                promovendo um estilo de vida saudável{" "}
              </span>
              , que englobe alimentação equilibrada, atividade física regular,
              conexões sociais significativas e outros fatores essenciais para
              uma vida longa e plena.
            </p>
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
          <div className="absolute inset-0 z-30 flex items-end justify-center lg:justify-end lg:pr-8 xl:pr-16">
            <img
              src={Thiago}
              alt="Dr. Thiago"
              className="
                                      object-contain max-w-full max-h-full
                                      w-auto h-auto lg:w-[90%] xl:w-[95%] 2xl:w-[90%]
                                      transition-transform duration-1000 ease-in-out hover:-translate-y-1
                                      z-30
                                    "
            />
          </div>
        </div>
      </div>

      
      
<div className="relative bg-black text-center py-12 lg:py-16 overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400/15 via-purple-500/10 to-blue-400/15 transform -rotate-6 opacity-40"></div>
  <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[90px]"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-[90px]"></div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/5 rounded-full blur-[100px]"></div>
        
  <h2 className="font-manrope pb-3 lg:pb-4 text-xs lg:text-sm text-gray-300 font-semibold">
    Do Agendamento ao Acompanhamento
  </h2>
  <h2 className="uppercase font-marcellus font-semibold pb-3 lg:pb-4 text-xl lg:text-3xl text-[#D3AF37]">
    Na Blue Zone Clinic
  </h2>
  <p className="font-manrope lg:pb-8 text-white text-xs lg:text-sm max-w-2xl mx-auto px-4">
    Entenda como funciona nossa consulta e como cuidamos do seu bem-estar.
  </p>

  <div className="flex flex-col lg:flex-row items-start gap-24 pt-12">
    <div className="lg:w-2/5 w-full flex justify-center lg:justify-end">
      <div className="w-full max-w-[400px]">
        <video
          className="w-full h-auto max-h-[600px] rounded-lg shadow-md"
          controls
        >
          <source src={VideoBlueZone} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        <div className="flex items-center justify-center gap-2 pt-4 lg:pt-6 group cursor-pointer relative">
          <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/10 blur-md rounded-full transition-all duration-300"></div>
          <div className="bg-amber-500 rounded-full p-2 relative z-10 transition-transform duration-300 group-hover:scale-110 hover:bg-white">
            <a
              href="https://www.instagram.com/bluezonesp/"
              aria-label="Instagram @bluezonesp"
            >
              <FaInstagram
                size={20}
                className="text-white hover:text-amber-500"
              />
            </a>
          </div>
          <a
            href="https://www.instagram.com/bluezonesp/"
            target="_blank"
            aria-label="Instagram @bluezonesp"
          >
            <p className="text-gray-300 text-base lg:text-[18px] relative z-10 transition-all duration-300 group-hover:text-gray-100">
              @bluezonesp
            </p>
          </a>
        </div>
      </div>
    </div>

          <div className="lg:w-2/5 w-full flex flex-col gap-4 text-justify">
            <h3 className="text-lg font-semibold flex items-center gap-2 font-marcellus text-gray-100">
              {" "}
              <RiNumber1 className="text-[#D3AF37]" />
              Realização de Exames Laboratoriais antes da consulta
            </h3>
            <p className="font-manrope text-sm text-gray-300">
              Emitimos um guia de exames para que você possa realizá-los no
              laboratório de sua preferência. Assim, você leva os resultados já
              na primeira consulta, permitindo que possamos iniciar o seu
              tratamento imediatamente.
            </p>

            <h3 className="text-lg font-semibold flex items-center gap-2 font-marcellus text-gray-100">
              {" "}
              <RiNumber2 className="text-[#D3AF37]" /> Avaliação da composição
              corporal com Bioimpedância
            </h3>
            <p className="font-manrope text-sm text-gray-300">
              No dia da consulta, realizamos uma avaliação de bioimpedância para
              entender melhor os seus índices corporais. Isso nos ajuda a
              acompanhar sua evolução de forma precisa ao longo do tratamento.
            </p>

            <h3 className="text-lg font-semibold flex items-center gap-2 font-marcellus text-gray-100">
              {" "}
              <RiNumber3 className="text-[#D3AF37]" /> Consulta Médica
              Personalizada
            </h3>
            <p className="font-manrope text-sm text-gray-300">
              Durante a consulta de 1 hora, o Dr. Thiago oferece todo o suporte
              e atenção necessários, garantindo que cada detalhe do seu caso
              seja considerado.
            </p>

            <h3 className="text-lg font-semibold flex items-center gap-2 font-marcellus text-gray-100">
              {" "}
              <RiNumber4 className="text-[#D3AF37]" /> Plano de Tratamento
              Individualizado
            </h3>
            <p className="font-manrope text-sm text-gray-300">
              Junto com você, o Dr. Thiago avalia o melhor caminho a ser seguido
              e cria um plano de tratamento totalmente personalizado, pensado
              para oferecer os melhores resultados.
            </p>

            <h3 className="text-lg font-semibold flex items-center gap-2 font-marcellus text-gray-100">
              {" "}
              <RiNumber5 className="text-[#D3AF37]" /> Consulta com
              Nutricionista - Online
            </h3>
            <p className="font-manrope text-sm text-gray-300">
              Logo após a consulta médica, agendamos sua sessão com a
              nutricionista, que irá elaborar uma dieta personalizada de acordo
              com suas necessidades e objetivos.
            </p>

            <h3 className="text-lg font-semibold flex items-center font-marcellus text-gray-100 gap-2 ">
              <LuAsterisk className="text-[#D3AF37]" size={24} /> Acompanhamento
              de 2 meses
            </h3>
            <p className="font-manrope text-sm text-gray-300 pb-12">
              Todo o acompanhamento dura 2 meses, período em que as prescrições
              e receitas médicas do Dr. Thiago permanecem válidas. Durante esse
              tempo, qualquer dúvida ou suporte que você precisar pode ser
              solicitado diretamente pelo WhatsApp da clínica, sem precisar se
              deslocar até o consultório.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        
        <h2 className="font-marcellus font-semibold lg:pb-8 text-xl lg:text-3xl text-[#D3AF37] text-center uppercase pt-2">
          Resultados Comprovados
        </h2>
        <div className="flex flex-wrap justify-center gap-10 pb-24 pt-12">
          <div className="flex flex-col items-center text-center w-[350px]">
            <img
              src={Hipertrofia}
              alt="Resultado de um paciente após tratamento de hipertrofia"
              className="w-[350px] h-[350px] object-cover rounded-lg shadow-lg"
            />
            <p className="pt-3 text-sm text-white">
              Resultado final de um paciente após o tratamento de hipertrofia.
            </p>
          </div>

          <div className="flex flex-col items-center text-center w-[350px]">
            <img
              src={Hipertrofia2}
              alt="Resultado de um paciente após tratamento de hipertrofia"
              className="w-[350px] h-[350px] object-cover rounded-lg shadow-lg"
            />
            <p className="pt-3 text-sm text-white">
              Resultado final de um paciente após o tratamento de hipertrofia.
            </p>
          </div>

          <div className="flex flex-col items-center text-center w-[350px]">
            <img
              src={Emagrecimento}
              alt="Resultado de um paciente após tratamento de emagrecimento"
              className="w-[350px] h-[350px] object-cover rounded-lg shadow-lg"
            />
            <p className="pt-3 text-sm text-white">
              Resultado final de um paciente após o tratamento de emagrecimento.
            </p>
          </div>
        </div>
        <Agendar />
        <WhatsAppButton />
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
    </div>
  );
}

export default Sobre;