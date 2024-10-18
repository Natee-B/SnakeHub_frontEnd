import React, { useEffect, useState } from "react";
import useCategoryStore from "../../store/categoryStore";
import useAuthStore from "../../store/authStore";
import GetMorphByCategory from "../../components/admin/GetMorphByCategory";
import useMorphStore from "../../store/morphStore";

export default function CategoryAdmin() {
  const getCategory = useCategoryStore((state) => state.getCategory);
  const CategoryList = useCategoryStore((state) => state.CategoryList);
  const AddCategory = useCategoryStore((state)=>state.AddCategory)
  const DeleteCategory = useCategoryStore((state) => state.DeleteCategory);
  const UpdateCategory = useCategoryStore((state) => state.UpdateCategory);
  const AddMorph = useMorphStore((state)=>state.AddMorph)
  const token = useAuthStore((state) => state.token);

  // const [localCategoryList, setLocalCategoryList] = useState([]); //ใช้สำหรับที่ commentเอาไว้ด้านล่าง เป็นการสร้างlocal เอาไป.map ให้อัพเดทผ่านหน้าบ้านเลย เพื่อเว็ปทำงานได้เร็วยิ่งขึ้น ไม่ต้องไปดึง API getCategory จากหลังบ้านมาใหม่
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [showAddMorph, setShowAddMorph] = useState(null);
  const [showMorph,setShowMorph] = useState({})
  const [show,setShow] = useState(false)
  const [form, setForm] = useState({
    speciesName: "",
    description: "",
    img: "",
  });
  const [morphForm,setMorphForm] = useState({
    name: "",
    categoryId: ""
  })

  const hldEdit = (categoryId) => {
    const categoryToEdit = CategoryList?.category?.find(
      (category) => category.id === categoryId
    );
    if (categoryToEdit) {
      setForm({
        speciesName: categoryToEdit.speciesName,
        description: categoryToEdit.description,
        img: categoryToEdit.img,
      });
    }
    setEditCategoryId(categoryId !== editCategoryId ? categoryId : null);
  };

  const hdlOnChangeMorph = (e) => {
    const { name, value } = e.target;
    setMorphForm((prevForm) => ({
      ...prevForm,
      [name]: value ,
    }));
  };

  const hdlOnChange = (e) =>{
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value ,
    }));
  }

  const hldSubmitUpdate = async(e, categoryId) => {
    e.preventDefault();
    await UpdateCategory(categoryId, form, token);
    await getCategory()
    // setLocalCategoryList( //ใช้สำหรับรีเฟรชอัพเดทหน้าเว๊ป ยังไม่เก็ต
    //   (
    //     prevList 
    //   ) =>
    //     prevList.map((category) =>
    //       category.id === categoryId ? { ...category, ...form } : category
    //     )
    // );
    setForm({
      speciesName: "",
      description: "",
      img: "",
    });
    setEditCategoryId(null);
  };

  const hdlAdd = () =>{
    setShow(!show)
  }

  const hldShowMorph = (categoryId)=>{
    setShowMorph((prevShowMorph) => ({
      ...prevShowMorph,
      [categoryId]: !prevShowMorph[categoryId],  // สลับค่า true/false ของ categoryId
    }));
  }

  const hldSubmitAddCategory = async (e) => {
    e.preventDefault();
    try {
      await AddCategory(form, token);
      await getCategory()
      setShow(false);
      setForm({
        speciesName: "",
        description: "",
        img: "",
      });
    } catch (error) {
      console.error("Failed to add category:", error);
    }
  };

  const hldDelete = async(categoryId) => {
    await DeleteCategory(categoryId, token);
    await getCategory()
    // setLocalCategoryList(
    //   localCategoryList.filter((el) => el.id !== categoryId)
    // );
  };

const      hdlShowAddMorph =(categoryId)=>{
  setShowAddMorph(categoryId !== showAddMorph ? categoryId : null)
}

const hdlSubmitAddMorph = async(categoryId) => {
  const newMorphForm = {
    ...morphForm,
    categoryId
  };
  setMorphForm(newMorphForm); 
  await AddMorph(newMorphForm,token);
  await getCategory()
  setMorphForm({
      name: "",
    categoryId: ""
  })
};

  useEffect(() => {
    getCategory();
  }, []);

  // useEffect(() => {
  //   setLocalCategoryList(CategoryList.category);
  // }, [CategoryList]); //ทำไมไม่ใช้ localCategoryList  /ทำไมlocalCategoryListเปลี่ยนแล้ว CategoryList ถึงทำงาน

  return (
    <div className="w-5/12 p-4">
      <button className="border p-2 rounded-xl bg-blue-100 hover:bg-blue-200 "
      onClick={()=>hdlAdd()}>
        Add Category
      </button>
      {show &&
      <form className="flex flex-col gap-1"
      onSubmit={(e)=>hldSubmitAddCategory(e)}> 
       SpeciesName
              <input
                name="speciesName"
                value={form.speciesName}
                onChange={hdlOnChange}
              />
              Description
              <input
                name="description"
                value={form.description}
                onChange={hdlOnChange}
              />
              Image
              <input name="img"
              value={form.img}
              onChange={hdlOnChange}
              />
              <button className="border p-2 rounded-xl bg-blue-100 hover:bg-blue-200">
                Confirm
              </button>
      </form>
      }
   
      {CategoryList?.category?.map((el, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex justify-between items-center mt-5">
            {el.speciesName}

          <div className="flex gap-4">

          <button
              className="border p-2 rounded-xl bg-blue-100 hover:bg-blue-200"
              onClick={() => hldShowMorph(el.id)}
            >
              ▼
            </button>

          <button
          className="border p-2 rounded-xl bg-blue-100 hover:bg-blue-200"
          onClick={()=>hdlShowAddMorph(el.id)}>
          Add Morph
          </button>
          
            <button
              className="border p-2 rounded-xl bg-blue-100 hover:bg-blue-200"
              onClick={() => hldEdit(el.id)}
            >
              Edit
            </button>
            <button
              className="border p-2 rounded-xl bg-blue-100 hover:bg-blue-200"
              onClick={() => hldDelete(el.id)}
            >
              Delete
            </button>
            </div>
          </div>

          {showAddMorph === el.id && (
            <div>

          <input 
          name="name"
          value={morphForm.name}
          onChange={(e)=>hdlOnChangeMorph(e)}
          placeholder="  Add Morph"/>

          <button className="border p-1 rounded-xl bg-blue-100 hover:bg-blue-200"
          onClick={()=>hdlSubmitAddMorph(el.id)}>
            Add Confirm</button>

            </div>
          )}

          {editCategoryId === el.id && (
            <form
              className="flex flex-col gap-1"
              onSubmit={(e) => hldSubmitUpdate(e, el.id)}
            >
              SpeciesName
              <input
                name="speciesName"
                value={form.speciesName || ""}
                onChange={hdlOnChange}
              />
              Description
              <input
                name="description"
                value={form.description || ""}
                onChange={hdlOnChange}
              />
              Image
              <input name="img"
              value={form.img || ""}
              onChange={hdlOnChange}
              />

              <button className="border p-2 rounded-xl bg-blue-100 hover:bg-blue-200">
                Confirm
              </button>
            </form>
          )}
          {showMorph[el.id] &&(<GetMorphByCategory el ={el}/>)}
        </div>
      ))}
    </div>
  );
}
