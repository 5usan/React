import { useHistory } from "react-router-dom";
import React, { useState,useEffect} from "react";
import axios from "axios";
export default function Login() {
  const history = useHistory();
  useEffect(() => {
    if(localStorage.getItem("token")){
      console.log(localStorage.getItem("token"), "token form login");
      history.push("/contact");
    }
  }, [])
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
 
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("Data is logged in");
    const postData = await axios.post(
      "http://localhost:4002/login/post",
      loginData
    );
    console.log(postData.data.token, "token");
    localStorage.setItem("token", postData.data.token);
    //window.parent.location = window.parent.location.href; //To auto reload 
    window.location.reload();
  };

  const onChangeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  
  return (
    <>
      <h3>Login</h3>
      <form onSubmit={(e) => handleLogin(e)}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={(e) => onChangeHandler(e)}
            value={loginData.username}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => onChangeHandler(e)}
            value={loginData.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
}
