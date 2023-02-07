import React from 'react'
import {BrowserRouter , Route ,Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Login from './Components/Login';
import PagenotFound from './Components/PagenotFound';
import Products from './Components/Products';
import Signup from './Components/Signup';
import SingleProduct from './Components/SingleProduct';

const MenuRoutes = () => {
  return (
    <div>  
    <BrowserRouter >
        <Routes>
            <Route exact path = "/" element = {<Home />}>      </Route>
            <Route path = "/signup" element = {<Signup /> }>   </Route>
            <Route path = "/login" element = {<Login  /> }>   </Route>
            <Route path = "/products" element = {<Products  /> }>   </Route>
            <Route path = "/singleproduct/:id" element = {<SingleProduct  /> }>   </Route>
            <Route path = "/cart" element = {<Cart /> }>   </Route>
            <Route path = "*" element = {<PagenotFound  /> }>   </Route>
        </Routes>
    </BrowserRouter>      
    </div>
  )
}

export default MenuRoutes