import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCategoryStore from "../../store/categoryStore";

export default function CardRecommend({ el }) {
  const CategoryAllSnake = useCategoryStore((state) => state.CategoryAllSnake); // ใช้
  const [sold, setSold] = useState(false);

  const soldOutIds = (CategoryAllSnake.AllSnake || [])
    .filter((item) => item.orderId !== null) // ตรวจว่า orderId จะไม่เป็น null ไม่งั้นแตก
    .map((item) => item.id);

  useEffect(() => {
    setSold(soldOutIds.includes(el.id)); // จะตั้งค่า sold เป็น true ถ้า id ตรงกัน *เป็น true ยังไง
  }, [soldOutIds, el.id]);

  return (
    <>
      {sold ? (
        <div className="relative flex justify-center p-2 h-min ">
          <div className="card card-compact bg-base-100 w-72 h-min shadow-xl transition-transform transform hover:scale-105">
            <figure>
              <img
                src={el.img}
                alt={el.morph.name}
                className="object-cover h-72 w-full"
              />
            </figure>
            <div className="p-4">
              <h2 className="card-title text-2xl font-bold">{el.morph.name}</h2>

              <div className="flex justify-between items-center">
                <p className="text-lg text-gray-600">
                  {el.category.speciesName}
                </p>
                <p className="text-sm text-gray-500">{el.gender}</p>
              </div>
              <p className="text-xl font-semibold text-green-600">
                {el.price} THB
              </p>

              <div className="card-actions justify-between">
                <p className="text-sm text-gray-500">
                  {el.description || "No description available."}
                </p>
                <button className="btn btn-primary">Detail</button>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 text-center text-5xl text-white font-bold bg-black/80 m-2 rounded-xl">
            <p className="flex justify-center items-center h-full">
              {el.order?.status === "PAID"
                ? "Sold Out"
                : "The snake is on hold"}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center p-2 h-min ">
          <div className="card card-compact bg-base-100 w-72 h-min shadow-xl transition-transform transform hover:scale-105 ">
            <figure>
              <img
                src={el.img}
                alt={el.morph.name}
                className="object-contain h-72 w-full"
              />
            </figure>
            <div className="p-4 bg-stone-300 rounded-b-xl">
              <h2 className="card-title text-2xl font-bold">{el.morph.name}</h2>

              <div className="flex justify-between items-center">
                <p className="text-lg text-gray-600">
                  {el.category.speciesName}
                </p>
                <p className="text-sm text-gray-500">{el.gender}</p>
              </div>
              <p className="text-xl font-semibold text-green-600">
                {el.price} THB
              </p>

              <div className="card-actions justify-between">
                <p className="text-sm text-gray-500">
                  {el.description || "No description available."}
                </p>
                <Link to={`/category/snakeDetail/${el.id}`} state={{ el }}>
                  <button className="btn btn-primary">Detail</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

