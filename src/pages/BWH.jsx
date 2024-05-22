import React, { useEffect, useState } from 'react'
import Submenu from "../components/Submenu.jsx"
import productcards from "../productcards.json"
const baseUrl="https://midoriadmin.dkmehr.com"
import logo from "../assets/img/midori-logo.svg"
import footer from "../assets/img/Product-Bearings-and-Wheel-Hub-footer.jpg"
import header from "../assets/img/Product-Bearings-and-Wheel-Hub--banner.jpg"
import p1 from "../assets/img/products/2.jpg"
import p2 from "../assets/img/products/3.jpg"
import p3 from "../assets/img/products/4.jpg"
import p4 from "../assets/img/products/5.jpg"
import p5 from "../assets/img/products/6.jpg"
import p6 from "../assets/img/products/7.jpg"

const Product = () => {
  const [Open , setOpen] = useState(false);
  const [OpenSub , setOpenSub] = useState(false);
  const openMenu=(e)=>{
    setOpen(e)
    setOpenSub(0)
  }
  const url = window.location.pathname.split('/')
  const productId = url?url[2]:''
  const [productData,setProductData] = useState()
  // const [footerText,setFooterText] = useState(["",""])
  console.log(productData)
  
  useEffect(() => {
    const postOptions={
        method:'post',
        headers: {
            "content-type": "application/json"
        },
        body:JSON.stringify({productId:productId})
    }
    fetch(baseUrl+
    "/api/panel/product/fetch-product",postOptions)
        .then(res => res.json())
        .then(
        (result) => {
          setProductData(result.filter)
          setFooterText(result.filter&&result.filter.footer
            &&result.filter.footer.split('|'))
        },
        (error) => {
            console.log(error);
        }
        )
        .catch((error)=>{
        console.log(error)
        })

    },[])
    if(!productData)
      return(
        <div className="midori-product-steering">
          waiting...
        </div>
      )
  return (
    // <div className="midori-product-steering">
    //   <NavbarP data={productData} baseUrl={baseUrl}/>
    //   <main className="midori-main">
    //     <section className="product-sec">
    //       <p className="section-title">Product Range</p>
    //       <div className="container">
    //         {productData.range&&productData.range.map((product)=>(
    //         <div className="card-wrapper" key={product.id}>
    //           <div className="card">
    //             <img src={baseUrl+product.image} alt={product.title}/>
    //             <div className="title">{product.title}</div>
    //           </div>
    //         </div>))}
    //         </div>
    //     </section>
    //     <p className="product-name-wrapper">{productData.rangeText}</p>
    //     <section className="adv-list">
    //       <p className="section-title">{productData.advantageText}
    //       </p>
    //       <p className='advantageUL' 
    //         dangerouslySetInnerHTML={{__html:productData.advantages}}>
            
    //       </p>
    //     </section>
    //   </main>
    //   <footer className="midori-footer">
    //     <img src={baseUrl+productData.footerUrl} className='footerImage'
    //       alt={productData.title}/>
    //   </footer>

    // </div>
    <div className="midori-product-steering">
    <div className="midori-header">
      <img className="img-web" src={header} alt="header"/>

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
    </div>
    <main className="midori-main">
      <section className="product-sec">
        <p className="section-title">Product Range</p>
      </section>
      <p className="product-name-wrapper">Deep Groove Ball Bearing, Tapered Roller Bearing, Clutch Release Bearing, Timing Tensioner, Driveshaft Support Bearings, Driveshaft Support Bearings, Wheel Hub Assembly</p>
      <section className="adv-list">
        <p className="section-title">Deep Groove Ball Bearing Key Characteristics 
        </p>
        <img src={p1} alt="product" />
        <ul>
          <li>Axial loads in both directions </li>
          <li>Low frictional torque and high-speed components ideal </li>
          <li>Minimum noise and vibration</li>
        </ul>
      </section>
      <section className="adv-list">
        <p className="section-title">Tapered Roller Bearing Key Characteristics  
        </p>
        <img src={p2} alt="product" />
        <ul>
          <li>Optimized bearing performance </li>
          <li>Precision-matched cup and cone handle radial and thrust loads</li>
          <li>Design to prevent premature bearing failures </li>
        </ul>
      </section>
      <section className="adv-list">
        <p className="section-title">Clutch Release Bearing Key Characteristics   
        </p>
        <img src={p3} alt="product" />
        <ul>
          <li>Allows maximum speeds at maximum loads.</li>
          <li>Resists wear for longest durability. </li>
          <li>Noise and Vibration Minimized</li>
          <li>Self-aligning maximizes controls clutch conditions associated with misaligned drivetrain components.</li>
          <li>Efficient sealing system keeps contaminants out and grease in </li>
        </ul>
      </section>
      <section className="adv-list">
        <p className="section-title">Timing Tensioner Key Characteristics    
        </p>
        <img src={p4} alt="product" />
        <ul>
          <li>Accurate dimensional bearing clearance</li>
          <li>Damping integrated into the design</li>
          <li>Round or angled wire spring</li>
          <li>Heat resistant pulley seal (-40° to +150°c)</li>
          <li>High load capacity pulley</li>
          <li>Premium quality bearing grease </li>
        </ul>
      </section>
      <section className="adv-list">
        <p className="section-title">Driveshaft Support Bearings Key Characteristics    
        </p>
        <img src={p5} alt="product" />
        <ul>
          <li>Pre-lubricated with metal reinforced seals is applied to prevent contamination.</li>
          <li>Design to isolate the driveshaft from damaging vibration</li>
          <li>High quality steel or aluminum frames enable added strength and long life in severe climate condition </li>
        </ul>
      </section>
      <section className="adv-list">
        <p className="section-title">Wheel Hub Assembly Key Characteristics    
        </p>
        <img src={p6} alt="product" />
        <ul>
          <li>Extreme Heat Resistance</li>
          <li>Maximized Efficiency </li>
          <li>Extended Service Life through low friction design</li>
          <li>Operational confidence </li>
          <li>Minimized temperature peaks</li>
        </ul>
      </section>
    </main>
    <footer className="midori-footer">
      <img src={footer} alt="steering wheel"/>
    </footer>

  </div>

  )
}

export default Product
