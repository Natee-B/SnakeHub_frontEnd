import React, { useState } from "react";
import useMorphStore from "../../store/morphStore";
import useAuthStore from "../../store/authStore";
import useCategoryStore from "../../store/categoryStore";

export default function GetMorphByCategory({ el }) {
  const getCategory = useCategoryStore((state) => state.getCategory);
  const UpdateMorph = useMorphStore((state) => state.UpdateMorph);
  const DeleteMorph = useMorphStore((state) => state.DeleteMorph);
  const token = useAuthStore((state) => state.token);
  const [showEdit, setShowEdit] = useState(null);
  const [form, setForm] = useState({
    name: "",
    categoryId: "",
  });

  // console.log('form', form)

  const hdlChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const hdlEdit = (morphId) => {
    setShowEdit(morphId !== showEdit ? morphId : null);
  };

  const hdlUpdate = async (morphId, categoryId) => {
    const newForm = { ...form, categoryId };
    await UpdateMorph(morphId, newForm, token);
    await getCategory();
    setForm({
      name: "",
      categoryId: "",
    });
  };

  const hdlDelete = async (morphId) => {
    await DeleteMorph(morphId, token);
    await getCategory();
  };

  return (
    <div className="flex flex-col gap-2 mt-5">
      {el.morph.map((item, index) => (
        <li className="flex justify-between items-center" key={index}>
          {item.name}
  
          <div className="flex gap-4">
            {showEdit === item.id && (
              <>
                <input
                  name="name"
                  value={form.name}
                  onChange={(e) => hdlChange(e)}
                  placeholder={item.name}
                />
                <button
                  className="border p-2 rounded-xl bg-blue-100 hover:bg-blue-200"
                  onClick={() => hdlUpdate(item.id, item.categoryId)}
                >
                  Confirm
                </button>
              </>
            )}

            <button
              className="border p-2 rounded-xl bg-blue-100 hover:bg-blue-200"
              onClick={() => hdlEdit(item.id)}
            >
              Edit
            </button>
            <button
              className="border p-2 rounded-xl bg-blue-100 hover:bg-blue-200"
              onClick={() => hdlDelete(item.id)}
            >
              Delete
            </button>
          </div>

        </li>
      ))}
    </div>
  );
}
