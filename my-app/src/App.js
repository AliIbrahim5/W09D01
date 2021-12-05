import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

import Task from "./components/Task";
import Resgister from "./components/Resgister";
import {Link} from "react-router-dom";


function App() {
  
  return (
    <>
    <Routes>
     <Route  path="/Login" element={<Login/>}/>
     <Route  path="/Task" element={<Task/>}/>
     <Route  path="/Resgister" element={<Resgister/>}/>
     

    </Routes>
     
     <Link to="/Login">Login</Link>
     //
     <Link to="/Task">Task</Link>
     //
     <Link to="/Resgister">Resgister</Link>
     
     

   </>
  );
}

export default App;
