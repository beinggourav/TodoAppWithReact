import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>To-Do App with Eisenhower matrix implementation</h1>
            <h2><Link to="/TodoAppWithReact">Home</Link></h2>
        </div>
    );
}
 
export default Navbar;