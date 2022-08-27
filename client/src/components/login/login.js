import React,{useState} from "react";
import bg from "../images/login.png"
import google from "../images/Google.png"
import fb from "../images/Facebook.png"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Login=()=>{
    const [user, setUser]=useState({
        email:"",
        password:""
    })
    const [err,setError]=useState(false)

    const navigate=useNavigate()

    const changeHandler=e=>{
        e.preventDefault()
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const login=async(e)=>{
        e.preventDefault()
        try{
                const res = axios.post("/login",user)
                res.data && window.locationreplace("/login");
                
        }
    catch(err){
        setError(true)
    }
}
    return(
        <div className="log-in-form">
        <div>
            <div>
            
               {/* <h1 className="absolute top-[30%] left-[35%] text-black">Login with</h1> */}
            <img src={bg} alt="" className=" relative my-auto py-10 mx-auto shadow-lg "/>
            <h1 className="absolute top-[24%] left-[31%] text-orange-800 text-[24px] text-xl font-display font-bold ">Log in with</h1>
            
            </div>
            
            <div className="icons flex space-x-6 absolute top-[33%] left-[31.5%]">
            <img src={google} className="w-10" alt="" />
            <img src={fb} className="W-10" alt="" />
            </div>
            <div className="absolute top-[40%] left-[31%] text-gray-400"><p>or continue with</p></div>
            <div className="absolute top-[48%] left-[26.5%] ">
            <form className="flex flex-col space-y-4">
                <input type="email" placeholder="Enter your email" className="email text-center email rounded-full outline outline-1 h-[50px] w-[250px]" name="email" value={user.email} onChange={changeHandler}></ input>
                <input type="password" placeholder="Enter password" className="password text-center rounded-full outline outline-1 h-[50px] w-[250px]" name="password"  value={user.password} onChange={changeHandler}></ input>
            </form>

            </div>
            
            <button onClick={login} className="absolute top-[70%] left-[30.5%] rounded-full bg-orange-400 h-[50px] w-[150px] font-bold text-lg text-white hover:text-orange-600 hover:bg-white hover:outline outline-1">Log in</button>
            <div className="absolute top-[80%] left-[28%]">Don't have an account?<span className=" underline underline-offset-2 text-orange-800 cursor-pointer" onClick={()=>navigate("/signup")}> Sign Up</span></div>

            
            
        </div>
    </div>
    );
}

export default Login