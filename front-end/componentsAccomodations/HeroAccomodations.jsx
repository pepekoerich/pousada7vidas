import React from "react";
import Image from "next/image";
import ButtonsCTA from "@/components/ButtonsCTA";

export default function HeroAccomodations() {
  return (
    <header className="relative">
      <Image
        src={
          "https://images.unsplash.com/photo-1594071841071-f67c0249a7a6?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        priority={true}
        width={9999}
        height={9999}
        className="h-[600px] w-full object-cover contrast-50"
        alt="hero"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#EAE7D6]/90 lg:to-transparent to-[#EAE7D6]/10 "></div>
      <div className="absolute inset-0 flex items-center justify-center lg:justify-start lg:mx-10 mx-10">
        <div className="text-[#324b50]">
          <h1 className="text-6xl font-bold">Descubra Sua Estadia</h1>
          <p className="mt-2 text-xl font-semibold tracking-wider ">
            Experimente o verdadeiro conforto na
            Pousada 7 Vidas.
          </p>
          <div className="gap-5 flex mt-10">
            <ButtonsCTA  />
          </div>
        </div>
      </div>
    </header>
  );
}
