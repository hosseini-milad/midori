import React, { useEffect, useState } from 'react'
import NavbarP from "../components/NavbarP.jsx"
import productcards from "../productcards.json"
import list from "../list.json"
const data = [
      {"id":"1","title":"Control Arms","url":"controlArm","imageUrl":"/public/product/1.webp"},
      {"id":"2","title":"Stabilizers","imageUrl":"public\\product\\2.webp"},
      {"id":"3","title":"Tie Rod Ends","imageUrl":"public\\product\\3.webp"},
      {"id":"4","title":"Bushings","imageUrl":"public\\product\\4.webp"},
      {"id":"5","title":"Ball Joints","imageUrl":"public\\product\\5.webp"}
]

const Product = () => {
  const url = window.location.pathname.split('/')
  const productId = url?url[2]:''
  console.log(productId)
  "midori | contorl Arm"

  const [boardArray,setBoardArray] = useState()
    useEffect(()=>{
        const body={
          productId:productId
        }
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(body)
          }
      fetch("https://panel.mehrgaz.com/api" + "/panel/product/list-product",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
            if(result.error){
              
            }
            setBoardArray(result)
        },
        (error) => {
          console.log(error);
        }
      )
    },[])

  return (
    <div className="midori-product-steering">
      <NavbarP/>
      <main className="midori-main">
        <section className="product-sec">
          <p className="section-title">Product Range</p>
          <div className="container">
            {data&&data.map((product)=>(
            <div className="card-wrapper" key={product.id}>
              <div className="card">
                <img src={product.imageUrl} alt={product.title}/>
                <div className="title">{product.title}</div>
              </div>
            </div>))}
            </div>
        </section>
        <section className="adv-list">
          <p className="section-title">Midori Advantages at a Glance
          </p>
          <ul>
            {list&&list.map((listitem)=>(
              <li key={listitem.id}>
              <div className="circle"></div>{listitem.text}
            </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="midori-footer">
        <div className="white"></div>
        <img src="/public\banners\Product-Steering-Parts-footer.webp" alt="steering wheel"/>
        <div className="p-wrapper">
          <p>Guarantee Policy</p>
          <p>2 years or 75,000 km</p>
        </div>
      </footer>

    </div>
  )
}

export default Product
