import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const Navbar = () => {
  return (
    <div style={{backgroundColor:"green"}}>
        <Link to="/">form</Link>
        <Link to="/us">userdata</Link>
        <Link to="/crud">crud</Link>
        <Link to="/basicCrud">janu</Link>
        <Link to="/select">Select table</Link>
        <Link to="/filter">Filter table</Link>





    </div>
  )
}

export default Navbar