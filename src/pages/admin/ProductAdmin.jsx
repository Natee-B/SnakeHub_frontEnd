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
  const getAllMorph = useCategoryStore((state)=>state.getAllMorph) //เรียก
  const CategoryAllMorph = useCategoryStore((state)=>state.CategoryAllMorph) //ใช้ CategoryAllMorph ***มอฟงูทั้งหมด
  
  
  const DeleteSnake = useSnakeStore((state) => state.DeleteSnake);
  const token = useAuthStore((state) => state.token);

  const [categoryId, setCategoryId] = useState("");
  const [editCategoryId, setEditCategoryId] = useState("");

  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);


  console.log('CategoryAllSnake', CategoryAllSnake.AllSnake)

  useEffect(() => {
    getAllSnake();
    getCategory();
    getAllMorph()
  }, []);



  const hdlEditCategoryId = (categoryId) => {
    setEditCategoryId(categoryId);
    setModalEdit(!modalEdit)
  };

  const hldDelete = async (snakeId) => {
    await DeleteSnake(snakeId, token);
    await getAllSnake();
  };

  const columns = useMemo(
    () => [
      {
        header: "ID",
        accessorKey: "id",
        size: 10,
      },
      {
        header: "CategoryId",
        accessorKey: "categoryId",
        size: 10,
      },
      {
        header: "CategoryName",
        accessorKey: "speciesName",
        accessorFn: (row) => {
          return row?.category?.speciesName;
          
        },
        // size: 200,
      },
      {
        header: "MorphId",
        accessorKey: "morphId",
        size: 10,
      },
      {
        header: "MorphName",
        accessorKey: "name",
        accessorFn: (row) => {
        return row?.morph?.name;
        }
        // size: 200,
      },
    ],
    []
  );

  return (
    <>
      {modalAdd && (
        <CreateBoxProduct modal={modalAdd} setModal={setModalAdd} CategoryList={CategoryList} CategoryAllMorph={CategoryAllMorph} token={token} getAllSnake={getAllSnake}/>
      )}
   
   {modalEdit && (
        <EditBoxProduct modal={modalEdit} setModal={setModalEdit} CategoryList={CategoryList} CategoryAllMorph={CategoryAllMorph} token={token} editCategoryId ={editCategoryId} getAllSnake={getAllSnake}/>
      )}


      <button
        className="border p-2 rounded-xl bg-blue-100 hover:bg-blue-200 "
        onClick={() => setModalAdd(!modalAdd)}
      >
        ADD SNAKE
      </button>

      <MaterialReactTable
        columns={columns}
        data={CategoryAllSnake.AllSnake}
        enableEditing
        enableStickyHeader
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
            }}}

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
    </>
  );
}
