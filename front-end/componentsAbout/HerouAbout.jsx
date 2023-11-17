import React from "react";
import layout from "@/libs/class";

export default function HeroAbout() {
  return (
    <header className={`text-center text-[#324b50]  ${layout} `}>
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
        Vivencie Momentos Tranquilos <br /> e Relaxantes
      </p>
      <p className="text-lg lg:text-2xl">
        Bem-vindo à Pousada 7 Vidas, onde a serenidade se encontra com o luxo em
        um cenário deslumbrante.
      </p>
    </header>
  );
}
