import React from "react";
import DrThiago from "../images/thiago1.webp";
import { CgInstagram } from "react-icons/cg";

function Sobre() {
  return (
    <div className="relative bg-black text-center py-20 px-40 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400/15 via-purple-500/10 to-blue-400/15 transform -rotate-6 opacity-40"></div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[90px]"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-[90px]"></div>

      <div className="mb-10 relative z-10">
        <h1 className="text-[#D3AF37] font-marcellus font-semibold text-4xl pb-2 relative inline-block">
          Dr. Thiago Garcia
        </h1>
        <h2 className="text-gray-300 font-marcellus font-semibold mt-2 relative">
          MÉDICO – CRM SP 217222
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gray-400/40 blur"></div>
        </h2>
      </div>

      <div className="flex items-start gap-16 justify-center relative z-10">
        <div className="flex flex-col items-center">
          <div className="h-[700px]">
            <img
              src={DrThiago}
              alt="Dr. Thiago"
              className="h-full w-auto object-cover rounded-b-full"
            />
          </div>

          <div className="flex items-center justify-center gap-2 pt-6 group cursor-pointer relative">
            <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/10 blur-md rounded-full transition-all duration-300"></div>
            <div className="bg-amber-500 rounded-full p-2 relative z-10 transition-transform duration-300 group-hover:scale-110 hover:bg-white">
              <a href="https://www.instagram.com/thiagogarciadr/"><CgInstagram size={24} className="text-white hover:text-amber-500" /></a>
            </div>
            <a href="https://www.instagram.com/thiagogarciadr/"><p className="text-gray-300 text-xl relative z-10 transition-all duration-300 group-hover:text-gray-300">
              @thiagogarciadr
            </p>
            </a>
          </div>
        </div>

        <div className="text-white max-w-md text-left relative">
          <p className="pb-6 leading-relaxed tracking-wide relative font-manrope">
            Diretor da{" "}
            <span className="font-semibold text-[#D3AF37] relative">Blue Zone Clinic</span>{" "}
            é médico referência em emagrecimento, reposição hormonal, hipertrofia e qualidade de vida. Especialização em{" "}
            <span className="font-semibold font-manrope text-[#D3AF37] relative">
              Nutrologia Esportiva e Obesidade pelo Hospital Israelita Albert Einstein
            </span>
            , possui aperfeiçoamento em sua área de atuação por meio de inúmeros cursos, congressos e extensão universitária na{" "}
            <span className="font-semibold text-[#D3AF37] relative">Harvard Medical School</span>.
          </p>

          <p className="pb-6 leading-relaxed font-manrope tracking-wide">
            Nosso compromisso vai muito além de um tratamento. Assumimos a missão de conduzir cada paciente à sua
            melhor versão, com segurança, estratégia e visão de longo prazo. Cada conduta é planejada com precisão,
            porque sabemos que não se trata apenas de emagrecer ou ganhar massa muscular — trata-se de devolver à
            pessoa o controle da própria vida.
          </p>

          <p className="font-semibold pb-2 font-manrope text-[#D3AF37] relative inline-block">
            Formação:
          </p>
          <ul className="list-disc tracking-wide pl-5 space-y-1 mt-4 font-manrope">
            <li className="leading-relaxed">
              Especialização em{" "}
              <span className="font-semibold text-[#D3AF37]">Nutrologia Esportiva</span> pelo Instituto BWS.
            </li>
            <li className="leading-relaxed">
              Especialização em{" "}
              <span className="font-semibold text-[#D3AF37]">
                Obesidade e Emagrecimento pelo Hospital Israelita Albert Einstein
              </span>
              .
            </li>
            <li className="leading-relaxed">
              Hormones in Health and Performance –{" "}
              <span className="font-semibold text-[#D3AF37]">Harvard Medical School</span>.
            </li>
            <li className="leading-relaxed">
              Membro da{" "}
              <span className="font-semibold text-[#D3AF37]">SBEMO</span> (Sociedade Brasileira de Medicina da Obesidade).
            </li>
            <li className="leading-relaxed">
              3 certificações em Implantes Hormonais – Imersão Evolution (Dr. Yuri Michele).
            </li>
            <li className="leading-relaxed">
              Certificação em Terapias Injetáveis – Constancy Educacional.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
