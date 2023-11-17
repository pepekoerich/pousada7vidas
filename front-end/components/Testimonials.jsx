import React from "react";
import layout from "../libs/class";
import CarouselTestimonial from "./CarouselTestimonial";
import Image from "next/image";
import logo from "../public/logoSemFundo2.png";

export default function Testimonials() {
  return (
    <section className={`${layout}`}>
        <div className="flex justify-center mb-4 lg:mb-8">
            <Image src={logo} className="h-28 w-auto lg:h-44" alt="logo"/>
        </div>
      <CarouselTestimonial />
    </section>
  );
}
