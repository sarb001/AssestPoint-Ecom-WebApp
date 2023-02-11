import React from 'react';



const CartItem = ({id,name,image,price,amount}) => {

    let data = {id,name,image,price,amount};
    console.log('data is -',data);

  return (
       <> 
                  <div className="cartitem-container" style = {{display:'grid',gridTemplateColumns:'800px 1fr',padding:'1%'}}>

                          <div className  = "firstside-cart" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',
                          margin:'4% 25%',backgroundColor:'wheat'}}>
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
                                          <span style = {{fontSize:'23px'}}> Price is -  {price}  </span> 
                                        </div>

                                        <div className = "third-quantity"> 
                                            <p> - 1 +  </p>
                                        </div>

                                        <div className="five-remove">
                                              <p> Remove from Cart  </p>
                                        </div>
                                  </div>
                          </div>
                  </div>
          </> 
  )
}

export default CartItem