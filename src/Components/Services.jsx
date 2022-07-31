import React from "react";
import './Services.css';

const Services = () => {
  return (
    <div id="services">
      <h1>Our Services</h1>
      <div className="services_main">
        <div className="services_left">
          <img src="p6.jpg" alt="p6.jpg"/>
        </div>

        <div className="services_middle">
          <h2>
            We provides tons of games through which you can learn stock market
            and its exchange behaviour very easily, quickly and enjoyingly. We
            keep on adding numerous games usually so that you never get bored on
            playing the same games. Even you can create your own games on your
            finger tips. Our services are result-driven and are effective in
            every aspects of learning and growing. Keep playing and keep
            learning.
          </h2>
        </div>
        <div className="services_right">
          <img src="p7.jpg" alt="p7.jpg"/>
        </div>
      </div>
    </div>
  );
};

export default Services;
