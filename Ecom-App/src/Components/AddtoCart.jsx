import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import CartAmountToggle from './CartAmountToggle';
import CartItem from './CartItem';
import { useCartContext } from './ContextApi/CartContext';
import { useProductContext } from './ContextApi/ProductContext';
import isProductInCart from './isProductInCart';

const AddtoCart = ({product}) => {

    console.log(' Product fetched is -',product);
    const { addtocart  } = useCartContext();
    const { stock ,id ,image , name ,price } = product;
    console.log(' 2 Prod is - ',product);

    const [amount,setamount] = useState(1);
    console.log(' Id for Selected Product (Add to cart)  -',id);

    let  { cart } = useCartContext();
    
    const { singleprod } = useProductContext();
    console.log(' Single Prod is - ',singleprod);
    
    console.log(' Id of selected cart is - ',cart)
    console.log(' SingleProd id is Add  ',singleprod.id);
    // console.log(' cart  id is  Add ',cart[0].id)

    let currentitemincart = isProductInCart(singleprod.id , cart)
    console.log(' current cart is- ',currentitemincart);

    const setDecrease = () => {
      amount > 1 ? setamount(amount - 1) : setamount(1);
   };
 
   const setIncrease = () => {
      amount < stock ? setamount(amount + 1) : setamount(stock);
   };

  return (
    <div> 

          <div className = "cart-amount">
             <CartAmountToggle 
               amount = {amount}
               setIncrease = {setIncrease}
               setDecrease = {setDecrease}  
              />        
          </div>

      {currentitemincart ? (
      <>
          <NavLink to = "/cart"> 
              <button> Go to Cart  </button>   
          </NavLink>
      </>) : (
      <>
          <NavLink to = "/cart" onClick = {() => addtocart(id, amount ,stock ,image ,name ,price )}>
            <button> Add to Cart  here  </button>
          </NavLink>
      </>)}
    </div>
  )
}

export default AddtoCart