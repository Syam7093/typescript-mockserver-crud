import React, { useState } from 'react'



interface noon{
    handledata:(val:string)=>void
}

const Child: React.FC <noon>= ({handledata}) => {
    const [some,setsome]=useState("RAMAN-----")
    handledata(some)
  return (
    <div>Child</div>
  )
}

export default Child