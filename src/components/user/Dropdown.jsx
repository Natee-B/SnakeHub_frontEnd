import { useState } from "react";

const Dropdown = ({el}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    console.log(el)
    return (
    //   <div className="dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}> ถ้าใช้อันนี้ เมนูใต้dropdown จะทะลุทุกอย่าง
      <div className="my-1 border pl-20 "> 
        <button className="border p-2 rounded-xl mb-1 w-4/5 font-bold text-xl bg-slate-300 hover:bg-slate-400" onClick={toggleDropdown}>
          {el.speciesName}
        </button>


        <div className={`overflow-hidden transition-max-height duration-700 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        {/* {isOpen && ( */}
        
          <div className="flex flex-col gap-1 pl-8 ">
                {el.morph.map((item,index)=>
            <a key={index} className = "border rounded-xl p-2 text-xl bg-slate-100 hover:bg-slate-200" href="#">{item.name}</a>
                )}

          </div>
        {/* )} */}
        </div>

        
      </div>
    );
  };

  export default Dropdown
