import React, { useEffect } from "react";
import Slider from "react-slick";
import CardSpecies from "../components/user/CardSpecies";
import CardRecommend from "../components/user/CardRecommend";
import useCategoryStore from "../store/categoryStore";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import snakeMain from "../pic/8366706_optimized.jpg";
import snakeBlog from "../pic/closeup-head-dendrelaphis-formosus-snake-dendrelaphis-formosus-snake-cloesup_optimized.jpg";


export default function Home() {
  const CategoryList = useCategoryStore((state) => state.CategoryList);
  const getCategory = useCategoryStore((state) => state.getCategory);
  const getAllSnake = useCategoryStore((state) => state.getAllSnake);
  const CategoryAllSnake = useCategoryStore((state) => state.CategoryAllSnake);

  useEffect(() => {
    getCategory();
    getAllSnake();
  }, []);

  const recommendSnake = CategoryAllSnake?.AllSnake?.filter(
    (el) => el.recommend === true
  );

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust number of visible slides
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-20">
      <div className="relative w-[100%] h-[500px] overflow-hidden">
        <img
          src={snakeMain}
          alt="Snake Main"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 top-[10%] flex items-center justify-center text-white text-8xl font-extrabold">
        To Every Snake Lover
        </div>
      </div>
    <div className="flex">
      <h1 className="text-3xl font-semibold w-full text-center py-10 bg-stone-300">
        Introducing New Snake Breeds for 2024 Don't Miss Out on These Must-Have
        Varieties!
      </h1>
    </div>

      {/* Carousel for CardRecommend */}
      <Slider {...settings} className="flex items-center h-[550px] ">
        {recommendSnake?.map((el, index) => (
          <div key={index}>
            <CardRecommend el={el} />
          </div>
        ))}
      </Slider>

      <Link to={"/blog"}>
        <div className="flex w-full bg-stone-300">
          <div className="w-[50%] flex flex-col justify-center gap-5 pl-10 pr-5 text-black">
            <p className="text-[80px] font-extrabold">
              Which Snake Is Right for You?
            </p>
            <p className="text-4xl">A Guide to Popular Snakes for Beginners</p>
            <p>
              Each snake species has its own unique needs and behaviors. Some
              are great for first-time snake owners, while others require more
              detailed care. Learn about popular species like the Ball Python
              and Corn Snake to find out which snake is the best fit for you.
            </p>
            <p className="text-end font-semibold text-xl text-blue-400">Learn more about Blog</p>
          </div>

          <div className="w-[50%] flex justify-center object-cover pl-5 ">
            <img src={snakeBlog} alt="SnakeBlog" />
          </div>
        </div>
      </Link>

      <div className="w-full text-center mb-10">
        <p className="mb-4 text-3xl font-bold">Browse Snake Species</p>

        <div className="w-full gap-10 px-2">
          <div className="flex gap-4">
            {CategoryList?.category?.map((el, index) => (
              <div
                key={index}
                className="relative h-[400px] rounded-xl bg-yellow-500 transition-all duration-500 ease-in-out flex-1 hover:flex-[3] font-bold cursor-pointer pointer overflow-hidden"
              >
                <CardSpecies CategoryDataProp={el} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
