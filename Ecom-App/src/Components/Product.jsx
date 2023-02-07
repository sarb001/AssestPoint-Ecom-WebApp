import React from 'react'
import { NavLink } from 'react-router-dom';

const Product = (item) => {

    const {id,name,title,image,price,company} = item;

  return (
    <div> 
            <div className  =  "product-outercontainer" >
              <NavLink  to = {`/singleproduct/${id}`}>
                  <div className = "product-container" style = {{width:'100%',backgroundColor:'burlywood',textAlign:'center'}}>
                        <div className="product-name"> {name.toUpperCase()} </div>
                        <div className="product-title"> {title} </div>
                        <div className="product-price"> Rs.- {price} </div>
                        <div className="product-company">  {company} </div>
                        <div className="product-image">
                          <img src = {image} style = {{width:'70%'}} />
                        </div>
                  </div>
              </NavLink>
            </div>
    </div>
  )
}

export default Product