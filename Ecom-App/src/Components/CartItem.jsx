import React from 'react';
import CartAmountToggle from './CartAmountToggle';
import { useCartContext } from './ContextApi/CartContext';


const CartItem = ({id,name,image,price,amount}) => {

    let data = {id,name,image,price,amount};
    console.log('data is -',data);
  return (
       <> 
                 
                          <div className  = "firstside-cart" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr',
                          margin:'1%'}}>

                                 <div className = "item-first" >
                                      <div className = "first-part"> 
                                        <img src = {image} style = {{width:'60%'}} alt = "first" /> 
                                      </div>
                                      <div className = "second-part">  
                                            <span style = {{fontSize:'23px'}}> {name.toUpperCase()}  </span>  
                                      </div>
                                  </div>

                                  <div className = "price-item" style = {{padding:'5%'}}> 
                                          <span style = {{fontSize:'23px'}}>   {price}  </span> 
                                  </div>

                                   <div className = "quantity-item">
                                           Quantity 
                                            {/* <CartAmountToggle 
                                            amount = {amount}
                                            setIncrease = {() => setIncrease()}
                                            setDecrease = {() => setDecrease()}
                                            />   */}
                                   </div>

                                   <div className = "subtotal-item"> 
                                          Subtotal 
                                   </div>

                                  <div className = "remove-item" style = {{textAlign:'center'}}>
                                              <button style = {{padding:'3% 6%'}} onClick={() => removefromcart()}>   Remove  </button>
                                  </div>
                          </div>
                  
          </> 
  )
}

export default CartItem