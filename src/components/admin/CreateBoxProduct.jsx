import React, { useEffect, useState } from "react";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import useSnakeStore from "../../store/snakeStore";



const CreateBoxProduct = ({
  modal,
  setModal,
  CategoryList,
  CategoryAllMorph,
  token,
  getAllSnake,
}) => {
  const AddSnake = useSnakeStore((state) => state.AddSnake);
  const [morphs, setMorphs] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [form, setForm] = useState({
    description: "",
    price: "",
    birthdate: "",
    age: "",
    gender: "",
    feedingType: "",
    img: "",
    categoryId: "",
    morphId: "",
  });

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    setForm({ ...form, img: file });
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
  };

  const formatBirthdate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString("th-TH");
  };

  const hdlChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (e.target.name === "categoryId") {
      const selectedMorphs = CategoryAllMorph.filter(
        (morph) => morph.categoryId == e.target.value
      );
      setMorphs(selectedMorphs); // อัปเดต morphs
      setForm((prev) => ({ ...prev, morphId: "" })); // รีเซ็ต morphId
    }
  };

  const hdlAddSnake = async () => {
    const formData = new FormData();
    formData.append("description", form.description);
    formData.append("price", form.price);
    formData.append("birthdate", form.birthdate);
    formData.append("age", form.age);
    formData.append("gender", form.gender);
    formData.append("feedingType", form.feedingType);
    formData.append("categoryId", form.categoryId);
    formData.append("morphId", form.morphId);

    if (form.img) {
      formData.append("img", form.img);
    }

    await AddSnake(formData, token);
    await getAllSnake();
    setModal(!modal);
    setPreviewUrl(null)
  };

  return (
    <div className="z-30 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none ">
      <div className="relative m-auto w-[calc(100%-4rem)] h-[calc(100%-2.5rem)]">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-full    z-30  ">
          <div className="flex justify-between p-2">
            <div>CreateBox</div>
            <button onClick={() => setModal(!modal)}>
              <HighlightOffTwoToneIcon />
            </button>
          </div>

          <div className="h-[calc(100vh-60px)] border p-2">
            <div className="flex justify-center">
              <div className="flex flex-col border rounded-lg p-4 w-96 gap-2 ">
                <label htmlFor="price" className="flex flex-col">
                  Price
                  <input
                    className="border rounded-lg"
                    name="price"
                    value={form.price}
                    onChange={(e) => hdlChange(e)}
                  />
                </label>

                <label htmlFor="age" className="flex flex-col">
                  Age
                  <input
                    className="border rounded-lg"
                    name="age"
                    value={form.age}
                    onChange={(e) => hdlChange(e)}
                  />
                </label>

                <label htmlFor="img" className="flex flex-col">
                  Image
                  <input
                    type="file"
                    className="border rounded-lg"
                    name="img"
                    id="img"
                    onChange={(e) => uploadImage(e)}
                  />
                  {previewUrl && (
                  <img src={previewUrl} alt="preview" className="w-32 h-32" />
                )}
                </label>

                <label htmlFor="description">
                  Description:
                  <textarea
                    className="border"
                    id="description"
                    name="description"
                    value={form.description}
                    rows="4"
                    cols="45"
                    onChange={(e) => hdlChange(e)}
                  ></textarea>
                </label>

                <div>
                  <label htmlFor="birthdate" className="block mb-1">
                    BirthDate
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    value={form.birthdate}
                    onChange={hdlChange}
                    className="w-full border rounded-lg"
                  />
                  <p className="mt-1 text-sm">
                    birthdate TH : {formatBirthdate(form.birthdate)}
                  </p>
                </div>

                <label htmlFor="options" className="flex flex-col">
                  Gender:
                  <select
                    className="border rounded-lg"
                    id="options"
                    name="gender"
                    value={form.gender}
                    onChange={(e) => hdlChange(e)}
                  >
                    <option value="">Select Gender</option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="UNKNOWN">UNKNOWN</option>
                  </select>
                </label>

                <label htmlFor="options" className="flex flex-col">
                  FeedingType:
                  <select
                    className="border rounded-lg"
                    id="options"
                    name="feedingType"
                    value={form.feedingType}
                    onChange={(e) => hdlChange(e)}
                  >
                    <option value="">Select Feeders</option>
                    <option value="LIVE">Live Feeders</option>
                    <option value="FROZEN">Frozen Feeders</option>
                    <option value="THAWED">Thawed Feeders</option>
                  </select>
                </label>

                <label htmlFor="options" className="flex flex-col">
                  Species:
                  <select
                    className="border rounded-lg"
                    id="categoryId"
                    name="categoryId"
                    value={form.categoryId}
                    onChange={(e) => hdlChange(e)}
                  >
                    <option value="">Select Species</option>
                    {CategoryList.category.map((el) => (
                      <option key={el.id} value={el.id}>
                        {el.speciesName}
                      </option>
                    ))}
                  </select>
                </label>

                <label htmlFor="options" className="flex flex-col">
                  Morph:
                  <select
                    className="border rounded-lg"
                    id="morphId"
                    name="morphId"
                    value={form.morphId}
                    onChange={(e) => hdlChange(e)}
                  >
                    <option value="">Select Morph</option>
                    {morphs.map((el) => (
                      <option key={el.id} value={el.id}>
                        {el.name}
                      </option>
                    ))}
                  </select>
                </label>

                <button
                  className="border p-2 rounded-xl mt-2 w-full bg-blue-100 hover:bg-blue-200"
                  onClick={() => hdlAddSnake()}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*end content*/}
        <div className="opacity-25 fixed inset-0 z-20 bg-black"></div>
      </div>
    </div>
  );
};

export default CreateBoxProduct;
