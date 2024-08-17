import React, { useState } from 'react'


interface syam{
    name:string,
    lastname:string,
    email:string,
    status:boolean
}

const BasicCrud = () => {
    const [formdata,setformdata]=useState<syam>({name:"",lastname:"",email:"",status:false})
    const [formdata1,setformdata1]=useState<syam>({name:"",lastname:"",email:"",status:false})
    const [one,setone]=useState<syam>()
    const [show,setshow]=useState<syam[]>([])
    console.log(show,"show---")
    const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }

    const handlechange1=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setformdata1({
            ...formdata1,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=()=>{
        setshow([...show,{name:formdata.name,lastname:formdata.lastname,email:formdata.email,status:false}])
        setformdata({name:"",lastname:"",email:"",status:false})
}
const handledelete=(s:syam)=>{

    let data=show.filter((e)=>{
        return e!==s
    })
    setshow(data)

}

const updaeone=(s:syam)=>{
    setformdata1({name:s.name,lastname:s.lastname,email:s.email,status:s.status})
    setone(s)

}

const handldesubmione=()=>{
    let main={
        name:formdata1.name,
        lastname:formdata1.lastname,
        email:formdata1.email,
        status:formdata1.status
    }

    let data= show.map((e)=>{
        if(e==one)
        {
            return main
        }
        return e
    })
    setshow(data)
}
  return (
    <div>
        <div>
        <div>
            <label>name</label>
            <input name="name" value={formdata.name} onChange={handlechange} type="text"></input>
        </div>
        <div>
            <label>lastname</label>
            <input name="lastname" value={formdata.lastname} onChange={handlechange} type="text"></input>
        </div>
        <div>
            <label>email</label>
            <input name="email" value={formdata.email} onChange={handlechange} type="text"></input>
        </div>
        <button onClick={()=>{
            handleSubmit()
        }}>submit</button>
        </div>
        <div>
            <table>
                <tr>
                    <th>name</th>
                    <th>lastname</th>
                     <th>email</th>

                </tr>
                {show.map((e:syam)=>{
                    return(
                        <tr>
                            <td>{e.name}</td>
                            <td>{e.lastname}</td>
                            <td>{e.email}</td>
                            <td><button onClick={()=>{
                                updaeone(e)
                            }}>update</button><button onClick={()=>{
                                handledelete(e)
                            }}>delete</button></td>

                        </tr>
                    )
                })}
            </table>
        </div>
        <div>
        <div>
        <div>
            <label>name</label>
            <input name="name" value={formdata1.name} onChange={handlechange1} type="text"></input>
        </div>
        <div>
            <label>lastname</label>
            <input name="lastname" value={formdata1.lastname} onChange={handlechange1} type="text"></input>
        </div>
        <div>
            <label>email</label>
            <input name="email" value={formdata1.email} onChange={handlechange1} type="text"></input>
        </div>
        <button onClick={()=>{
           handldesubmione()
        }}>submit</button>
        </div>
        </div>
    </div>
  )
}

export default BasicCrud