import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoSettingsSharp, IoLogOut } from "react-icons/io5";
import {
  MdDashboard,
  MdManageAccounts,
  MdOutlineCategory,
  MdOutlineProductionQuantityLimits,
  MdOutlineChat,
  MdOutlineEgg,
  MdHome
} from "react-icons/md";
import useOrderStore from "../../store/orderStore";
import useAuthStore from "../../store/authStore";



const classLink =
  "flex items-center hover:bg-neutral-700 hover:scale-105 hover:duration-200 active:bg-green-400 rounded-sm px-3 py-2 gap-2";

const AdminSidebar = () => {
  // const [hasNewOrder, setHasNewOrder] = useState(false);
  const hasNewOrder = useOrderStore((state) => state.hasNewOrder);
  const clearNewOrder = useOrderStore((state) => state.clearNewOrder);
  const getOrder = useOrderStore((state) => state.getOrder); // สมมติว่ามี store หรือ fetch orders
  const order = useOrderStore((state) => state.order);
  const token = useAuthStore((state) => state.token);
  const checkNotice = localStorage.getItem('notice');
  const[reRender,setReRender] = useState(false)

  // console.log('checkNotice', checkNotice)
  // console.log(hasNewOrder)

  // useEffect(() => {
  //   // console.log("Fetching orders with token: ", token)
  //   // if (token) {
  //   //   getOrder(token); // โหลด orders เมื่อ component mount
  //   // }
  //   if(checkNotice === "yes"){
  //     setReRender(true)
  //   }else{
  //     setReRender(false)
  //   }
  // }, [[hasNewOrder,reRender,checkNotice]]);
  useEffect(() => {
    const checkStorage = () => {
      const notice = localStorage.getItem("notice");
      if (notice === "yes") {
        setReRender(true);
      } else {
        setReRender(false);
      }
    };
  
    checkStorage(); // ตรวจสอบค่าตอน mount
    window.addEventListener("storage", checkStorage); // ฟังการเปลี่ยนแปลง
  
    return () => {
      window.removeEventListener("storage", checkStorage); // ลบ listener ตอน unmount
    };
  }, [order]);

  // console.log('reRender', reRender)

  // useEffect(() => {
  //   console.log("order: ", order)
  //   if (order && order.length > 0) {
  //     setHasNewOrder(true); // ถ้ามี order จะเปลี่ยนเป็น true
  //   } else {
  //     setHasNewOrder(false);
  //   }
  // }, [order]);

  // const orderLinkClass = hasNewOrder ? `${classLink} text-red-700` : classLink;

  return (
    <div className="bg-neutral-900 w-60 p-4 flex flex-col text-white">
      {/* Profile */}
      <div className="flex flex-col items-center gap-2 py-4">
        <FaUser fontSize={48} />
        <span className="text-lg ">Profile</span>
      </div>

      {/* Menu Link */}
      <div className="flex-1 py-4">
        <Link className={classLink} to={"/admin"}>
          <span className="text-xl">
            <MdDashboard />
          </span>
          Dashboard
        </Link>

        <Link className={classLink} to="/admin/manage">
          <span className="text-xl">
            <MdManageAccounts />
          </span>
          Manage User
        </Link>

        <Link className={classLink} to= "/admin/orderAdmin" onClick={clearNewOrder}>
        {checkNotice === "yes" ? (
          <span className="text-xl bg-red-700 rounded-full p-[2px] ">
            <MdOutlineProductionQuantityLimits />
          </span>
        ) : (
          <span className="text-xl ">
            <MdOutlineProductionQuantityLimits />
          </span>
        )}
        Order
        </Link>

        <Link className={classLink} to="/admin/productAdmin">
          <span className="text-xl">
            <MdOutlineEgg />
          </span>
          Product
        </Link>

        <Link className={classLink} to="/admin/categoryAdmin">
          <span className="text-xl">
            <MdOutlineCategory />
          </span>
          Category
        </Link>

        <Link className={classLink} to="/admin/blogAdmin">
          <span className="text-xl">
            <MdOutlineChat />
          </span>
          Blog
        </Link>
      </div>

      {/* Bottom Menu */}
      <div>
      <Link className={classLink} to="/">
          <span className="text-xl">
            <MdHome />
          </span>
          Home
        </Link>

        <Link className={classLink} to={"#"}>
          <span className="text-xl">
            <IoLogOut />
          </span>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
