import { Avatar, Rating } from "@material-tailwind/react";
import React from "react";

export default function CarouselIndividual({
  comment,
  name,
  rating = 5,
  image,
}) {
  return (
    <div className="text-center px-3 lg:w-1/2 lg:mx-auto">
      <p className="mb-6 text-xl lg:text-4xl">&quot;{comment}&quot;</p>
      <Avatar src={image} alt="image" className="h-20 w-20 lg:w-36 lg:h-36" />
      <h6 variant="h6" className="mt-4 mb-4 text-xl font-bold lg:text-3xl">
        {name}
      </h6>
      <Rating value={rating} readonly />
    </div>
  );
}
