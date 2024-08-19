import React, { useState } from 'react'

interface syam{
    name:string,
    age:number,
    status:boolean,
    id:number
}

const SelectTable = () => {

    const table=['TABLE','FAVOURTIETABLE']
    const [tab,settab]=useState("TABLE")
    console.log(tab,"tab-----")

    const [data,setdata]=useState([
        {id:1,name:"syam",age:20,status:false},
        {id:2,name:"sai",age:22,status:false},
        {id:3,name:"manohar",age:23,status:false},
        {id:4,name:"ganesh",age:40,status:false},
        {id:5,name:"suraj",age:30,status:false},
        {id:6,name:"ramehs",age:50,status:false},
    ])

    const filterdadta=tab=="TABLE"?data:data.filter((e)=>{return e.status==true})

    const handlescelcttable=(s:string)=>{
        settab(s)
    }

    const handleselectonestatus=(s:syam)=>{
        let main=data.map((e)=>{
            return e==s?{...e,status:!e.status}:e
        })
        setdata(main)

    }

    const handleselectonestatusall=(checked:boolean)=>{

        let datas=data.map((e)=>{
            return {...e,status:checked}
        })
        setdata(datas)

    }
    let allcheck=filterdadta.length>0 && filterdadta.every((e)=>{
        return e.status
    })

  return (
    <div>
        {table.map((e)=>{
            return(
                <button onClick={()=>{
                    handlescelcttable(e)
                }}>{e}</button>
            )
        })}
        <div>
            <table>
                <tr>
                    <th><input onChange={(e)=>{handleselectonestatusall(e.target.checked)}} checked={allcheck}  type="checkbox"></input>slno</th>
                    <th>name</th>
                    <th>gender</th>
                    <th>favourite</th>
                </tr>
                {filterdadta.map((e)=>{
                   return(
                    <tr>
                        <td>{e.id}<input onChange={()=>{  handleselectonestatus(e)}} checked={e.status} type="checkbox"></input></td>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    {e.status==false?<td onClick={()=>{
                        // handleselectonestatus(e)
                    }}>off</td>:<td onClick={()=>{
                        // handleselectonestatus(e)
                    }}>on</td>}
                </tr>
                   )
                })}
            </table>
        </div>
    </div>
  )
}

export default SelectTable