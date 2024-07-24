import React from "react";
import { Link } from "react-router-dom";

function CardBlog({img,title,desc,id}) {
  return (
    <Link to={`/developer/blog/${id}`} className="w-[400px] rounded-lg overflow-hidden bg-white dark:bg-gray-800 dark:text-gray-100 shadow-xl group">
      <div className="overflow-hidden">
      <img
        src={img}
        className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:filter group-hover:grayscale"
        alt="Blog"
      />
      </div>
      <div className="flex flex-col gap-10 py-10 px-5 border-primary-developer-template border-[10px] border-b-0 border-l-0 border-r-0 ">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p>
          {desc}
        </p>
      </div>
    </Link>
  );
}

export default CardBlog;
