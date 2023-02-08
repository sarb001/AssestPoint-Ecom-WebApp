import React from 'react'
import NavMenu from './NavMenu'

const Cart = () => {
  return (
    <div> 
            <NavMenu />
            <div className="cart-container" style = {{textAlign:'center'}}>
            <h2> Cart here  </h2>   
        </div>
      
    </div>
  )
}

export default Cart