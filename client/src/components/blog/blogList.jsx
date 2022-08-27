import {Link} from 'react-router-dom';

const BlogList =  async ({title}) =>{

    const response = await fetch('http://localhost:3000')
    // const blogs = [
    //     {
    //         "title": "new title ",
    //         "body": "hackathon code4odisha",
    //         "author": "jeevan",
    //         "id": 4
    //       },
    //       {
    //         "title": "lol",
    //         "body": "lol",
    //         "author": "lol",
    //         "id": 5
    //       }
    // ]
    return(
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>
                            Written by {blog.author}
                        </p>
                    </Link>
                </div>
            ))}
        </div>
    )

}

export default BlogList;