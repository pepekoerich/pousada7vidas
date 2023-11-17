import Link from "next/link";
import React from "react";

export default function PricingCard() {
  const firstAmmenities = [
    "Wifi Grátis",
    "Suporte ao Hóspede",
    "Limpeza de Quarto",
    "Acesso à Piscina",
    "Cozinha",
  ];
  const secondAmmenities = [
    "Estacionamento",
    "Acesso à Lagoa",
    "Frigobar",
    "Varanda Privada",
    "Serviços de Concierge",
  ];

  return (
    <div className="p-4 border border-[#324b50] mt-10 lg:mt-0 text-[#324b50]">
      <div className="flex justify-between items-center border-b-2 border-[#324b50] pb-5">
        <div>
          <h3 className="lg:text-4xl font-semibold text-3xl">Pernoite</h3>
          <p className="lg:text-xl text-lg">Começando em R$375/noite</p>
        </div>
        <div>
          <h2 className="lg:text-5xl font-bold text-3xl">R$375/noite</h2>
        </div>
      </div>
      <p className="text-xl mb-3 font-semibold mt-4">Está incluído:</p>
      <div className="flex flex-col lg:flex-row lg:justify-between border-b-2 border-[#324b50] pb-5">
        <ul>
          {firstAmmenities.map((item, index) => (
            <li className="flex gap-6 items-center" key={index}>
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-[#324b50]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span className="text-xl font-semibold mt-1">{item}</span>
            </li>
          ))}
        </ul>
        <ul>
          {secondAmmenities.map((item, index) => (
            <li className="flex gap-6 items-center" key={index}>
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-[#324b50]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span className="text-xl font-semibold mt-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex justify-center">
        <Link href={"https://api.whatsapp.com/send?phone=5548999870064"} target="_blank">
          <button className=" text-xl lg:text-2xl px-2 py-1 bg-[#324b50] text-[#EAE7D6] font-semibold tracking-widest hover:scale-105 shadow-lg transition duration-500">
            Reservar
          </button>
        </Link>
      </div>
    </div>
  );
}
