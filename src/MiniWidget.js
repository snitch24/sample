import React, { useEffect, useRef } from "react";

export const MiniWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if the script has already been added to avoid duplicating it
    if (containerRef.current && !containerRef.current.querySelector("script")) {
      // Create the script element
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.async = true;
      // Use JSON.stringify to convert the configuration object to a string
      script.innerHTML = JSON.stringify({
        symbol: "FX:EURUSD",
        autosize: true,
        locale: "en",
        dateRange: "12M",
        colorTheme: "dark",
        isTransparent: false,
        largeChartUrl: "",
      });

      // Append the script to the container
      containerRef.current.appendChild(script);
    }
  }, []); // Empty dependency array ensures this effect only runs once

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};
