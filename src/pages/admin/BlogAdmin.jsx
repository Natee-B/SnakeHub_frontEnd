import React, { useEffect,useMemo, useState } from "react";
import { Box, IconButton, Tooltip, Select, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import useBlogStore from "../../store/blogStore";
import { MaterialReactTable } from "material-react-table";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";

export default function BlogAdmin() {
  const blog = useBlogStore((state) => state.blog);
  const getBlog = useBlogStore((state) => state.getBlog);

  const deleteBlog = useBlogStore((state) => state.deleteBlog);
  const token = useAuthStore((state) => state.token);
  const [blogId,setBlogId] = useState("")
  const navigate = useNavigate()

// console.log('blog', blog)
// console.log('blogId', blogId)

  useEffect(() => {
    getBlog();
    setBlogId(blog)

  }, [getBlog]);

  const hldDeleteBlog =(blogId)=>{
    deleteBlog(blogId,token)
    getBlog()
  }

  const hdlEditBlog =(blogId)=>{
    navigate("/admin/blogUpdate", { state: { blogId } });
 
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const base64Data = await convertBase64(file);
    setBase64(base64Data);
  };

  useEffect(() => {
    const input = document.getElementById("test");
    if (input) {
      input.addEventListener("change", uploadImage);
    }
    return () => {
      if (input) {
        input.removeEventListener("change", uploadImage);
      }
    };
  }, []);

  const columns = useMemo(
    () => [
      
      {
        header: "BLOG ID",
        accessorKey: "id",
        // size: 10,
      },
      {
        header: "Title",
        accessorKey: "title",
        // size: 10,
      },
      
      {
        header: "Blog Img",
        accessorKey: "Img",
        size: 100,
        Cell: ({ row }) => (
          <img
            src={row.original.img} 
            alt={row.original.title}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        ),
      },
    ],
    []
  );


  
  return (

    <div>
      <div className="flex py-4 gap-4">
      <a href="/admin/blogAdd">
        <button className="border rounded-xl bg-blue-100 p-2 hover:bg-blue-300">
          addBlog
        </button>
      </a>
      </div>

      {/* {blog.allBlog.map((el,index) => (
        <li className="border flex gap-4 " key={index}>
          <p>ID: {el.id}</p>
          <p>Name: {el.title}</p>
          <p>Update: {el.updatedAt}</p>
        </li>
      ))} */}

<div style={{ height: "calc(100vh - 125px)", width: "calc(100vw - 15vw)" }}>
      <MaterialReactTable
        columns={columns}
        data={blog.allBlog}
        enableEditing
        enableStickyHeader
        muiTableBodyRowProps={({ row }) => ({
          onClick: () => setBlogId(row.original),
          sx: {
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#e9f5ff",
            },
          },
        })}
        muiTableContainerProps={{
          sx: {
            maxHeight: "calc(100vh - 220px)",
            minHeight: "calc(100vh - 220px)",
          },
        }}
        displayColumnDefOptions={{
          "mrt-row-actions": {
            header: "",
            size: 220,
          },
        }}
        positionActionsColumn="last"
        renderRowActions={({ row }) => (
          <Box sx={{ display: "flex", gap: "0.3rem" }}>
            <Tooltip arrow placement="left" title="Add Tracking">
              <IconButton onClick={() => hdlEditBlog(row.original)}>
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip arrow placement="left" title="Delete Blog">
              <IconButton onClick={() => hldDeleteBlog(row.original.id)}>
                <DeleteForeverTwoToneIcon />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      />
    </div>

    </div>
  );
}
