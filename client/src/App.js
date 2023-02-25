import React from "react"
// import {} from "dotenv/config"
import "./App.css"
import {Routes,Route } from "react-router-dom";
import Login from "./routes/login/login";
import SignUp from "./routes/signup/signup";
import Landing from "./routes/homePage/homePage";
import Profile from "./routes/profile/profile";
import Create from "./routes/blog/create";




function App() {
  // const PORT = process.env.PORT || 8080;
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<Landing/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
