import axios from "axios"
interface userdata{
    name:string,
    email:string,
    password:string,
    id?:string
}
export const submitUserData=async(user:userdata)=>{
    let data=await axios.post(`http://localhost:2323/users`,user)
    return data

}

export const getuserdata=async()=>{   
    let data=await axios.get(`http://localhost:2323/users`)
    return data
}
export const deleteuser=async(id:string)=>{
let data=await axios.delete(`http://localhost:2323/users/${id}`)
return data
}

export const updatesomeuser=async(id:string,user:userdata)=>{
 let data=await axios.put(`http://localhost:2323/users/${id}`,user)
 return data
}