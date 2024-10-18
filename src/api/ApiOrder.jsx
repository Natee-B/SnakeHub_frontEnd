import axios from "axios"

export const apiOrder = (token)=> axios.get("http://localhost:8444/api/order",{
    headers: {
      Authorization: `Bearer ${token}`,
    }
    }
)
export const apiAddOrder = (form,token)=> axios.post("http://localhost:8444/api/addOrder",form,{
    headers: {
      Authorization: `Bearer ${token}`,
    }
    })