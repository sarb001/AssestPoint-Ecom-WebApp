import React, { useEffect } from 'react'
import NavMenu from './NavMenu'
import {  useNavigate } from 'react-router-dom';
import Login from './Login';

const UserAccess = () => {

    const  navigate =  useNavigate();
    const  userisloggedin = JSON.parse(localStorage.getItem('userinfo'))
 
        const handlelogout = () => 
        {
             localStorage.removeItem('LoggedIn');
             localStorage.removeItem('userinfo');
             navigate('/login');
        }


  return (
    <div> 
            <div className = "useraccess-container" style = {{textAlign:'center'}}>
                    {userisloggedin ? (
                    <>
                         <h3> Lets' Logout  Now  </h3>
                          <button onClick = {handlelogout}> Logout </button>
                           
                    </>) : (
                    <>
                      <h2>  Let's come here to start  </h2>
                        <Login />
                    </>)}
            </div>
    </div>
  )
}

export default UserAccess