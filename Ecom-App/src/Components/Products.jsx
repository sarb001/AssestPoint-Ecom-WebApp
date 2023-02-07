import React from 'react'
import AllFilters from './AllFilters'
import AllProducts from './AllProducts'
import NavMenu from './NavMenu'

const Products = () => {
  return (
    <div> 
      <NavMenu />
       <div className="products" style = {{display:'grid',gridTemplateColumns:'300px  1fr',padding:'3%',columnGap:'65px'}}>
           <div className="first-side-product" style = {{backgroundColor:'burlywood'}}>
              <AllFilters />
           </div>
           <div className="second-side-product" style = {{backgroundColor:'lightblue'}}>
              <AllProducts />
           </div>
       </div>
      </div>
  )
}

export default Products