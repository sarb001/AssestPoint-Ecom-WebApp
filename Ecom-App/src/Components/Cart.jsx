import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import { useCartContext } from './ContextApi/CartContext';
import { useProductContext } from './ContextApi/ProductContext';
import Login from './Login';


const Cart = () => {
  
  const navigate =  useNavigate();
  const  userisloggedin = JSON.parse(localStorage.getItem('userinfo'))

   const {  singleprod } = useProductContext();
  //  console.log(' Cart Prod is-----  ' ,singleprod);

     const {  id :alias , name , company , price ,description ,category ,stock ,reviews ,stars ,image } = singleprod;

     let  { cart } = useCartContext();
     // const { amount } = cart;

    // console.log(' cart is ',cart);

      if(cart.length > 0)
      {
        const cartamount = cart &&  cart[0].amount;
      }
     

    // console.log('cart Amount  -',cart[0].amount);

      // console.log(' SingleProd id is  ',singleprod.id);
      // console.log(' cart  id is  ',cart[0].id)

    // let currentitemincart = isProductInCart(singleprod.id , cart.id )


  return (
    <div> 
            <div className="cart-container" style = {{padding:'4%'}}>
            { userisloggedin ? (
            <>  
                  {cart.length > 0 ? (
                  <> 
                    <div className = "cart-headers" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr',fontSize:'21px'}}>
                          <div>  Item       </div>
                          <div>  Price      </div>
                          <div>  Quantity   </div>
                          <div>  Subtotal   </div>
                          <div>  Remove     </div>
                    </div>
                  </>) : 
                   (<> 
                      <div style = {{textAlign:'center',display:'grid',gridTemplateRows:'1fr 1fr'}}>
                         <span style = {{fontSize:'35px'}}>  Cart is Empty  </span> 
                         <span style = {{paddingTop:'3%'}}>  
                                    <Link to = "/">
                                        <button style = {{padding:'1%',fontSize:'23px'}}> Let's do Shopping  </button>
                                    </Link>
                         </span> 
                      </div>
                  </>)}
                    

                            <div className = "cart-items">
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