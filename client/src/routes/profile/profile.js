// import React from "react";
// 

// const Profile=()=>{
//     return(<div>
//         Profile
//     </div>)
// }

// export default Profile
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import banner from "../images/backphoto.png";
import pic from "../images/profile photo.png";
import logo from "../images/logo.png";

const Profile=()=>{
    const nav =useNavigate()
    return(
        <div>
            {/* banner pic*/}
            <img src={banner} alt="" className="h-[470px] w-full relative" />
            <img src={logo} alt="logo" className="absolute mt-10 ml-10 top-[9px] left-[0px] object-cover object-right  h-[100px] w-[200px] inline" />
            <div className="bg-orange-300 top-[340px] left-[80px] h-[550px]  w-[450px] absolute"></div>
            <img src={pic} alt="" className="top-[280px] left-[220px] absolute" />
            <div className="absolute left-[80px] top-[500px] ">
              <div className="ml-[130px] text-lg justify-middle pb-4 ">
                <h2>Asish Mishra</h2>
                <h4><i class="uil uil-location-point"></i> Dehradun</h4>
                <button className="underline underline-offset-2 text-orange-800 font-bold ">Edit profile</button>
              </div>
                <div className="flex flex-row space-x-10 pt-4  text-lg">
                    <div className="flex flex-col space-y-6 pl-[120px] ">
                       <div>Badges earned</div>
                       <div>Blogs written</div>
                       <div>Followers</div>
                    </div>
                    <div className="flex flex-col space-y-6 text-lg ">
                        <div>76</div>
                        <div>2</div>
                        <div>25</div>

                    </div>
                    <div><button className="bg-white absolute h-[40px] text-lg w-[220px] top-[300px] left-[115px] rounded-full" onClick={()=>nav("/create")}>Publish new blog</button></div>
                </div>
            </div>
            <div className="flex flex-col space-y-6 absolute top-[500px] left-[630px]">
                <div className=""><h1 className="text-4xl text-orange-700 font-extrabold overflow-hidden">Blogs</h1>

                </div>
                <div className="flex flex-row space-x-2">
                    {/* cards */}
                <div className="flex flex-row space-x-[380px] absolute"> 
                    
                 <div class="w-[300px] rounded overflow-hidden shadow-lg absolute">
                  <img className="w-full" src={banner} alt=""/>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Lorem ipsum dolor.</div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#waterfall</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                   </div>
                 </div>

                 <div class="w-[300px] rounded overflow-hidden shadow-lg absolute">
                  <img className="w-full" src={banner} alt=""/>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Lorem ipsum dolor sit.</div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#desert</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                   </div>

                 </div>
                 
                 </div>   

                </div>
                 

            </div>

        </div>
        
    );
}
export default Profile