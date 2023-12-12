import "./pagesCss/Home.css";
import Image1 from "../assets/brands-image.webp";
import Image2 from "../assets/game-icons.webp";
import Image3 from "../assets/game-progress-coupon.webp";
import Image4 from "../assets/hero.webp";
import ReactGA from "react-ga4";
import emailjs from "@emailjs/browser";
import Image5 from "../assets/game-demo.jpg";
import { toast } from "react-toastify";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { IoMdDownload } from "react-icons/io";
import { IoGameController } from "react-icons/io5";

import Coup1 from "../assets/coup1.jpg";
import Coup2 from "../assets/coup2.png";
import Coup3 from "../assets/coup3.png";
import Coup4 from "../assets/coup4.png";
import Coup5 from "../assets/coup5.png";
import Coup6 from "../assets/coup6.png";
import GameIcon from "../assets/game-icon.png";

const Home = () => {
  const form = useRef();
  const handleDownload = () => {
    // Navigate to the external page when the button is clicked
    window.location.href = "https://we.tl/t-1x3bkqdMC1";
  };
  useEffect(() => {
    ReactGA.event({
      category: "Home Visited",
      action: `Home Visited`,
      label: `Home Visited`,
    });
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const collectEmailAndMessage = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Email format validation
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "service_1gdvsfa",
        "template_yhqe5qi",
        form.current,
        "d-jWDXN7_-m7wztCB"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("FeedBack Sent");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
    // try {
    //   emailjs
    //     .sendForm(
    //       "service_1gdvsfa",
    //       "template_yhqe5qi",
    //       form.current,
    //       "d-jWDXN7_-m7wztCB"
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    //   console.log({
    //     name,
    //     email,
    //     message,
    //   });
    //   toast.success("FeedBack Sent");
    //   setName("");
    //   setEmail("");
    //   setMessage("");
    // } catch (error) {
    //   toast.error(error?.response?.data?.message);
    // }
  };

  return (
    <div className="home-wrapper">
      <div className="home-block-one">
        <h1 className="home-heading">
          Reward Players. Increase Retention.<br></br> Boost Revenue.
        </h1>
        <img src={Image4} className="home-hero-image" />
        <p className="home-para">
          Monetize your mobile games with in-game, real-life brand discounts and
          coupons rewards that fit right into your game loop and complement your
          in-game economy.
        </p>

        <div className="scratch-coupon-section">
          <img src={Coup6} alt="" className="scratch-coupon-skin" />
          <img src={Coup5} alt="" className="scratch-coupon-skin" />
          <img src={Coup2} alt="" className="scratch-coupon-skin" />
          <img src={Coup3} alt="" className="scratch-coupon-skin" />
          <img src={Coup4} alt="" className="scratch-coupon-skin" />
          <img src={Coup1} alt="" className="scratch-coupon-skin" />
        </div>
        <p className="home-para-spe">
          Add Scratch and Redeem Coupons in your games:
        </p>
        <p className="home-para-spe2">And make money on each coupon reedeem.</p>
      </div>
      <div className="home-block-two">
        <h1 className="home-heading heading-small">
          Get Exclusive rewards form Top-Brands.
        </h1>
        <img src={Image1} className="home-image-one" />
      </div>
      <div className="home-block-three">
        <div className="home-game-dev-container">
          <div className="home-dev-div">
            <h2 className="home-heading-two">
              Hey, Game Developers <IoGameController />
            </h2>
            <p className="home-para-two">
              Imagine being able to offer your players real life brand coupons
              and discount rewards seamlessly within your games,creating an
              engaging and rewarding experience for your players while boosting
              your revenue
            </p>
          </div>
          <img src={Image2} className="home-image-two" />
        </div>
      </div>
      <div className="home-block-four">
        <div className="home-div-four">
          <h1 className="home-heading heading-smaller">
            Reward your players for each achievements, level cross and
            milestones.
          </h1>
          <img src={Image3} className="home-image-three" />
          <div className="home-para-three-container">
            <p className="home-para-three">
              Strategically placed brand rewards in between game levels will
              increase retention and average game time, which will boost in-ads
              game revenue.
            </p>
          </div>
        </div>
      </div>
      <h1 className="home-heading heading-small">
        Go Checkout our Demo Game...
      </h1>
      <img src={Image5} alt="" className="demo-game-icon" />
      <div className="squared-animals-div">
        <img src={GameIcon} alt="" className="squared-animals-img" />
        <p className="squared-animals-text">Squared Animals</p>
      </div>
      <div className="demo-game-div">
        <button className="demo-game-button" onClick={handleDownload}>
          <IoMdDownload />
          Download Demo Game
        </button>
      </div>
      <div className="home-block-five">
        <div className="home-heading-container-five">
          <h1 className="home-heading-five">Win-Win Solution</h1>
          <p className="home-para-five">Maximum Revenue. Minimum Hassle</p>
        </div>
        <div className="home-cycle-column">
          <div className="home-colum-item">
            <h2 className="home-column-heading-item">Players</h2>
            <p className="home-column-para-item">
              Players will get exclusive brands discounts and coupons codes
              which they can redeem while shopping.
            </p>
          </div>
          <div className="vertical-line"></div>

          <div className="home-colum-item">
            <h2 className="home-column-heading-item">Game Developers</h2>
            <p className="home-column-para-item">
              We will share our revenue with the game developers when a player
              redeem brand rewards
            </p>
          </div>
          <div className="vertical-line"></div>

          <div className="home-colum-item">
            <h2 className="home-column-heading-item">Brands</h2>
            <p className="home-column-para-item">
              We are opening doors for the brands to generate sales and
              promotion through one of the largest mobile game-based user base
              in the world.
            </p>
          </div>
        </div>
      </div>
      {/* <form
        ref={form}
        className="home-email-collection"
        onSubmit={collectEmailAndMessage}
      >
        <h1 className="feedback-Input">Give Us Your Feedback...</h1>

        <div className="all-input-labels">
          <label className="feedback-label">Name:</label>
          <input
            type="text"
            className="home-name-input"
            name="to_name"
            value={name}
            onChange={handleNameChange}
          />
          <label className="feedback-label">Email:</label>
          <input
            type="text"
            name="to_email"
            className="home-email-input"
            value={email}
            onChange={handleEmailChange}
          />
          <label className="feedback-label">Message:</label>
          <textarea
            cols="30"
            rows="5"
            name="message"
            type="text"
            className="home-message-input"
            value={message}
            onChange={handleMessageChange}
          />
          <button className="home-registration-input" type="submit">
            Submit
          </button>
        </div>
      </form> */}
    </div>
  );
};

export default Home;
