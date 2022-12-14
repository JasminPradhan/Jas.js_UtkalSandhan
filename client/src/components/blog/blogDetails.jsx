import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
// import {} from "dotenv/config"

const BlogDetails = () => {
  const PORT = 8000;
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch(`http://localhost:${PORT}/blogs/` + id);
  const history = useNavigate();

  const handleClick = () => {
    fetch(`http://localhost:${PORT}/blogs` + blog.id, {
      method: "DELETE",
    }).then(() => {
      alert("This post was deleted");
      history("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <article>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleClick}>Delete</button>
      </article>
    </div>
  );
};

export default BlogDetails;
