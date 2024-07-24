import React from "react";

function CartResume({ title, yearExp, desc }) {
  return (
    <section className="relative ml-5 md:ml-10 mb-5">
      <div className="h-[20px] w-[20px] absolute top-0 bg-white dark:bg-gray-800 z-10 -left-4 md:-left-6 rounded-full border-[5px] border-primary-developer-template"></div>
      <div className="h-full w-1 bg-primary-developer-template absolute bottom-0 -left-2 md:-left-4 rounded-lg"></div>
      <div className="font-sans w-full max-w-[500px] sm:max-w-full bg-white hover:text-gray-100 hover:outline hover:bg-primary-developer-template dark:bg-gray-700 dark:hover:bg-primary-developer-template hover:outline-1 hover:outline-gray-200 p-4 md:p-7 gap-4 md:gap-6 flex flex-col justify-start items-start rounded-lg">
        <h2 className="text-lg md:text-xl font-medium dark:text-gray-100">{title}</h2>
        <p className="text-sm md:text-base dark:text-gray-100">{yearExp}</p>
        <p className="text-xs md:text-sm dark:text-gray-300">{desc}</p>
      </div>
    </section>
  );
}

export default CartResume;
