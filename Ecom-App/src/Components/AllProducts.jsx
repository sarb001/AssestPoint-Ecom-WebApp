import { Button, color } from '@chakra-ui/react';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useProductContext } from './ContextApi/ProductContext'
import Product from './Product';

const AllProducts = () => {

   const { products  } = useProductContext();
   console.log('All Products are -' , products);

  return (
    <div> 
          <div className = "all-prod-text" style  = {{fontSize:'34px'}}>  AllProducts here  </div> 
          <div className = "allprod-outercontainer" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',margin:'5%',columnGap:'40px',textAlign:'center'}}>
             {products.map((item) => (
                  <>
                      <div className="allprod-container" style = {{margin:'6%',backgroundColor:'white'}}>
                  
                   <NavLink to = {`/singleproduct/${item.id}`}>
                              <div className="item-image" style = {{display:'flex',justifyContent:'space-around'}}>
                                 <img src = {item.image} style = {{width:'100%',height:'50vh'}} /> 
                              </div>
                   </NavLink>
                              <div className="prod-part1" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}> 
                                  <div className="item-name" style = {{fontWeight:'700'}}> {item.name} </div>
                                  <div className="item-wishlist"> Like  </div>
                              </div>
                              <div className="prod-part2"  style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                                  <div className="item-company" style = {{fontWeight:'500'}}> By {item.company} </div>
                                  <div className="item-wishlist" style = {{fontWeight:'800'}}> Rs.{item.price} </div>
                              </div>
                            <div className="item-btn" style = {{paddingTop:'8%',paddingBottom:'8%'}}> 
                            <Button style = {{backgroundColor:'blueviolet',color:'white'}}> Add to Cart   </Button> 
                            </div>
                      </div>
                  </>
             ))}
          </div>
    </div>
  )
}

export default AllProducts