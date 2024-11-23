import React from "react";
import { Link } from "react-router-dom";

export default function MapBlog({ el }) {
  const maxLength = 700
  const truncatedText = el.content.length > maxLength ? el.content.slice(0, maxLength) + '...' : el.content; //กำหนดความยาวตัวอักษรแล้วเติม ... ไว้ข้างหลัง

  return (
    <Link to={`/blog/${el.id}blogId`} state={{ el }}>
      <div className=" flex h-80 overflow-hidden ">
        <div className="flex justify-center h-80 w-1/3">
          <img src="https://www.picsum.photos/500/300" alt="Snake Main" />
        </div>

        <div className="w-2/3 p-4 bg-[#E6E0DB] flex flex-col gap-8 ">
          {/* <h1 className="text-8xl">{el.title}</h1> */}
          <div className="text-6xl h-[120px] " dangerouslySetInnerHTML={{ __html: `${el.title}` }} />
          <div dangerouslySetInnerHTML={{ __html: `${truncatedText}` }} />
          <p>Created : {new Date(el.createdAt).toLocaleDateString("th-TH")}</p>
        </div>
      </div>
    </Link>
  );
}
