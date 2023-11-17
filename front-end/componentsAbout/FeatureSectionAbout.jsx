import React from "react";
import layout from "@/libs/class";
import Image from "next/image";
import superhost from "../public/superhost.png";
import logo from "../public/logoSemFundo2.png";
import { FaMedal } from "react-icons/fa";

export default function FeatureSectionAbout() {
  return (
    <section
      className={`${layout} flex flex-col-reverse gap-6 text-[#324b50] lg:flex-row`}
    >
      <div className="flex flex-col items-center gap-6 lg:gap-10 lg:w-3/4 lg:flex-row">
        <div className="flex flex-col justify-center items-center lg:w-1/2">
          <Image src={logo} alt="logo" className="h-[105px] w-auto" />
          <b className="text-2xl lg:text-4xl">Pousada 7 Vidas</b>
          <div className="flex place-items-center gap-2">
            <FaMedal className="text-xl" />
            <p className="text-xl tracking-widest lg:text-3xl mt-1">
              SuperHost
            </p>
          </div>
        </div>
        <div className="text-2xl lg:text-4xl lg:w-1/2">
          <p className="lg:mb-5">
            <b>32</b> Avaliações
          </p>
          <p className="lg:mb-5">
            <b>5</b> Estrelas
          </p>
          <p className="lg">
            <b>3</b> Anos Hospedando
          </p>
        </div>
      </div>

      <div className="lg:w-3/4">
        <h2 className="text-5xl lg:text-6xl mb-3">Orgulho de ser SuperHost!</h2>
        <p className="text-xl hyphens-auto lg:text-2xl">
          Com muito trabalho conseguimos nosso selo de superhost pelo terceiro
          ano seguido. Trazendo mais segurança para você na hora da reserva!
        </p>
      </div>
    </section>
  );
}
