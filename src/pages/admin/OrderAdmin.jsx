import React, { useEffect, useMemo, useState } from "react";
import useOrderStore from "../../store/orderStore";
import useAuthStore from "../../store/authStore";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton, Tooltip, Select, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import BoxAddTracking from "../../components/admin/BoxAddTracking";
import { toast } from "react-toastify";
export default function OrderAdmin() {
  // const hasNewOrder = useOrderStore((state) => state.hasNewOrder);

  const getOrder = useOrderStore((state) => state.getOrder);
  const order = useOrderStore((state) => state.order);
  const updateOrder = useOrderStore((state) => state.updateOrder);
  const deleteOrder = useOrderStore((state) => state.deleteOrder);
  const token = useAuthStore((state) => state.token);
  const [orderId, setOrderId] = useState();
  const [modal,setModal] = useState(false)

  console.log("orderId", orderId); //ใช้ค่านี้ในการแสดงหน้า

  if (!order) {
    return <p>Loading...</p>; // ตอนแรกมัน Error เหมือนโหลดไม่ทัน งมเป็น ชม. เหมือนตอนลบแคช แล้วไม่มีข้อมูล ต้องเฟชให้ได้ก่อน1ครั้งมั้ง ถึงจะไม่error
  }

  useEffect(() => {
    getOrder(token);
    localStorage.setItem("notice", "no");
  }, [modal]);

  const hdlStatusChange = async (id,name,target,status,shippingStatus) => {
    const form = { [name] : target };
    if(status === "PAIN"){
      shippingStatus === "Pending"
    }
    await updateOrder(id, form, token);
    await getOrder(token);
  };

  const hdlAddTracking =(orderData)=>{
    setModal(!modal)
    setOrderId(orderData)
  }

  const hldCancelOrder = async(orderId,status)=>{
    if (status === "PAID") {
      toast.error("ไม่สามารถลบคำสั่งซื้อที่ชำระแล้ว");
      return; // หยุดการทำงานหากสถานะเป็น PAID
    }
    await deleteOrder(orderId,token)
    await getOrder(token)
  }
  
  const columns = useMemo(
    () => [
      {
        header: "Product Img",
        accessorKey: "productImg",
        size: 100,
        Cell: ({ row }) => (
          <img
            src={row.original.Snake[0]?.img} // ค่าที่ใช้แสดงรูปภาพ (URL ของรูป)
            alt={row.original.speciesName}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        ),
      },
      {
        header: "Check Payment",
        accessorKey: "OrderImg",
        size: 100,
        Cell: ({ row }) => (
          <img
            src={row.original.img} // ค่าที่ใช้แสดงรูปภาพ (URL ของรูป)
            alt={row.original.orderImg}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        ),
      },
      {
        header: "Order ID",
        accessorKey: "id",
        // size: 10,
      },
      {
        header: "User ID",
        accessorKey: "userId",
        // size: 10,
      },
      {
        header: "UserName",
        accessorKey: "username",
        accessorFn: (row) => {
          return row?.user?.username;
        },
        // size: 10,
      },
      {
        header: "Email",
        accessorKey: "email",
        accessorFn: (row) => {
          return row?.user?.email;
        },
        // size: 10,
      },
      {
        header: "Snake ID",
        accessorKey: "snakeId",
        accessorFn: (row) => {
          return row?.Snake[0]?.id;
        },
        // size: 10,
      },
      {
        header: "Category Name",
        accessorKey: "categoryName",
        accessorFn: (row) => {
          return row?.Snake[0]?.category.speciesName;
        },
        // size: 200,
      },
      {
        header: "Morph Name",
        accessorKey: "morphName",
        accessorFn: (row) => {
          return row?.Snake[0]?.morph.name;
        },
        // size: 200,
      },
      {
        header: "Total",
        accessorKey: "total",
        // size: 200,
      },
      {
        header: "Status",
        accessorKey: "status",
        Cell: ({ row }) => (
          <Select
            name="status"
            value={row.original.status}
            onChange={(e) => hdlStatusChange(row.original.id,e.target.name ,e.target.value,e.target.status, e.target.shippingStatus)}
          >
            <MenuItem value="PENDING">
              <div className="text-orange-500">Pending</div>
            </MenuItem>
            <MenuItem value="PAID">
              <div className="text-green-600">Paid</div>
            </MenuItem>
          </Select>
        ),
      },
      {
        header: "Shipping Status",
        accessorKey: "shippingStatus",
        Cell: ({ row }) => (
          <Select
            name="shippingStatus"
            value={row.original.shippingStatus}
            onChange={(e) => hdlStatusChange(row.original.id,e.target.name ,e.target.value, e.target.status, e.target.shippingStatus)}
          >
            <MenuItem value="PENDING">
              <div className="text-orange-500">Pending</div>
            </MenuItem>
            <MenuItem value="SHIPPED">
              <div className="text-blue-500">Shipped</div>
            </MenuItem>
            <MenuItem value="DELIVERED">
              <div className="text-green-600">Delivered</div>
            </MenuItem>
          </Select>
        ),
      },
      {
        header: "Tracking Number",
        accessorKey: "trackingNumber",
        accessorFn: (row) => {
          return row.trackingNumber ? row.trackingNumber : "-";
        },
      },
    ],
    []
  );

  return (
    <>
    {modal && <BoxAddTracking order={orderId} token={token} modal={modal} setModal={setModal}/>}
    <div style={{ height: "calc(100vh - 125px)", width: "calc(100vw - 15vw)" }}>
      <MaterialReactTable
        columns={columns}
        data={order}
        enableEditing
        enableStickyHeader
        muiTableBodyRowProps={({ row }) => ({
          onClick: () => setOrderId(row.original),
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
              <IconButton onClick={() => hdlAddTracking(row.original)}>
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip arrow placement="left" title="Cancel Order">
              <IconButton onClick={() => hldCancelOrder(row.original.id,row.original.status)}>
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
