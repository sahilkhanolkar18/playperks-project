import React, { useEffect, useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import swaggerJson from "./swagger.json"; // Import your Swagger JSON file
import ReactGA from "react-ga4";
import Snippet from "../components/Snippet";

const ApiRoute = () => {
  const [swaggerData, setSwaggerData] = useState(null);

  useEffect(() => {
    // You can load and parse the Swagger JSON file here
    ReactGA.event({
      category: "Api Visited",
      action: `Api Visited`,
      label: `Api Visited`,
    });
    // In this example, we're using the imported swaggerJson directly

    setSwaggerData(swaggerJson);
  }, []);

  if (!swaggerData) {
    return <div>Loading Swagger documentation...</div>;
  }

  return (
    <div>
      <SwaggerUI spec={swaggerData} />
      <Snippet />
    </div>
  );
};

export default ApiRoute;
