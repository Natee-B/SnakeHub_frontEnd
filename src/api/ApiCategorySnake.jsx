import axios from "axios"

export const apiAddSnake =(form,token)=> axios.post("http://localhost:8444/api/category/addSnake",form,{
  headers: {
    Authorization: `Bearer ${token}`,
  }
  })

export const apiUpdateSnake =(snakeId,form,token)=> axios.patch(`http://localhost:8444/api/category/updateSnake/${snakeId}`,form,{
  headers: {
    Authorization: `Bearer ${token}`,
  }
  })

export const apiDeleteSnake =(snakeId,token)=> axios.delete(`http://localhost:8444/api/category/deleteSnake/${snakeId}`,{
  headers: {
    Authorization: `Bearer ${token}`,
  }
  })
