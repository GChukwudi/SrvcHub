import React from "react";
import './Home.css';
import { FaFacebook, FaTwitter, FaInstagram, FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="home">
            {/* <h1>Welcome to SrvcHub</h1>
            <p>Find the best artisans in your area</p> */}
            <header className="home-header">
                <div className="logo">SrvcHub</div>
                <nav className="header-nav">
                    <a href="#home-content">Home</a>
                    <a href="#about">About</a>
                    <Link to="/login" className="header-nav-link">Sign In</Link>
                    <Link to="/register" className="header-nav-link">Sign Up</Link>
                </nav>
            </header>

            <section className="content">
                <div className="home-content">
                    <div className="home-globe">
                        <img src="https://images.stockcake.com/public/a/c/b/acb258f4-fd7b-48b8-b3b6-8b700f2f677a/colorful-map-exploration-stockcake.jpg" alt="Artisan" />
                    </div>
                    <div className="intro-content">
                        <h1>Find the best artisans <br/> around <span>YOU!</span> </h1>
                        <p>Discover and book the best artisans in your area.<br/> SrvcHub is here to connect you with the best artisans in your area.</p>
                        <div className="search">
                            <input type="text" placeholder="Search for talemts" />
                            <FaSearch className="search-icon" />
                            <button className="filter-btn">Filter</button>
                        </div>
                    </div>
                    <div className="home-image">
                        <img src="https://images.stockcake.com/public/7/a/5/7a53082e-3250-44ac-93bd-53403cad4b3b/artisan-selecting-fabric-stockcake.jpg" alt="Artisan" />
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <h1>About SrvcHub</h1>
                <div className="about-content">
                    <div className="about-image">
                        <img src="https://images.stockcake.com/public/b/4/9/b494a7a2-6ca3-4e00-9eba-8e16ad50c49a/connected-mobile-user-stockcake.jpg" alt="Artisan" />
                    </div>
                    <div className="about-text">
                        <p>SrvcHub is a platform that connects artisans with customers. We provide a platform for artisans to showcase their crafts and connect with customers.
                            Customers can search for the services they need and book the services from the artisans. SrvcHub aims to provide a seamless experience for both artisans and customers.</p>
                    </div>
                </div>
            </section>

            <section className="how-it-works">
                <h1>How SrvcHub Works</h1>
                <div className="steps">
                    <div className="step">
                        <img src="https://images.stockcake.com/public/d/c/5/dc535344-700c-4ca7-8532-2a255f40dc21/using-mobile-app-stockcake.jpg" alt="Search" />
                        <p>Sign up and create a profile</p>
                    </div>
                    <div className="step">
                        {/* <h2>Book</h2> */}
                        <img src="https://images.stockcake.com/public/1/0/a/10aabc3e-1e1d-4aec-9a32-db7e8e5e839f_large/navigating-city-streets-stockcake.jpg" alt="Book" />
                        <p>Browse and find talents</p>
                    </div>
                    <div className="step">
                        {/* <h2>Get Service</h2> */}
                        <img src="https://images.stockcake.com/public/a/f/b/afb17c74-ba1a-47e2-80ab-a01c464748ba/styling-curly-hair-stockcake.jpg" alt="Get Service" />
                        <p>book services and enjoy!</p>
                    </div>
                </div>
            </section>

            <section className="join-as-artisan">
                <h1>Join SrvcHub as an artisan</h1>
                <div className="Craftsman">
                    <div className="Craftsman-image">
                        <img src="https://images.stockcake.com/public/8/6/9/86916c64-554e-4cf6-a565-04da2a661a92/creative-workspace-bustle-stockcake.jpg" alt="Artisan" />
                    </div>
                    <div className="Craftsman-content">
                        <h2>Craftsman</h2>
                        <p>Showcase your crafts and earn by connecting with customers</p>
                        <button className="join-button">Craft with us</button>
                    </div>
                </div>

                <div className="Service-Provider">
                    <div className="Service-Provider-image">
                        <img src="https://images.stockcake.com/public/0/8/4/08494a26-0779-4ae0-a383-6f2b1fda0c3c/medical-consultation-smile-stockcake.jpg" alt="Artisan" />
                    </div>
                    <div className="Service-Provider-content">
                        <h2>Service Provider</h2>
                        <p>Provide services and earn by connecting with customers</p>
                        <button className="join-button">Partner with us</button>
                    </div>
                </div>

                <div className="collaborate">
                    <div className="collaborate-image">
                        <img src="https://images.stockcake.com/public/4/2/0/4200cb8f-2f99-4e38-a931-6824d756daf4/team-collaboration-session-stockcake.jpg" alt="Artisan" />
                    </div>
                    <div className="collaborate-content">
                        <h2>Collaborate with us</h2>
                        <p>Join a team dedicated to enhance the artisan-customer experience</p>
                        <button className="join-button">Collaborate with us</button>
                    </div>
                </div>
            </section>

            <footer className="home-footer">
                <div className="footer-content">
                    <div className="footer-logo">SrvcHub</div>
                    <div className="footer-social">
                        <a href="https://www.facebook.com/"><FaFacebook /></a>
                        <a href="https://www.twitter.com/"><FaTwitter /></a>
                        <a href="https://www.instagram.com/"><FaInstagram /></a>
                    </div>
                    <div className="footer-links">
                        <a href="#about">Privacy and policy</a>
                        <a href="#about">Terms and conditions</a>
                        <a href="#about">About</a>
                    </div>
                    <div className="newsletter">
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>

                    <div className="footer-text">
                        <p>&copy; 2024 SrvcHub. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
