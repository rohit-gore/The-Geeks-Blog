import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Geeks Blog</h1>
            
            <div className="links">

                <Link to="/">Home</Link>

                <Link to="/create" style={{  /* Inline CSS in JSX */
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '5px'
                }}>New Blog</Link>

            </div>
        </nav>
    );
}
 
export default Navbar;