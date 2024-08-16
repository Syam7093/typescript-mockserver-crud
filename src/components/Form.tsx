import React, { useContext, useEffect } from 'react'
import { usesContext } from '../App'
import UserData from './UserData'
import Child from './Child'


const Form = () => {
    const {one,setone}=useContext(usesContext)
    

    const handledata=(val:string)=>{
        console.log(val,"valll----")
    }
  return (
    
    <div>
       <Child handledata={handledata}></Child>
    </div>
  )
}

export default Form