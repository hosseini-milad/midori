import React from 'react'
import Navbar from "../components/Navbar.jsx"


const Contact = () => {
  return (
    <div className="midori-cu">
      <Navbar></Navbar>
      <main className="midori-main">
        <div className="p-wrapper">
          <p>Please send your inquiry through box below and we will get back to you in two working    days Or alternatively you
            can contact us via email<br/><span>info@midoriparts.com </span></p>
        </div>
        <form className="cu-form" action="#">
          <p className="mobile">info@midoriparts.com</p>
          <input type="text" name="" id="" placeholder="Your Name"/>
          <input type="text" name="" id="" placeholder="Job"/>
          <textarea name="" id="" placeholder="Messages"></textarea>
          <button type="submit" className="more-btn">Send</button>
        </form>
    </main>

    </div>
  )
}

export default Contact
