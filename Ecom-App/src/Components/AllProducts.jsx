
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useProductContext } from './ContextApi/ProductContext';

import '../Styles/AddtoCart.css';


const AllProducts = ({products}) => {

  return (
    <div> 
          <div className = "all-prod-text" style  = {{fontSize:'34px'}}>  AllProducts hereeeee  </div> 
          <div className = "allprod-outercontainer" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',margin:'5%',columnGap:'40px',textAlign:'center'}}>
             {products.map((item) => (
                  <>
                      <div className = "allprod-container" style = {{margin:'6%',backgroundColor:'white'}}>
                  
                              <NavLink to = {`/singleproduct/${item.id}`}>
                                          <div className="item-image" style = {{display:'flex',justifyContent:'space-around'}}>
                                            <img src = {item.image} style = {{width:'100%',height:'50vh'}} /> 
                                          </div>
                              </NavLink>

                              <div className="prod-part1" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',paddingTop:'5%'}}> 
                                  <div className="item-name" >  {item.name.toUpperCase()}  </div>
                              </div>

                              <div className="prod-part2"  style = {{display:'grid',gridTemplateColumns:'1fr 1fr',paddingTop:'4%'}}>
                                  <div className="item-company" style = {{fontWeight:'600'}}> By {item.company.toUpperCase()} </div>
                                  <div className="item-wishlist" style = {{fontWeight:'800'}}> Rs.{item.price} </div>
                              </div>
                                    <div className="free-del" style = {{paddingTop:'5%'}}>
                                         <div className="item-wishlist" style = {{fontWeight:'700',padding:'4%'}}> 
                                              <span style = {{backgroundColor:'lightgreen',padding:'4px'}}>  Free Delivery by AssestPoint </span>
                                         </div>
                                    </div>
                      </div>
                  </>
             ))}
          </div>
    </div>
  )
}

export default AllProducts