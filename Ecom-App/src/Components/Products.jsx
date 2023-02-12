import React from 'react'
import AllFilters from './AllFilters'
import AllProducts from './AllProducts'
import { useFilterContext } from './ContextApi/FilterContext'
import NavMenu from './NavMenu'

const Products = () => {

   const {  filter_products } = useFilterContext();
   console.log(' Filterrrrrrr ',filter_products);

  return (
    <div> 
       <div className="products" style = {{display:'grid',gridTemplateColumns:'300px  1fr',padding:'3%',columnGap:'65px'}}>
           <div className="first-side-product" style = {{backgroundColor:'burlywood'}}>
              <AllFilters />
           </div>
           <div className="second-side-product" style = {{backgroundColor:'lightblue'}}>
              <AllProducts  products = {filter_products} />
           </div>
       </div>
      </div>
  )
}

export default Products