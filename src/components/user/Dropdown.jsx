import { useEffect, useState } from "react";
import useCategoryStore from "../../store/categoryStore";

const Dropdown = ({ el }) => {
  const getMorphByCategory = useCategoryStore(
    (state) => state.getMorphByCategory
  );
  // const CategoryMorphList = useCategoryStore(
  //   (state) => state.CategoryMorphList
  // );
  // // console.log("dropdown", CategoryMorphList);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [form, setForm] = useState({
    categoryId: "",
    morphId: "",
  });

  const hdlClick = (morphId, categoryId) => {
    // console.log('testtttt')
    // setForm({
    //   categoryId:categoryId ,
    //   morphId: morphId
    // })
    // const newForm ={
    //   ...form, // Keep previous form values
    //   "categtestt": 1, // Set categoryId correctly
    //   "moioiod": 1, // Set morphId correctly
    // }
    // setForm(()=>newForm);
    // setForm((el)=>console.log('first,el',el))
    // console.log("------------",form)
    //  console.log('form',newForm)
    getMorphByCategory(morphId, categoryId);
  };

  return (
    //   <div className="dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}> ถ้าใช้อันนี้ เมนูใต้dropdown จะทะลุทุกอย่าง
    <div className="my-1 border  ">
      <button
        className="border p-2 rounded-xl mb-1 w-full font-bold text-xl bg-slate-300 hover:bg-slate-400"
        onClick={toggleDropdown}
      >
        {el.speciesName}
      </button>

      <div 
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"  //ไม่สามารถทำ
        }`}
      >
        {/* {isOpen && ( */}

        <div className="flex flex-col gap-1 pl-8 ">
          {el.morph.map((item, index) => (
            <button
              key={index}
              className="border rounded-xl p-2 text-xl  bg-slate-100 hover:bg-slate-200"
              onClick={() => hdlClick(item.id, item.categoryId)}
            >
              {item.name}
            </button>
          ))}

          {}
        </div>
        {/* )}  */}
      </div>
    </div>
  );
};

export default Dropdown;
