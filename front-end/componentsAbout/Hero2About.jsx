import React from "react";
import layout from "@/libs/class";
import Image from "next/image";

export default function Hero2About() {
  return (
    <section
      className={`${layout} flex flex-col lg:flex-row lg:items-center w-full`}
    >
      <div className="lg:w-1/2 text-[#324b50] mb-2">
        <h1 className="text-3xl lg:text-6xl">
          Aproveite a Tranquilidade na <b>Pousada 7 Vidas</b>
        </h1>
        <p className="text-lg mt-4 xl:text-2xl hyphens-auto ">
          A Pousada 7 Vidas é mais do que apenas uma pousada. É um lugar onde
          você pode escapar da agitação do dia a dia e encontrar verdadeira paz
          e tranquilidade. Com uma história rica e o compromisso de proporcionar
          a melhor experiência de férias, buscamos criar um refúgio onde você
          possa relaxar, recarregar e rejuvenescer.
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-end">
        <Image
          src={
            "https://instagram.ffln1-1.fna.fbcdn.net/v/t51.2885-15/274365890_482795886672371_8332257716771086030_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.ffln1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=bEacAz_jzMgAX8MhVYI&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjc3OTIzOTc0NzA5MTM0OTUzMg%3D%3D.2-ccb7-5&oh=00_AfBVek0ESIGGD9w_Hp2UXRpuPn3YZ6wSQIAOv_HeissGnw&oe=655B6A10&_nc_sid=b41fef"
          }
          priority
          width={640}
          height={340}
          className="object-cover contrast-75 h-[340px] lg:h-[640px] shadow-xl rounded "
          alt="ibiraquera"
        />
      </div>
    </section>
  );
}
