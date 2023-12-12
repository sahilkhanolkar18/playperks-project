import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="faq-container">
      <h1 className="about-heading">FAQ</h1>

      <div className="faq-wrapper">
        <p className="faq-questions">Q1: What is Playperks Reward API?</p>
        <p className="faq-answers">
          It's a powerful API designed for mobile game developers. It enables
          seamless integration of real-life brand rewards into mobile games,
          allowing developers to monetise their games by offering coupons and
          vouchers from well-known brands.
        </p>
      </div>
      <div className="faq-wrapper">
        <p className="faq-questions">Q2: How does this API work?</p>
        <p className="faq-answers">
          Game developers will integrate our API into their games and can define
          specific milestones or achievements, and players earn corresponding
          rewards from partnered brands upon reaching those milestones.
        </p>
      </div>
      <div className="faq-wrapper">
        <p className="faq-questions">
          Q3: How can game developers benefit from integrating Playperks API?
        </p>
        <p className="faq-answers">
          Integrating API not only enhances player engagement and retention but
          also opens up a new revenue stream for game developers. As players
          redeem offers from partnered brands within the game, we receive a
          brand commission on every offer redemption and will share the
          commission with game developers.
        </p>
      </div>
      <div className="faq-wrapper">
        <p className="faq-questions">
          Q4: Is this API customizable for different game genres?
        </p>
        <p className="faq-answers">
          Absolutely. The API is designed to be flexible and customizable,
          ensuring it can seamlessly integrate with various game genres and
          adapt to different reward structures based on the game's context.
        </p>
      </div>
      <div className="faq-wrapper">
        <p className="faq-questions">Q5: How do players redeem rewards?</p>
        <p className="faq-answers">
          Players can typically redeem their rewards through a dedicated reward
          section within the game. The redemption process is designed to be
          user-friendly, ensuring a smooth experience for players.
        </p>
      </div>
      <div className="faq-wrapper">
        <p className="faq-questions">
          Q6: How can game developers get started with the API?
        </p>
        <p className="faq-answers">
          Developers can visit our website to access the API, documentation, and
          other resources. We also provide a video tutorial where developers can
          explore the features, and begin the integration process. For specific
          inquiries or partnerships, you can contact our team directly.
        </p>
      </div>
    </div>
  );
};

export default Faq;
