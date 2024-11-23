import { useEffect, useState } from "react";
import useCategoryStore from "../../store/categoryStore";

const Dropdown = ({ el }) => {
  const getMorphByCategory = useCategoryStore((state) => state.getMorphByCategory);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // console.log('Dropdown el', el)

  const hdlClick = (morphId, categoryId) => {
    // console.log("DD ID morphId",morphId,"categoryId", categoryId);
    getMorphByCategory(morphId, categoryId);
  };

  // useEffect(() => {
    // ตัวอย่าง: ดึงข้อมูลเมื่อ component ถูก mount
    // if (el.morph.length > 0) {
    //   getMorphByCategory(el.morph[0].id, el.morph[0].categoryId);
    // }
  // }, [el, getMorphByCategory]);

  return (
    <div className="my-1">
      <button
        className="border p-2 rounded-xl mb-1 w-full font-bold text-xl bg-stone-300 hover:bg-stone-400" 
        onClick={toggleDropdown}
      >
        {el.speciesName}
      </button>

      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 ">
          {el.morph.map((item, index) => (
            <button
              key={index}
              className="border rounded-xl p-2 text-xl  bg-stone-100 hover:bg-stone-300"
              onClick={() => hdlClick(item.id, item.categoryId)}
            >
              {item.name}
            </button>
          ))}

          {}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;



