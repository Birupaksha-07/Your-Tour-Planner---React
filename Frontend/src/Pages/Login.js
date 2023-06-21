import React, {useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Context/AuthContext';



function Login() {
    const navigate = useNavigate();
    const{setIsLoggedIn}=useContext(AuthContext)
    const [errorMsg , setErrorMsg] = useState("");
    const[loading, setLoading] = useState(false);
    const [user,setUser] = useState({
        email:"",password:""
    })

    const handleInputs = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({...user, [name]:value});
    }

    const postData = async (e)=>{
        e.preventDefault();
        setLoading(true);
        const {email , password} = user;
        const res = await fetch("/login",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await res.json();

        if(data.error ===  "Invalid Credentials"){
            setErrorMsg("Invalid Credentials !!");
            setLoading(false);
        }
        if(data.message ==="Successfull"){
            
            alert("User Log in succesfully ");
            setIsLoggedIn(true)
            navigate('/');
            setLoading(false);
        }
    }

    return (
        <>
        <Navbar/>
        <div className="hero">
        
            <div className="form-box">
                <div className="button-box">
                    <div id="btn"></div>
                    <Link to="/login"><button type="button"  className="toggle-btn-login">Log In</button></Link>
                    <Link to="/register"> <button type="button"  className="toggle-btn-register">Register</button></Link>
                </div>
                <div className="social-icons">
                    <span><ion-icon name="logo-google"></ion-icon></span>
                    <span><ion-icon name="logo-github"></ion-icon></span>
                    <span><ion-icon name="logo-facebook"></ion-icon></span>
                    <span><ion-icon name="logo-twitter"></ion-icon></span>
                </div>
                <form method="POST" id="login" className="input-group">
                    <input type="email" name="email" className="input-field"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Email" required />

                    <input type="password" name="password" className="input-field" 
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Password" required />
                    <p style={{ color: "red" }} >{errorMsg}</p>
                    <input type="checkbox" name="checkbox" className="check-box" /><span>Remember Password</span>
                    <button type="submit" className="submit-btn" onClick={postData} >{loading ? "Loading..." : "Log In"}</button>
                </form>
            </div>
            <Footer/>
        </div>
        
        </>
    )
}

export default Login;