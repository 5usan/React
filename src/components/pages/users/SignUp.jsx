import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";

export default function SignUp() {
  const [signupData, setSignupData] = useState({
    username: "",
    name: "",
    address: "",
    phone_number: "",
    password: "",
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("Inside onSubmitHandler");
    //console.log(signupData);
    const postData = await axios.post(
      "http://localhost:4002/signup/post",
      signupData
    );
    console.log(postData);
  };

  const onChangeHandler = (e) => {
    // console.log(e.target.value);
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
    // console.log(e.target.name);
    // console.log(signupData);
  };
  return (
    <>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <div className="div">
          <label>User Name: </label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={(e) => onChangeHandler(e)}
          />
        </div>

        <div className="div">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={(e) => onChangeHandler(e)}
          />
        </div>

        <div className="div">
          <label>Address: </label>
          <input
            type="text"
            name="address"
            placeholder="Enter address"
            onChange={(e) => onChangeHandler(e)}
          />
        </div>

        <div className="div">
          <label>Phone Number: </label>
          <input
            type="number"
            name="phone_number"
            placeholder="Enter phone number"
            onChange={(e) => onChangeHandler(e)}
          />
        </div>

        <div className="div">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={(e) => onChangeHandler(e)}
          />
        </div>

        <button type="submit"  className = "btn btn-primary">Submit</button>
      </form>
    </>
  );
}
