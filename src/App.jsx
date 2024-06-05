import {Route , createBrowserRouter , createRoutesFromElements , RouterProvider} from 'react-router-dom';
import React from 'react';
import "./index.css";
import "./fontAwesome.css";
import Product from './pages/Product.jsx';
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Support from './pages/Support.jsx'
import BWH from './pages/BWH.jsx'
import SP from './pages/SP.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route>
    < Route index element={<Home/>} />
    < Route path='/about' element={<About/>} />
    < Route path='/products/:id' element={<Product/>} />
    < Route path='/products/BearingsWheelHub' element={<BWH/>} />
    < Route path='/products/SuspensionParts' element={<SP/>} />
    < Route path='/support' element={<Support/>} />
    < Route path='/contact' element={<Contact/>} />
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
