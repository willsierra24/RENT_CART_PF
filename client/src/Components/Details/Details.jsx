import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Details.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Details() {
  const { state } = useLocation();

  return (
    <>
      <NavBar></NavBar>
      <div className="container1">
        <img src={state.image} alt="car" height="500px" />
        <h1 className="brand">
          {state.brand} {state.line}
        </h1>
        <h1>Features</h1>
        <div className="container2">
          <div className="feature">
            <h1 className="title">Category: </h1>
            <p className="description">{state.category}</p>
          </div>

          <div className="feature">
            <h1 className="title">Price: </h1>
            <p className="description">${state.price} /Day </p>
          </div>

          <div className="feature">
            <h1 className="title">Description: </h1>
            <p className="description">{state.description}</p>
          </div>

          <div className="feature">
            <h1 className="title">Doors: </h1>
            <p className="description">{state.doors}</p>
          </div>

          <div className="feature">
            <h1 className="title">Fuel Type: </h1>
            <p className="description">{state.fuelType}</p>
          </div>

          <div className="feature">
            <h1 className="title">Fuel Consumption: </h1>
            <p className="description">{state.fuelConsumption}</p>
          </div>

          <div className="feature">
            <h1 className="title">Gearbox: </h1>
            <p className="description">{state.typeOfBox}</p>
          </div>
        </div>
        <Link to={`/home`} className="link">
          <button> Back </button>
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}
