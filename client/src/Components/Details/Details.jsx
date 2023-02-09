import React,{useState} from "react";
import { useLocation, Link } from "react-router-dom";
import "./Details.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Details() {
  const { state } = useLocation();


  const [Accessories, setAccessories] = useState(([/*TEMPORAL */
    {"name":"coche bebe",  "preci":12,  "description":"para uso en nasiento tracero",  "image":"https://pepeganga.vteximg.com.br/arquivos/ids/634959-1045-1100/403312-1.png?v=637678444644100000" ,  "status":"" ,  "discount":10 },{"name":"Llanta de repuesto",  "preci":5,  "description":"repuesto de baja velocidad",  "image":"https://defender.com.co/wp-content/uploads/2020/06/vqxKgGRg.jpeg" ,  "status":"" ,  "discount":10 },{"name":"maletrero en parrilla",  "preci":126,  "description":"para exterio",  "image":"https://www.autoplanet.com.co/wp-content/uploads/2022/06/Combos-portaequipajes-barras-B-3-1-247x247.jpg" ,  "status":"" ,  "discount":10 },{"name":"Full sonido",  "preci":74,  "description":"sonido de alta calidad",  "image":"https://www.sony.com.sv/image/5fd681d4b1d9f05bafd83aba858a715a?fmt=pjpeg&wid=220&bgcolor=FFFFFF&bgc=FFFFFF" ,  "status":"" ,  "discount":0 },{"name":"Sistema GPS",  "preci":68,  "description":"incluye camara de reversa",  "image":"https://http2.mlstatic.com/D_NQ_NP_615794-MCO42462017496_072020-V.jpg" ,  "status":"" ,  "discount":5 },{"name":"Remolque",  "preci":550,  "description":"Capacidad de hasta 300 kg",  "image":"https://i.pinimg.com/736x/70/67/84/7067846380acd3eb9660e22ee5387a84.jpg" ,  "status":"" ,  "discount":0 },{"name":"Guacal para mascota",  "preci":22,  "description":"para mascotas de hasta 15 kg",  "image":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmi3RttOO5BYeXvwXPWe6i3wcUk0WsSOcxepp1z7bH5EBatdVlZ3Ge6Njyx_F3exafKlz6BRXeXiQ5Xrx-xmg0XmJMAOAOHkIixvJ5_-pkNL5klhVgqFn-vsQobslaRqxxWUA&usqp=CAc" ,  "status":"" ,  "discount":1 }])
  );

  // const API = `http://localhost:3001/accessories`; ya esta listo

  // async function fetchMovies() {
  //   const response = await fetch(API);
  //   const accessories = await response.json();
  //   setAccessories (accessories)
  // }
  // fetchMovies()

  /*TEMPORAL */
  return (
    <>
      <NavBar></NavBar>
      <div className="container1">        
        <div className="container1a">
          <div className="row1">
            <img src={state.image} alt="car" height="300px" />
            <div className="row1colum2">
              <h1 className="brand">
                {state.brand} {state.line}
              </h1>
              <div className="feature">
                <h1 className="title">Price: </h1>
                <p className="description">${state.price} /Day </p>
              </div>
              <div className="feature">
                <h1 className="title">Price: </h1>
                <p className="description">${state.price} /Day </p>
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
              <div className="feature">
              <h1 className="title">Category: </h1>
              <p className="description">{state.category}</p>
              </div>
            </div>
            <div>Add 🛒</div>
          </div>          
          <div>
              <h1 className="title">Description: </h1>
              <p className="description">{state.description}</p>   
          </div><div><br />
              <h1 className="title">Accessories: </h1>
              <h3 id="acceTittle" className="row2">
                  <div>Image</div><div>Name</div> <div>Description</div><div>Discount</div> <div>Preci</div> <div>Total</div>    <div>Reserve</div>
                </h3> 
              <div className="listaccesori">
                {Accessories.map((acce) => (
                <h4 className="row2">
                      <img className="img" src={acce.image} alt={"No"} /><div>{acce.name}</div> <div>{acce.description}</div><div>{acce.discount}%</div> <div>${acce.preci}</div> <div>total</div>    <div>Add🛒</div>
                </h4>   ))}  
              </div>  
          </div>
        </div>
        <div className="butondetail">
          <Link to={`/home`} className="link">
              <button> Back </button>
            </Link>
            <Link to={`/home`} className="link">
              <button> Back </button>
            </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
