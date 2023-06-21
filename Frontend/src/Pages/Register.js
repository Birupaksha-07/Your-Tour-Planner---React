import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link, useNavigate } from 'react-router-dom';


function Register() {

    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [userCredential, setuserCredential] = useState({
        name: "", email: "", phone: "", password: "", cpassword: ""
    })

    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setuserCredential({ ...userCredential, [name]: value });
    }


    const postData = async (e) => {
        e.preventDefault();

        const { name, email, phone, password, cpassword } = userCredential;

        if (name && email && phone && password && cpassword) {
            try {
                let emailPattern = /\w+@gmail.com+$/g;
                let emailMatched = userCredential.email.search(emailPattern);
                if (emailMatched === -1) {
                    setErrorMsg("Please provide a valid Email");
                } else if (password !== cpassword) {
                    setErrorMsg("Password Mismatch");
                } else {
                    setIsLoading(true);
                    const res = await fetch("/register", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name, email, phone, password, cpassword
                        })
                    })
                    const data = await res.json();
                    if (data) {
                        setIsLoading(false);
                        setErrorMsg(data.error);

                    }
                    alert(data.message);
                    setIsLoading(false);
                    navigate("/login");
                    setuserCredential({
                        name: "",
                        email: "",
                        phone: "",
                        password: "",
                        cpassword: ""
                    });
                }
            } catch (err) {
                setIsLoading(false);
                console.log(err);
            }

        } else {
            alert("Please fill all the Data");
        }
    }

    return (
        <>
            <Navbar />
            <div className="hero"></div>
            <div className="form-box">
                <div className="button-box">
                    <div id="btn"></div>
                    <Link to="/login"><button type="button" className="toggle-btn-login">Log In</button></Link>
                    <Link to="/register"> <button type="button" className="toggle-btn-register">Register</button></Link>
                </div>
                <div className="social-icons-register">
                    <span><ion-icon name="logo-google"></ion-icon></span>
                    <span><ion-icon name="logo-github"></ion-icon></span>
                    <span><ion-icon name="logo-facebook"></ion-icon></span>
                    <span><ion-icon name="logo-twitter"></ion-icon></span>
                </div>
                <form method="POST" id="register" className="input-group-register">
                    <input type="text" name="name"
                        value={userCredential.name}
                        onChange={handleInputs}
                        className="input-field-register" placeholder="User name" required />

                    <input type="email" name="email"
                        value={userCredential.email}
                        onChange={handleInputs}
                        className="input-field-register" placeholder="Email" required />
                    <input type="phone" name="phone"
                        value={userCredential.phone}
                        onChange={handleInputs}
                        className="input-field-register" placeholder="Phone" required />

                    <input type="password" name="password"
                        value={userCredential.password}
                        onChange={handleInputs}
                        className="input-field-register" placeholder="Password" required />

                    <input type="password" name="cpassword"
                        value={userCredential.cpassword}
                        onChange={handleInputs}
                        className="input-field-register" placeholder="Confirm password" required />

                    <p style={{ color: "red" }} >{errorMsg}</p>

                    <div className='check-box-register'><input type="checkbox" name="checkbox" /><span>I agree to the <a href="/">terms & conditions</a> </span></div>
                    <button type="submit" id="register-btn" className="submit-btn-register" onClick={postData} >{isLoading ? "Loading..." : "Register"} </button>
                </form>
            </div>
            <div />
        </>
    )
}

export default Register;