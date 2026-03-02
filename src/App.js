import React from "react";
import "./App.css";
import logo from "./img/logo.jpg"; // import logo
import {useNavigate} from "react-router-dom"

function App() {
  const move = useNavigate();
  const clickbutton =() =>
  {
    move("/dummy");
  };


  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>


      {/* Body */}
      <main className="main-content">
        <section className="hero">
          <h1>Welcome to My React App </h1>
          <p>
            Clean layout with logo navbar and improved footer design.
          </p>
          <button className="btn" onClick={clickbutton}>Get Started</button>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              We build modern web applications using React and clean UI design.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>Services</p>
            <p>Contact</p>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@mywebsite.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 MyWebsite | All Rights Reserved
        </div>
      </footer>

    </div>
  );
}

export default App;