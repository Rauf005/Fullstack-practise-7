import React from 'react'
import style from "./style.module.css"
import { FaBars } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.nav}>
      <h1>Podca</h1>
      <div>
      <Link to={"/add"}>  <button className={style.add}> Add</button></Link>
      <h2 className={style.bar}><FaBars /></h2>
      </div>
<div className={style.side}>
    <ul>
        <Link to=""><li>Home</li></Link>
        <Link><li>Dropdown</li></Link>
        <Link><li>About</li></Link>
        <Link to="favorites"><li>Wishlist</li></Link>
    </ul>
</div>
      </div>
    </div>
  )
}

export default Navbar
