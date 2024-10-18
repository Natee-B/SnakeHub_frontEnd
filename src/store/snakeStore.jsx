import React from "react";
import { create } from "zustand";
import { ToastContainer, toast } from "react-toastify";
import { persist, createJSONStorage } from "zustand/middleware";
import { apiAddSnake, apiDeleteSnake, apiUpdateSnake } from "../api/ApiCategorySnake";

const useSnakeStore = create(persist((set, get) => ({
        AddSnake: async (form,token)=>{
        try{
          const res = await apiAddSnake(form,token)
          toast(res.data.message)
        }catch(err){
          // console.log(err)
            toast.error(err.response.data.message);
        }
      },

      UpdateSnake: async (snakeId,form,token)=>{
        try{
          const res = await apiUpdateSnake(snakeId,form,token)
          toast(res.data.message)
        }catch(err){
          // console.log(err)
            toast.error(err.response.data.message);
        }
      },

      DeleteSnake: async (snakeId,token)=>{
        try{
          const res = await apiDeleteSnake(snakeId,token)
          toast(res.data.message)
        }catch(err){
          // console.log(err)
            toast.error(err.response.data.message);
        }
      }

    }),
    {
      name: "snake-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useSnakeStore;