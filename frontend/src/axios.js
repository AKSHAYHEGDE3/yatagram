import Axios from 'axios'


const BASE_URL="http://localhost:5000/"
const TOKEN=localStorage.getItem("token")
export const publicRequest= Axios.create({
 baseURL: BASE_URL
})


export const userRequest= Axios.create({
    baseURL: BASE_URL,
    headers: {"x-auth-token":`Bearer ${TOKEN}`},
   
   })
