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
        nav("\login")
    }
    return(
        <div>
            <div>
                <img src={sec1} alt="" className="relative " />
                <img src={logo} alt="logo" className="absolute mt-10 ml-10 top-[9px] left-[0px] object-cover object-right  h-[100px] w-[200px] inline" />
            <div className="flex flex-row space-x-6 absolute top-[9px] left-[1000px] text-yellow-700">
                <div className="flex flex-row space-y-6">
                    <div className="flex flex-row space-x-6">
                        <div><i class="uil uil-user"></i></div>
                        <div><i class="uil uil-heart"></i></div>
                        <div><i class="uil uil-bell"></i></div>
                    </div>

                    <div className="flex flex-row space-x-6">
                        <div className="cursor-pointer" onClick={userProfile}>Profile</div>
                        <div className="cursor-pointer" onClick={userProfile}>wishlist</div>
                        <div className="cursor-pointer" onClick={userProfile}>notification</div>
                        
                    </div>
                </div>
                    
                </div>
            </div>
            <div>
                <img src={sec2} alt="" className="relative"/>
                <button className="bg-white absolute h-[60px] text-2xl w-[220px] top-[1770px] left-[155px] rounded-full">Read More</button>
            </div>
            <div>
                <img src={sec3} alt="" className="relative" />
                <button className="bg-white absolute h-[60px] text-2xl w-[220px] top-[2840px] right-[530px] rounded-full">Read More</button>

            </div>
            <div>
                <img src={sec4} alt="" className="relative" />
                <div className="">
                    <form>
                        <input type="text" placeholder="Search for more places.. " className=" bg-white absolute h-[60px] text-2xl w-[380px] text-left top-[3080px] left-[570px] rounded-full" />
                    </form>
                </div>
                
            </div>
            <div>
                <img src={sec5} alt="" className="relative" />
                <button className="bg-white absolute h-[60px] text-2xl w-[220px] top-[3520px] left-[175px] rounded-full">Share your trip</button>
            </div>
        </div>
    );
}
export default Landing;