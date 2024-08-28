import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>National Honor Society</h4>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: jhshonorsociety@gmail.com</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/jacksonnhs" target="_blank" rel="noopener noreferrer">
                            <img src="src/assets/icons/instagramIcon.png" alt="Instagram"/>
                        </a>
                        <a href="https://www.remind.com/join/jhsnhs2023" target="_blank" rel="noopener noreferrer">
                            <img src="src/assets/icons/remindIcon.png" alt="Remind"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} NHS. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
