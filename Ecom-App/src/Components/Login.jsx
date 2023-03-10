import React, { useState } from 'react'
import NavMenu from './NavMenu';
import { Link , useNavigate } from 'react-router-dom';
import '../Styles/NavMenu.css';
import {  toast } from 'react-toastify';
import { Button } from '@mui/material';
import axios from 'axios';


const Login = () => {

  const [email ,setemail] = useState("");
  const [password ,setpassword] = useState("");

   const navigate = useNavigate();

  const handlelogin = async (e) => {
   
      e.preventDefault();
     if(!email || !password)
     {
        toast.warn('Please Fill All the Fields');
       return;
     }

     try{
          const config = {
            headers : { 
              'Content-type' : 'application/json', 
            },
          };

          const  { data }  = await axios.post("/api/user/login" ,  
          {email,password},config);
          toast.success('Login Successful');


          if(data)
          {
              const storelocally =  localStorage.setItem('userinfo' ,JSON.stringify(data));
          }else{
            const loggeduser =  JSON.parse(localStorage.getItem('userinfo'));
          }



         // showing  user is logged In
         const showloggedinuser = localStorage.setItem('LoggedIn',true);
            navigate('/');

        //  if(email === loggeduser.email)
        //   {
        //     localStorage.setItem('LoggedIn',true);
        //     navigate('/');
        //   }

     }catch(error)
        {
          toast.error(' Wrong Credentials '); 
        }
  }


  return (
    <div> 
               <div className    = "login-outer-container" style = {{margin:'8% 45%',backgroundColor:'burlywood',width:'25%'}} >
                  <div className = "login-container"  style  = {{width:'100%',padding:'8%'}}>
                          <div className="login-text"> Login  </div>
                            
                            <form onSubmit = {handlelogin}> 

                                  <div className = "email-container" style = {{padding:'2% 8%'}}>
                                      <label htmlFor = 'email'> Email address </label>
                                      <input  id = "email" type = "email"  value = {email}  placeholder='name@gmail.com'  
                                      onChange = {(e) => setemail(e.target.value)}
                                      required/>
                                  </div>

                                  <div className = "password-container" style = {{padding:'2% 8%'}}>
                                      <label htmlFor = 'pass'> Password </label>
                                      <input id = "pass" type = "password" value = {password}  placeholder='******'  
                                      onChange = {(e) => setpassword(e.target.value)}
                                      required/>
                                  </div>
                               
                                  <div className = "login-container" style = {{padding:'4% 8%'}}> 
                                    <button>  Login  </button>
                                  </div>

                                  <div className = "test-container" style = {{padding:'2% 8%'}}>
                                      <button  variant = 'contained'  onClick = {() => 
                                      {
                                          setemail("testinguser@gmail.com")
                                          setpassword("testinguser")
                                      }}> Fill test credentials </button>  
                                  </div>
                                  
                                  <div className="newacc-container" style = {{padding:'2% 8%'}}>
                                      <Link to = "/signup"> 
                                             <span>  Create New Account   </span>
                                      </Link>
                                  </div>
                                  
                            </form>
                  </div>
               </div> 
    </div>
  )


}

export default Login