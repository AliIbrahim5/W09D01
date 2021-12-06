import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css"
const URL = "http://localhost:5000";


const Login = () => {
  
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const login = async (e) => {
    e.preventDefault();
    try {
      e.preventDefault();
      const result = await axios.post(`${URL}/login`, {
        email: e.target.email.value,
        password: e.target.password.value,
      });
      console.log(result);
      if (result.data.token) {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("role", result.data.result.role.role);
        if(result.data.result.role.role=='admin'){
          navigate("/Task");
        }else{
           
        }
      } else {
        setErr(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
   
    <div className="login-box">
    
      <form onSubmit={login}>
      <div className="input-field">
        <p>Email:</p>
        <input type="email" name="email" />
        </div>
        <div className="input-field">
        <p >Password:</p>
        <input type="password" name="password" />
        </div>
        <button type="submit"  className="button">Login</button>
        
      </form>
      
      <p>{err}</p>
    </div>
 
  );
};

export default Login;
