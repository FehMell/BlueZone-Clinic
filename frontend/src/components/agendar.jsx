function Agendar() {
  return (
    <div className="text-center pt-12 relative w-full overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400/15 via-purple-500/10 to-blue-400/15 transform -rotate-6 opacity-40"></div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[90px]"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-[90px]"></div>
      
      <div className="relative z-10">
        <h2 className="uppercase pb-4 font-marcellus text-3xl font-semibold text-[#D3AF37]">Agende sua Consulta</h2>
        <p className="pb-6 font-manrope text-white text-sm">
          {" "}
          Não adie a sua saúde, pequenos cuidados hoje fazem toda a diferença
          amanhã.
        </p>

        <div className="pb-12">
          <a
            href="https://wa.me/5511945197405?text=Olá!%20Quero%20marcar%20uma%20consulta%20na%20Blue%20Zone."
            target="_blank"
            rel="noreferrer"
          >
            <div className="inline-block border-2 border-[#D3AF37] rounded-sm hover:scale-110 transform transition-transform duration-300 px-1 py-1">
              <button className="font-marcellus bg-[#D3AF37] text-black px-6 lg:px-7 xl:px-8 font-semibold py-2 lg:py-2 hover:bg-[#B38A4B] text-sm lg:text-base xl:text-base rounded-sm">
                Quero mudar de vida
              </button>
            </div>
          </a>
          <p className="uppercase text-xs pt-6 text-white font-manrope">
            Atendimento em <span className="text-[#D3AF37] font-semibold">São Paulo</span> e também via <span className="text-[#D3AF37] font-semibold">Teleconsulta</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Agendar;