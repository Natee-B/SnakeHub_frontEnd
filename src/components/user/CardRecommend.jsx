import React from "react";
import { Link } from "react-router-dom";

export default function CardRecommend({ el }) {
  return (
    <Link to={`/category/snakeDetail/${el.id}`} state={{ el }}>
    <div className="p-2">
      <img className="h-80" src="https://www.picsum.photos/500" alt="CardRecommend" />
      <div >
        <div>
          <p>{el.id}</p>
          {/* <p>{el.morph}</p> */}
        </div>
        {/* <p>{el.year}</p> */}
      </div>
    </div>
    </Link>
  );
}

