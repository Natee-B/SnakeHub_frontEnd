import React, { useEffect, useState } from "react";
import Dropdown from "../components/user/dropdown";
import CardRecommend from "../components/user/CardRecommend";
import useCategoryStore from "../store/categoryStore";

export default function Category() {
  const getCategory = useCategoryStore((state) => state.getCategory);
  const CategoryList = useCategoryStore((state) => state.CategoryList);
  const CategoryMorphList = useCategoryStore(
    (state) => state.CategoryMorphList
  );
  const getAllSnake = useCategoryStore((state) => state.getAllSnake);
  useEffect(() => {
    getAllSnake();
    getCategory();
  }, []);

  return (
    <div className="flex flex-col items-center h-fit">
      <div className="border flex w-4/5 text- items-center h-[300px] bg-slate-100 rounded-3xl my-10 p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
        <div className="flex flex-col gap-10 text-center w-7/12">
          <p className="text-7xl">Embrace the Enigma of Snakes</p>
          {/* <p className='text-7xl'>of Snakes</p> */}
          <p className="text-xl">Explore Their Unique Beauty and Complexity</p>
        </div>

        <div className=" border rounded-full h-[300px] overflow-hidden ">
          <div>
            <img src="https://www.picsum.photos/500" alt="CardRecommend" />
          </div>
        </div>
      </div>

      <div className="flex">

        <div className="flex flex-col w-[50%] border px-4">
          {CategoryList?.category?.map((el, index) => (
            <Dropdown key={index} el={el} />
          ))}
        </div>

        <div>
          <div className="border w-full flex flex-wrap justify-evenly">

            {CategoryMorphList?.selectCategory?.map((el, index) => (
                <CardRecommend key={index} el={el} />
            ))}
            
          </div>
        </div>

      </div>
    </div>
  );
}
