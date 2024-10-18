import React from "react";
import { Link } from "react-router-dom";

export default function MainNav() {
  return (
    <div className="flex px-8 py-4 h-12 w-full items-center bg-slate-400"> 

      <div className="flex justify-between w-full">
        
        <div>
        <h1>
            <Link to={"/"}> LOGO </Link>
          </h1>
        </div>

        <div className=" flex gap-4 ">
          <h1>
            <Link to={"/"}> HOME</Link>
          </h1>
          <h1>
            <Link to={"/blog"}> BLOG</Link>
          </h1>
          <h1>
            <Link to={"/category"}> CATEGORY</Link>
          </h1>
          <h1>
            <Link to={"/about"}> ABOUT</Link>
          </h1>
          <h1>
            <Link to={"/contactUs"}> CONTACT US</Link>
          </h1>
        </div>

        <div className="flex gap-4 ">
          <h1>
            <Link to={"/login"}> LOGIN</Link>
          </h1>
        </div>

      </div>
      
    </div>
  );
}
