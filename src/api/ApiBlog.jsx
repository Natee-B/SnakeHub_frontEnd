import axios from "axios"

export const apiBlog =(form)=> axios.get("http://localhost:8444/api/blog",form) 
export const apiBlogDetail =(form)=> axios.get("http://localhost:8444/api/blog/:blogId",form) 