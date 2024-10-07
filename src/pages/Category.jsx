// import React from 'react';

// const Sidebar = ({ items, activeItem, onItemSelect }) => {
//   return (
//     <aside className="md:w-1/4 w-full bg-gray-200 p-4">
//       <ul className="space-y-2">
//         {items.map((item, index) => (
//           <li
//             key={index}
//             className={`py-2 px-4 rounded-md text-center cursor-pointer ${
//               activeItem === item ? 'bg-gray-300' : 'bg-gray-50'
//             }`}
//             onClick={() => onItemSelect(item)}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// const ImageCard = ({ imageSrc, altText, description }) => (
//   <div className="bg-white p-2 rounded-lg shadow-md">
//     <img src={imageSrc} alt={altText} className="w-full h-32 object-cover rounded-md" />
//     <p className="text-center mt-2">{description}</p>
//   </div>
// );

// const MainContent = ({ title, snakeImages }) => {
//   return (
//     <main className="md:w-3/4 w-full p-4">
//       <h2 className="text-3xl font-semibold mb-6">{title}</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//         {snakeImages.map((snake, index) => (
//           <ImageCard
//             key={index}
//             imageSrc={snake.imageSrc}
//             altText={snake.altText}
//             description={snake.description}
//           />
//         ))}
//       </div>
//     </main>
//   );
// };

// const App = () => {
//   const [activeCategory, setActiveCategory] = React.useState('Ball Python');

//   const snakeCategories = [
//     'Ball Python', 'Albino', 'Banana/CG', 'Calico', 'Boa constrictor',
//     'Corn Snake', 'Hognose', 'Reticulated Python', 'White Lipped'
//   ];

//   const snakeImages = [
//     { imageSrc: 'snake1.jpg', altText: '0.1 CG', description: '0.1 CG' },
//     { imageSrc: 'snake2.jpg', altText: '1.0 Vpi Axanthic leopard bu', description: '1.0 Vpi Axanthic leopard bu' },
//     { imageSrc: 'snake3.jpg', altText: '0.1 Albino', description: '0.1 Albino' },
//     { imageSrc: 'snake4.jpg', altText: '0.1 CG', description: '0.1 CG' },
//     { imageSrc: 'snake5.jpg', altText: '0.1 CG', description: '0.1 CG' },
//     { imageSrc: 'snake6.jpg', altText: '0.1 CG', description: '0.1 CG' },
//   ];

//   return (
//     <div className="flex flex-col items-center bg-gray-100 min-h-screen">
//       {/* Header */}
//       <header className="w-full bg-gray-50 shadow-lg p-6 text-center">
//         <h1 className="text-4xl font-bold text-gray-800">Embrace the Enigma of Snakes</h1>
//         <p className="text-lg text-gray-600">Explore Their Unique Beauty and Complexity</p>
//       </header>

//       <div className="flex flex-col md:flex-row w-full max-w-6xl mt-8">
//         {/* Sidebar */}
//         <Sidebar items={snakeCategories} activeItem={activeCategory} onItemSelect={setActiveCategory} />

//         {/* Main Content */}
//         <MainContent title={activeCategory} snakeImages={snakeImages} />
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import Dropdown from "../components/user/dropdown";
import CardRecommend from "../components/user/CardRecommend";

export default function Category() {
  const categories = [
    {
      id: "1",
      speciesName: "Ball Python",
      morph: [
        { id: "1", name: "Albino" },
        { id: "2", name: "Banana" },
        { id: "2", name: "Calico" },
        { id: "4", name: "Pied" },
      ],
    },
    {
      id: "2",
      speciesName: "Boa constrictor",
      morph: [
        { id: "1", name: "BCI" },
        { id: "2", name: "BCC" },
      ],
    },
    {
      id: "3",
      speciesName: "Mike Snake",
      morph: [
        { id: "1", name: "morph 1" },
        { id: "2", name: "morph 2" },
      ],
    },
    { id: "4", speciesName: "Hognose", morph: [{ id: "1", name: "morph 1" }] },
    {
      id: "5",
      speciesName: "Reticulated Python",
      morph: [
        { id: "1", name: "Albino" },
        { id: "2", name: "Golden Child" },
      ],
    },
    {
      id: "6",
      speciesName: "White Lipped",
      morph: [
        { id: "1", name: "white belly" },
        { id: "2", name: "Yellow belly" },
      ],
    },
  ];

  console.log(categories);

  return (
    <div className="flex flex-col items-center h-fit">
      <div className="border flex w-4/5 text- items-center h-[300px] bg-slate-100 rounded-3xl my-10 p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
        
        <div className="flex flex-col gap-10 text-center w-7/12">
          <p className="text-7xl">Embrace the Enigma of Snakes</p>
          {/* <p className='text-7xl'>of Snakes</p> */}
          <p className="text-xl">Explore Their Unique Beauty and Complexity</p>
        </div>

    <div className=" border rounded-full h-[300px] overflow-hidden ">
        <div>
          <img src="https://www.picsum.photos/500" alt="CardRecommend" />
        </div>
      </div>
    </div>

      <div className="flex">

        <div className="flex flex-col w-[40%] border px-4 ">
          {categories.map((el, index) => (
            <Dropdown key={index} el={el} />
          ))}
        </div>
         

        <div className="border w-[100%] flex flex-wrap justify-evenly">
          {categories.map((el, index) => (
            <CardRecommend key={index} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
}
