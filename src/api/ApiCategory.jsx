import axios from "axios"

export const apiGetCategory =()=> axios.get("http://localhost:8444/api/category")

export const apiGetAllSnake =()=> axios.get("http://localhost:8444/api/category/getAllSnake")

export const apiGetAllMorph =()=> axios.get("http://localhost:8444/api/category/getAllMorph")

export const apiGetMorphByCategory =(morphId,categoryId)=> axios.get(`http://localhost:8444/api/category/${categoryId}/${morphId}`)
    
export const apiAddCategory = (form,token)=> axios.post(`http://localhost:8444/api/category/addCategory`,form,{
    headers: {
      Authorization: `Bearer ${token}`,
    }
    })

  export const apiUpdateCategory = (categoryId,form,token)=> axios.patch(`http://localhost:8444/api/category/updateCategory/${categoryId}`,form,{
      headers: {
        Authorization: `Bearer ${token}`,
      }
      })

export const apiDeleteCategory = (categoryId,token)=> axios.delete(`http://localhost:8444/api/category/deleteCategory/${categoryId}`,{
    headers: {
      Authorization: `Bearer ${token}`,
    }
    })