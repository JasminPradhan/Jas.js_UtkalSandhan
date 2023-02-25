import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Write travel log</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;
