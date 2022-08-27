import { useState } from "react";
import {useNavigate} from 'react-router-dom';
// import {} from "dotenv/config"


const Create  = () => {
    const PORT = 3000;
    const [title,setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState('');
    const history = useNavigate();

    const handleSubmit = e =>{
        e.preventDefault();
        const blog = {title, body , author}
        setIsPending(true);
        fetch(`http://localhost:${PORT}/blogs`,{
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
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type='text'
                    required
                    value={title}
                    onChange = {e => setTitle(e.target.value)} 
                    placeholder = 'add destination'   
                />
                <label>Blog Body: </label>
                <textarea
                    required
                    value={body}
                    onChange = {e => setBody(e.target.value)} 
                />
                <label>Blog Author: </label>
                <input 
                    type='text'
                    required
                    value={author}
                    onChange = {e => setAuthor(e.target.value)} 
                    placeholder = 'Enter your name'   
                />   
                <button type="Submit">Add Blog</button>

            </form>
        </div>
    )
}

export default Create;