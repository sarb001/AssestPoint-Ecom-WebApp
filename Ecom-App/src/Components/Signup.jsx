import React , { useState } from 'react'
import NavMenu from './NavMenu'
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';

import {  toast } from 'react-toastify';
import { Button } from '@mui/material';

const Signup = () => {

  const [firstname ,setfirstname] = useState("");
  const [lastname ,setlastname] = useState("");
  const [email ,setemail] = useState("");
  const [password ,setpassword] = useState("");
  const [confirmpassword ,setconfirmpassword] = useState("");

  const navigate = useNavigate();

  const handlesignup = async(e) => {
      e.preventDefault();
          
                if(!firstname || !lastname || !email || !password || !confirmpassword)
                {
                  toast.warn(' Please Fill All Fields ');
                  return;                           // With this Not able to Proceed Further   
                }

              if(password !== confirmpassword)
              {
                toast.warn('Password Dont Match');
                return;
              }

              //check if signup email already exist or not  ?? 

        try{
           const config = {
              headers : { 'Content-type' : 'application/json' },
           }

           const { data } = await axios.post('/api/user' , 
              {firstname,lastname,email,password} ,config );
              toast.success(' User  is Registered Successfully ')

              localStorage.setItem('userinfo' ,JSON.stringify(data));
              navigate('/');

        }catch(error)
        {
            toast.error(' Something Went Wrong')
        }
  }

  return (
    <div> 
             <div className      =  "signupouter-container" style = {{margin:'5% 40%',width:'25%',backgroundColor:'burlywood'}}>
                  <div className =  "signup-container" style = {{padding:'5% 8%'}}>
                      <div className = "signup-text" style = {{fontSize:'28px'}}>  
                        Signup 
                       </div> 

                      <form onSubmit = {handlesignup}>

                            <div className = "first-name" style = {{padding:'3% 8%'}}>

                              <label  htmlFor = 'fname'> First name  </label>
                              <input  id = "fname"  type = "text" value = {firstname}  
                                 placeholder =  'first name'
                                onChange = {(e) => setfirstname(e.target.value)} required/>
                            </div>
                            
                            <div className = "last-name"     style = {{padding:'3% 8%'}}>
                              <label htmlFor ='lname' > Last name  </label>
                              <input id = "lname" type = "text" value = {lastname} 
                               placeholder='last name' 
                              onChange = {(e) => setlastname(e.target.value)} required/>
                            </div>

                            <div className="email-address" style = {{padding:'3% 8%'}}>
                               <label htmlFor = 'email'> Email address </label>
                                <input id = "email" type = "email"  value = {email}  
                                 placeholder = "name@gmail.com"  
                                onChange = {(e) => setemail(e.target.value)} required />
                            </div>

                            <div className = "password"     style = {{padding:'3% 8%'}}>
                               <label htmlFor='pass'> Password </label>
                                <input id = "pass"  type = "password"  value = {password}  
                                 placeholder = "******"  
                                onChange = {(e) => setpassword(e.target.value)}  required/>
                            </div>

                            <div className = "email-address" style = {{padding:'3% 8%'}}>
                                <label htmlFor ='cpass'> Confirm password </label>
                                <input id = "cpass" type = "password"  value = {confirmpassword} 
                                 placeholder = "*****" 
                                onChange = {(e) => setconfirmpassword(e.target.value)}   required />
                            </div>

                            <div className = "accept-terms"  style = {{padding:'3% 8%'}}>
                                <input id = "checkbox"  type = "checkbox" required  />
                                <span> I accept all Terms & Conditions </span>
                            </div>

                            <div className = "create-account"  style = {{padding:'3% 8%'}}>
                               <button>  Create New Account  </button>
                            </div>
                         
                            <div className = "already-account"  style = {{padding:'3% 8%'}}>
                                <Link to = "/login">  <span>  Already have an account  </span>  </Link>
                            </div>
                      </form>

                  </div>
            </div> 
    </div>
  )
}

export default Signup