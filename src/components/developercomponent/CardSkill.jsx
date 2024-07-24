import React from "react";

function CardSkill({ img, title }) {
  return (
    <div className="border-[3px] w-40 h-40 sm:w-52 sm:h-52 overflow-hidden flex justify-center rounded-lg flex-col items-center gap-2 dark:bg-gray-800 bg-[#F7F7F7]">
      <img
        src={img}
        className="w-24 h-24 sm:w-40 sm:h-40 object-cover"
        alt={title}
      />
      <p className="dark:text-gray-100 text-center">{title}</p>
    </div>
  );
}

export default CardSkill;
