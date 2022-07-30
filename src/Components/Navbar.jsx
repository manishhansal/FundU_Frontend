import React from "react";
import "./Navbar.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import User from "./User";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              className="logo"
              src="http://fundu.games/images/logo/fundu_logo_t_c.png"
              alt="logo"
            />
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
            <div class="d-flex">
              {user ? (
                <User name={user.firstName || user.name} />
              ) : (
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item" style={{ marginRight: "5px" }}>
                    <SignIn />
                  </li>

                  <li class="nav-item">
                    <SignUp />
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
