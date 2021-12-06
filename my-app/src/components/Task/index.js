import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const URL = "http://localhost:5000";
const Post = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const getPosts = async () => {
    try {
      const result = await axios.get(`${URL}/tasks`, {
        headers: { Authorization: `bearer ${token}` },
      });
      console.log(result);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const del = async (_id) => {
    try {
      const result = await axios.delete(`${URL}/taskdelet/${_id}`, {
        headers: { Authorization: `bearer ${token}` },
      });
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const tasks = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(
        `${URL}/task`,
        {
          name: e.target.task.value,
        },
        {
          headers: { Authorization: `bearer ${token}` },
        }
      );
      e.target.task.value = " ";
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    
      
        <div>
          <h1>tasks:</h1>
          {data.map((item) => {
            return (
              <>
                <h2 style={{ display: "inline" }}>{item.name}</h2>
                <button onClick={(_id) => del(item._id)}>x</button>
                <br />
              </>
            );
          })}
          <form onSubmit={tasks}>
            <p>New tsks:</p>

            <input type="text" name="task" />
            <button type="submit">Add</button>
          </form>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </button>
        </div>
      
  
  );
};

export default Post;
