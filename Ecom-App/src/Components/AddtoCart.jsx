import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from './ContextApi/CartContext';

const AddtoCart = ({product}) => {


    console.log(' Product fetched is -',product);
    const { addtocart  } = useCartContext();
    const { stock ,id ,image , name ,price } = product;
    console.log(' 2 Prod is - ',product);

    const [amount,setamount] = useState(1);

  return (
    <div> 
      <NavLink to = "/cart" onClick = {() => addtocart(id, amount ,stock ,image ,name ,price )}>
         <button> Add to Cart  </button>
      </NavLink>
    </div>
  )
}

export default AddtoCart