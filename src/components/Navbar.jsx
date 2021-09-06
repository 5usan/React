import React from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [text, setText] = useState("");

  const history = useHistory();

  useEffect(() => {}, [text]);

  const onHomeClickHandler = () => {
    setText("/");
    history.push("/");
  };

  const onContactClickHandler = () => {
    setText("/contact");
    history.push("/contact");
  };

  const onAboutClickHandler = () => {
    setText("/about");
    history.push("/about");
  };

  const onUsersClickHandler = () => {
    setText("/users");
    history.push("/users");
  };

  const onLoginClickHandler = () => {
    setText("/login");
    history.push("/login");
  };

  const onSignupClickHandler = () => {
    setText("/signup");
    history.push("/signup");
  };

const onLogoutClickHandler = () => {
  setText("/logout");
  history.push("/logout");
  window.location.reload();
}
  console.log(text);

  const getToken = localStorage.getItem("token");

  return (
    <>
      {/* {text ? <div>This is hometext demo. useState example</div> : ""} */}
      <div>
        {getToken ? (
          <>
            <div className="flex">
              <div
                className={text === "/" ? " bg-color pd-20" : "pd-20"}
                onClick={() => onHomeClickHandler()}
              >
                Home
              </div>
              <div
                className={text === "/contact" ? " bg-color pd-20" : " pd-20"}
                onClick={() => onContactClickHandler()}
              >
                Contact
              </div>
              <div
                className={text === "/about" ? " bg-color pd-20" : " pd-20"}
                onClick={() => onAboutClickHandler()}
              >
                About Us
              </div>
              <div
                className={text === "/users" ? " bg-color pd-20" : " pd-20"}
                onClick={() => onUsersClickHandler()}
              >
                Users
              </div>
              <div
                className={text === "/logout" ? " bg-color pd-20" : " pd-20"}
                onClick={() => onLogoutClickHandler()}
              >
                Logout
              </div>
            </div>
          </>
        ) : (
          <div className="flex">
            <div
              className={text === "/login" ? " bg-color pd-20" : " pd-20"}
              onClick={() => onLoginClickHandler()}
            >
              Login
            </div>
            <div
              className={text === "/signup" ? " bg-color pd-20" : " pd-20"}
              onClick={() => onSignupClickHandler()}
            >
              Signup
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
