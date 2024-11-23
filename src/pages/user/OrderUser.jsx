import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import useOrderStore from "../../store/orderStore";
import useAuthStore from "../../store/authStore";

export default function OrderUser() {
    const getOrder = useOrderStore((state) => state.getOrder);
    const order = useOrderStore((state) => state.order);
    const user = useAuthStore((state)=>state.user)
    const token = useAuthStore((state)=>state.token)

console.log('user', user.id)
console.log('order', order)

    const userOrder = order.filter(el=>el.userId === user.id)
    console.log('thisOrder', userOrder)     

    useEffect(()=>{
        getOrder(token)
    },[])//soldOutIds

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
          },
          {
            header: "Shipping Status",
            accessorKey: "shippingStatus",
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
    <div
    style={{ height: "calc(100vh - 125px)", width: "calc(100vw - 15vw)" }}
  >
    <MaterialReactTable
      columns={columns}
      data={userOrder}
    />
  </div>
  )
}
