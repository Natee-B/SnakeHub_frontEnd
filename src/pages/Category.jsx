import React, { useEffect, useState } from "react";
import Dropdown from "../components/user/Dropdown";
import CardRecommend from "../components/user/CardRecommend";
import useCategoryStore from "../store/categoryStore";
import Filter from "../components/user/Filter";
import CategoryPic from "../pic/9db122a6f7dd29c2990daa13ecba6c3e-removebg-preview.png"

export default function Category() {
  // const getCategory = useCategoryStore((state) => state.getCategory); //เรียก Category
  // const getAllSnake = useCategoryStore((state) => state.getAllSnake); //เรียก Snake
  const CategoryList = useCategoryStore((state) => state.CategoryList); //ใช้ Category
  const CategoryAllSnake = useCategoryStore((state) => state.CategoryAllSnake); //ใช้ Snake
  const CategoryMorphList = useCategoryStore((state) => state.CategoryMorphList); //ใช้Morph

  const [displayedSnakes, setDisplayedSnakes] = useState(CategoryAllSnake?.AllSnake);
  const [selectedFeed, setSelectedFeed] = useState("");
  const [selectedGender , setSelectedGender ] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
 
  // useEffect(() => {
  //   getAllSnake();
  //   getCategory();  
  // }, []);

  useEffect(() => { //แสดงตาม Dropdown
    if (CategoryMorphList?.length > 0) {
      setDisplayedSnakes(CategoryMorphList);
    }
    console.log("CT ID Data", CategoryMorphList);
  }, [CategoryMorphList]);

  useEffect( () => { //ให้เริ่มต้นมา แสดงทั้งหมด
    setDisplayedSnakes(CategoryAllSnake?.AllSnake || []);
  }, []);
  
//   useEffect(() => { // Log ค่าเฉยๆ
//     console.log('displayedSnakes ปัจจุบัน :', displayedSnakes);
// }, [displayedSnakes]);

  const hdlShowAllClick = () => { //All กดเพื่อรีเซ็ตให้กลับมาแสดงทั้งหมด
    setDisplayedSnakes(CategoryAllSnake?.AllSnake || [])
    setSelectedFeed("")
    setSelectedGender("")
    setMinPrice("")
    setMaxPrice("")
  };

  return (
    <div className="flex flex-col items-center w-screen">
      <div className="border flex justify-center w-4/5 items-center h-[300px] bg-slate-100 rounded-3xl my-10 p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden ">
        <div className="flex flex-col gap-10 text-center w-7/12">
          <p className="text-7xl">Embrace the Enigma of Snakes</p>
          <p className="text-xl">Explore Their Unique Beauty and Complexity</p>
        </div>

        <div>
          <div>
            <img src={CategoryPic} alt="CategoryPic" className="w-full h-[450px] object-contain"/>
          </div>
        </div>
      </div>

      <div className="flex w-screen justify-center">
        <div className="flex flex-col px-4 w-[350px]">
        <Filter 
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender} 
        selectedFeed = {selectedFeed}
        setSelectedFeed = {setSelectedFeed}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        setDisplayedSnakes={setDisplayedSnakes}/>

          <button
            className="border p-2 rounded-xl mb-1 mt-4 w-full font-bold text-xl bg-stone-300 hover:bg-stone-400"
            onClick={() => hdlShowAllClick()}
          >
            ALL
          </button>

          {CategoryList?.category?.map((el, index) => (
            <Dropdown
              key={index}
              el={el}
              onClick={() => hdlDropdownClick(el.id, el.categoryId)}
            />
          ))}
       
        </div>
          <div className=" flex w-full">
            <div className="flex flex-wrap"> 

            {displayedSnakes?.map((el, index) => (
              <CardRecommend key={index} el={el} />
            )).sort((a, b) => a.price - b.price)}

            </div>
          </div>

      </div>
    </div>
  );
}