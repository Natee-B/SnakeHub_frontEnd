import React from "react";
import { create } from "zustand";
import { ToastContainer, toast } from "react-toastify";
import { persist, createJSONStorage } from "zustand/middleware";
import { ApiDeleteMember, ApiGetMember, ApiUpdateMember } from "../api/ApiMember";



const useMemberStore = create(
  persist(
    (set, get) => ({
        Member : null ,
        getMember: async (token)=>{
        try{
          const res = await ApiGetMember(token)
          set({Member: res.data.data})
        }catch(err){
          // console.log(err)
            toast.error(err.response.data.message);
        }
      },

      updateMember: async (userId,form,token)=>{
        // console.log('updateMember', userId,form,token)
        try{
          const res = await ApiUpdateMember(userId,form,token)
          toast(res.data.message)
        }catch(err){
          // console.log(err)
            toast.error(err.response.data.message);
        }
      },

      deleteMember: async (userId,token)=>{
        try{
          const res = await ApiDeleteMember(userId,token)
          toast(res.data.message)
        }catch(err){
          // console.log(err)
            toast.error(err.response.data.message);
        }
      }

    }),
    {
      name: "Member-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useMemberStore;