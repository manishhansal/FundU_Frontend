import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className="about_container">
        <img
          src="https://i.ibb.co/tYtFnGJ/about-background.jpg"
          alt="about-background"
        />
        <div className="content">
          <h2>Learn Stock Market By Playing Games</h2>
        </div>
      </div>
      <div className="content2">
        <h1>About Us</h1>
        <h2>An early stage SaaS startup</h2>
        <h3>
          If equity trading feels risky to you, if you believe crypto trading
          will cost you your hard earned money, if you have knowledge and skills
          but don’t have resources to apply your skills in the real market,
          FundU might have a solution for you. Try your hand with real trading
          in a simulated environment with virtual money. Compete with peers and
          apply your strategies to prove your metal. Maximize your profit and
          earn winnings.
          <br />
          <br />
          FundU is a Social trading application which gives users a platform to
          share their skills and knowledge of trading, build community to
          maximize their profits, in addition to real trading market
          simulations. Traders will also have an opportunity to earn from their
          hard earned skills and research. Users will be rated on their
          performance and recommendations. Top performers will get chance to get
          paid for their suggestions and recommendations from their followers
          and subscribers.
        </h3>
      </div>
    </div>
  );
};

export default About;
