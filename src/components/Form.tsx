import React, { useContext, useEffect, useState } from 'react';
import { usesContext } from '../App';
import Child from './Child';
import axios from 'axios';

interface syamsai {
  image: string;
  price: number;
  title: string;
}

const Form = () => {
  const { one, setone } = useContext(usesContext);
  const [visible, setvisible] = useState(false);

  const [show, setshow] = useState<syamsai>();
  const [second, setsecond] = useState<syamsai[]>([]);

  const handledata = (val: string) => {
    // console.log(val,"valll----")
  };

  useEffect(() => {
    someddata();
  }, []);

  const someddata = async () => {
    let data = await axios.get('https://fakestoreapi.com/products');
    setshow(data.data[0]);
    setsecond(data.data);
    // console.log(data.data[0],"hhhhh----")
  };

  const handleclione = (s: syamsai) => {
    console.log(s, 'sdfsdsf');
    setshow(s);
    setvisible(false);
  };

  return (
    <div>
      <Child handledata={handledata}></Child>
      <div>
        <div
          onClick={() => {
            setvisible(true);
          }}
        >
          <img src={show?.image} height="50px" width="40px" alt={show?.title} />
        </div>
      </div>
      <h1>-----------------------------------------</h1>
      {visible && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close"
              onClick={() => setvisible(false)}
            >
              &times;
            </span>
            {second.map((e: syamsai) => {
              return (
                <div
                  key={e.title}
                  onClick={() => {
                    handleclione(e);
                  }}
                >
                  <img src={e.image} height="50px" width="50px" alt={e.title} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
