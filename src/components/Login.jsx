import React, { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import Logo from "../assets/playperks.png";
import { toast } from "react-toastify";
import axios from "axios";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "https://perksapi.com/api/v1/currentUser",
          `${import.meta.env.VITE_API_URL}/api/v1/currentUser`,
          { withCredentials: true } // Include credentials with the request
        );

        const Data = response.data;
        navigate("/dashboard");
        toast.success("Welcome Back! you are already Logged In.");
      } catch (error) {
        console.log();
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Send a POST request to the login endpoint using Axios
      const response = await axios.post(
        // "https://perksapi.com/api/v1/auth/login",
        `${import.meta.env.VITE_API_URL}/api/v1/auth/login`,

        {
          email,
          password,
        },
        { withCredentials: true } // Include credentials with the request
      );

      // Check if the request was successful (status code 2xx)
      if (response.status === 200) {
        // Perform any additional logic for a successful login
        toast.success("Successfully Logged In!");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      // Handle specific error cases if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <Form
        method="post"
        className="login-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <img src={Logo} alt="" className="playperks-logo-login" />
        <h4 className="login-title">Login</h4>

        <label htmlFor="email" className="login-lable">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />

        <label htmlFor="password" className="login-lable">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />

        <button type="submit" className="btn-login" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        <p className="login-text">
          Not a member?{" "}
          <span className="login-switch" onClick={() => navigate("/register")}>
            Create An Account
          </span>
        </p>
      </Form>
    </div>
  );
};

export default Login;
