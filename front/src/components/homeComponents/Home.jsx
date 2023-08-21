import React from "react";
import { Link } from "react-router-dom";
// import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="hero">
        <h2>Welcome to WellVer$ed</h2>
        <p>Creating financial wellness wherever we can.</p>
        <Link to="https://github.com/amoyament/Wellversed" className="hero-btn">
          Check Out Our Shop
        </Link>
      </div>
    </>
  );
};

export default Home;
