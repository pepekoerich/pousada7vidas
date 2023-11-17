import Image from "next/image";
import React from "react";

export default function MasonryGallery() {
  const links = [
    "https://images.unsplash.com/photo-1587150106556-9817efae4094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWJpcmFxdWVyYXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1572318469860-10fe9ad6d3d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2Fyb3BhYmF8ZW58MHx8MHx8fDA%3D",

    "https://instagram.ffln1-1.fna.fbcdn.net/v/t51.2885-15/297422546_3259627377618695_5608116615024258665_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.ffln1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=CffHCGjf46wAX_81EOY&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjg5Njk3MDQwNzc0ODg2NDg5NQ%3D%3D.2-ccb7-5&oh=00_AfBXZxDBxJSD6fhPXUBbSm6ghp0EdDBX_ya4oyxL4EHogQ&oe=6557FAF4&_nc_sid=b41fef",
    "https://images.unsplash.com/photo-1597204715625-40d2e3270373?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGltYml0dWJhJTIwJTIwJTIwc2N8ZW58MHx8MHx8fDA%3D",
    "https://instagram.ffln1-1.fna.fbcdn.net/v/t51.2885-15/300442064_438247908325531_7796894370576433131_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDgxMC5zZHIifQ&_nc_ht=instagram.ffln1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=VyEWX7_jkcIAX96QLHv&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjkxMTE4MDkwMDEyMjQ0MDg2Mg%3D%3D.2-ccb7-5&oh=00_AfDO2l4vcWb_pA5uEUMzLjvgOwcqHCT-WMYb-qoYYkZveg&oe=6558B981&_nc_sid=b41fef",
    "https://images.unsplash.com/photo-1594144963615-88974b527b42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGltYml0dWJhJTIwJTIwJTIwc2N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1681748650482-e82e5629a2d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2Fyb3BhYmF8ZW58MHx8MHx8fDA%3D",
    "https://instagram.ffln1-1.fna.fbcdn.net/v/t51.2885-15/273381824_143342018132890_9104935297348482193_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.ffln1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=pUVIUIzpvDcAX_cPOjX&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjc2NjE3MjAzOTIxNzc2NzE1OA%3D%3D.2-ccb7-5&oh=00_AfA3rsRkIkoL1ufCvV2nycmjLFn1v17nLXs8skEP6zhe-Q&oe=65588F2C&_nc_sid=b41fef",
    "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsZWlhJTIwZnJhbmNhfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1525771495425-cebc4a01302d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhbGVpYSUyMGZyYW5jYXxlbnwwfHwwfHx8MA%3D%3D",
    "https://trilhasemsc.com.br/public/img/trilhas/descricao/trilha-da-praia-vermelha-rosa-norte/parte-inicial-da-trilha.jpg",
  ];

  return (
    <div className="columns-2 gap-5 lg:gap-3 sm:columns-3 lg:columns-4 xl:columns-5 [&>img:not(:first-child)]:mt-3 lg:[&>img:not(:first-child)]:mt-3">
      {links.map((link, index) => (
        <Image
          src={link}
          alt="image"
          key={index}
          className="object-cover rounded-lg contrast-75 hover:contrast-100 transition duration-500"
          width={900000}
          height={900000}
        />
      ))}
    </div>
  );
}
