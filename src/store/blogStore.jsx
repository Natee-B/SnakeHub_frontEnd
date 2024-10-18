import React from "react";
import { create } from "zustand";
import { ToastContainer, toast } from "react-toastify";
import { persist, createJSONStorage } from "zustand/middleware";
import { apiAddBlog, apiBlog, apiBlogDetail } from "../api/ApiBlog";

const useBlogStore = create(
  persist(
    (set, get) => ({
      blog: null,
      token: null,

      getBlog: async () => {
        try {
          const res = await apiBlog();
          set({ blog: res.data })
          console.log("getBlog for blogStore.jsx",res.data)
        } catch (err) {
          toast.error(err.response.data.message);
        }
      },
      
      getBlogDetail: async () => {
        try {
          const res = await apiBlogDetail();
          return res.data;
        } catch (err) {
          toast.error(err.response.data.message);
        }
      },

      getAddBlog: async (form,token) => {
        try {
          const res = await apiAddBlog(form,token);
          toast(res.data.message)
        } catch (err) {
          toast.error(err.response.data.message);
        }
      },

    }),
    {
      name: "blog-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useBlogStore;
