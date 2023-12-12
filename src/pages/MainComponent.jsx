import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Error from "./Error";
import About from "./About";
import ApiRoute from "./ApiRoute";
import ReactGA from "react-ga4";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import Faq from "../components/Faq";
import Register from "../components/Register";

const HomeLayout = () => {
  return (
    <div className="home-layout-container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "api",
        element: <ApiRoute />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

const MainComponent = () => {
  const GA_TRACKING_ID = "G-528FHL9XRB";
  ReactGA.initialize(GA_TRACKING_ID);
  return <RouterProvider router={router} />;
};

export default MainComponent;
