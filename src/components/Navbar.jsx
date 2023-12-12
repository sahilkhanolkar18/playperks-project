import { useState } from "react";
import "./Navbar2.css";
import { NavLink, useNavigate } from "react-router-dom";
import Image1 from "../assets/playperks.png";

const Navbar = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-container">
      <img src={Image1} className="nav-logo" onClick={() => navigate("/")} />

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(!menuOpen)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(!menuOpen)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" onClick={() => setMenuOpen(!menuOpen)}>
            Faq
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={() => setMenuOpen(!menuOpen)}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" onClick={() => setMenuOpen(!menuOpen)}>
            Register
          </NavLink>
        </li>

        <button
          className="nav-button"
          onClick={() => {
            navigate("./api");
            setMenuOpen(!menuOpen);
          }}
        >
          API
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
