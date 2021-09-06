import "./App.css";
import Header from "./Header";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import AboutUs from "./components/pages/AboutUs";
import Users from "./components/pages/users/Users";
import Login from "./components/pages/users/Login";
import SignUp from "./components/pages/users/SignUp";
import Logout from "./components/pages/users/Logout";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  const getToken = localStorage.getItem("token");
  console.log(getToken);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {getToken ? (
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/header" component={Header} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/logout" component={Logout} />
            {/* <Route exact path="/login" component={Login} /> */}
          </>
        ) : (
          <>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
