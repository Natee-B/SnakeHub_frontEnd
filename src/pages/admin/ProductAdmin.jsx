import { useMemo, useState, useEffect, useContext } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import EditIcon from "@mui/icons-material/Edit";

import React from "react";
import useSnakeStore from "../../store/snakeStore";
import useCategoryStore from "../../store/categoryStore";
import useAuthStore from "../../store/authStore";
import CreateBoxProduct from "../../components/admin/CreateBoxProduct";
import EditBoxProduct from "../../components/admin/EditBoxProduct";

export default function ProductAdmin() {
  const getCategory = useCategoryStore((state) => state.getCategory); //เรียก
  const CategoryList = useCategoryStore((state) => state.CategoryList); // ใช้ CategoryList ***พันธุ์งู
  const getAllSnake = useCategoryStore((state) => state.getAllSnake); //เรียก
  const CategoryAllSnake = useCategoryStore((state) => state.CategoryAllSnake); //ใช้ CategoryAllSnake ***งูทั้งหมด
  const getAllMorph = useCategoryStore((state) => state.getAllMorph); //เรียก
  const CategoryAllMorph = useCategoryStore((state) => state.CategoryAllMorph); //ใช้ CategoryAllMorph ***มอฟงูทั้งหมด

  const UpdateSnake = useSnakeStore((state) => state.UpdateSnake);
  const DeleteSnake = useSnakeStore((state) => state.DeleteSnake);
  const token = useAuthStore((state) => state.token);

  const [categoryId, setCategoryId] = useState("");
  const [editCategoryId, setEditCategoryId] = useState("");

  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  // console.log("CategoryAllSnake Gender", CategoryAllSnake.AllSnake);

  useEffect(() => {
    getAllSnake();
    getCategory();
    getAllMorph();
  }, []);

  const toggleRecommend = async (snakeId, currentValue) => {
    const newValue = !currentValue; // เปลี่ยนค่าเป็นค่าใหม่
    const formData = { recommend: newValue }; // สร้างข้อมูลที่จะอัปเดต

    try {
      await UpdateSnake(snakeId, formData, token); // เรียกใช้งาน UpdateSnake
      await getAllSnake(); // รีเฟรชข้อมูล
    } catch (error) {
      toast.error("เกิดข้อผิดพลาดในการอัปเดตค่าแนะนำ"); // แสดงข้อผิดพลาดให้ผู้ใช้ทราบ
      console.error("Error updating recommend value:", error); // Log ข้อผิดพลาด
    }
  };

  const hdlEditCategoryId = (categoryId) => {
    setEditCategoryId(categoryId);
    setModalEdit(!modalEdit);
  };

  const hldDelete = async (snakeId) => {
    await DeleteSnake(snakeId, token);
    await getAllSnake();
  };

  const columns = useMemo(
    () => [
      {
        header: "Image",
        accessorKey: "img",
        size: 200,
        Cell: ({ row }) => (
          <img
            src={row.original.img} // ค่าที่ใช้แสดงรูปภาพ (URL ของรูป)
            alt={row.original.speciesName}
            style={{ width: "200px", height: "150px", objectFit: "cover" }}
          />
        ),
      },
      {
        header: "ID",
        accessorKey: "id",
        size: 10,
      },
      {
        header: "Price",
        accessorKey: "price",
        size: 10,
      },
      {
        header: "Recommend",
        accessorKey: "recommend",
        Cell: ({ cell, row }) => (
          <input
            type="checkbox"
            checked={cell.getValue()}
            onChange={() => toggleRecommend(row.original.id, cell.getValue())}
          />
        ),
        size: 10,
      },
      {
        header: "CategoryName",
        accessorKey: "speciesName",
        accessorFn: (row) => {
          return row?.category?.speciesName;
        },
        size: 10,
      },
      {
        header: "MorphName",
        accessorKey: "name",
        accessorFn: (row) => {
          return row?.morph?.name;
        },
        // size: 200,
      },

      {
        header: "Age",
        accessorKey: "age",
        accessorFn: (row) => {
          return row.age ? row.age : "-";
        },
        size: 10,
      },
      {
        header: "Gender",
        accessorKey: "gender",
        size: 10,
      },
      {
        header: "Feed",
        accessorKey: "feedingType",
        size: 10,
      },
    ],
    []
  );

  return (
    <>
      {modalAdd && (
        <CreateBoxProduct
          modal={modalAdd}
          setModal={setModalAdd}
          CategoryList={CategoryList}
          CategoryAllMorph={CategoryAllMorph}
          token={token}
          getAllSnake={getAllSnake}
        />
      )}
      {modalEdit && (
        <EditBoxProduct
          modal={modalEdit}
          setModal={setModalEdit}
          CategoryList={CategoryList}
          CategoryAllMorph={CategoryAllMorph}
          token={token}
          editCategoryId={editCategoryId}
          getAllSnake={getAllSnake}
        />
      )}
      <button
        className="border p-2 rounded-xl bg-blue-100 hover:bg-blue-200 "
        onClick={() => setModalAdd(!modalAdd)}
      >
        ADD SNAKE
      </button>
      <div
        style={{ height: "calc(100vh - 125px)", width: "calc(100vw - 15vw)" }}
      >
        <MaterialReactTable
          columns={columns}
          data={CategoryAllSnake?.AllSnake || []}
          enableStickyHeader
          enableEditing //ทำให้มีปุ่ม Edit รูปดินสอ
          muiTableBodyRowProps={({ row }) => ({
            onClick: () => setCategoryId(row.original),
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
          positionActionsColumn={"last"}
          renderRowActions={({ row }) => (

            <Box sx={{ display: "flex", gap: "0.3rem" }}>
              <Tooltip arrow placement="left" title="Edit">
                <IconButton onClick={() => hdlEditCategoryId(row.original)}>
                  <EditIcon />
                </IconButton>
              </Tooltip>

              <Tooltip arrow placement="left" title="Delete">
                <IconButton onClick={() => hldDelete(row.original.id)}>
                  <DeleteForeverTwoToneIcon />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        />
      </div>
    </>
  );
}



// import { MaterialReactTable } from "material-react-table"; //โหลดใน npm install material-react-table ด้วย

// const TableComponent  = () => { //รับ Prop ได้ตามปกติ

// const columns = useMemo(  //อย่าลืม import useMemo
//   () => [
//     {
//       header: "Image",
//       accessorKey: "img",
//       size: 200,
//       Cell: ({ row }) => (
//         <img
//           src={row.original.img} // ค่าที่ใช้แสดงรูปภาพ (URL ของรูป)
//           alt={row.original.speciesName}
//           style={{ width: "200px", height: "150px", objectFit: "cover" }}
//         />
//       ),
//     },
//     {
//       header: "ID",
//       accessorKey: "id",
//       size: 10,
//     },
//     {
//       header: "Price",        //ชื่อหัวข้อ
//       accessorKey: "price",   //ชื่อที่ใช้ใน DataBase ถ้าชื่อตรงจะขึ้นให้เลย
//       size: 10,
//     },
//     {
//       header: "MorphName",
//       accessorKey: "name",  
//       accessorFn: (row) => {
//         return row?.morph?.name; // สามารถ หาข้อมูลขาก obj อิ่นได้ row ในที่นี้ก็คือ MyDataBase?.morph?.name
//       },
//     },
//   ],
//   []
// );

// return (
// <MaterialReactTable
//           columns={columns}
//           data={MyDataBase || []} //ใส่ข้อมูลที่อยากให้โชว์ขึ้นตาราง
//           enableStickyHeader //ทำให้หัวตารางไม่เลื่อนลงตามสกอเม้า
//           enableEditing //ใส่ไปเพื่อสร้างปุ่ม edit 
//           />
// )
// }