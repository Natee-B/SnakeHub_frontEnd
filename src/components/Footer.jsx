
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { VscSnake } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-stone-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <VscSnake className="text-3xl text-yellow-400" />
            <span className="text-2xl font-bold">SnakeHUB</span>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <SocialLink href="https://facebook.com" icon={<FaFacebook />} />
            <SocialLink href="https://twitter.com" icon={<FaTwitter />} />
            <SocialLink href="https://instagram.com" icon={<FaInstagram />} />
            <SocialLink href="https://youtube.com" icon={<FaYoutube />} />
          </div>

          <div className="text-sm">
            <Link to="/privacy-policy" className="hover:text-yellow-400 mr-4">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-yellow-400">Terms of Service</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} SnakeHaven. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400 transition duration-300">
      {icon}
    </a>
  );
}

// import React from "react";

// export default function Footer() {
//   return (
//     <div className="flex p-4 h-20 bg-slate-400 justify-center">
//       <div className="flex gap-10 items-center">
//         <div>LOGO</div>
//         <div className="flex gap-4 ">
//           <h1>icon 1</h1>
//           <h1>icon 2</h1>
//           <h1>icon 3</h1>
//           <h1>icon 4</h1>
//         </div>
//       </div>
//     </div>
//   );
// }