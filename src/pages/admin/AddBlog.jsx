import React, { useEffect, useRef, useState } from "react";
import useBlogStore from '../../store/blogStore';
import Quill from "quill";
import "quill/dist/quill.snow.css";
import useAuthStore from "../../store/authStore";
import { toast } from "react-toastify";

const QuillEditor = () => {
  const user = useAuthStore(state => state.user);
  const token = useAuthStore(state => state.token);

  const [form, setForm] = useState({
    title: "",
    content: "",
    img: "",
    userId: user.id,
  });
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  // ดึง getAddBlog ออกมาจาก useBlogStore ที่นี่
  const getAddBlog = useBlogStore((state) => state.getAddBlog);

  useEffect(() => {
    quillRef.current = new Quill(editorRef.current, {
      theme: "snow",
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["link", "image"],
        ],
      },
    });
  }, []);

  const hdlOnChange = (e) => {
    setForm({
      ...form,
      title: e.target.value,
    });
  };

  const hdlSubmit = async () => {
    
    const content = quillRef.current.root.innerHTML; 
    const updatedForm = {
      ...form,
      content: content,
    }
    
    if(updatedForm.title.trim() === "" || updatedForm.content.trim() === "<p><br></p>"){ //ค่าเริ่มต้นในcontent ไม่ใช่ค่าว่าง แต่เป็น <p><br></p> มาจากlib
      toast("please Enter input")
    }else{
    await getAddBlog(updatedForm,token);
    };
    // เรียกใช้ getAddBlog ที่นี่
  };

  return (
    <div>
      Title Name
      <input name="title" value={form.title} onChange={hdlOnChange} />
      <div className="w-[calc(100vw-240px)] h-80" ref={editorRef} />
      <button onClick={hdlSubmit}>Submit</button>
    </div>
  );
};

export default QuillEditor;

