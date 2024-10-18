import axios from "axios"

export const apiAddMorph =(form,token)=> axios.post("http://localhost:8444/api/category/addMorph",form,{
  headers: {
    Authorization: `Bearer ${token}`,
  }
  })

export const apiUpdateMorph =(morphId,form,token)=> axios.patch(`http://localhost:8444/api/category/updateMorph/${morphId}`,form,{
  headers: {
    Authorization: `Bearer ${token}`,
  }
  })

export const apiDeleteMorph =(morphId,token)=> axios.delete(`http://localhost:8444/api/category/deleteMorph/${morphId}`,{
  headers: {
    Authorization: `Bearer ${token}`,
  }
  })
