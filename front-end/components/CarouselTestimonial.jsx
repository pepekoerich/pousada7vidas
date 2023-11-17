"use client";

import React from "react";
import { Carousel, Typography, Avatar, Rating } from "@material-tailwind/react";
import CarouselIndividual from "./CarouselIndividual";

export default function CarouselTestimonial({}) {
  return (
    <Carousel
      loop={true}
      autoplay={true}
      color="black"
      className="text-[#4a6d73] h-[370px] lg:h-[450px] w-full"
    >
      <CarouselIndividual
        image={
          "https://a0.muscache.com/im/pictures/user/37baa2e2-70a3-484d-b8f2-f07456c884bb.jpg?im_w=240"
        }
        comment={
          "O café da manhã é a parte, e vale a pena, saboroso, bem servido e feito na hora. Passamos dias tranquilos, amamos o lugar, com certeza voltaremos mais vezes!"
        }
        name={"Cristine"}
      />
      <CarouselIndividual
        image={
          "https://a0.muscache.com/im/pictures/user/89270995-1752-4944-9472-12c391a4f7b7.jpg?im_w=240"
        }
        name={"Guilherme"}
        comment={
          "Gostamos demais das instalações e principalmente do jardim cheio de vida por todos os lados… Certamente retornarei."
        }
      />
      <CarouselIndividual
        image={
          "https://a0.muscache.com/im/pictures/user/e6cb4fc1-d321-4e20-8326-b5cc0e6c3659.jpg?im_w=240"
        }
        name={"Ismael"}
        comment={
          "Nossa experiência foi além do que imaginávamos. A Sandra e a Grazi são pessoas incríveis e tornaram esses dias únicos e divertidos."
        }
      />
    </Carousel>
  );
}
