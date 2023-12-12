import { useNavigate } from "react-router-dom";
import "../pages/pagesCss/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <span className="footer-logo" onClick={() => navigate("/")}>
          PlayPerks®
        </span>

        <div className="footer-contact">
          <h3 className="footer-headings">Contact</h3>
          <ul className="footer-ul">
            <li className="footer-item">adtiya@playperksapi.com</li>
            <li className="footer-item">+91 62836-03481</li>
          </ul>
        </div>

        <div className="footer-address">
          <h3 className="footer-headings">Address</h3>

          <ul className="footer-ul">
            <li className="footer-item">Global Business Hub, Near </li>
            <li className="footer-item">Eon IT Park, Kharadi, Pune 411014</li>
          </ul>
        </div>
        {/* <div className="footer-social">
          <h3 className="footer-headings">Socials</h3>

          <ul className="footer-ul">
            <li className="footer-item">LinkedIn</li>
            <li className="footer-item">Facebook</li>
            <li className="footer-item">Instagram</li>
            <li className="footer-item">Pinterest</li>
          </ul>
        </div> */}
      </div>
      <div className="footer-copy">© 2023 by PlayPerks Software rights</div>
    </div>
  );
};

export default Footer;
