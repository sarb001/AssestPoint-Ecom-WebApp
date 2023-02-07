import React from 'react'
import {  Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div> 
         <div className = "footer-mainpage" style = {{backgroundColor:'burlywood',padding:'2%',textAlign:'center'}}>
              <div className = "mainfooter-text">
                  <span> Made by Sarb  </span>
              </div>
              <div className="footer-social-outer" style = {{textAlign:'center',display:'flex',justifyContent:'center'}}>
                  <div className = "footer-social-links" style = {{display:'grid',gridTemplateColumns:'30px 80px 60px'}}>
                  <Link to = "/"> Git  </Link> 
                  <Link to = "/"> Linkedin  </Link> 
                  <Link to = "/"> Twitter  </Link> 
                  </div>
              </div>
              <div className = "footer-last">
                <span> @2022 AssestPoint </span>
              </div>
         </div>
    </div>
  )
}

export default Footer