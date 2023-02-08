import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useProductContext } from './ContextApi/ProductContext'
import '../Styles/SingleProduct.css';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import NavMenu from './NavMenu';

const API = 'https://api.pujakaitem.com/api/products';


const SingleProduct = () => {

  const {  getsingleproduct , singleprod ,isSingleLoading } = useProductContext();
   
  const {id} = useParams();
  const { id : alias , name , company , price ,description ,category ,stock ,reviews ,stars ,image } = singleprod;

   console.log('Single Prod iss--',singleprod);

  useEffect(() => {
      getsingleproduct(`${API}?id=${id}`);  
  },[])

  // if(isSingleLoading){
  //   return(
  //     <>
  //      <h2> Single Loading....  </h2>
  //     </>
  //   )
  // }


  return (
    <div> 
        <NavMenu />
            <div className = "singleprod-outercontainer" style = {{padding:'4%'}}>
                  <div className = "singleprdo-text" style = {{textAlign:'center',fontSize:'25px',paddingBottom:'4%'}}>   SingleProduct </div>  
                <div className   = "singleprod-container" style = {{width:'90%',display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                    <div className = "image-container">  
                        <div className = "singleprod-image">   <img src = {image && image[0].url} style = {{width:'80%'}} /> </div>
                    </div>
                    <div className="content-container"> 
                        <div className = "singleprod-name">     <span id = "text-style" > Name is  -  </span>  {name} </div>
                        <div className = "singleprod-price">    <span id = "text-style" > Price is  -  </span>    {price} </div>
                        <div className = "singleprod-desc">     <span id = "text-style" > Description is  -  </span>  {description} </div>
                        <div className = "singleprod-cat">       <span id = "text-style"> Category is  -  </span>    {category}</div>
                        <div className = "singleprod-stock">    <span id = "text-style" > Stock is  -  </span>   {stock} </div>
                        <div className = "singleprod-reviews">  <span id = "text-style" > Reviews is  -  </span>  {reviews}</div>
                     </div>
                     <div className="buttons" style= {{display:'grid',gridTemplateColumns:'1fr 1fr'}}> 
                     <span>
                          <button>  Add to Cart </button>
                     </span>
                     <span>
                         <button>  Add to Wishlist  </button>
                     </span>
                     </div>
                </div> 
           </div>   
    </div>
  )
}

export default SingleProduct