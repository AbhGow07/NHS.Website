import React, { useState, useEffect } from 'react';

const Home = () => {

    const isApplicationOpen = true; // Control whether the application button is shown

    return (
        <main className="home-container">
            {/* Welcome Section */}
            <section className="welcome-section">
                <div className="welcome-text">
                    <h1>Welcome to NHS</h1>
                    <h2>Our next meeting is on: <strong>Tuesday 9/3/24</strong></h2>
                </div>
                <div className="logo-container">
                    <img src="/path/to/nhs-logo.png" alt="NHS Logo" className="nhs-logo" />
                </div>
            </section>

            <section className="carousel-section">
                <div className="image-carousel">
                    <img src="/path/to/image1.jpg" alt="Image 1" />
                    <img src="/path/to/image2.jpg" alt="Image 2" />
                    <img src="/path/to/image3.jpg" alt="Image 3" />
                    <img src="/path/to/image4.jpg" alt="Image 4" />
                </div>
            </section>

            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to promote leadership, service, and academic excellence among our members. 
                    We strive to make a positive impact in our community through various initiatives and volunteer work.
                </p>
            </section>

            <section className="apply-section">
                {isApplicationOpen ? (
                    <a href="https://forms.gle/your-google-form-link" className="apply-button">Apply Now</a>
                ) : (
                    <p className="waitlist-info">Applications are currently closed. Please check back later.</p>
                )}
            </section>
        </main>
    );
}

export default Home;
