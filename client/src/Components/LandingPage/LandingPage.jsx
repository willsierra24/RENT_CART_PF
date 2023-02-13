import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  localStorage.setItem ('nombre',"")
  return (
    <div className="information">
      <div class="container">
        <h1 className="titulo">RENT A CAR FROM $20/DAY</h1>
        <Link to="/home">
          <button className="button">RENT CAR</button>
        </Link>
      </div>
    </div>
  );
}
