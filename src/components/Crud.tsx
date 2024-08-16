import React, { useEffect, useState } from 'react'
import { deleteuser, getuserdata, submitUserData, updatesomeuser } from '../service/apisServie'
import "../App.css"
import { useDispatch, useSelector } from 'react-redux'
import { setNumberd } from '../slices/numberIncrement'

interface allstate{
    id:string,
    name:string,
    email:string,
    password:string,
   
}

interface hellone{
    reusable:{
        number:number
    }

}



const Crud = () => {

    const [formdata,setformdata]=useState<allstate>({id:"",name:"",email:"",password:""})
    const [show,setshow]=useState<allstate[]>([])
    const [visible,setvisible]=useState(false)
    // const [one,setone]=useState<allstate>()
    const [one, setone] = useState<allstate>()
    const [formdata1,setformdata1]=useState<allstate>({id:"",name:"",email:"",password:""})
    const handlecHANGE1=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setformdata1({
            ...formdata1,
            [e.target.name]:e.target.value
        })
    }
    const handlecHANGE=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }

    const submituserData=async()=>{
        let somesdata={
            name:formdata.name,
            email:formdata.email,
            password:formdata.password
        }
      let data=await submitUserData(somesdata)
      console.log(data.data)
      setformdata({id: '',name:"",email:"",password:""})
    }

    useEffect(()=>{
        dispalydaataonscraeen()
    },[show,formdata.name,formdata.email,formdata.password])

    const dispalydaataonscraeen=async()=>{
      let data=await getuserdata()
      setshow(data.data)}

    const onedeleteuser=async(s:string)=>{
      let data=await deleteuser(s)
      console.log(data,"delteuser---")
      let hell=data.data.id
      let fill=show.filter((e)=>{
        return e.id!==hell
      })
      setshow(fill)
    }

    const userupdate=(k:allstate)=>{
        setvisible(true)
        setformdata1({name:k.name,email:k.email,password:k.password,id:k.id})
        setone(k)
    }

    const oneuserupdate=async()=>{
    
    if (one) {  // Check if 'one' is not undefined
        let somess = {
            name: formdata1.name,
            email: formdata1.email,
            password: formdata1.password
        }
        let data = await updatesomeuser(one.id, somess);
        // console.log(data);
    }
    }



    const dispatch=useDispatch()
    const select=useSelector((state:hellone)=>state.reusable.number)
    
  return (
    <div>
        <button onClick={()=>{
           dispatch(setNumberd(false))
        }}>dec</button>
        <h1>{select}</h1>
        <button onClick={()=>{
 dispatch(setNumberd(true))
        }}>inc</button>

        <div>
            <div>
                <label>name</label>
                <input name='name' value={formdata.name} onChange={handlecHANGE} type="text"></input>
            </div>
            <div>
                <label>email</label>
                <input name="email" value={formdata.email} onChange={handlecHANGE} type="text"></input>
            </div>
            <div>
                <label>password</label>
                <input name="password" value={formdata.password} onChange={handlecHANGE} type="text"></input>
            </div>
            <button onClick={()=>{
                submituserData()
            }}>submit</button>
        </div>
        <div>
            <table>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>action</th>
                    
                </tr>
                {show.map((e:allstate)=>{
                    return(
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.password}</td>
                            <td><button onClick={()=>{
                                userupdate(e)
                            }}>update</button><button onClick={()=>{onedeleteuser(e.id)}}>Delete</button></td>
                            
                        </tr>
                    )
                })}
            </table>
        </div>


       {visible==true && <div>
            <div>
                <label>name</label>
                <input name='name' value={formdata1.name} onChange={handlecHANGE1} type="text"></input>
            </div>
            <div>
                <label>email</label>
                <input name="email" value={formdata1.email} onChange={handlecHANGE1} type="text"></input>
            </div>
            <div>
                <label>password</label>
                <input name="password" value={formdata1.password} onChange={handlecHANGE1} type="text"></input>
            </div>
            <button onClick={()=>{
                oneuserupdate()
            }}>submit</button>
        </div>
     }

    </div>
  )
}

export default Crud