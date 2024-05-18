import React from 'react';
import Navbar from "../components/Navbar.jsx"

const Home = () => {
  return (
    <div className="midori-home">
      <Navbar></Navbar>
      <main className="midori-main">
        <p>Fine Auto Spare Parts</p>
        <i className="fa fa-remove"></i>
      </main>
    </div>
  )
}

export default Home
