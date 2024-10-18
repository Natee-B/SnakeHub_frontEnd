import React, { useState } from "react";
import CardSpecies from "../components/user/CardSpecies";
import CardRecommend from "../components/user/CardRecommend";
import CardSlide from "../components/user/CardSlide";
import MyCarousel from "../components/user/SlideShow";

export default function Home() {
  const [cardRec, setCardRec] = useState([
    {
      id: "card1",
      name: "Ball Python",
      morph: "CG PIED",
      year: "2024",
      img: "",
    },
    { id: "card2", name: "Ball Python", morph: "Bel", year: "2023", img: "" },
    {
      id: "card3",
      name: "Boa Constrictor",
      morph: "BCC",
      year: "2024",
      img: "",
    },
    {
      id: "card4",
      name: "Boa Constrictor",
      morph: "BCi",
      year: "2023",
      img: "",
    },
    {
      id: "card5",
      name: "Boa Constrictor",
      morph: "BCi",
      year: "2024",
      img: "",
    },
  ]);

  const [cardSpc, setCardSpc] = useState([
    "ball Python",
    "Corn Snake",
    "Hognose",
    "Boa",
    "Reticulated Python",
    "White-Lipped",
  ]);

  return (
    <div className="flex flex-col items-center gap-20">
      
      <div className=" w-[100%] h-[400px] overflow-hidden">
        <img src="https://www.picsum.photos/2000" alt="Snake Main" />
      </div>

      <h1>
        Introducing New Snake Breeds for 2024 Don't Miss Out on These Must-Have
        Varieties!
      </h1>

      {/* <MyCarousel /> รอทำเสร็จ ค่อยมาสลับกับ CardRecommend */} 

      <div className="flex justify-around w-[100%]">
        {cardRec.map((el, index) => (
          <CardRecommend key={index} el={el} />
        ))}
      </div>

      <div className="flex w-full">
        <div className=" w-[50%] flex flex-col gap-10 p-5 ite">
          <p className="text-8xl font-extrabold">
            Which Snake Is Right for You?
          </p>
          <p className="text-4xl">A Guide to Popular Snakes for Beginners</p>
          <p>
            Each snake species has its own unique needs and behaviors. Some are
            great for first-time snake owners, while others require more
            detailed care. Learn about popular species like the Ball Python and
            Corn Snake to find out which snake is the best fit for you.
          </p>
        </div>

        <div className=" w-[50%] flex justify-center ">
          <img src="https://www.picsum.photos/700/500" alt="Snake Main" />
        </div>
      </div>

      {/* <div className="bg-black flex flex-wrap">
        {cardSpc.map((el, index) => (
          <CardSpecies key={index} el={el} />
          ))}
          </div> */}
      <div className="w-full text-center mb-10">
        <p className="mb-4">Browse Snake Species</p>
        <div className=" flex-col w-full bg-white gap-10">
          <div className="flex gap-4">
            {cardSpc.map((el, index) => (
              <div key={index} className="relative h-[400px] rounded-xl bg-yellow-500 transition-all duration-500 ease-in-out flex-1 hover:flex-[3] font-bold cursor-pointer pointer overflow-hidden">
                <CardSpecies el={el} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
