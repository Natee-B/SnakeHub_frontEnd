import React from "react";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import PaymentQRCode from "./PaymentQRCode";



export default function AddOrder({ modal, setModal ,el}) {

console.log('el AddOrder Comp', el)

  const paymentLink = "https://promptpay.io/0815859997.png";

  return (
    <div className="z-30 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none ">
      <div className="relative m-auto w-[calc(100%-50rem)] h-[calc(100%-2.5rem)]">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-full    z-30  ">

          <div className="bg-gray-800 flex justify-between p-2">
            <div>Order</div>
            <button onClick={() => setModal(!modal)}>
              <HighlightOffTwoToneIcon />
            </button>
          </div>

          <div className="bg-gray-800 h-[calc(100vh-150px)] border p-2 overflow-y-auto">
              <PaymentQRCode paymentLink={paymentLink} el={el} />
          </div>

        </div>
        {/*end content*/}
        <div className="opacity-25 fixed inset-0 z-20 bg-black"></div>
      </div>
    </div>
  );
}
