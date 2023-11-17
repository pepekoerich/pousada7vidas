import React from "react";
import ButtonsCTA from "./ButtonsCTA";
import layout from "@/libs/class";

export default function CTASection() {



  return (
    <section className={`${layout} flex flex-col lg:flex-row lg:items-center lg:justify-between`}>
      <div className="text-[#324b50]">
        <h2 className="text-4xl font-semibold lg:text-6xl ">Faça sua reserva hoje!</h2>
        <p className="text-xl mt-2 lg:text-2xl">Experiencie a tranquilidade e o relaxamento na Pousada 7 Vidas </p>
      </div>
      <div className="mt-4 lg:mt-0 flex gap-6">
        <ButtonsCTA title2="Saiba Mais" link2="/about" />
      </div>
    </section>
  );
}
``