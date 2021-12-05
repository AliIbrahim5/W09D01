import {React,useEffect,useState} from 'react';
import axios from 'axios';


const URL = "http://localhost:5000";
const Resgister = () => {
    const  [logemail,setLogemail] = useState(" ");
    const [logpassword,setLogpassword]=useState(""); 
       
    const resgister =async (e)=>{
        const  result = await axios.post(`${URL}/resgister`,{
            email:logemail,
            password:logpassword,
        })
       console.log(result);
    }
       
    return (
        
        <div>


           <input type="email" name="email" placeholder="email" onChange={(val) =>{ 
                    // console.log(val.target.value);
               setLogemail(val.target.value)
               }}
               />
                <input type="password" name="password" placeholder="password" onChange={(val) =>{ 
                    // console.log(val.target.value);
                setLogpassword(val.target.value)
               }}
               />
                 <input type="role" name="role" placeholder="role" onChange={(val) =>{ 
                    // console.log(val.target.value);
                setLogpassword(val.target.value)
               }}
               />
           <button onClick={resgister} >login</button>

        

           </div>
    )
}

export default Resgister
