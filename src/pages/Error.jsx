import { Link } from "react-router-dom";
import img from "../assets/not-found.svg";
import "./pagesCss/Error.css";

const Error = () => {
  return (
    <div className="error-container">
      <img className="error-image" src={img} alt="Not Found" />
      <h3 className="error-title">Ohh! Page Not Found</h3>
      <p className="error-message">
        We can't seem to find the page you are looking for.
      </p>
      <Link to="/" className="error-link">
        Back to Home
      </Link>
    </div>
  );
};
export default Error;
