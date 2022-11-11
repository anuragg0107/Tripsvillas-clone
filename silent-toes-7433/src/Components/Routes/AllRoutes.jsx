import React from 'react'
import {Routes,Route} from "react-router-dom";
import HomePage from '../../Pages/Home/HomePage';
import Product from '../../Pages/Products/Product';
import SingleProduct from '../../Pages/SingleProduct/SingleProduct';
import PrivateRoutes from "./PrivateRoutes"
const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products' element={<Product />} />
        <Route path="/singleproduct" 
        element={
        <PrivateRoutes>
           <SingleProduct />
        </PrivateRoutes>
       } />
    </Routes>
    </div>
  )
}

export default AllRoutes