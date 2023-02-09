import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';


const Cart = () => {
  
  const navigate =  useNavigate();
  const  userisloggedin = JSON.parse(localStorage.getItem('userinfo'))

  return (
    <div> 
            <div className="cart-container" style = {{textAlign:'center'}}>
            { userisloggedin ? (
            <>
                 <h2> Cart here  </h2>   
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