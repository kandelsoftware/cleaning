import React from "react";
function Header() {
  return (
    <div className="" id="home">
      <header>
        <nav>
          <div class="row">
            <a href="#home">
              <img
                src="resources/img/logo-white.png"
                alt="companyname  logo"
                class="logo"
              />
            </a>

            <a href="#home">
              <img
                src="resources/img/logo.png"
                alt="company  logo"
                class="logo-black"
              />
            </a>

            <ul class="main-nav js--main-nav">
              <li>
                <a href="#service">Our services</a>
              </li>
              <li>
                <a href="#feature">Our features</a>
              </li>

              <li>
                <a href="#environment">environment</a>
              </li>
              <li>
                <a href="#review">Reviews</a>
              </li>
              <li>
                <a href="#message">message us</a>
              </li>
              <li>
                <a href="#home"> 44444444--444</a>
              </li>
            </ul>
            <a class="mobile-nav-icon js--nav-icon">
              <i class="ion-navicon-round" />
            </a>
          </div>
        </nav>
        <div class="hero-text-box">
          <h1>
            welcome to our
            <br />
            Cleaning Service
          </h1>
          <a class="btn btn-ghost js--scroll-to-start" href="#">
            Our services
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
