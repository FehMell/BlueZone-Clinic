import React from 'react';
import ServiceCard from './serviceCard';

function ServicesSection() {
  const services = [
    {
      title: "Avaliação Médica",
      description: "A avaliação é conduzida por meio de uma consulta médica detalhada, complementada por exames laboratoriais específicos, com o objetivo de identificar todas as deficiências e diagnosticar a menopausa com precisão."
    },
    {
      title: "Nutrição",
      description: "Planejamento alimentar personalizado, elaborado por nutricionista, com foco na otimização do ganho de massa muscular e na redução da gordura corporal e visceral."
    },
    {
      title: "Exercício Físico",
      description: "O programa inclui orientações sobre os exercícios mais adequados aos objetivos, promovendo o combate ao sedentarismo. Com foco em estratégias para o aumento de massa muscular, buscamos educar nossos pacientes."
    },
    {
      title: "Terapia de Reposição Hormonal",
      description: "É o tratamento recomendado para esses casos, com o objetivo de reduzir os sintomas da menopausa e restaurar a qualidade de vida do paciente."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}

export default ServicesSection;