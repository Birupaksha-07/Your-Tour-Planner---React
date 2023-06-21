import React,{useContext} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
// import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    const navigate=useNavigate();
    // const { loginWithRedirect , isAuthenticated , logout } = useAuth0();
    const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
    
    const logout=()=>{  

    fetch('/logout');
    navigate('/login');
    setIsLoggedIn(false);
    
    }

    return (
        <>
            {/* <!--===========Nav Bar=================--> */}
            <section className="nav-bar">
                <div className="logo">Your Tour Planner</div>
                <ul className="menu">
                    <li><Link to="/" >home</Link></li>
                    <li><Link to="/package">package</Link></li>
                    <li><Link to="/about">about us</Link></li>
                    <li><Link to="/contact">contact us</Link></li>
                    {isLoggedIn?<li><Link to="#" onClick={logout}>logout</Link></li>:<li><Link to="/login" >login</Link></li>}
                    
                    
                    
                    {/* <li className="userInfoh3">{isAuthenticated && <h3>Wellcome<span><ion-icon name="happy-outline"></ion-icon></span></h3>}</li>
                    {
                        isAuthenticated ? (
                            <li className="log"><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button></li>
                            ) : (
                            <li className="log"><button onClick={() => loginWithRedirect()}>Log In</button></li>
                        )
                    } */}
                    
                   
                </ul>
            </section>
        </>
    )
}

export default Navbar;