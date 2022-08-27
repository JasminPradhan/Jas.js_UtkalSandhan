import React,{useState} from "react";
import bgs from "../images/signupbg.png"
import { useNavigate} from "react-router-dom";
import axios from "axios"

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
    const[err,setError]=useState(false)
    const changeHandler=e=>{
        e.preventDefault()
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }


    const signUp=async (e)=>{
        e.preventDefault();
        try{
            const{name,location,email,phoneNumber,password,reEnterPassword}=user
           if(name&&location&&email&&phoneNumber&&password&&(password===reEnterPassword))
              {
                  const res=axios.post("http://localhost:8000/signup",user )
                //  .then(res=>alert(res.status.message))
                .then(res=>{console.log("")})
                }  
                else{
                    alert("Invalid")
                }
        }
    catch(err){
        setError(true);
    }
    }
    return(
        <div className="sign-up-form">
        <div>
            <div>
                <img src={bgs} alt="" className=" relative mx-auto py-[10px] mt-[50px] h-[580px] w-[1100px] shadow-xl"/>
                <h1 className="absolute top-[10.5%] right-[32.5%] text-orange-800 text-[24px] font-bold ">Sign Up</h1>

            </div>
            
            <div className="form absolute top-[20%] right-[25%]">
            <form className="flex flex-col space-y-4">
                <input type="name" placeholder="UserName" className="userName text-center email rounded-full outline outline-1 outline-gray-300 h-[48px] w-[300px]" name="name"  value={user.name} onChange={changeHandler}></ input>
                <input type="name" placeholder="Your Location" className="userLoccation text-center email rounded-full outline outline-gray-300 outline-1 h-[48px] w-[300px]" name="location"  value={user.location} onChange={changeHandler} ></ input>
                <input type="email" placeholder="Your Email" className="email text-center email rounded-full outline outline-gray-300 outline-1 h-[48px] w-[300px]" name="email"  value={user.email} onChange={changeHandler} ></ input>
                <input type="number" placeholder="Your Phone No." className="phoneNumber text-center email rounded-full outline outline-gray-300 outline-1 h-[48px] w-[300px]" name="phoneNumber"  value={user.phoneNumber} onChange={changeHandler}></ input>
                <input type="password" placeholder="Enter password" className="password text-center email rounded-full outline outline-gray-300 outline-1 h-[48px] w-[300px]" name="password"  value={user.password} onChange={changeHandler}></ input>
                <input type="password" placeholder="Confirm password" className="reEnterPassword text-center email rounded-full outline outline-gray-300 outline-1 h-[48px] w-[300px]" name="reEnterPassword"  value={user.reEnterPassword} onChange={changeHandler}></ input>
            </form>

            </div>
            
            <button  onClick={signUp} className="absolute top-[78%] right-[29.5%] rounded-full bg-orange-400 h-[50px] w-[150px] text-white font-bold hover:text-orange-600 hover:bg-white hover:outline outline-1">Create</button>
            <div className="absolute top-[86%] left-[62%] cursor-pointer" onClick={()=>nav("/login")}>Back to Login</div>
        </div>
    </div>
    );
}

export default SignUp