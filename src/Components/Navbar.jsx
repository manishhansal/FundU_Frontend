import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" target="_blank" rel="noreferrer">
            <img className="logo" src="http://fundu.games/images/logo/fundu_logo_t_c.png" alt="logo"/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Home
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  About
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Services
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gaming Platform
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact
                </a>
              </li>
              
            </ul>
            <div class="d-flex">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  SignIn
                </a>
                </li>
                
                <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  SignUp
                </a>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
