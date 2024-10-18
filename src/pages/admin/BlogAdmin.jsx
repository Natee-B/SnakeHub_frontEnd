import React, { useEffect } from "react";
import useBlogStore from "../../store/blogStore";

export default function BlogAdmin() {
  const getBlog = useBlogStore((state) => state.getBlog);
  const blog = useBlogStore((state) => state.blog);

  useEffect(() => {
    getBlog();
  }, []);

  console.log("blog", blog);
  return (
    <div>
      <a href="/admin/blogUpdate">
        <button className="border rounded-xl bg-blue-100 p-2 hover:bg-blue-300">
          Edit
        </button>
      </a>

      <a href="/admin/blogAdd">
        <button className="border rounded-xl bg-blue-100 p-2 hover:bg-blue-300">
          addBlog
        </button>
      </a>

      {blog.allBlog.map((el,index) => (
        <li className="border flex gap-4 " key={index}>
          <p>ID: {el.id}</p>
          <p>Name: {el.title}</p>
          <p>Update: {el.updatedAt}</p>
        </li>
      ))}
    </div>
  );
}
