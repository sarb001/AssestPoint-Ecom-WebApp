import React from 'react'
import NavMenu from './NavMenu';
import Footer from './Footer';
import { useProductContext } from './ContextApi/ProductContext';
import Product from './Product';


const Home = () => {

   const { featuredProducts , isLoading } = useProductContext();
    console.log(' featuredProducts ' , featuredProducts);

    if(isLoading)
    {
       return(
        <>
        <h2> Loading .... </h2>   
        </>
       )
    }

  return (
    <div> 
        <NavMenu />

                 <div className="home-container" style = {{padding:'4%'}}>
                      <div className="featured-text" style = {{textAlign:'center'}}>
                          <span style = {{fontSize:'25px'}}> Featured Products Here    </span>
                      </div>

                       <div className="featured-products" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',columnGap:'40px'}}>
                        {featuredProducts.map((item) => (
                          <Product  key = {item.id} {...item}  />
                          ))
                        }
                      </div> 
                </div>

           <Footer />
    </div>
  )
}

export default Home