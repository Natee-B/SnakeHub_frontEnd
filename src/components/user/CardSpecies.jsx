import React from "react";

export default function CardSpecies({ el }) {
  return (
    //<div className="relative flex justify-center w-full>
    <div className="relative w-full h-full">
      <img 
      src="https://www.picsum.photos/400"
      alt="CardSpecies"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-100 scale-125"
      />
      {/* <p className="absolute font-bold text-2xl text-white top-[50%] text-center w-[100%] bg-black bg-opacity-30"> */}
      <p className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 font-bold text-2xl text-white text-center w-full bg-black bg-opacity-30 z-10">
        {el}
      </p>
    </div>
  );
}
