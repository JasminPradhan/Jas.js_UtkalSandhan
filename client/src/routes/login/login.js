import React,{useState} from "react";
import bg from "../images/login.png"
import google from "../images/Google.png"
import fb from "../images/Facebook.png"
import axios from "../../utils/axios"
import FormInput from "../../components/form-input";
import { Button } from "../../components/button";
import {useNavigate} from "react-router-dom"

const Login=()=>{
    const nav=useNavigate()
    const [user, setUser]=useState({
        email:"",
        password:""
    })
    // const [err,setError]=useState(false)

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
        nav("/profile")
    }
    return(
        <div className="log-in-form">
            <div>
                <div>
                <img src={bg} alt="" className=" relative my-auto py-1 mx-auto shadow-lg "/>
                <h1 className="absolute top-[24%] left-[30.5%] text-orange-800 text-[24px] text-xl font-display font-bold ">Log in with</h1>
                
                </div>
                
                <div className="icons flex space-x-6 absolute top-[32%] left-[30.5%]">
                <a href="/auth"><img src={google} className="w-10" alt="" /></a>
                <img src={fb} className="W-10" alt="" />
                </div>
                <div className="absolute top-[40%] left-[30%] text-gray-400"><p>or continue with</p></div>
                <div className="absolute top-[48%] left-[25.5%] ">


                    <form onSubmit={()=>login} className="flex flex-col space-y-4">

                        <FormInput type="email" placeholder="Enter your email" name="email" value={user.email} onChange={changeHandler}/>
                        <FormInput type="password" placeholder="Enter password" name="password"  value={user.password} onChange={changeHandler}/>
                    
                        <Button type="submit" action="Log in" func="top-[70%] left-[29.5%]"/>

                    </form>

                </div>
                

                <div className="absolute top-[80%] left-[27%]">Don't have an account?
                    <span className=" underline underline-offset-2 text-orange-800 cursor-pointer" onClick={()=>navigate("/signup")}> 
                        Sign Up
                    </span>
                </div>

                
                
            </div>
    </div>
    );
}

export default Login