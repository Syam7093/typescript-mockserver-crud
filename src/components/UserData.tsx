import React, { useContext, useEffect, useState } from 'react';
import { usesContext } from '../App';
import axios from 'axios';


interface helloone{
  image:string,
  title:string
}

const UserData = () => {
  const [main, setmain] = useState('PRAVEEN---');
  const { one, setone } = useContext(usesContext);
  const [dis,setdis]=useState<helloone[]>([])
  const [search,setarach]=useState("")

  const [show,setshow]=useState<any>([])
  const handleDelte=(m:string)=>{

    let data=show.filter((e:any)=>{
      return e.id!==m
    })
    setshow(data)

  }
  useEffect(()=>{
    ssomting()
  },[])

  const ssomting=async()=>{
    let data=await axios.get("https://fakestoreapi.com/products")
    setdis(data.data)
  }
  const filterdata=dis.filter((e)=>{
    return e.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div>
      <div style={{ backgroundColor: 'green', overflow: 'hidden' }}>
        <h1 style={styles.movingText}>syam</h1>
      </div>
      <button onClick={()=>{
        setshow([...show,{id:Date.now()}])
      }}>create</button>
      <button onClick={()=>{
        setshow([])
      }}>clear</button>

      <div>
        {
          show.map((e:any)=>{
            return(
              <div>
                <select key={e.id}>
                  <option>name</option>
                  <option>age</option>
                  <option>gender</option>
                  

                </select>
                <button onClick={()=>{
                  handleDelte(e.id)
                }}>X</button>
              </div>
            )
          })
        }
      </div>
      <input type="text" onChange={(e)=>{setarach(e.target.value)}}></input>
      <div>
        {filterdata.map((e)=>{
          return(
            <div>
              <img src={e.image} height="50px" width="50px"></img>
              <h4>{e.title}</h4>
            </div>
          )
        })}
      </div>
    </div>
  );
};

const styles = {
  movingText: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    position: 'relative' as 'relative',
    animation: 'move 20s linear infinite',
  },
};

// Adding the keyframes in global styles
const styleSheet = document.styleSheets[1];
const keyframes =
  `@keyframes move {
    from {
      left: 100%;
    }
    to {
      left: -100%;
    }
  }`;

styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default UserData;
