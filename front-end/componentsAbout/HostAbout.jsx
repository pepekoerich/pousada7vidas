import React from "react";
import layout from "@/libs/class";
import Image from "next/image";

export default function HostAbout() {
  return (
    <section className={`${layout} flex flex-col lg:flex-row-reverse  w-full`}>
      <div className="lg:w-1/2 text-[#324b50]">
        <h1 className="text-3xl lg:text-6xl">
          Quem somo nós? <b>Sandra e Grasi</b>
        </h1>
        <div className="text-lg mt-4 xl:text-2xl hyphens-auto tracking-wider leading-loose">
          Somos essas duas mulheres da foto, e podemos garantir: ela muito nos
          representa! Sabe por que?! Somos amigas de longa data, fiéis
          conselheiras e parceiras para tudo. <br />{" "}
          <p className="mt-2 mb-2">
            A sensação de ter a casa lotada, cheia de amigos e familiares, de
            ver todo mundo transbordar sorrisos e muita felicidade, sempre
            aqueceu nosso coração...
          </p>{" "}
          Então por que não possibilitar que novas pessoas também desfrutem
          dessa mesma experiência? Nossa maior missão com a{" "}
          <b>POUSADA 7 VIDAS</b>, é ser ainda melhor naquilo que amamos fazer:
          receber pessoas e proporcionar vivências inesquecíveis.{" "}
          <p className="mt-2 mb-2">
            {" "}
            Juntamos toda a nossa bagagem de anos muito bem vividos para criar
            um espaço mágico e o transformamos em um abraço apertado cheio de
            amor.
          </p>{" "}
          <p className="mb-3">
            Quem já passou por aqui, sabe o quanto esse espaço já 
            proporcionou momentos inesquecíveis. E pra quem ainda não nos
            conhece, muito prazer, <b className="underline">Sandra e Grasi</b>!
            Estamos ansiosas esperando por todos vocês!
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-start">
        <Image
          src={
            "https://instagram.ffln1-1.fna.fbcdn.net/v/t39.30808-6/402202866_18000793241472525_4170989586974029070_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=instagram.ffln1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=ZHFw7HZoOVwAX_mijia&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzIzNTM3NjI1MDgyNjI3NjQxNA%3D%3D.2-ccb7-5&oh=00_AfB9SSOtUaYR2MdtaXCKnmafH1QfpVNuaz2pgu9QFK76_Q&oe=6557FED5&_nc_sid=ee9879"
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
