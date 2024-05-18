import React, { useEffect } from 'react'
import logo from "../assets/img/midori-logo.svg"
import { useState } from 'react'
import Submenu from './Submenu'

const navbar = () => {
  const [Open , setOpen] = useState(false);
  const [OpenSub , setOpenSub] = useState(false);
  //console.log(Open)
  const openMenu=(e)=>{
    setOpen(e)
    setOpenSub(0)
  }
  return (
      <div className="midori-header">
        <label className="hamburger-menu">
          <input className="hamBtn" id="hamburger-btn" type="checkbox" 
  onChange={(e)=>openMenu(e.target.checked)}/>
        </label>
        <div className="log-wrapper">
          <img src={logo} alt="LOGO"/>
        </div>

        <div className={Open? "main-dropmenu display-on" : "main-dropmenu" }>
          <ul className="menu-list">
            <li className="menu-item"><a href="/">Home</a></li>
            <li className="menu-item"><a href="/about">About Us</a></li>
            <li className="menu-item"><a className="sub-btn" href="#"
              onClick={()=>setOpenSub(1)}>Products</a></li>
            <li className="menu-item"><a href="/support">Support</a></li>
            <li className="menu-item"><a href="/contact">Contact us</a></li>
          </ul>
          {OpenSub?<Submenu/>:<></>}
        </div>


      </div>


  )
}

export default navbar
