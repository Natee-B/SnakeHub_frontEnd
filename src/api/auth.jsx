import axios from "axios"

export const apiRegister =(form)=> axios.post("http://localhost:8444/api/auth/register",form) 

export const apiLogin =(form)=> axios.post("http://localhost:8444/api/auth/login",form) 