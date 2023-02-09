import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';


const WishList = () => {

  const   navigate =  useNavigate();
  const  userisloggedin = JSON.parse(localStorage.getItem('userinfo'))

  return (
    <div> 
        <div className="wishlist-container" style = {{textAlign:'center'}}>

            { userisloggedin ? (
            <>
                 <h2> WishList here  </h2>   
            </>) : 
            (<>
                 <h2>  User is not Logged In </h2>
                 <Login />
            </>) }

        </div>
      </div>
  )
}

export default WishList