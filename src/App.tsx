import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import UserData from './components/UserData';
import Navbar from './components/Navbar';
import Crud from './components/Crud';

import BasicCrud from './components/BasicCrud';

interface some{
  one:string[],
  setone:React.Dispatch<React.SetStateAction<string[]>>

}

export const usesContext=createContext<some>({one:[],setone:()=>{}})

function App() {
  const [one,setone]=useState<string[]>([])
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <usesContext.Provider value={{one,setone}}>
      <Routes>
        <Route path="/" element={<Form></Form>}></Route>
        <Route path="/us" element={<UserData ></UserData>}></Route>
        <Route path="/crud" element={<Crud></Crud>}></Route>
        <Route path="/basicCrud" element={<BasicCrud></BasicCrud>}></Route>

      </Routes>
      </usesContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
