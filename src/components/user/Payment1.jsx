import React, { useState } from "react";
import AddOrder from "./AddOrder";
import useAuthStore from "../../store/authStore";
import useMemberStore from "../../store/memberStore";

export default function SnakeOrderForm({ SnakeDataProp }) {
  const updateMember = useMemberStore((state)=>state.updateMember)
  const user = useAuthStore((state)=>state.user)
  const token = useAuthStore((state)=>state.token)
  const [modal,setModal] = useState(false)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    city: "",
    address1: "",
    address2: "",
    zipCode: "",
    phoneNumber: "",
    saveInfo: false,
  });

console.log('user', user)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      saveInfo: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(!modal)
    updateMember(user.id,form,token)
  };

  // Calculate birthdate (assuming SnakeDataProp.birthDate is a valid date string)
  const birthdate = SnakeDataProp.birthDate
    ? new Date(SnakeDataProp.birthDate).toLocaleDateString("th-TH")
    : "-";

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg">
      <h2 className="text-2xl font-bold mb-6">รายละเอียดการสั่งซื้อ</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">รายละเอียดสินค้า</h3>
        <dir className="flex gap-5 justify-center border p-4 rounded-xl">
          <div className=" h-[300px] w-[400px] overflow-hidden rounded">
            <img  className="h-full w-full object-cover" src={SnakeDataProp.img} alt="Snake Main" />
          </div>
          <div className="flex border border-gray-600 p-4 rounded gap-12 text-xl">
            <div className="flex flex-col justify-around">
              <p>ID :</p>
              <p>Price :</p>
              <p>species :</p>
              <p>เพศ :</p>
              <p>วันเกิด :</p>
              <p>อายุ :</p>
              <p>อาหาร :</p>
            </div>
            <div className="flex flex-col justify-around">
              <p>{SnakeDataProp.id || "-"}</p>
              <p>{SnakeDataProp.price || "-"}</p>
              <p>{SnakeDataProp.category?.speciesName || "-"}</p>
              <p>{SnakeDataProp.gender || "-"}</p>
              <p>{birthdate}</p>
              <p>{SnakeDataProp.age || "-"}</p>
              <p>{SnakeDataProp.feedingType || "-"}</p>
            </div>
          </div>
        </dir>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-xl font-semibold mb-4">ข้อมูลผู้ซื้อ</h3>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-1">
              ชื่อ
            </label>
            <input
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-1">
              นามสกุล
            </label>
            <input
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>
        </div>

        <div>
          <label htmlFor="city" className="block mb-1">
            เมือง
          </label>
          <input
            id="city"
            name="city"
            value={form.city}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-700 rounded"
          />
        </div>

        <div>
          <label htmlFor="address1" className="block mb-1">
            ที่อยู่
          </label>
          <input
            id="address1"
            name="address1"
            value={form.address1}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-700 rounded"
          />
        </div>

        <div>
          <label htmlFor="address2" className="block mb-1">
            ที่อยู่ บรรทัดที่ 2
          </label>
          <input
            id="address2"
            name="address2"
            value={form.address2}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-700 rounded"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="zipCode" className="block mb-1">
              รหัสไปรษณีย์
            </label>
            <input
              id="zipCode"
              name="zipCode"
              value={form.zipCode}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block mb-1">
              หมายเลขโทรศัพท์
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="saveInfo"
            checked={form.saveInfo}
            onChange={handleCheckboxChange}
            className="rounded bg-gray-700"
          />
          <label htmlFor="saveInfo" className="text-sm">
            บันทึกข้อมูลการชำระเงินของฉันเพื่อให้ง่ายต่อการชำระเงินครั้งต่อไป
          </label>
        </div>

        <div>
          <p className="text-sm mb-2">
            คุณจะมีโอกาสตรวจสอบสิ่งซื้อก่อนทำการสั่งซื้อ
          </p>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            ดำเนินการต่อ
          </button>
        </div>
      </form>
        {modal && (
            <AddOrder modal={modal} setModal={setModal} el={SnakeDataProp} />
          )}
    </div>
  );
}
