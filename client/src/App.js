import React from "react"
import "./App.css"
import {BrowserRouter as Router,Routes,Route, Navigation, Link } from "react-router-dom";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";


function App() {
  return (
    <div className="App">
      {/* <Login/>
      <Router
      <SignUp/> */}
      <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
