import Axios from 'axios'


const BASE_URL="https://yatagram-server.onrender.com/"
const TOKEN=localStorage.getItem("token")
export const publicRequest= Axios.create({
 baseURL: BASE_URL
})


export const userRequest= Axios.create({
    baseURL: BASE_URL,
    headers: {"x-auth-token":`Bearer ${TOKEN}`},
   
   })
