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

     const { cart } = useCartContext();

     console.log('cart items are -',cart);


  return (
    <div> 
            <div className="cart-container" style = {{textAlign:'center',paddingTop:'4%'}}>
            { userisloggedin ? (
            <>  

                   <div className="cart-side" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr',fontSize:'23px'}}>
                      <div className="cart-title"> Item - </div>
                      <div className="cart-item">  Price -</div>
                      <div className="cart-quantity">  Quantity  </div>
                      <div className="cart-subtotal">  SubTotal  </div>
                      <div className="cart-remove">  Remove   </div>
                   </div>

                   <div className="items-scroll">
                     {cart.map((curelem) => 
                     {
                        return  <CartItem  key = {curelem.id} {...curelem}  />
                     })}    
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