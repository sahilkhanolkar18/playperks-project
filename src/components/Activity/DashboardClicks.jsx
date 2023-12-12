import React from "react";
import "./DashboardClicks.css";

const DashboardClicks = ({ clicksData }) => {
  return (
    <div className="dashboard-clicks-container">
      <table className="clicks-table">
        <thead>
          <tr>
            <th className="table-header">DATE</th>
            <th className="table-header">MERCHANT</th>
            <th className="table-header">CLICK ID</th>
            <th className="table-header">STATUS</th>
            <th className="table-header">LINK</th>
          </tr>
        </thead>
        <tbody>
          {clicksData.map((click, index) => (
            <tr key={index}>
              <td className="dashboard-td">
                {new Date(click.Date).toLocaleDateString()}
              </td>
              <td className="dashboard-td">{click.Merchant}</td>
              <td className="dashboard-td">{click.clickId}</td>
              <td className="dashboard-td">{click.status}</td>
              <td className="dashboard-td">
                <a
                  href={click.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  {click.link}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardClicks;
