import React from 'react'
import { create } from 'zustand'
import { apiLogin, apiRegister } from '../api/auth'
import { ToastContainer,toast } from 'react-toastify'
import { persist,createJSONStorage } from 'zustand/middleware'


const useAuthStore = create(persist((set,get)=>({
  user: null,
  token: null,

  
actionRegister : async(form) => {
  try{
    const res = await apiRegister(form)
    toast.success(res.data.message)
  }catch(err){
    toast.error(err.response.data.message)
  }
},

actionLogin : async(form) =>{
  try{
    const res = await apiLogin(form)
    toast.success(res.data.message)
    set({ user: res.data.user,
      token: res.data.token  })
    return true
  }catch(err){
    toast.error(err.response.data.message)
    return false
  }
},

logout : async() =>{
  try{
    set({ user: null,
      token: null  })
      toast.success("LogOut")
    return true
  }catch(err){
    toast.error(err.response.data.message)
  }
}


}),{
  name:'auth-store',
  storage: createJSONStorage(()=> localStorage)
}))

export default useAuthStore