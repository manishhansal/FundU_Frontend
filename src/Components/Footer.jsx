import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#03989E"
            fill-opacity="0.5"
            d="M0,160L40,149.3C80,139,160,117,240,128C320,139,400,181,480,181.3C560,181,640,139,720,133.3C800,128,880,160,960,154.7C1040,149,1120,107,1200,101.3C1280,96,1360,128,1400,144L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="content">
        <div className="footer_left">
          <ul class="me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href=".home">
                Home
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#about">
                About
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href=".services">
                Services
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href=".gamingPlatform"
              >
                Gaming Platform
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="logo_div">
          <a href="/">
            <img
              className="logo"
              src="http://fundu.games/images/logo/fundu_logo_t_c.png"
              alt="logo"
            />
          </a>
        </div>
        <div className="social">
          <div>
            <a
              href="https://www.linkedin.com/in/manish-kumar-939467210/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="linkedin.png" alt="Linkedin_icon"></img>
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/ManishK62653031"
              target="_blank"
              rel="noreferrer"
            >
              <img src="twitter.png" alt="Twitter_icon"></img>
            </a>
          </div>
          <div>
            <a href="https://wa.me/8581935284" target="_blank" rel="noreferrer">
              <img src="whatsapp.png" alt="whatsapp_icon"></img>
            </a>
          </div>
        </div>
        <div className="footer_foot">
          <h5>
            Designed and build by Manish Kumar, © 2022. All Rights Reserved
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
