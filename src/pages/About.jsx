import React from 'react'
import Navbar from "../components/Navbar.jsx"


const About = () => {
  return (
    <div className="midori-au">
      <Navbar></Navbar>
      <main class="midori-main">
        <div class="p-wrapper">
          <p>Midori has been stablished in 2010, with a group of passionate individuals with solid  background in automotive
          and railway industries.<br/>
          The founders have collectively more than a century of experiences as engineering,   procurement, quality
          executives in<br/>
          well-known automotive manufacturers.<br/>
          Midori offers automotive spare parts in 9 product categories.<br/>
          Midori has collected world class and in many case OEM vendors from all over the world, which  includes but not
          limited to Germany,<br/>
          Italy, Taiwan, Turkey and China.<br/>
          Midori vendors are selected through strict “vendor criteria selection and ranking” procedure  and are audited
          time to time according to internal Midori standard procedure.
          </p>
        </div>
        <div class="p-wrapper">
          <p>Midori vendor network has been maintained and optimized over years and we are in a long  term agreement with our
          selected vendors.<br/>
          It helps us to maintain our quality level and ensure our customers a consistent quality level   and availability
          of products.<br/>
          With strict quality policy in place, we do conduct quality control and assurance through  different stage of
          product development it<br/>
          includes regular sampling and inspections.<br/>
          Our testing and inspection process is conducted in five phases; raw material, in progress   production, final
          product,
          preshipment and custom.</p>
        </div>
        <div class="title-wrapper">
          <h1>Our Vision</h1>
          <p>Premium and consistent quality, 98% order fulfillment rate, combined with transparent    customer policy<br/>
            lead us to be positioned as one of top auto aftermarket brands, globally.</p>
        </div>

      </main>

    </div>
  )
}

export default About
