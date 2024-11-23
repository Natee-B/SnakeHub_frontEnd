import React, { useState } from "react";
import { create } from "zustand";
import { ToastContainer, toast } from "react-toastify";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  apiAddCategory,
  apiDeleteCategory,
  apiGetAllMorph,
  apiGetAllSnake,
  apiGetCategory,
  apiGetMorphByCategory,
  apiUpdateCategory,
} from "../api/ApiCategory";

const useCategoryStore = create(
  persist(
    (set, get) => ({
      CategoryList: null,
      CategoryMorphList: null,
      CategoryAllSnake: null,
      CategoryAllMorph: null,
      updateSnake: false,
      setUpdateSnake: (value) => set({ updateSnake: value }),

      getCategory: async () => {
        try {
          const res = await apiGetCategory();
          set({ CategoryList: res.data });
        } catch (err) {
          console.log(err);
          // toast.error(err.response.data.message);
        }
      },
      getAllSnake: async () => {
        try {
          const res = await apiGetAllSnake();
          set({ CategoryAllSnake: res.data });
          // set({ CategoryMorphList: { selectCategory: res.data.AllSnake } }); //มีทำไม
        } catch (err) {
          console.log(err);
          // toast.error(err.response.data.message);ห
        }
      },
      getAllMorph: async () => {
        try {
          const res = await apiGetAllMorph();
          set({ CategoryAllMorph: res.data.data });
        } catch (err) {
          console.log(err);
          // toast.error(err.response.data.message);
        }
      },
      getMorphByCategory: async (morphId, categoryId) => {
        try {
          const res = await apiGetMorphByCategory(morphId, categoryId);
          set({ CategoryMorphList: res.data.data});
        } catch (err) {
          console.log(err);
          //   toast.error(err.response.data.message);
        }
      },

      AddCategory: async (form, token) => {
        try {
          const res = await apiAddCategory(form, token);
          toast(res.data.message);
        } catch (err) {
          console.log(err);
          //   toast.error(err.response.data.message);
        }
      },

      UpdateCategory: async (categoryId, form, token) => {
        try {
          const res = await apiUpdateCategory(categoryId, form, token);
          toast(res.data.message);
        } catch (err) {
          console.log(err);
          //   toast.error(err.response.data.message);
        }
      },

      DeleteCategory: async (categoryId, token) => {
        try {
          const res = await apiDeleteCategory(categoryId, token);
          toast(res.data.message);
        } catch (err) {
          console.log(err);
          // toast.error(err.response.data.message);
        }
      },
    }),
    {
      name: "category-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCategoryStore;
