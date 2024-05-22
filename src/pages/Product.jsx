import React, { useEffect, useState } from 'react'
import NavbarP from "../components/NavbarP.jsx"
import productcards from "../productcards.json"
const baseUrl="https://midoriadmin.dkmehr.com"

const Product = () => {
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
    <div className="midori-product-steering">
      <NavbarP data={productData} baseUrl={baseUrl}/>
      <main className="midori-main">
        <section className="product-sec">
          <p className="section-title">Product Range</p>
          <div className="container">
            {productData.range&&productData.range.map((product)=>(
            <div className="card-wrapper" key={product.id}>
              <div className="card">
                <img src={baseUrl+product.image} alt={product.title}/>
                {product.title?<div className="title">{product.title}</div>:<></>}
              </div>
            </div>))}
            </div>
        </section>
        {productData.rangeText?<p className="product-name-wrapper">{productData.rangeText}</p>:<></>}
        <section className="adv-list">
          <p className="section-title">{productData.advantageText}
          </p>
          <p className='advantageUL' 
            dangerouslySetInnerHTML={{__html:productData.advantages}}>
            
          </p>
        </section>
      </main>
      <footer className="midori-footer">
        <img src={baseUrl+productData.footerUrl} className='footerImage'
          alt={productData.title}/>
      </footer>

    </div>
  )
}

export default Product
