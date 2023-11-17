import React from "react";
import layout from "@/libs/class";
import { FaAddressCard, FaEnvelope, FaPhone } from "react-icons/fa";
import Link from "next/link";
export default function ContactAbout() {
  return (
    <section
      className={`${layout} flex flex-col gap-10 text-[#324b50] lg:flex-row`} id="contact"
    >
      <div>
        <h2 className="text-4xl lg:text-6xl mt-4 font-bold">
          Entre em Contato
        </h2>
        <p className="text-xl lg:text-2xl hyphens-auto mt-3 lg:w-3/4">
          Estamos aqui para responder qualquer dúvida que você tenha. Entre em
          contato hoje!
        </p>
      </div>
      <div>
        <div className="flex text-xl gap-4 items-center lg:gap-6 lg:text-3xl mb-2">
          <FaEnvelope className="" />
          <p className="font-bold mt-1">Email</p>
        </div>
        <Link
          href={"mailto:pedro_koerich@hotmail.com"}
          className="underline text-xl lg:text-2xl"
        >
          pousada7vidas@gmail.com
        </Link>
        <div className="flex text-xl gap-4 items-center lg:gap-6 lg:text-3xl mt-5 mb-2">
          <FaPhone />
          <h3 className="font-bold mt-1">Telefone</h3>
        </div>
        <Link href={""} className="underline text-xl lg:text-2xl">
          +55 48 99987-0064
        </Link>
      </div>
    </section>
  );
}
