import React from 'react';
import ServiceCard from './serviceCard';


function ServicesSection() {
  const services = [
    {
      title: "Emagrecimento Saudável",
      description: "Conheça o Programa Blue Health+ de Emagrecimento, um método diferenciado que transforma a vida de centenas de pessoas todos os meses. Muito além da perda de peso, promovemos saúde, qualidade de vida e autoconfiança."
    },
    {
      title: "Reposição Hormonal",
      description: "Indicada para homens com baixos níveis de testosterona, hormônio da vitalidade. O tratamento melhora os sintomas de cansaço, baixa libido, disfunção erétil, dificuldade para emagrecer e ganhar massa muscular, entre outros."
    },
    {
      title: "Hipertrofia Muscular e Alta Performance",
      description: "Elaboração de um plano personalizado às suas necessidades, visando melhoria do condicionamento físico, aumento da força e massa muscular. O programa inclui orientações sobre exercícios, alimentação e correção de distúrbios hormonais."
    },
    {
      title: "Implantes Hormonais",
      description: "Implantes subcutâneos liberam hormônios como testosterona e estrogênio de forma contínua, corrigindo déficits hormonais e aliviando sintomas como cansaço, queda de libido, dificuldade para emagrecer e ganho de gordura. Indicados também para condições como menopausa, endometriose, sangramento uterino excessivo e lipedema."
    },
     {
      title: "Menopausa",
      description: "Focado em melhorar a qualidade de vida das mulheres durante a menopausa, nosso tratamento tem como objetivo aliviar sintomas frequentemente incômodos, como ondas de calor, instabilidade emocional, fadiga, insônia, baixa libido, suores noturnos, ressecamento vaginal, entre outros. Além disso, esse cuidado contribui para reduzir o risco de doenças cardiovasculares e osteoporose, condições que podem impactar a saúde e a expectativa de vida."
    },
    {
      title: "Terapias Injetáveis",
      description: "O tratamento envolve a administração direta, por via intramuscular ou intravenosa, de vitaminas, minerais, aminoácidos, antioxidantes e outros ativos, indicados de acordo com suas necessidades específicas. Essas vias permitem uma reposição de nutrientes mais rápida e eficaz em comparação à administração oral, acelerando a melhora dos sintomas e promovendo resultados mais imediatos."
    },
     {
      title: "Bioimpedância",
      description: "Exame realizado para avaliar a composição corporal, fornecendo informações essenciais como o percentual de massa magra e gordura, além de outras análises detalhadas para um monitoramento preciso do progresso do tratamento."
    },
     {
      title: "Nutricionista",
      description: "Elaboração de um plano alimentar personalizado por nossa Nutricionista Ana Paula, alinhado aos seus objetivos de saúde, estética e bem-estar geral. Nossa abordagem busca ampliar o conhecimento dos pacientes sobre nutrição, capacitando-os a fazer escolhas conscientes em suas refeições e a manter uma dieta equilibrada e rica em nutrientes."
    },
     {
      title: "Estética Corporal e Facial",
      description: "Procedimentos que promovem harmonia, rejuvenescimento, firmeza e confiança, auxiliando na recuperação de sua autoestima. Oferecemos protocolos avançados e eficazes em estética, com foco na Harmonização Corporal e Facial. Nosso compromisso é proporcionar a você uma experiência transformadora, para que se sinta mais confiante e plenamente satisfeita com sua aparência."
    }
  ];

  return (
    <div className="bg-neutral-200 py-20 px-4">
  <div className="text-center max-w-7xl mx-auto">
    <h2 className="font-manrope pt-10 pb-4">Tratamentos encontrados</h2>
    <h3 className="font-marcellus font-semibold pb-4">Na Blue Zone Clinic</h3>
    <p className="font-manrope pb-10">Unimos conforto às mais avançadas tecnologias médicas para refletir nosso compromisso com o seu cuidado integral.</p>

    <div className="grid grid-cols-1 md:grid-cols-[repeat(3,minmax(350px,1fr))] gap-8">

      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon || null}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  </div>
</div>

  );
}

export default ServicesSection;