import React from 'react';
import CartAmountToggle from './CartAmountToggle';
import { useCartContext } from './ContextApi/CartContext';


const CartItem = ({id,name,image,price,amount}) => {

  // amount = quantity 
      const { setIncrease ,setDecrease ,removefromcart ,total_price  ,shipping_fee } = useCartContext();

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
                                            <span style = {{fontSize:'23px'}}> {name}  </span>  
                                      </div>
                                  </div>

                                  <div className = "price-item" style = {{padding:'5%'}}> 
                                          <span style = {{fontSize:'23px'}}>   {price}  </span> 
                                  </div>

                                    <div className = "quantity-item"> 
                                    <CartAmountToggle
                                      amount = {amount}
                                      setIncrease = {() => setIncrease(id)}
                                      setDecrease = {() => setDecrease(id)}  
                                      /> 
                                    </div>

                                   <div className = "subtotal-item"> 
                                             {price * amount}
                                   </div>

                                  <div className = "remove-item" >
                                              <button style = {{padding:'3% 6%'}} onClick={() => removefromcart(id)}>   Remove  </button>
                                  </div>
                          </div>
                  
                          <div className = "totalitems-cart" style = {{paddingTop:'3%',textAlign:'end' ,display:'grid'}}>
                             <span>  SubTotal Rs. -- {total_price} </span>
                             <span>  Shipping Fees  - {shipping_fee}  </span>
                            <span>  Total Price - {total_price + shipping_fee} </span>
                          </div>

          </> 
  )
}

export default CartItem