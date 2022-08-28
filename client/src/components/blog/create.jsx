import { useState } from "react";
import logo2 from '../images/logo 2.png';
import maps from '../images/map.png';

// import {useNavigate} from 'react-router-dom';


const Create  = () => {
    const [title,setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState('');
    // const history = useNavigate();

    const handleSubmit = e =>{
        e.preventDefault();
        const blog = {title, body , author}
        setIsPending(true);
        fetch('http://localhost:3000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
         }).then(()=>{
            alert("the post has been created")
            setTitle('');
            setAuthor('');
            setBody('');
        })
    }

    return(
        <div className="h-auto bg-white w-full">
            <div>
            <img src={logo2} alt="logo" className="absolute mt-10 ml-10 top-[9px] left-[0px] object-cover object right h-[100px] w-[200px] inline" />

            </div>
            <div className="flex flex-row space-x-6 absolute top-[60px] left-[1000px] text-yellow-700">
                    
                      <div className="flex flex-row space-x-6">
                         <div>Profile</div>
                         <div>Wishlist</div>
                         <div>Notification</div>
                        </div>

                    
            </div>
  
            
           
        <div className="create bg-gray-300 w-full ">
            <div className="flex flex-col space-y-4 justify-center">
                <div><a href="https://www.google.com/maps/place/Chandragiri,+Odisha+761017/@19.3014831,84.2765521,15z/data=!3m1!4b1!4m5!3m4!1s0x3a3d2811fcb782db:0x589a32b67f33c5ff!8m2!3d19.3002058!4d84.283838"><img src={maps} className="relative top-[400px] left-[700px]" alt="" /></a></div>
                <div className="absolute left-[750px] top-[600px]">Add location</div>

            </div>

            <h2 className="text-4xl font-bold text-orange-800 ml-[200px] text-left ">Add a new blog</h2>
            <div className="buttons flex flex-row space-x-1 ml-[200px] mt-[40px]">
                <div><button className="bg-white w-[120px] rounded-md h-auto p-4">New</button></div>
                <div><button className="bg-white w-[120px] rounded-md h-auto p-4">Drafts</button></div>
                <div><button className="bg-white w-[120px] rounded-md h-auto p-4">Save</button></div>
                <div><button className="bg-white w-[120px] rounded-md h-auto p-4">Share</button></div>
                <div><button className="bg-orange-400 w-[120px] rounded-md h-auto p-4">Publish</button></div>

            </div>
            <div className="bg-white w-[800px] mt-10 ml-[200px] mr-[600px] h-[600px] p-10  flex flex-col space-y-24">
            <form onSubmit={handleSubmit}>
                <div><label>Blog Title</label>
                <input className="text-center mr-[400px]"
                    type='text'
                    required
                    value={title}
                    onChange = {e => setTitle(e.target.value)} 
                    placeholder = 'add destination'   
                /></div>
                <div className=""><label>Blog Body: </label>
                <textarea input="text"  className="mr-[410px] mt-[40px]"
                    required
                    value={body}
                    onChange = {e => setBody(e.target.value)} label
                /></div>
                <div className=""><label>Blog Author: </label>
                <input className=" text-center mr-[385px] mt-[50px]"
                    type='text'
                    required
                    value={author}
                    onChange = {e => setAuthor(e.target.value)} 
                    placeholder = 'Enter your name' /></div>   
                <div>
                    <label>Nearby Place suggestion</label>
                    <textarea className="mr-[310px] mt-[60px]"/>
                </div>
                <div>
                    <label>upload photos and videos</label>
                    <textarea className="mr-[300px] mt-[80px]"/>
                </div>

                

            </form>
            </div>
        </div>
        </div>   
    )
}

export default Create


// import { useState } from "react";
// import {useNavigate} from 'react-router-dom';
// // import {} from "dotenv/config"


// const Create  = () => {
//     const PORT = 3000;
//     const [title,setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [author, setAuthor] = useState('');
//     const [isPending, setIsPending] = useState('');
//     const history = useNavigate();

//     const handleSubmit = e =>{
//         e.preventDefault();
//         const blog = {title, body , author}
//         setIsPending(true);
//         fetch(`http://localhost:${PORT}/blogs`,{
//             method:'POST',
//             headers:{"Content-Type":"application/json"},
//             body: JSON.stringify(blog)
//          }).then(()=>{
//             alert("the post has been created")
//             setTitle('');
//             setAuthor('');
//             setBody('');
//         })
//     }

//     return(
//         <div className="create">
//             <h2>Add a new blog</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Blog Title</label>
//                 <input 
//                     type='text'
//                     required
//                     value={title}
//                     onChange = {e => setTitle(e.target.value)} 
//                     placeholder = 'add destination'   
//                 />
//                 <label>Blog Body: </label>
//                 <textarea
//                     required
//                     value={body}
//                     onChange = {e => setBody(e.target.value)} 
//                 />
//                 <label>Blog Author: </label>
//                 <input 
//                     type='text'
//                     required
//                     value={author}
//                     onChange = {e => setAuthor(e.target.value)} 
//                     placeholder = 'Enter your name'   
//                 />   
//                 <button type="Submit">Add Blog</button>

//             </form>
//         </div>
//     )
// }

// export default Create;