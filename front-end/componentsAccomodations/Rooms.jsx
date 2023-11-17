// pages/rooms.js
"use client";

import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import layout from "@/libs/class";
import Link from "next/link";
import { FaAirbnb } from "react-icons/fa";

const Rooms = () => {
  useEffect(() => {
    // Initialize the slider
    const slider = new Slider(".slick-slider", {
      // Add any settings you need
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    // Optionally, you can use slick methods on the slider variable if needed

    // Ensure cleanup when the component is unmounted
    return () => {
      // You can add cleanup logic here if necessary
    };
  }, []);

  const rooms = [
    {
      name: "Siamês - Suíte 1",
      description:
        "Quarto espaçoso com vista para o jardim. Um ótimo lugar para relaxar e aproveitar a natureza.",
      images: ["q2f1.jpeg", "q2f2.jpeg", "q2f3.jpeg", "q2f4.jpeg"],
      link: "https://www.airbnb.com.br/rooms/47118702?source_impression_id=p3_1700100745_LjseJi2ckHG2mOQa",
    },
    {
      name: "Angorá - Suíte 2",
      description:
        "Suíte no piso térreo super aconchegante e confortável. Para aqueles que gostam de estar perto da piscina. ",
      images: ["q1f1.jpeg", "q1f2.jpeg", "q1f3.jpeg", "q1f4.jpeg"],
      link: "https://www.airbnb.com.br/rooms/538939990207815494?source_impression_id=p3_1700100745_Ys%2Bl5%2F0mTXTwaBwM",
    },
    {
      name: "Persa - Suíte 3",
      description:
        "Bela suíte no piso superior, com uma vista para o jardim. Perfeito para uma escapada relaxante.",
      images: ["q3f1.jpeg", "q3f2.jpeg", "q3f3.jpeg", "q3f4.jpeg"],
      link: "https://www.airbnb.com.br/rooms/47119503?source_impression_id=p3_1700100745_tOJuxk9O4iSUbxVg",
    },
    {
      name: "Sphynx - Suíte 4",
      description:
        "Suíte no piso superior com vista para a piscina. Ideal para quem gosta de acordar com tranquilidade.",
      images: ["q4f1.jpeg", "q4f2.jpeg", "q4f3.jpeg", "q4f4.jpeg"],
      link: "https://www.airbnb.com.br/rooms/47138570?source_impression_id=p3_1700100745_tTvseG%2B61PAiGvC8",
    },
    // Add more rooms as needed
  ];

  return (
    <div className={`${layout}`}>
      <h2 className="text-5xl font-bold mb-3 text-center text-[#324b50]">
        Conheça Nossas Acomodações
      </h2>
      <p className="text-center text-lg text-[#324b50] mb-6 lg:text-xl">
        Escolha sua suíte favorita e tenha os melhores momentos na Pousada 7
        Vidas.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="bg-[#324b50]/60 text-white rounded-t-lg overflow-hidden shadow-lg"
          >
            <Slider className="slick-slider">
              {room.images.map((image, imageIndex) => (
                <div key={imageIndex}>
                  <img
                    src={image}
                    alt={`Room ${room.name} - ${imageIndex + 1}`}
                    className="w-full h-60 object-cover contrast-50 hover:contrast-75 transition duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </Slider>
            <div className="p-4 text-[#EAE7D6]">
              <h3 className="text-3xl font-bold mb-2">{room.name}</h3>
              <p className="mb-4 text-xl">{room.description}</p>

              <Link
                href={room.link || "#"}
                target="_blank"
                className="bg-[#EAE7D6] text-[#324b50] font-bold hover:scale-110  inline-flex transition duration-300 text-lg items-center py-2 px-2 shadow border border-[#324b50] shadow-[#eae7d6] gap-1"
              >
                Reserve Já
                <FaAirbnb className="text-xl mb-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
