import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import AddOrder from "../components/user/AddOrder";

export default function CategoryDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = useAuthStore((state) => state.token);
  const { el } = location.state || {};

  console.log('el', el)

  if (!el) {
    return <div>Error: No Prop data found!</div>; // ถ้ากดผ่าน API โดยตรง ไม่กดผ่าน Link ทำให้Link ไม่ส่ง Prop el มาให้ใช้  กันไว้เฉยๆ
  }

  // const birthdate = el.birthdate ? el.birthdate.split("T")[0] : "-"; //ถ้าไม่ ternary เวลาค่า el.birthdate เป็น null จะทำให้ split เกิด Error
  // const updatedAt = el.updatedAt.split("T")[0];
  const birthdate = el.birthdate? new Date(el.birthdate).toLocaleDateString("th-TH"): "-";
  const updatedAt = new Date(el.updatedAt).toLocaleDateString("th-TH")


  const hdlClick = () => {
    if (!token) {
      navigate("/login"); // ถ้าไม่มี token จะไปที่หน้า login
    } else {
      navigate("/payment",{ state: { el,token } })
    }
  };

  return (
    <div>
      <div className="flex h-10 ml-10 items-center">
        Category/{el.category.speciesName}/{el.morph.name}
      </div>

      <div className="border flex w-screen gap-4 py-4 justify-center">
        <div className="border flex  justify-end h-min">
          <img
            className="rounded-3xl h-[570px]"
            src={el.img}
            alt="Snake Main"
          />
        </div>

        <div className="border bg-stone-200 px-6 py-3 w-[400px] h-min flex flex-col gap-2 rounded-3xl">
          <p className="text-4xl">{el.morph.name}</p>
          <div className="flex border gap-12 text-xl">
            <div className="flex flex-col gap-2">
              <p>ID :</p>
              <p>Price :</p>
              <p>species :</p>
              <p>เพศ :</p>
              <p>วันเกิด :</p>
              <p>อายุ :</p>
              <p>อาหาร :</p>
              <p>updateAt :</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>{el.id || "-"}</p>
              <p>{el.price || "-"}</p>
              <p>{el.category.speciesName || "-"}</p>
              <p>{el.gender || "-"}</p>
              <p>{birthdate}</p>
              <p>{el.age || "-"}</p>
              <p>{el.feedingType || "-"}</p>
              <p>{updatedAt}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-2xl">Description</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit explicabo est qui id quaerat cumque voluptates esse
              minus. Voluptatibus ut natus error eos. Voluptatem consectetur
              minus dolorum quos atque porro!
            </p>
          </div>
          <button
            className="border p-2 rounded-xl bg-blue-100 hover:bg-blue-200"
            onClick={hdlClick}
          >
            buy
          </button> 

        </div>
      </div>
    </div>
  );
}
