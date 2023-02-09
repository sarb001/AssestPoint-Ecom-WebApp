import React from 'react'
import Searchbar from './Searchbar';
import  {Link, useNavigate } from 'react-router-dom'
import '../Styles/NavMenu.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavMenu = () => {

   const navigate =  useNavigate();
   const userisloggedin = JSON.parse(localStorage.getItem('userinfo'))

  //  const handlelogout = () => {
  //       localStorage.removeItem('LoggedIn');
  //       navigate('/login');
  //  }


  return (
    <div> 
        <header>
             <div className="header-container">
                <div className="header-logo">
                   <Link to = "/" className='header-link'>
                       <span> AssestPoint  </span>  
                  </Link>
                </div>
                <div className="header-searchbar"> 
                  <Searchbar />
                </div>
                <div className="header-shopbar"> 
                  <Link to = "/products" className='header-link'> 
                    <h2>  Shop (Hello { userisloggedin && userisloggedin.firstname})  </h2>
                   </Link> 
                 </div>
                <div className="header-userbar">
                  <Link to = "/useraccess" className='header-link'> 
                  <span>  <AccountCircleIcon  sx = {{ color : 'purple' }} />  </span>
                   </Link> 
                  </div>
                <div className="header-wishlist"> 
                  <Link to = "/wishlist" className='header-link'> 
                    <span>  <FavoriteBorderIcon   sx = {{ color : 'blue' }} />  </span> 
                  </Link> 
                 </div>
                <div className="header-cart"> 

                

                  {/* {userisloggedin ?  (
                   <>
                     <Link to = "/cart" className='header-link'> 
                        <span>  <ShoppingCartIcon   sx = {{ color : 'blue' }} /> 
                          User is Logged in@@@@@
                         </span> 
                    </Link> 
                   </>) 
                  : (
                  <>
                        <h1> User is not Logged IN !!!!!!!!  </h1>
                  </>)} */}
                
                 </div>


                  {/* {userisloggedin ? (
                  <>
                    <div className="logout-functionality">
                         <button onClick = {handlelogout}> Logout  </button> 
                    </div>
                  </>) : (
                  <>

                  </>)} */}

                

             </div>
        </header>
    </div>
  )
}

export default NavMenu