import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./reg.css"



export default function LoginFun(Login){

      
       const [details, setDetails]=useState({email:"",password:""});
 

       const submitHandler=e=>{
           e.preventDefault();


           Login(details)
        }
       
        

return(

  <div>
      <div class="form">
  <div class="form-toggle"></div>
  <div class="form-panel one">
    <div class="form-header">
      <h1>Account Login</h1>
    </div>
    <div class="form-content">
      <form onSubmit={submitHandler}>
        <div class="form-group">
          <label for="username">Username</label>
          <input className="center" type="text" id="username" name="username" required="required"
          onChange={e=>setDetails({...details,email:e.target.value})} value={details.email}
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required="required"
           onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}
          />
        </div>
        <div class="form-group">
          <label class="form-remember">
            <input type="checkbox"/>Remember Me
          </label><a class="form-recovery" href="#">Forgot Password?</a>
        </div>
        <div class="form-group">

          <button type="submit">Log In</button>
        </div>
   </form>
   </div>
  </div>
</div>
  </div>

)

}