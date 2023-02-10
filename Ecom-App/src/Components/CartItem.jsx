import React from 'react'

const CartItem = ({id,name,image,price,amount}) => {
  return (

       <> 
                  <div className="cartitem-container" style = {{display:'grid',gridTemplateColumns:'800px 1fr',padding:'1%'}}>

                        <div className="firstside-cart" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',margin:'4% 25%',backgroundColor:'wheat'}}>
                                <div className="first-item" >
                                    <div className="first-part"> 
                                      <img src = {image} style = {{width:'100%',height:'28vh'}} alt = "first" /> 
                                    </div>
                                </div>
                                <div className = "second-item" style = {{padding:'5%'}}> 
                                      <div className = "second-part">  
                                            <span style = {{fontSize:'23px'}}> {name.toUpperCase()}  </span>  
                                      </div>
                                        <div className = "second-price"> 
                                          <span style = {{fontSize:'23px'}}> Price-  {price}  </span> 
                                        </div>

                                        <div className = "third-quantity"> 
                                            <p> - 1 +  </p>
                                        </div>

                                        <div className="five-remove">
                                              <p> Remove from Cart  </p>
                                        </div>
                                </div>
                        </div>

                           <div className="secondside-cart" style = {{padding:'3%',backgroundColor:'burlywood',width:'60%'}}>
                                <div className="price-text" style = {{textAlign:'center'}}> 
                                    <span style = {{fontSize:'25px'}}> Price Details  </span> 
                                </div>  
                                <div className="price" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',fontSize:'23px',columnGap:'25px'}}>
                                <span> Price({amount} items) </span>  
                                <span> {price} </span>  
                                </div>        
                                <div className="discount" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',fontSize:'23px',columnGap:'25px'}}>
                                <span>  Discount  </span>  
                                <span>  Rs.- 30 </span>  
                                </div>        
                                <div className="delivery-charges" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',fontSize:'23px',columnGap:'25px'}}>
                                <span> Delivery Charges  </span>  
                                <span> Rs. - 100 </span>  
                                </div>  
                                <div className="total-price" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',fontSize:'23px',columnGap:'25px'}}>
                                  <span> Total Price - </span>
                                  <span> Rs. -  {amount + 30 + 100}</span>
                                </div>  
                               <div className = "proceed-button" style = {{textAlign:'center',paddingTop:'3%'}}>
                                <button style = {{padding:'3% 21%'}}> Proceed to Buy  </button>
                                </div>    
                          </div>

                  </div>
          </> 
  )
}

export default CartItem