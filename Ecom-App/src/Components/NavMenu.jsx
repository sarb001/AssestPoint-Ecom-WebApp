import React from 'react'
import Searchbar from './Searchbar';
import  {Link, useNavigate } from 'react-router-dom'
import '../Styles/NavMenu.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavMenu = () => {

   const navigate =  useNavigate();
   const userisloggedin = JSON.parse(localStorage.getItem('userinfo'))


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
                 <Link to = "/cart" className='header-link'> 
                      <span>  <ShoppingCart    sx = {{ color : 'blue' }}  />   </span>
                 </Link>
                </div> 

             </div>
        </header>
    </div>
  )
}

export default NavMenu