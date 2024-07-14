import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>(your name here @navbar.js)'s Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
