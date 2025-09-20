import { Link } from 'react-router-dom'
import '../styles/homepage.css'

function NavBar(){
    return(
        <>
            <div className='heronavbar'>
                <div>
                    <h2>BlogBurg</h2>
                </div>
                <nav>
                    <ul>
                        <Link to="/aboutus">
                            <li>About Us</li>
                        </Link>
                        
                        {/* <li>About Us</li> */}
                        <Link to="/writeablog">
                            <li>Write a Blog</li>
                        </Link>
                        
                        <Link to="/contactus">
                            <li>Contact Us</li>
                        </Link>
                        <Link to="/myblogs">
                            <li>My Blogs</li>
                        </Link>
                        
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar