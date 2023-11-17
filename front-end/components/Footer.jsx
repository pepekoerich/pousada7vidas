import Link from "next/link";
import React from "react";
import {
  FaAirbnb,
  FaFacebook,
  FaInstagram,
  FaTripadvisor,
} from "react-icons/fa";
import logo from "../public/logoSemFundo2.png";
import layout from "@/libs/class";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={`${layout} !mt-10`}>
      <div className="flex flex-col gap-2 justify-center items-center md:flex-row md:justify-between border-b border-[#324b50] py-3">
        <div>
          <Image src={logo} alt="" className="h-20 w-auto md:h-16" />
        </div>
        <nav className="flex flex-col gap-1 items-center text-lg md:flex-row md:gap-8 md:text-2xl text-[#324b50] ">
          <Link
            href={"/"}
            className="transition duration-500 hover:-translate-y-2 hover:scale-105 hover:font-semibold"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="transition duration-500 hover:-translate-y-2 hover:scale-105 hover:font-semibold"
          >
            Sobre
          </Link>
          <Link
            href={"/accommodations"}
            className="transition duration-500 hover:-translate-y-2 hover:scale-105 hover:font-semibold"
          >
            Acomodações
          </Link>
          <Link
            href={"/about/#contact"}
            className="transition duration-500 hover:-translate-y-2 hover:scale-105 hover:font-semibold"
          >
            Contato
          </Link>
        </nav>
        <nav className="flex gap-3 text-lg md:text-2xl text-[#324b50]">
          <Link
            href={"https://www.facebook.com/pousada7vidas"}
            className="bg-[#324b50] rounded p-1 text-[#EAE7D6] hover:scale-125 transition-all duration-500 hover:bg-[#eae7d6] hover:text-[#324b50]"
          >
            <FaFacebook />
          </Link>
          <Link
            href={"https://www.airbnb.com.br/users/show/380720260"}
            className="bg-[#324b50] rounded p-1 text-[#EAE7D6] hover:scale-125 transition-all duration-500 hover:bg-[#eae7d6] hover:text-[#324b50]"
          >
            <FaAirbnb />
          </Link>
          <Link
            href={"https://www.instagram.com/pousada7vidas/"}
            className="bg-[#324b50] rounded p-1 text-[#EAE7D6] hover:scale-125 transition-all duration-500 hover:bg-[#eae7d6] hover:text-[#324b50]"
          >
            <FaInstagram />
          </Link>
          <Link
            href={
              "https://www.tripadvisor.com.br/Hotel_Review-g1192094-d23591780-Reviews-Pousada_7_Vidas-Imbituba_State_of_Santa_Catarina.html"
            }
            className="bg-[#324b50] rounded p-1 text-[#EAE7D6] hover:scale-125 transition-all duration-500 hover:bg-[#eae7d6] hover:text-[#324b50]"
          >
            <FaTripadvisor />
          </Link>
        </nav>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 py-5 md:flex-row md:justify-around md:text-lg text-[#324b50]">
        <p>Pousada 7 Vidas - Praia do Rosa, Imbituba - SC</p>
        <small>© 2023 Pousada 7 Vidas. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}
