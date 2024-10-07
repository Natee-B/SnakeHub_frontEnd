import React from "react";

export default function CardRecommend({ el }) {
  return (
    <div className="p-2">
      <img className = "h-80" src="https://www.picsum.photos/200" alt="CardRecommend" />
      <div >
        <div>
          {/* <p>{el.name}</p> */}
          {/* <p>{el.morph}</p> */}
        </div>
        {/* <p>{el.year}</p> */}
      </div>
    </div>
  );
}
