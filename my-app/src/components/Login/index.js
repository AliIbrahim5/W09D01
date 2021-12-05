import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css"
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
    <section className="section-login vvv">
    <div className="login-box">
    <form  className={"form"}>
      <form onSubmit={login}>
      <div className="input-field">
        <p>Email:</p>
        <input type="email" name="email" />
        </div>
        <div className="input-field">
        <p >Password:</p>
        <input type="password" name="password" />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
      </form>
      <p>{err}</p>
    </div>
    </section>
  );
};

export default Login;
