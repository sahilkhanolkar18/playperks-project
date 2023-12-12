import React from "react";
import "./DashboardCashbacks.css";

const DashboardCashbacks = ({ cashbackData }) => {
  return (
    <div className="dashboard-cashbacks-container">
      <table className="cashbacks-table">
        <thead>
          <tr>
            <th className="table-header">DATE</th>
            <th className="table-header">MERCHANT</th>
            <th className="table-header">ESTIMATE</th>
            <th className="table-header">STATUS</th>
            <th className="table-header">EXPECTED BY</th>
            <th className="table-header">LINK</th>
          </tr>
        </thead>
        <tbody>
          {cashbackData.length > 0 ? (
            cashbackData.map((cashback, index) => (
              <tr key={index}>
                <td className="dashboard-td">
                  {new Date(cashback.Date).toLocaleDateString()}
                </td>
                <td className="dashboard-td">{cashback.Merchant}</td>
                <td className="dashboard-td">{cashback.estimate}</td>
                <td className="dashboard-td">{cashback.status}</td>
                <td className="dashboard-td">
                  {new Date(cashback.expectedBy).toLocaleDateString()}
                </td>
                <td className="dashboard-td">
                  <a
                    href={cashback.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {cashback.link}
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                <p className="Cashback-empty-text">No Purchases yet</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardCashbacks;
