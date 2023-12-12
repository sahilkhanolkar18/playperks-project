import "./pagesCss/About.css";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const About = () => {
  useEffect(() => {
    ReactGA.event({
      category: "About Visited",
      action: `About Visited`,
      label: `About Visited`,
    });
  }, []);
  return (
    <div className="about-container">
      <h1 className="about-heading">About</h1>
      <p className="about-para">
        Welcome to Playperks, where we empower game developers with dynamic
        partnerships, bringing exciting offers, coupons, promo codes, vouchers,
        and gift cards from brands to players as rewards. Our mission is to
        boost game revenue through enhanced engagement, recognizing the powerful
        synergy between brands and the gaming industry.
      </p>
      <p className="about-para">
        We're committed to improving the gaming experience for players and
        developers alike. Through meaningful connections between brands and
        gamers, we're introducing a new dimension to the gaming world. Join us
        on this exciting journey as we bridge the gap between brands and gamers,
        crafting impactful and rewarding experiences. Together, we're changing
        the game Industry, one reward at a time.
      </p>
    </div>
  );
};

export default About;
