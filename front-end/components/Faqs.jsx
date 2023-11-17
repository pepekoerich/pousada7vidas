import React from "react";
import layout from "@/libs/class";
import ButtonsCTA from "./ButtonsCTA";

export default function Faqs() {
  const questions = [
    "Qual o valor da diária?",
    "Qual o horário do check-in?",
    "Pets são permitidos?",
    "Qual a política de cancelamento?",
    "Tem estacionamento?",
  ];

  const answers = [
    "O valor da diária depende da época do ano e do tipo de acomodação. Você encontrará mais informações na aba de acomodações.",
    "O check-in é a partir das 14h e o check-out até às 12h.",
    "Sim, pets são permitidos. Porém, é necessário informar no momento da reserva.",
    "A política de cancelamento varia de acordo com a época do ano. Você encontrará mais informações na aba de acomodações.",
    "Sim, temos estacionamento gratuito.",
  ];

  return (
    <section className={`${layout}`}>
      <div className="flex flex-col lg:flex-row lg:gap-6">
        <div className="flex flex-col lg:gap-4 gap-2">
          <h2 className="text-4xl lg:text-6xl font-semibold mb-1 text-[#324b50] ">
            Perguntas Frequentes
          </h2>
          <p className="text-[#324b50] text-lg lg:text-2xl mb-4 hyphens-auto lg:hyphens-none lg:w-2/3 ">
            Encontre respostas para perguntas frequentes que irão ajudar no
            planejamento de sua estadia na Pousada 7 Vidas.
          </p>
          <div className="flex gap-6 mb-4">
            <ButtonsCTA />
          </div>
        </div>

        <div className="divide-y divide-neutral-200 mt-3 lg:mt-0 border-b border-[#324b50] lg:w-full ">
          {questions.map((question, index) => (
            <div className="py-3 px-3 border-[#324b50]" key={index}>
              <details className="group ">
                <summary className="font-bold text-lg text-[#324b50] flex justify-between items-center cursor-pointer lg:text-3xl">
                  <span>{question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-[#324b50] mt-3 lg:text-2xl">
                  {answers[index]}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
