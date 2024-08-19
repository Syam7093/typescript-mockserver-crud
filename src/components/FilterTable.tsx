import React, { useState } from 'react'

const FilterTable = () => {
    const [data,setdata]=useState([
        {id:1,name:"syam",age:25,gender:"male"},
        {id:1,name:"raju",age:35,gender:"female"},
        {id:1,name:"janu",age:45,gender:"female"},
        {id:1,name:"ravi",age:34,gender:"male"},
        {id:1,name:"jam",age:56,gender:"female"},
        {id:1,name:"praveen",age:67,gender:"male"},
    ])
    const [genders,setgendrs]=useState("")
    console.log(genders,"genders--")
    const filterdata=genders?data.filter((e)=>{
        return e.gender=="male"
    }):data
  return (
    <div>
        <select onChange={(e)=>{setgendrs(e.target.value)}}>
            <option>male</option>
            <option>female</option>

        </select>
        <table>
            <tr>
                <th>name</th>
                <th>age</th>
                <th>gender</th>
            </tr>
            {filterdata.map((e)=>{
                return(
                    <tr>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.gender}</td>

                    </tr>
                )
            })}
        </table>
    </div>
  )
}

export default FilterTable