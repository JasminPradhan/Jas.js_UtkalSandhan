import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sec1 from "../images/landing_page1.png";
import sec2 from "../images/landing_page2.png";
import sec3 from "../images/landing_page3.png";
import sec4 from "../images/landing_page4.png";
import sec5 from "../images/landing_page5.png";
import logo from "../images/logo.png";

const Landing=()=>{
    const nav=useNavigate()
    const[user, setUser]=useState("");
    const userProfile=(e)=>{
        nav("/login")
    }
    const createBlog=()=>{
        nav("/create")
    }
    return(
        <div>
            <div>
                <img src={sec1} alt="" className="relative " />
                <img src={logo} alt="logo" className="absolute mt-10 ml-10 top-[9px] left-[0px] object-cover object-right  h-[100px] w-[200px] inline" />
            <div className="flex flex-row space-x-6 absolute top-[9px] left-[900px] text-yellow-700">
                <div className="">


                    <div className="flex flex-row space-x-6 mt-[60px]">
                        <div className="cursor-pointer" onClick={userProfile}>Profile</div>
                        <div className="cursor-pointer" onClick={userProfile}>Wishlist</div>
                        <div className="cursor-pointer" onClick={userProfile}>Notification</div>
                        <div className="cursor-pointer" onClick={createBlog}>Publish</div>
                        
                    </div>
                </div>
                    
                </div>
            </div>
            <div>
                <img src={sec2} alt="" className="relative"/>
                <button className="bg-white absolute h-[40px] text-lg w-[220px] top-[1210px] left-[135px] rounded-full">Read More</button>
            </div>
            <div>
                <img src={sec3} alt="" className="relative" />
                <button className="bg-white absolute h-[40px] text-lg w-[200px] top-[1976px] right-[306px] rounded-full">Read More</button>

            </div>
            <div>
                <img src={sec4} alt="" className="relative" />
                <div className="">
                    <form>
                        <input type="text" placeholder="Search for more places.. " className=" bg-white absolute h-[40px] text-lg w-[380px] text-center top-[2880px] left-[470px] rounded-full" />
                    </form>
                </div>
                
            </div>
            <div>
                <img src={sec5} alt="" className="relative" />
                <button className="bg-white absolute h-[40px] text-lg w-[220px] top-[3590px] left-[130px] rounded-full">Share your trip</button>
            </div>
        </div>
    );
}
export default Landing;