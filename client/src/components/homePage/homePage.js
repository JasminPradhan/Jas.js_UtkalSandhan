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
                <img 
                src={logo} 
                alt="logo" 
                className="
                absolute 
                mt-10 
                ml-10 
                top-[1rem] 
                lg:top-[-.5rem] 
                left-[0rem] 
                lg:left-[-1rem] 
                object-cover 
                object-right  
                h-[7rem] 
                w-[14rem] 
                inline" />
            <div 
            className="
            flex 
            flex-row 
            space-x-6 
            absolute 
            top-[1rem] 
            lg:top-[-.5rem] 
            left-[40rem] 
            xl:left-[65rem]
            text-yellow-700">
                <div>
                    <div className="flex flex-row space-x-6 mt-[5rem]">
                        <div className="cursor-pointer" onClick={userProfile}>Login</div>
                        <div className="cursor-pointer" onClick={userProfile}>Wishlist</div>
                        <div className="cursor-pointer" onClick={userProfile}>Notification</div>
                        <div className="cursor-pointer" onClick={createBlog}>Publish</div>
                        
                    </div>
                </div>
                    
                </div>
            </div>
            <div>
                <img src={sec2} alt="" className="relative"/>
                <button 
                className="
                bg-white 
                absolute
                h-[2.1rem]
                xl:h-[2.3rem]
                text-lg 
                w-[9rem] 
                top-[56.8rem] 
                lg:top-[59.5rem] 
                xl:top-[84rem]
                left-[5.45rem] 
                xl:left-[8rem]
                rounded-full">
                    Read More
                </button>
            </div>
            <div>
                <img src={sec3} alt="" className="relative" />
                <button 
                className="
                bg-white 
                absolute 
                h-[2.1rem] 
                xl:h-[2.3rem]
                text-lg 
                w-[9rem] 
                top-[91.5rem] 
                lg:top-[95.5rem]
                xl:top-[134.81rem]
                right-[14.85rem]
                lg:right-[15.8rem]
                xl:right-[25.6rem]
                rounded-full">
                    Read More
                </button>

            </div>
            <div>
                <img src={sec4} alt="" className="relative" />
                <div className="">
                    <form>
                        <input 
                        type="text" 
                        placeholder="Search for more places.. " 
                        className=" 
                        bg-white 
                        absolute 
                        h-[2.5rem] 
                        text-lg 
                        w-[25rem] 
                        lg:w-[35rem] 
                        lg:w-[40rem]
                        text-center 
                        top-[134rem] 
                        lg:top-[139.5rem] 
                        xl:top-[197rem]
                        left-[18.5rem] 
                        lg:left-[15rem] 
                        xl:left-[25rem]
                        rounded-full" />
                    </form>
                </div>
                
            </div>
            <div>
                <img src={sec5} alt="" className="relative" />
                <button 
                className="
                bg-white 
                absolute 
                h-[2.1rem]
                xl:h-[2.3rem] 
                text-lg 
                w-[11rem] 
                top-[155rem] 
                lg:top-[162rem] 
                xl:top-[228rem]
                left-[6rem] 
                xl:left-[8.7rem]
                rounded-full">
                    Share your trip
                </button>
            </div>
        </div>
    );
}
export default Landing;