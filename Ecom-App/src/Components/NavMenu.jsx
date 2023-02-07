import React from 'react'
import Searchbar from './Searchbar';
import  {Link } from 'react-router-dom'
import '../Styles/NavMenu.css';

const NavMenu = () => {
  return (
    <div> 
        <header>
             <div className="header-container">
                <div className="header-logo">
                  <Link to = "/" className='header-link'>
                   <span> AssetPoint </span>
                  </Link>
                </div>
                <div className="header-searchbar"> 
                  <Searchbar />
                </div>
                <div className="header-shopbar"> 
                  <Link to = "/products" className='header-link'> 
                   <span>  Shop </span>
                   </Link> 
                 </div>
                <div className="header-userbar">
                  <Link to = "/login" className='header-link'> 
                  <span>  User  </span>
                   </Link> 
                  </div>
                <div className="header-wishlist"> 
                  <Link to = "/" className='header-link'> 
                    <span>  Wish  </span> 
                  </Link> 
                 </div>
                <div className="header-cart"> 
                  <Link to = "/" className='header-link'> 
                    <span>  cart   </span> 
                  </Link> 
                 </div>
             </div>
        </header>
    </div>
  )
}

export default NavMenu