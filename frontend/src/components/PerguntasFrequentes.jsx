import React from 'react';
import WhatsappButton from './whatsappButton';

function PerguntasFrequentes() {
    return (
        <>
            {/* Seção FAQ */}
            <div className="bg-gray-50 py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-marcellus text-3xl lg:text-4xl font-bold text-[#463D34] mb-4">
                            Perguntas Frequentes
                        </h2>
                        <p className="font-manrope text-gray-700 text-sm lg:text-base">
                            Esclareça suas principais dúvidas
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-sm shadow-sm">
                            <h3 className="font-marcellus text-xl font-semibold text-[#463D34] mb-3">
                                Como agendar uma consulta?
                            </h3>
                            <p className="font-manrope text-gray-600 text-sm leading-relaxed text-justify">
                                Você pode agendar através do nosso WhatsApp, e responderemos o mais breve possível para confirmar sua consulta.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-sm shadow-sm">
                            <h3 className="font-marcellus text-xl font-semibold text-[#463D34] mb-3">
                                Quais formas de pagamento são aceitas?
                            </h3>
                            <p className="font-manrope text-gray-600 text-sm leading-relaxed">
                                Aceitamos dinheiro, cartão de débito, crédito (até 2x) e PIX. 
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-sm shadow-sm">
                            <h3 className="font-marcellus text-xl font-semibold text-[#463D34] mb-3">
                                Atende plano de saúde?
                            </h3>
                            <p className="font-manrope text-gray-600 text-sm leading-relaxed text-justify">
                                Nosso atendimento na <span className="font-semibold"> Blue Zone Clinic </span> é exclusivamente <span className="font-semibold"> particular. </span>
Oferecemos até duas notas fiscais por paciente, referentes as consultas médica e da nutricionista, para que possa solicitar reembolso junto ao seu convênio.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-sm shadow-sm">
                            <h3 className="font-marcellus text-xl font-semibold text-[#463D34] mb-3">
                                Qual o tempo de duração da consulta?
                            </h3>
                            <p className="font-manrope text-gray-600 text-sm leading-relaxed">
                                A consulta inicial tem duração média de 60 minutos, onde fazemos uma 
                                avaliação completa e personalizada de cada paciente.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-10 p-4">
                        <div className="border-2 border-[#D3AF37] rounded-sm hover:scale-110 transform transition-transform duration-300 px-1 py-1  flex justify-center items-center">
                            <a
                                href="/sobre"
                                className="font-marcellus inline-flex items-center justify-center gap-2 bg-[#D3AF37] text-white font-semibold px-6 py-3 rounded-sm shadow-sm hover:bg-[#B38A4B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#463D34]/50 text-sm lg:text-base xl:text-base"
                                aria-label="Ir para página Sobre para mais informações"
                            >
                                Para mais informações
                            </a>
                        </div>
                    </div>
                </div>
                    <div className="max-w-4xl mx-auto px-4 mt-6">
                        <WhatsappButton />
                    </div>
            </div>
        </>
    );
}

export default PerguntasFrequentes;
