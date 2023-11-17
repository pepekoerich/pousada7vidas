import React from "react";
import foto28 from "../public/foto28.jpg";
import Image from "next/image";
import ButtonsCTA from "./ButtonsCTA";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center px-5 lg:px-10 xl:px-20 gap-6 w-full mt-10 lg:mt-24">
      <div className="lg:w-1/2 lg:mt-0 border w-full text-[#324b50]">
        <h1 className="xl:text-6xl text-3xl">
          Experiencie a serenidade na <b className="italic">Pousada 7 Vidas</b>
        </h1>
        <p className="text-xl mt-4 lg:text-3xl italic">
          Desfrute de uma escapada tranquila cercada pela natureza.
        </p>
        <div className="flex gap-6 mt-8">
          <ButtonsCTA />
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <Image
          src={foto28}
          priority
          width={9999}
          height={9999}
          className="object-cover contrast-50 h-[340px] lg:h-[640px] shadow-xl rounded "
          alt="ibiraquera"
        />
      </div>
    </section>
  );
}
