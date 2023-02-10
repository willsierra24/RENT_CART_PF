import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./shoping.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Details() {

  const [Accessories, setAccessories] = useState([]);

useEffect(() => {
  fetchMovies()
  }, []);

  async function fetchMovies() {
    const response = await fetch("http://localhost:3001/accessories");
    const accessories = await response.json();
    setAccessories (accessories)
  }
  

  return (
    <>
      <NavBar></NavBar>
      <div className="ccontainer1">        
        <div className="ccontainer1a">
          <div><br />
              <h3 id="cacceTittle" className="crow2">
                  <div>Image</div><div>Name</div> <div>Discount</div> <div>Preci</div> <div>Total</div>    <div>Reserve</div>
                </h3> 
              <div className="clistaccesori">
                {Accessories.map((acce) => (
                <h4 className="crow2">
                      <img className="cimg" src={acce.image} alt={"No"} /><div>{acce.name}</div> <div>{acce.discount}%</div> <div>${acce.price}</div> <div>total</div> <div id="carButton"><div id="cgray" className={acce.name} >✘</div> <div id="cgray2" className={acce.name} >↺</div> </div>
                </h4>   ))}  
                <h3 id="fra">
                  <div></div>    
                  <div>
                    <div>Factura numero 2345</div>
                    <div>Valor: $ 1573</div>
                    <div>descuento: $ 153</div>
                    <div>Total: $ 1120</div>
                    <div></div>
                  </div>
                </h3> 
              </div>  
          </div>
        </div>
        <div className="cbutondetail">
          <Link to={`/shopping`} className="clink">
              <button> Go back </button>
            </Link>
            <div id="csepara"></div>
            <Link to={`/shopping`} className="clink">
              <button> Pay bill  </button>
            </Link>
        </div><br />
      </div>
      <Footer></Footer>
    </>
  );
}