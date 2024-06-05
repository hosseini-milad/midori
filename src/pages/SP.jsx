import React, { useEffect, useState } from 'react'
import Submenu from "../components/Submenu.jsx"
import productcards from "../productcards.json"
const baseUrl="https://midoriadmin.dkmehr.com"
import logo from "../assets/img/midori-logo.svg"
import footer from "../assets/img/Suspension-Parts-Footer.jpg"
import header from "../assets/img/Suspension-Parts-Header.jpg"
import p1 from "../assets/img/products/sp2.jpg"
import p2 from "../assets/img/products/sp3.jpg"
import p3 from "../assets/img/products/sp4.jpg"
import p4 from "../assets/img/products/sp5.jpg"
import p5 from "../assets/img/products/sp6.jpg"
import p6 from "../assets/img/products/sp7.jpg"

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
          <li className="menu-item"><a className="sub-btn" href="#" onClick={()=>setOpenSub(1)}>Products</a><i className="fa-solid fa-chevron-left"></i></li>
          <li className="menu-item"><a href="/support">Support</a></li>
          <li className="menu-item"><a href="/contact">Contact us</a></li>
        </ul>
        {OpenSub?<Submenu/>:<></>}
      </div>
    </div>
    <main className="midori-main">
    <section className="product-sec">
          <p className="section-title">Product Range</p>
          <div className="container sp-container">
            
            <div className="card-wrapper">
              <div className="card">
                <img src={p1} alt={p1}/>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <img src={p2} alt={p2}/>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <img src={p3} alt={p3}/>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <img src={p4} alt={p4}/>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <img src={p5} alt={p5}/>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <img src={p6} alt={p6}/>
              </div>
            </div>
          </div>
        </section>
      <p className="product-name-wrapper">Shock Absorber, Strut, Strut Mount and Bearing </p>
      <section className="adv-list">
        <p className="section-title">Suspension Parts Key Characteristics: 
        </p>
        <ul>
          <li>Engineered to Resist Early Part Wear</li>
          <li>Electro-Mechanical Coating </li>
          <li>Reliable Protection Against Abrasives</li>
          <li>Salt Spray Tested </li>
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
