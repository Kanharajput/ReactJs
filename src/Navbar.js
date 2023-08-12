import Home from "./Home.js";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="nav">
            <div className="nav-text">
                <h3>React Blog</h3>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/list">List</Link>
                <Link to="/create">Create</Link>
            </div>
        </div>
    );  
}

export default Navbar;