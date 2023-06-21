import React from 'react';
import Navbar from './Navbar';
import Packages from './Packages';
import Footer from './Footer'

function Home() {
  return (
    <div>
      {/* <!--===========Nav Bar=================--> */}
      <Navbar/>
      
      {/* <!--===============Banner================--> */}
      <div className="banner">
                <div className="banner-text-item">
                    <div className="banner-heading">
                        <h1>Find your Next tour!</h1>
                    </div>
                    <form className="form">
                        <input type="text" list="mylist" placeholder="Where would you like to go?" />
                        <datalist id="mylist">
                            <option>London</option>
                            <option>Canada</option>
                            <option>Monaco</option>
                            <option>France</option>
                            <option>Japan</option>
                            <option>Switzerland</option>
                            <option>Seoul</option>
                        </datalist>
                        <input type="date" className="date" />
                        <a href="#"className="book">book</a>
                    </form>
                </div>
            </div>

      {/* <!--=========Services===============--> */}
      <section className="services">
                <div className="service-item">
                    <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293634/tour-guide_onzla9.png"  />
                      <h2>8000+ Our Local Guides</h2>
                </div>
                <div className="service-item">
                    <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293738/reliability_jbpn4g.png" />
                    <h2>100% Trusted Tour Agency</h2>
                </div>
                <div className="service-item">
                    <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293635/experience_a3fduk.png" />
                    <h2>28+ Years of Travel Experience</h2>
                </div>
                <div className="service-item">
                    <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293634/feedback_s8z7d9.png" />
                    <h2>98% Our Travelers are Happy</h2>
                </div>
            </section>

      {/* <!--==============Packages===================--> */}
      <Packages/>

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

      {/* <!--===========Footer=================--> */}
      <Footer/>

      
    </div>
  )
}

export default Home;