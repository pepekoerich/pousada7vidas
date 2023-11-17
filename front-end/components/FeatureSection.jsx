import Image from "next/image";
import React from "react";
import foto29 from "../public/foto29.jpg";

export default function FeatureSection() {
  return (
    <section className="px-5 lg:px-10 xl:px-20 mt-16 lg:mt-28">
      <div className="flex flex-col lg:flex-row items-center gap-6 text-[#324b50]">
        <h2 className="lg:w-1/2 text-4xl  lg:text-5xl">
          Desfrute de um prazer incomparável na <b>Pousada 7 Vidas</b>
        </h2>
        <p className="text-xl lg:text-2xl leading-tight hyphens-auto lg:w-1/2">
          Descubra um mundo de relaxamento e renovação em nosso espaço.
          Delicie-se com opções gastronômicas deliciosas elaboradas por nossas
          anfitriãs. Participe de emocionantes atividades recreativas que
          proporcionarão memórias inesquecíveis.
        </p>
      </div>
      <div>
        <Image
          src={foto29}
          alt="ibiraquera"
          priority
          width={9999}
          height={9999}
          className="object-cover rounded shadow-xl h-[188px] w-full contrast-50 mt-8 lg:h-[530px]"
        />
      </div>
    </section>
  );
}
