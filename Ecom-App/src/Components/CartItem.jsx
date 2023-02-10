import React from 'react'

const CartItem = ({id,name,image,price,amount}) => {
  return (

       <> 
                  <div className="cartitem-container" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr'}}>
                      <div className="first-item" style = {{display:'grid',gridTemplateRows:'1fr 1fr'}}>
                          <div className="first-part"> 
                            <img src = {image} style = {{width:'70%'}} alt = "first" /> 
                          </div>
                          <div className="second-part">  
                                <span style = {{fontSize:'23px'}}> {name}  </span>  
                          </div>
                      </div>
                       <div className = "second-price"> 
                        <span style = {{fontSize:'23px'}}>   {price}  </span> 
                       </div>

                        <div className = "third-quantity"> 
                            <p> Third Part  </p>
                        </div>

                        <div className="fourth-subtotal"> 
                                <p>  {amount * price } </p>
                        </div> 

                        <div className="five-remove">
                               <p> Remove  </p>
                        </div>
                  </div>
          </> 
  )
}

export default CartItem