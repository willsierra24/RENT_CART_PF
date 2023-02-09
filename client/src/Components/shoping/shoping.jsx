import React from "react";
import "./shoping.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
let Articles =[];

export default function Details() {
  let car = "Chevrolet-Cruze, 5 door, Fuel Type gas, in Cra. 5 #72-38, Bogotá, Colombia"
  return (
    <>
      <NavBar></NavBar>
      <div className="containerShop">
        <div id="shopTitle">Items to rent</div>
        <div> </div>
        <div>Titulos</div>
        <div>contenidos</div>
        <div>botones</div>
      </div>
      <Footer></Footer>
    </>
  );
}
