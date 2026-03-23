import React from "react";
const cards = [
  {
    id: 1,
    src: "https://i.pinimg.com/1200x/e4/a9/20/e4a92033a091d32dc49071aeb1a02843.jpg",
    p: "Prime customers, that have access to the bank credit are satisfied with the current produce",
    b: "Satisfied",
    color: "bg-blue-500",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/736x/31/d7/e0/31d7e057c07a884f2cf53f820f2bf196.jpg",
    p: "Prime customers that have access to the bank credit are satisfied with the current produce",
    b: "Underserved",
    color: "bg-blue-500",
  },
  {
    id: 3,
    src: "https://i.pinimg.com/736x/4c/c4/32/4cc43278b7d723fcc8fc46e4bd199d65.jpg",
    p: "Customers who are near-prime and sub-prime segments with no access to traditional bank credit",
    b: "Underbanked",
    color: "bg-red-500",
  },
];

const RightContent = () => {
  return (
    <div className="text-black font-fira-code h-full w-full lg:w-3/5 flex flex-col md:flex-row gap-5">
      {cards.map((card) => {
        return (
          <div
            key={card.id}
            className="relative w-full md:w-[35%] h-[300px] md:h-full border-2 border-white rounded-[4rem] overflow-hidden"
          >
            <p className="font-bold absolute top-5 left-10 z-30 text-black bg-white rounded-[2rem] px-4 py-2 md:px-5 md:py-3 border-black border-2">
              {card.id}
            </p>
            <img
              src={card.src}
              alt={`card-${card.id}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <p className="text-sm md:text-lg absolute bottom-20 md:bottom-28 px-3 text-white">
              {card.p}
            </p>
            <button
              className={`absolute ${card.color} rounded-[3rem] bottom-5 md:bottom-10 left-1/2 -translate-x-1/2 md:left-14 md:translate-x-0 px-6 md:px-10 py-3 md:py-4 text-white text-sm md:text-base`}
            >
              {card.b}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RightContent;
