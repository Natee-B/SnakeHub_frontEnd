import React from "react";
import { create } from "zustand";
import { ToastContainer, toast } from "react-toastify";
import { persist, createJSONStorage } from "zustand/middleware";
import { apiAddMorph, apiDeleteMorph, apiUpdateMorph } from "../api/ApiCategoryMorph";


const useMorphStore = create(
  persist(
    (set, get) => ({
        AddMorph: async (form,token)=>{
        try{
          const res = await apiAddMorph(form,token)
          toast(res.data.message)
        }catch(err){
          // console.log(err)
            toast.error(err.response.data.message);
        }
      },

      UpdateMorph: async (morphId,form,token)=>{
        try{
          const res = await apiUpdateMorph(morphId,form,token)
          toast(res.data.message)
        }catch(err){
          // console.log(err)
            toast.error(err.response.data.message);
        }
      },

      DeleteMorph: async (morphId,token)=>{
        try{
          const res = await apiDeleteMorph(morphId,token)
          toast(res.data.message)
        }catch(err){
          // console.log(err)
            toast.error(err.response.data.message);
        }
      }

    }),
    {
      name: "Morph-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useMorphStore;