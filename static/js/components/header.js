import React from "react";
import "./header.css";
import logo from "../files/QuerentVerticalBlue.png";

export default function Header() {
  return (
    <div className="headerContainer">
      <img src={logo} className="logoImage" />
      <p className="headerQuote">
        Unleash the Power of Data and Graph Neural Networks
      </p>
      <p className="headerSupport">
        Welcome to Querent!
        <br />
        Unlock Insights, Scale Asynchronously, and Forge a Knowledge-Driven
        Future
      </p>
    </div>
  );
}
