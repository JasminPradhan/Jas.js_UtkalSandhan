import React from "react"
// import {} from "dotenv/config"
import "./App.css"
import {BrowserRouter as Router,Routes,Route, Navigation, Link } from "react-router-dom";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import Landing from "./components/homePage/homePage";
import Profile from "./components/profile/profile";
import Create from "./components/blog/create";




function App() {
  // const PORT = process.env.PORT || 8080;
  return (
    <div className="App">
      {/* <Login/>
      <Router
      <SignUp/> */}
      <Router>
      <Routes>
        <Route path="/" exact={true} element={<Landing/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
