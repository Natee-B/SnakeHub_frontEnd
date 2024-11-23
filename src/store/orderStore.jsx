import React from "react";
import { create } from "zustand";
import { ToastContainer, toast } from "react-toastify";
import { persist, createJSONStorage } from "zustand/middleware";
import {} from "../api/ApiCategorySnake";
import { apiAddOrder, apiDeleteOrder, apiOrder, apiUpdateOrder } from "../api/ApiOrder";

const useOrderStore = create(
  persist(
    (set, get) => ({
      order: null,
      hasNewOrder: false,
      getOrder: async (token) => {
        try {
          const res = await apiOrder(token);
          set({ order: res.data.data });
        } catch (err) {
          console.log(err);
          // toast.error(err.response.data.message);
        }
      },

      // addNewOrder: () => {
      //     set({hasNewOrder: true})
      //   },
      // clearNewOrder: () => set({ hasNewOrder: false }), // ใช้ล้างสถานะ order ใหม่

      updateOrder: async (orderId, form, token) => {
        try {
          const res = await apiUpdateOrder(orderId, form, token);
          toast(res.data.message);
          console.log("updateOrder test", form);
        } catch (err) {
          console.log(err);
          // toast.error(err.response.data.message);
        }
      },

      deleteOrder: async (orderId,token) => {
        try {
          const res = await apiDeleteOrder(orderId,token);
          toast(res.data.message);
        } catch (err) {
          console.log(err);
          // toast.error(err.response.data.message);
        }
      },

      addOrder: async (form, token) => {
        try {
          const res = await apiAddOrder(form, token);
          toast(res.data.message);
        } catch (err) {
          console.log(err);
          // toast.error(err.response.data.message);
        }
      },
    }),
    {
      name: "order-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useOrderStore;
