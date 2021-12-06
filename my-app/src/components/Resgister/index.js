import {React,useEffect,useState} from 'react';
import axios from 'axios';


const URL = "http://localhost:5000";
const Resgister = () => {
    const  [logemail,setLogemail] = useState(" ");
    const [logpassword,setLogpassword]=useState(""); 
    const [logrole,setLogrole]=useState(""); 
    const resgister =async (e)=>{
        const  result = await axios.post(`${URL}/resgister`,{
            email:logemail,
            password:logpassword,
            role :logrole,
        })
       console.log(result);
    }
       
    return (
        <section className="section-login vvv">
        <div className="login-box">
        <form  className={"form"}>

              <div className="input-field">
           <input type="email" name="email" placeholder="email" onChange={(val) =>{ 
                    // console.log(val.target.value);
               setLogemail(val.target.value)
               }}
               />
               </div>
              <div className="input-field">
                <input type="password" name="password" placeholder="password" onChange={(val) =>{ 
                    // console.log(val.target.value);
                setLogpassword(val.target.value)
               }}
               />
               </div>
               <div className="input-field">
                 <input type="role" name="role" placeholder="role" onChange={(val) =>{ 
                    // console.log(val.target.value);
                    setLogrole(val.target.value)
               }}
               />
               </div>
               </form>

           <button onClick={resgister} >login</button>

        

           </div>
           </section>
    )
}

export default Resgister
