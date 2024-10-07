import React from "react";
import { Link } from "react-router-dom";

export default function MapBlog({ el }) {
  return (
    <Link to={`/blog/${el.id}blogId`}>
      <div className=" flex">
        <div className="flex justify-center h-[300px] w-1/3">
          <img src="https://www.picsum.photos/500/300" alt="Snake Main" />
        </div>

        <div className="w-2/3 p-4 bg-[#E6E0DB] flex flex-col gap-8">
          <h1 className="text-8xl">{el.title}</h1>
          <p>{el.content}</p>
        </div>
      </div>
    </Link>
  );
}
