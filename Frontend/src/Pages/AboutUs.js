import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function AboutUs() {
    return (
        <>
        <Navbar/>
            {/* <!--===========About Us===============--> */}
            <section className="about">
                <div className="about-img">
                    <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293719/outdoor_tjjhxk.jpg" />
                </div>
                <div className="about-text">
                    <small>ABOUT OUR COMPANY</small>
                    <h2>We are Go Trip Ravels Support Company</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud</p>

                    <label><input type="checkbox" checked />Lorem ipsum dolor sit amet</label>
                    <label><input type="checkbox" checked />consectetur adipisicing elit</label>
                    <label><input type="checkbox" checked />Architecto atque consequuntur</label>
                    <label><input type="checkbox" checked />cupiditate doloremque ducimus</label>
                    <a href="#">ABOUT US</a>
                </div>
            </section>
        <Footer/>
        </>
    )
}

export default AboutUs;