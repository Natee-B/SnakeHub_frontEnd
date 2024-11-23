import React, { useEffect, useRef, useState } from "react";
import useBlogStore from '../../store/blogStore';
import Quill from "quill";
import "quill/dist/quill.snow.css";
import useAuthStore from "../../store/authStore";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const QuillEditor = () => {
  const token = useAuthStore(state => state.token);
  const updateBlog = useBlogStore((state) => state.updateBlog);
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const navigate = useNavigate()
  const location = useLocation()
  const blogId = location.state.blogId;
  console.log('!!', blogId)

    const mockDate = {
    title: blogId.title || '',
    img: blogId.img || '',
    content: blogId.content || '',
    userId: blogId.userId || ''
  }
  const [form, setForm] = useState(mockDate);
  
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

    // ตั้งค่าเนื้อหาเริ่มต้นใน Quill editor
    quillRef.current.root.innerHTML = form.content;
  }, [form.content]);

  const hdlOnChange = (e) => {
    setForm({
      ...form,
      title: e.target.value,
    });
  };

  const hdlSubmit = async (blogId) => {
    const content = quillRef.current.root.innerHTML; 
    const updatedForm = {
      ...form,
      content: content,
    };
    
    if(updatedForm.title.trim() === "" || updatedForm.content.trim() === "<p><br></p>"){
      toast("please Enter input")
    }else{
      await updateBlog(blogId,updatedForm,token);
      navigate("/admin/blogAdmin")
    }
  };

  return (
    <div >
      <div className="flex gap-2">
      Title Name
      <input className="pl-2" name="title" value={form.title} onChange={hdlOnChange} />
      </div>
      <div className="w-[calc(100vw-240px)] h-screen" ref={editorRef} />
      <button onClick={()=>hdlSubmit(blogId.id)}>Submit</button>
    </div>
  );
};

export default QuillEditor;
