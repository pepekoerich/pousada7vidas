import React from "react";
import layout from "@/libs/class";
import { IoCarOutline } from "react-icons/io5";
import { CiForkAndKnife } from "react-icons/ci";
import { IoPawOutline } from "react-icons/io5";
import { PiSnowflakeThin } from "react-icons/pi";
import PricingCard from "./PricingCard";
import { PiTelevisionSimple } from "react-icons/pi";

export default function Pricing() {
  const amenities = [
    {
      icon: <IoCarOutline className="h-8 w-8" />,
      title: "Estacionamento",
      description: "Estacionamento gratuito para todos os hóspedes.",
    },
    {
      icon: <CiForkAndKnife className="h-8 w-8" />,
      title: "Culinária Encantadora",
      description: "Sabores que encantam, uma experiência que cativa.",
    },
    {
      icon: <IoPawOutline className="h-8 w-8" />,
      title: "Pet Friendly",
      description: "Seu pet é bem-vindo na Pousada 7 Vidas.",
    },
    {
      icon: <PiSnowflakeThin className="h-8 w-8" />,
      title: "Ar Condicionado",
      description: "Ar condicionado em todos os quartos.",
    },
    {
      icon: <PiTelevisionSimple className="h-8 w-8" />,
      title: "TV a cabo",
      description: "TV a cabo compartilhada.",
    },
  ];

  return (
    <section className={`${layout}`}>
      <div className="lg:mb-10">
        <h2 className="text-4xl font-bold text-[#324b50] mb-2 lg:text-6xl">
          Nossos Preços
        </h2>
        <p className="text-lg text-[#324b50] lg:text-2xl">
          Aproveite uma experiência única, onde o conforto encontra a
          serenidade.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly">
        <div className="mt-10 flex flex-col gap-3">
          {amenities.map((amenity, index) => (
            <div className="flex gap-4 text-[#324b50]" key={index}>
              {amenity.icon}
              <div>
                <h3 className="text-xl font-bold lg:text-2xl">{amenity.title}</h3>
                <p className="text-lg lg:texl-xl">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/3">
          <PricingCard />
        </div>
      </div>
    </section>
  );
}
