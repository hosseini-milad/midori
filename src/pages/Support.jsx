import React from 'react'
import Navbar from "../components/Navbar.jsx"


const Support = () => {
  return (
    <div className="midori-sup">
      <Navbar></Navbar>
      <main className="midori-main">
        <div className="sup-item">
          <div className="icon-wrapper"><img src="public\icon\delivery-truck.png" alt="delivery-truck"/></div>
          <div className="p-wrapper">
            <p>Guarantee Policy</p>
            <p>Midory offers 100% refund or replacement for all Midori parts. <br/>
              Terms and conditions vary per each part, and it depends on the product type and     agreed refund policy
              with vendor. <br/>
              To all end users, please make sure that Midori guarantee card has been filled out     with retailer at the time
              of purchase and keep the card until guarantee period ends. <br/>
              For further information and find out about guaranty policies for all the products     please visit our product
              tab.</p>
          </div>
        </div>
        <div className="sup-item">
          <div className="icon-wrapper"><img src="public\icon\2.png" alt="3"/></div>
          <div className="p-wrapper">
            <p>New parts and mold development</p>
            <p>Midori design and engineering team in collaboration with our vendors network are     fully capable of
              developing new product and mold as per our customer’s request. <br/>
              Customers’ requirements will be discussed and ideal design will be optimized. <br/>
              Terms and Conditions are applied.</p>
          </div>
        </div>
        <div className="sup-item">
          <div className="icon-wrapper"><img src="public\icon\3.png" alt="person"/></div>
          <div className="p-wrapper">
            <p>Become part of Midori family</p>
            <p>Midori welcomes all wholesalers and retailers from cross the globe to become a     Midori dealer. <br/>
              We have a specific procedure for granting Midori dealership to our applicants. <br/>
              Terms and Conditions are applied.</p>
          </div>
        </div>

      </main>

    </div>
  )
}

export default Support
