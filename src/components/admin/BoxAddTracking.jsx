import React, { useEffect, useState } from "react";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import useOrderStore from "../../store/orderStore";

const CreateBoxProduct = ({
  order,
  token,
  modal,
  setModal,
}) => {
    const updateOrder = useOrderStore((state) => state.updateOrder);
    const [form, setForm] = useState({trackingNumber: ""});

  const hdlChange = (e) => {
    const result = {[e.target.name]: e.target.value}
    setForm(result)
  };
  
const hdlAddTracking =async()=>{
    await updateOrder(order.id, form, token)
    await setModal(!modal)
}

  return (
    <div className="z-30 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none ">
      <div className="relative ">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-min   z-30  ">
          <div className="flex justify-between p-2">
            <div>CreateBox</div>
            <button onClick={() => setModal(!modal)}>
              <HighlightOffTwoToneIcon />
            </button>
          </div>

          <div className="h-min w-min border p-2">
            <div className="flex justify-center">
              <div className="flex flex-col border rounded-lg p-4 w-96 gap-2 ">

                
                <label htmlFor="trackingNumber"
                className="flex flex-col">
                <div>Tracking Number   </div>
                  <input
                    id="trackingNumber"
                    className=" border rounded-xl w-full mt-1"
                    name="trackingNumber"
                    value={form.trackingNumber}
                    rows="4"
                    cols="45"
                    onChange={(e) => hdlChange(e)}
                  />
                </label>



                <button
                  className="border p-2 rounded-xl mt-2 w-full bg-blue-100 hover:bg-blue-200"
                  onClick={() => hdlAddTracking()}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*end content*/}
        <div className="opacity-25 fixed inset-0 z-20 bg-black"></div>
      </div>
    </div>
  );
};

export default CreateBoxProduct;
