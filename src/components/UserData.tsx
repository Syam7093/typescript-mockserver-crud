import React, { useContext, useState } from 'react';
import { usesContext } from '../App';

const UserData = () => {
  const [main, setmain] = useState('PRAVEEN---');
  const { one, setone } = useContext(usesContext);

  const [show,setshow]=useState<any>([])
  const handleDelte=(m:string)=>{

    let data=show.filter((e:any)=>{
      return e.id!==m
    })
    setshow(data)

  }

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
