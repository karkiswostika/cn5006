import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Welcome from './myapp.jsx'
import Product from './Product.jsx'
import DiscountCalculator from './DiscountCalculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    <Welcome name= "Swostika"/>
    <Product productName="Laptop" price={800} /> <h2>Mobile</h2>
    <DiscountCalculator productname= "Mobile" price= {1000}/>
  </StrictMode>,
)
