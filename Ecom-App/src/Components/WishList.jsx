import React from 'react'
import NavMenu from './NavMenu'

const WishList = () => {
  return (
    <div> 
      <NavMenu />
        <div className="wishlist-container" style = {{textAlign:'center'}}>
            <h2> WishList here  </h2>   
        </div>
      </div>
  )
}

export default WishList