import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const URL = "http://localhost:5000";


const Login = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const login = async (e) => {
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
            navigate('/');
        }else{
            navigate("/Task");
        }
      } else {
        setErr(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={login}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <p>{err}</p>
    </div>
  );
};

export default Login;
