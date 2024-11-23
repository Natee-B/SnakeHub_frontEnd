
import React from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { VscSnake } from "react-icons/vsc";

export default function MainNav() {
  const user = useAuthStore((state) => state.user);
  
  return (
    <nav className="bg-stone-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <VscSnake  className="text-3xl text-yellow-400" />
            <Link to="/" className="text-2xl font-bold">SnakeHUB</Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/category">Our Snakes</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contactUs">Contact</NavLink>
          </div>

          <div>
            {user ? (
              <Link to="/user" className="flex items-center space-x-2 bg-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-300  transition duration-300">
                <img src={user.avatar || 'default-avatar.png'} alt="User Avatar" className="w-8 h-8 rounded-full" />
                <span>{user.username}</span>
              </Link>
            ) : (
              <Link to="/login" className="bg-yellow-500 text-green-900 px-4 py-2 rounded-full hover:bg-yellow-400 transition duration-300">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link to={to} className="hover:text-yellow-400 transition duration-300">
      {children}
    </Link>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import useAuthStore from "../store/authStore";

// export default function MainNav() {
//   const user = useAuthStore((state) => state.user);
//   return (
//     <div className="flex px-8 py-4 h-12 w-full items-center bg-slate-400">
//       <div className="flex justify-between w-full items-center">
//         <div>
//           <h1>
//             <Link to={"/"}> LOGO </Link>
//           </h1>
//         </div>

//         <div className=" flex gap-4 ">
//           <h1>
//             <Link to={"/"}> HOME</Link>
//           </h1>
//           <h1>
//             <Link to={"/blog"}> BLOG</Link>
//           </h1>
//           <h1>
//             <Link to={"/category"}> CATEGORY</Link>
//           </h1>
//           <h1>
//             <Link to={"/about"}> ABOUT</Link>
//           </h1>
//           <h1>
//             <Link to={"/contactUs"}> CONTACT US</Link>
//           </h1>
//         </div>

//         {user ? (
//           <Link to={"/user"}>
//           <div className="text-xl  ">
//             User :{user.username}
//             </div>
//             </Link>
//         ) : (
//           <div className="flex gap-4 ">
//             <h1>
//               <Link to={"/login"}> LOGIN</Link>
//             </h1>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }