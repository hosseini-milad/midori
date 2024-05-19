import React from 'react'
import logo from "../assets/img/midori-logo.svg"
import { useState } from 'react'
import Submenu from './Submenu'

const NavbarP = (props) => {
  const [Open , setOpen] = useState(false);
  const [OpenSub , setOpenSub] = useState(false);
  const data = props.data
  //console.log(Open)
  const openMenu=(e)=>{
    setOpen(e)
    setOpenSub(0)
  }
  return (
    <div className="midori-header">
      <img className="img-web" src={props.baseUrl+data.imageUrl} alt={data.title}/>
      <img className="img-mobile" src={props.baseUrl+data.imageUrl} alt={data.title}/>

      <label className="hamburger-menu">
        <input id="hamburger-btn" type="checkbox" onChange={(e)=>openMenu(e.target.checked)}/>
      </label>
      <div className="log-wrapper">
        <img src={logo} alt="LOGO"/>
      </div>

      <div className={Open? "main-dropmenu display-on" : "main-dropmenu" }>
        <ul className="menu-list">
          <li className="menu-item"><a href="/">Home</a></li>
          <li className="menu-item"><a href="/about">About Us</a></li>
          <li className="menu-item"><a className="sub-btn" href="#" onClick={()=>setOpenSub(1)}>Products</a></li>
          <li className="menu-item"><a href="/support">Support</a></li>
          <li className="menu-item"><a href="/contact">Contact us</a></li>
        </ul>
        {OpenSub?<Submenu/>:<></>}
      </div>
      <img src="/public/cover.png" className='imageCover'/>
  </div>

  )
}

export default NavbarP
