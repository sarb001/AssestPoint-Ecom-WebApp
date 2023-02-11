import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import { useCartContext } from './ContextApi/CartContext';
import { useProductContext } from './ContextApi/ProductContext';
import Login from './Login';


const Cart = () => {
  
  const navigate =  useNavigate();
  const  userisloggedin = JSON.parse(localStorage.getItem('userinfo'))

   const {  singleprod } = useProductContext();
   console.log(' Cart Prod is-----  ' ,singleprod);

     const {  id :alias , name , company , price ,description ,category ,stock ,reviews ,stars ,image } = singleprod;

     let  { cart } = useCartContext();
     // const { amount } = cart;

    console.log(' cart is ',cart);
    const cartamount = cart &&  cart[0].amount;
    // console.log('cart Amount  -',cart[0].amount);

      // console.log(' SingleProd id is  ',singleprod.id);
      // console.log(' cart  id is  ',cart[0].id)

    // let currentitemincart = isProductInCart(singleprod.id , cart.id )


  return (
    <div> 
            <div className="cart-container" style = {{paddingTop:'4%'}}>
            { userisloggedin ? (
            <>  
                   <div className = "items-scroll" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                            <div className = "cart-items">
                                  {cart.map((curelem) =>  
                                  {
                                      return  <CartItem  key = {curelem.id} {...curelem}  />
                                  })}    
                            </div>
                            <div className="cart-price">
                            {
                              cart.length > 0  ? (
                                <>
                                    <div className = "cart-data">
                                  <div className = "secondside-cart" style = {{padding:'3%',backgroundColor:'burlywood',width:'60%'}}>
                                            <div className="price-text" style = {{textAlign:'center'}}> 
                                                <span style = {{fontSize:'25px'}}> Price Details  </span> 
                                            </div>  
                                            
                                            <div className="price" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',fontSize:'23px',columnGap:'25px'}}>
                                            <span> Price( {cartamount} items)   </span>  
                                            <span> {price} </span>  
                                            </div>  

                                            <div className="discount" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',fontSize:'23px',columnGap:'25px'}}>
                                            <span>  Discount  </span>  
                                            <span>  Rs.- 30 </span>  
                                            </div> 

                                            <div className="delivery-charges" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',fontSize:'23px',columnGap:'25px'}}>
                                            <span> Delivery Charges  </span>  
                                            <span> Rs. - 100 </span>  
                                            </div> 

                                            <div className="total-price" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',fontSize:'23px',columnGap:'25px'}}>
                                              <span> Total Price - </span>
                                              <span> Rs. -  {cartamount + 30 + 100}</span>
                                            </div>

                                          <div className = "proceed-button" style = {{textAlign:'center',paddingTop:'3%'}}>
                                            <button style = {{padding:'3% 21%'}}> Proceed to Buy  </button>
                                            </div>
                                  </div>  
                                    </div>
                                </>) : 
                              (<>
                                
                                </>)
                            }
                            </div>
                     </div>
            </>) : 
            (<>
                 <h2>  User is not Logged In </h2>
                 <Login />
            </>) }
        </div>
      
    </div>
  )
}

export default Cart