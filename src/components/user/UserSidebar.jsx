// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaChartPie, FaUser } from "react-icons/fa";
// import { IoSettingsSharp, IoLogOut } from "react-icons/io5";
// import {
//   MdManageAccounts,
//   MdOutlineProductionQuantityLimits,
// } from "react-icons/md";
// import useAuthStore from "../../store/authStore";

// const user = useAuthStore((state)=>state.user)

// const classLink =
//   "flex items-center hover:bg-neutral-700 hover:scale-105 hover:duration-200 active:bg-green-400 rounded-sm px-3 py-2 gap-2";

// const UserSidebar = () => {
//   const user = useAuthStore((state)=>state.user)

//   const hdlLogout =()=>{
//     user
//   }

//   return (
//     <div className="bg-neutral-900 w-60 p-4 flex flex-col text-white">
//       {/* Profile */}
//       <div className="flex flex-col items-center gap-2 py-4">
//         <FaUser fontSize={48} />
//         <span className="text-lg ">Profile</span>
//         <span className="text-lg ">{user.username}</span>
//       </div>

//       {/* Menu Link */}
//       <div className="flex-1 py-4">
//         <Link className={classLink} to="/user">
//           <span className="text-xl">
//             <MdManageAccounts />
//           </span>
//           Manage User
//         </Link>

//         <Link className={classLink} to= "/user/orderUser">
//           <span className="text-xl ">
//             <MdOutlineProductionQuantityLimits />
//           </span>
//         My Order
//         </Link>
//       </div>

//       {/* Bottom Menu */}
//       <div>
//         <Link className={classLink} to={"#"}>
//           <span className="text-xl">
//             <IoSettingsSharp />
//           </span>
//           Setting
//         </Link>

//         <Link className={classLink} to={"/"}>
//         onClick={hdlLogout}
//           <span className="text-xl">
//             <IoLogOut />
//           </span>
//           Logout
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default UserSidebar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoSettingsSharp, IoLogOut } from "react-icons/io5";
import {
  MdManageAccounts,
  MdOutlineProductionQuantityLimits,
  MdLockPerson,
  MdHome,
} from "react-icons/md";
import useAuthStore from "../../store/authStore";

const UserSidebar = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout); // Function for logging out
  const navigate = useNavigate();

  const hdlLogout = () => {
    logout(); // ลบ token หรือข้อมูล user ออก
    navigate("/"); // เปลี่ยนเส้นทางไปยังหน้าแรก
  };

  const classLink =
    "flex items-center hover:bg-neutral-700 hover:scale-105 hover:duration-200 active:bg-green-400 rounded-sm px-3 py-2 gap-2";

  return (
    <div className="bg-neutral-900 w-60 p-4 flex flex-col text-white">
      {/* Profile */}
      <div className="flex flex-col items-center gap-2 py-4">
        <FaUser fontSize={48} />
        <span className="text-lg ">Profile</span>
        <span className="text-lg ">{user.username}</span>
      </div>

      {/* Menu Link */}
      <div className="flex-1 py-4">
        <Link className={classLink} to="/user">
          <span className="text-xl">
            <MdManageAccounts />
          </span>
          Manage User
        </Link>

        <Link className={classLink} to="/user/orderUser">
          <span className="text-xl ">
            <MdOutlineProductionQuantityLimits />
          </span>
          My Order
        </Link>

        {user.role === "ADMIN" && (
          <Link className={classLink} to="/admin">
            <span className="text-xl ">
              <MdLockPerson />
            </span>
            ADMIN
          </Link>
        )}
      </div>

      {/* Bottom Menu */}
      <div>
        <Link className={classLink} to="/">
          <span className="text-xl">
            <MdHome />
          </span>
          Home
        </Link>

        <button className={classLink} onClick={hdlLogout}>
          <span className="text-xl">
            <IoLogOut />
          </span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserSidebar;
