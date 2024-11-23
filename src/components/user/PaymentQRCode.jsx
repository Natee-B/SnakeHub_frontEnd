  import React, { useContext, useEffect, useState } from "react";
  import QRCode from "react-qr-code";
  import useOrderStore from "../../store/orderStore";
  import useAuthStore from "../../store/authStore";
  import { toast } from "react-toastify";

  const PaymentQRCode = ({ paymentLink, el }) => {
    const addOrder = useOrderStore((state) => state.addOrder);
    const token = useAuthStore((state) => state.token);
    // const addNewOrder = useOrderStore((state)=>state.addNewOrder)
    const [previewUrl, setPreviewUrl] = useState(null);
    const [form,setForm] = useState({
      snakeId: el.id,
      // quantity: 1 , ยังไม่ได้ใช้ รอมีตะกร้า แต่น่าจะไม่มี XD
      total: el.price,
      paymentMethod: "QRCode",
      img: null
    });

    const uploadImage = async (event) => {
      const file = event.target.files[0];
      setForm({ ...form, img: file });
      const preview = URL.createObjectURL(file);
      console.log('preview', preview)
      setPreviewUrl(preview);
      console.log('previewUrl', previewUrl)
    };
    

    const hdlBuyClick = () => {
      const formData = new FormData();
      formData.append("snakeId", form.snakeId);
      formData.append("total", form.total);
      formData.append("paymentMethod", form.paymentMethod);
      if (form.img) {
        formData.append("img", form.img);
      }
      addOrder(formData, token);
      // addNewOrder();
      // localStorage.setItem("notice", "yes");
      toast.success("ขอบคุณสำหรับการสั่งซื้อ คำสั่งซื้อรอการตรวจสอบ");
      setPreviewUrl(null);
      setTimeout(() => {
        window.location.href = "/user/orderUser"; // ปรับเส้นทางตามที่คุณต้องการ
      }, 7000); // ปรับเวลาที่ต้องการให้รอก่อนที่จะพากลับ
    };

    return (
      <div className="flex flex-col items-center mt-6 gap-10">
        <div className="flex gap-10">
          <div className="flex flex-col items-center gap-10 ">
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold">Payment Confirmation</p>
              <p className="text-2xl font-bold">QR Code</p>
            </div>
            <QRCode value={paymentLink} size={256} />
          </div>

          <label htmlFor="img" className="flex flex-col text-xl gap-4">
            <div className="flex justify-center">กรุณาแนบหลักฐานการชำระเงิน</div>

            <input
              type="file"
              className="border rounded-lg w-80"
              name="img"
              id="img"
              onChange={(e) => uploadImage(e)}
            />
            <div className="flex justify-center">
              {previewUrl && (
                <img
                  src={previewUrl}
                  alt="preview"
                  className="w-[265px] h-[265px] object-contain"
                />
              )}
            </div>
          </label>
        </div>

        <div>
          <button
            className={`${
              previewUrl
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            } text-white font-bold py-2 px-4 rounded`}
            onClick={() => hdlBuyClick()}
            disabled={!previewUrl}
          >
            {previewUrl
              ? "กรุณากดยืนยันการสั่งซื้อ"
              : "อัพโหลด หลักฐานการชำระเงิน"}
          </button>
        </div>
      </div>
    );
  };

  export default PaymentQRCode;
