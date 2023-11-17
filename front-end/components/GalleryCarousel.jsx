"use client";

import React from "react";
import layout from "@/libs/class";
import MasonryGallery from "./MasonryGallery";
import { useState } from "react";

export default function GalleryCarousel() {
  const [showMore, setShowMore] = useState("Mostrar Mais");
  const [hiddenClass, setHiddenClass] = useState(
    `${layout} h-[23rem] overflow-hidden md:h-auto md:overflow-visible relative`
  );

  function handleShowMore(e) {
    if (showMore === "Mostrar Mais") {
      setHiddenClass(`${layout} relative`);
      setShowMore("Mostrar Menos");
    } else {
      setHiddenClass(
        `${layout} relative h-[23rem] overflow-clip md:h-auto md:overflow-visible`
      );
      setShowMore("Mostrar Mais");
    }
  }

  return (
    <section className={hiddenClass}>
      <div className="text-center text-[#324b50]">
        <h2 className="text-5xl lg:text-6xl mb-3 font-semibold ">Galeria</h2>
        <p className="mb-5 text-xl lg:text-3xl">
          Sinta a beleza e a tranquilidade da nossa pousada e vizinhança.{" "}
        </p>
      </div>
      <MasonryGallery />
      <div
        className="absolute bottom-10 left-[38%]
       flex justify-center items-center"
      >
        <button
          className="border text-[#4A6D73] border-[#4A6D73] font-bold px-2 py-1 bg-white backdrop-blur-xl bg-opacity-30 shadow-md hover:scale-105 transition duration-500 sm:hidden text-md rounded"
          onClick={handleShowMore}
        >
          {showMore}
        </button>
      </div>
    </section>
  );
}
