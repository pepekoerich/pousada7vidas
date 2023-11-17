import Link from "next/link";
import React from "react";

export default function ButtonsCTA({
  title1 = "Reserve",
  title2 = "Explore",
  link1 = "https://api.whatsapp.com/send?phone=5548999870064",
  link2 = "/accomodations",
}) {
  return (
    <>
      <Link href={link1}>
        <button className="border border-[#4A6D73] bg-[#4a6d73] px-3 py-[4px] text-xl text-white hover:scale-105 transition duration-500 tracking-widest shadow-lg hover:shadow-xl h-12 w-auto">
          {title1}
        </button>
      </Link>
      <Link href={link2}>
        <button className="border bg-white/80 border-[#4A6D73] px-3 py-[4px] text-xl text-[#4A6D73] tracking-widest hover:scale-105 transition duration-500 shadow-lg hover:shadow-xl h-12">
          {title2}
        </button>
      </Link>
    </>
  );
}
