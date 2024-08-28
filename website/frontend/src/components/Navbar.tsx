import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact/FAQ</a></li>
          <li><a href="/volunteer">Volunteer</a></li>
          <div className="dropdown">
            <a className="dropbtn">Resources</a>
            <div className="dropdown-content">
              <a href="/forms">Forms</a>
              <a href="/volunteerideas">Volunteer Ideas</a>
              <a href="/gallery">Gallery</a>
            </div>
          </div>
          <li><a href="/tutoring">Tutoring</a></li>
        </ul>
      </nav>
)
}

export default Navbar;
