import Link from "next/link";
import React from "react";
import DrawerNav from "./DrawerNav";
import Image from "next/image";
import logo from "../public/logoSemFundo2.png";

export default function Navbar() {
  return (
    <nav className="border-b-2 border-[#4a6d73] w-full">
      <div className="h-[84px] flex items-center justify-between  md:px-24 px-10">
        <Image src={logo} className="w-auto h-[76px] " alt="logo" />
        <h2 className="hidden lg:block text-2xl font-semibold tracking-widest text-[#4A6D73]  cursor-pointer hover:tracking-wide duration-500">
          POUSADA 7 VIDAS
        </h2>
        <ul className="hidden md:flex gap-6 text-2xl text-[#4A6D73] antialiased">
          <Link
            href="/"
            className="transition duration-500 hover:-translate-y-2 hover:scale-105 hover:font-semibold"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="transition duration-500 hover:-translate-y-2 hover:scale-105 hover:font-semibold"
          >
            Sobre
          </Link>
          <Link
            href="/accommodations"
            className="transition duration-500 hover:-translate-y-2 hover:scale-105 hover:font-semibold"
          >
            Acomodações
          </Link>
          <Link
            href="/about/#contact"
            className="transition duration-500 hover:-translate-y-2 hover:scale-105 hover:font-semibold"
          >
            Contato
          </Link>
        </ul>
        <div className="block md:hidden">
          <DrawerNav />
        </div>
      </div>
    </nav>
  );
}
