import React,{useState} from "react";
import bgs from "../images/signupbg.png"
import { useNavigate} from "react-router-dom";
import FormInput from "../../components/form-input";
import { Button } from "../../components/button";
import axios from "../../utils/axios";

const SignUp=()=>{
    const nav=useNavigate()
    const [user, setUser]=useState({
        name:"",
        location:"",
        email:"",
        phoneNumber:"",
        password:"",
        reEnterPassword:""
    })
    // const[err,setError]=useState(false)
    
    const changeHandler=(e)=>{
        e.preventDefault()
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const signUp=async (e)=>{
        e.preventDefault();
            const{name,location,email,phoneNumber,password,reEnterPassword}=user

                if(name&&location&&email&&phoneNumber&&password&&(password===reEnterPassword))
                {
                    try {
                        const res=await axios.post(`/signup`,JSON.stringify({ name,location,email,phoneNumber,password }),
                        {
                            headers:{'content-type':'application/json'},
                            withCredentials:true
                        });

                        console.log(JSON.stringify(res?.data))
                    } 
                    catch (error) {
                        if(!error?.res)
                        {
                            alert("no server response")
                        }
                        else if (error.res?.status===400) {
                            alert("missing field")
                        } 
                        else if (error.res?.status===401) {
                            alert("unauthorised")
                        } 
                        else {
                            alert("login failed")
                        }
                    }
                }
                else{
                    if(password!==reEnterPassword)
                        alert("passwords don't match")
                    else
                        alert("all fields are required")
                }


        }
    return(
        <div className="sign-up-form">
        <div>
            <div>
                <img src={bgs} alt="" className=" relative mx-auto py-[10px] mt-[50px] h-[580px] w-[1100px] shadow-xl"/>
                <h1 className="absolute top-[10.5%] right-[32.5%] text-orange-800 text-[24px] font-bold ">Sign Up</h1>

            </div>
            
            <div className="form absolute top-[20%] right-[25%]" >
                <form onSubmit={signUp} className="flex flex-col space-y-4">
                    <FormInput type="name"
                    placeholder="UserName"
                    name="name" 
                    value={user.name}
                    onChange={changeHandler}/>
                    <FormInput type="name" placeholder="Your Location" name="location"  value={user.location} onChange={changeHandler}/>
                    <FormInput type="email" placeholder="Your Email" name="email"  value={user.email} onChange={changeHandler} />
                    <FormInput type="number" placeholder="Your Phone No."  name="phoneNumber"  value={user.phoneNumber} onChange={changeHandler}/>
                    <FormInput type="password" placeholder="Enter password" name="password"  value={user.password} onChange={changeHandler}/>
                    <FormInput type="password" placeholder="Confirm password" name="reEnterPassword"  value={user.reEnterPassword} onChange={changeHandler}/>
                    <Button type="submit" action={'create'} func="top-[25rem] right-[29.5%]"/>
                </form>
            </div>
            
            <div className="absolute text-orange-400 text-sm top-[88%] left-[62%] cursor-pointer" onClick={()=>nav("/login")}>Back to Login</div>
        </div>
    </div>
    );
}


export default SignUp