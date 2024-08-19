import React, { useEffect } from 'react'
import { useState } from 'react';
import Navbar from "../components/Navbar.jsx"
import H0 from "../assets/img/HomeSlides/0.jpg"
import H1 from "../assets/img/HomeSlides/1.jpg"
import H2 from "../assets/img/HomeSlides/2.jpg"
import H3 from "../assets/img/HomeSlides/3.jpg"
import H4 from "../assets/img/HomeSlides/4.jpg"
import HM0 from "../assets/img/HomeSlides/mobile/0.jpg"
import HM1 from "../assets/img/HomeSlides/mobile/1.jpg"
import HM2 from "../assets/img/HomeSlides/mobile/2.jpg"
import HM3 from "../assets/img/HomeSlides/mobile/3.jpg"
import HM4 from "../assets/img/HomeSlides/mobile/4.jpg"
import CarLogo from "../assets/img/HomeSlides/car-logo.png"
const wWidth = window.innerWidth;

const Home = () => {
  const SlideList = wWidth>900?[
    {id:0,title:"t1",image:H0},
    {id:1,title:"t2",image:H1},
    {id:2,title:"t3",image:H2},
    {id:3,title:"t4",image:H3},
    {id:4,title:"t5",image:H4}
  ]:[
    {id:0,title:"t1",image:HM0},
    {id:1,title:"t2",image:HM1},
    {id:2,title:"t3",image:HM2},
    {id:3,title:"t4",image:HM3},
    {id:4,title:"t5",image:HM4}
  ]
  const [slide, setSlide] = useState(1);
  useEffect(()=>{
    setTimeout(()=>setSlide((slide+1)%SlideList.length),5000)
  },[slide])
  console.log(SlideList[slide].image)
  //const Img =SlideList[slide].image
  //console.log(Img)

  return (
    <div className="midori-home" style={{backgroundImage:`url("${SlideList[slide].image}")`}}>
      <Navbar></Navbar>
      <main className="midori-main">
        <p>Fine Auto Spare Parts</p>
        <img src={CarLogo} alt="Logos" />
      </main>
      <span className="indicators">
        {SlideList.map((item) => {
          return (
            <button
              key={item.id}
              className={
                slide == item.id ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(item.id)}
            ></button>
          );
        })}
        </span>

    </div>
  )
}

export default Home
