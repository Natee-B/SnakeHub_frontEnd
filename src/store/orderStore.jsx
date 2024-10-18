import React from "react";
import { create } from "zustand";
import { ToastContainer, toast } from "react-toastify";
import { persist, createJSONStorage } from "zustand/middleware";
import {} from "../api/ApiCategorySnake";
import { apiAddOrder, apiOrder } from "../api/ApiOrder";

const useOrderStore = create(
  persist(
    (set, get) => ({
        order : null,
      getOrder: async (form, token) => {
        try {
          const res = await apiOrder(form, token);
          set({ order: res.data.data })
        } catch (err) {
          // console.log(err);
            toast.error(err.response.data.message);
        }
      },
      addOrder: async (form, token) => {
        try {
          const res = await apiAddOrder(form, token);
          toast(res.data.message);
        } catch (err) {
          // console.log(err);
            toast.error(err.response.data.message);
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
