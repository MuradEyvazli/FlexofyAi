import React from "react";
import Image from "next/image";

const MemberOrNot = () => {
  const items = [
    {
      title: "FIRST TIMER",
      title2:"--Read-More--",
      image: "/assets/gym.jpg",
      link: "/first-timer",
    },
    {
      title: "MEMBERSHIPS",
      title2:"--Read-More--",
      image: "/assets/gym2.jpeg",
      link: "/memberships",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="group relative block overflow-hidden rounded-lg shadow-lg"
          >
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h2 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {item.title}
            </h2>
            <h2 className="absolute inset-0 flex justify-self-end items-end text-sm font-sans text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 mr-3 mb-2">
              {item.title2}
            </h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MemberOrNot;
