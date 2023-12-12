import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Logo from "../assets/playperks.png";
import { RiShutDownLine } from "react-icons/ri";
import { MdQueryStats } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { toast } from "react-toastify";
import axios from "axios";
import { IoCopyOutline } from "react-icons/io5";
import copy from "clipboard-copy";
import { IoMdInformationCircleOutline } from "react-icons/io";

import DashboardClicks from "./Activity/DashboardClicks";
import DashboardCashbacks from "./Activity/DashboardCashbacks";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activity, setActivity] = useState(true);
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/currentUser`,
          { withCredentials: true }
        );
        setUser(userData.data.user);

        if (userData.data.user.role === "admin") {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/v1/dashboard`,
            { withCredentials: true }
          );
          const fetchedDashboardData = response.data.dashboardData[0];
          setDashboardData(fetchedDashboardData);
        }
      } catch (error) {
        navigate("/login");
        toast.error("You need to login first!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // If loading, you can show a loading indicator or message
  if (loading) {
    return <div>Loading...</div>;
  }

  const handleCopyClick = () => {
    copy(user.apiKey);
    setIsCopied(true);

    // Reset the "Copied" state after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleLogOut = async () => {
    try {
      const response = await axios.get(
        // "https://perksapi.com/api/v1/auth/logout",
        `${import.meta.env.VITE_API_URL}/api/v1/auth/logout`,

        { withCredentials: true } // Include credentials with the request
      );

      if (response.status === 200) {
        toast.success("Logged Out!");

        navigate("/");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-top-wrapper">
        <img
          src={Logo}
          alt=""
          className="dashboard-logo"
          onClick={() => navigate("/")}
        />
        <p className="dashboard-title">Dashboard</p>
        <button className="dashboard-logout" onClick={handleLogOut}>
          <RiShutDownLine />
          Logout
        </button>
      </div>

      {user.role === "user" ? (
        <div className="dashboard-main-wrapper">
          <div className="dashboard-user-heading-wrapper">
            <h2 className="dashboard-user-heading">Your Api Key:</h2>
            <div className="dashboard-user-api-wrapper">
              <p className="dashboard-user-api-text">
                {user.apiKey}
                <IoCopyOutline
                  className="dashboard-user-copy-icon"
                  onClick={handleCopyClick}
                />
              </p>
              {isCopied && <span className="tooltip">Copied!</span>}
            </div>
            <br />
            <div className="dashboard-user-api-note-wrapper">
              <p className="dashboard-user-api-note">
                <IoMdInformationCircleOutline className="note-icon-dashboard-user" />
                <>
                  <span className="dashboard-user-api-note-bold">Note:</span>{" "}
                  When sending the request, include the{" "}
                  <span className="dashboard-user-api-note-bold">"apiKey"</span>{" "}
                  parameter with the actual API key as its{" "}
                  <span className="dashboard-user-api-note-bold">value.</span>
                </>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="dashboard-main-wrapper">
          <h1 className="dashboard-main-title">
            <MdQueryStats />
            Statistics
          </h1>
          <div className="dashboard-share-earn-wrapper">
            <div className="dashboard-earn-div dashboard-confirmed">
              <div>
                <p className="dashboard-earn-title ">Confirmed:</p>
                <p className="dashboard-earn-value">
                  Rs.{dashboardData.ShareEarn.Confirmed}
                </p>
              </div>
              <div className="dashboard-earn-stats-logo-holder inner-confirmed">
                <FaRegCalendarCheck className="dashboard-earn-stats-logo inner-confirmed-title" />
              </div>
            </div>
            <div className="dashboard-earn-div dashboard-pending">
              <div>
                <p className="dashboard-earn-title ">Pending:</p>
                <p className="dashboard-earn-value ">
                  Rs.{dashboardData.ShareEarn.Pending}
                </p>
              </div>

              <div className="dashboard-earn-stats-logo-holder inner-pending">
                <LuCalendarClock className="dashboard-earn-stats-logo inner-pending-title" />
              </div>
            </div>
            <div className="dashboard-earn-div dashboard-total">
              <div>
                <p className="dashboard-earn-title ">Total:</p>
                <p className="dashboard-earn-value">
                  Rs.{dashboardData.ShareEarn.total}
                </p>
              </div>
              <div className="dashboard-earn-stats-logo-holder inner-total">
                <RiMoneyDollarCircleLine className="dashboard-earn-stats-logo inner-total-title" />
              </div>
            </div>
          </div>
          <div className="dashboard-activity-wrapper">
            <h3 className="dashboard-activity-title">Activity:</h3>
            <div className="dashboard-clicks-toggle">
              <p
                className={`dashboard-click-toggle ${
                  activity ? "dashboard-activity-active" : ""
                }`}
                onClick={() => setActivity(true)}
              >
                Clicks
              </p>
              <p
                className={`dashboard-click-toggle ${
                  activity ? "" : "dashboard-activity-active"
                }`}
                onClick={() => setActivity(false)}
              >
                Cashbacks
              </p>
            </div>

            {activity ? (
              <DashboardClicks clicksData={dashboardData.Clicks} />
            ) : (
              <DashboardCashbacks cashbackData={dashboardData.Cashback} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
