import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from './ContextApi/ProductContext';
import Login from './Login';


const Cart = () => {
  
  const navigate =  useNavigate();
  const  userisloggedin = JSON.parse(localStorage.getItem('userinfo'))

   const {  singleprod } = useProductContext();
   console.log(' Cart Prod is-----  ' ,singleprod);

     const {  id , name , company , price ,description ,category ,stock ,reviews ,stars ,image } = singleprod;

  return (
    <div> 
            <div className="cart-container" style = {{textAlign:'center'}}>
            { userisloggedin ? (
            <>
                 <h2> Cart here  </h2>   

                <div className="cart-shape">
                   <div className="cart-category">  Category - {category}  </div>
                   <div className="cart-name">      Name- {name}  </div>
                   <div className="cart-company">   Company -  {company}  </div>
                   <div className="cart-price">     Rs.-- {price}  </div>
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