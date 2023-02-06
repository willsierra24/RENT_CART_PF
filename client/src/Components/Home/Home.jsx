import React, { useState } from "react";
import "./Home.css";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import { Filter } from "../filtro/Filter";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
/*temporary*/ import { cars } from "../../Borrador";

export default function Home() {
  let [arCar, setarCar] = useState(cars);
  let [pag, setPag] = useState(1);
  let [xclude] = useState([[], [], [], [], []]);
  //functions-------------------------------------
  function paginate(e, num) {
    e.preventDefault();
    setPag(num);
  }
  function uddateForFilter(e, obj, index) {
    e.preventDefault();

    let arrayTemp = [],
      filt1 = [],
      filt2 = [],
      filt3 = [],
      filt4 = [],
      filt5 = [];
    xclude[index].includes(obj)
      ? ((arrayTemp = xclude[index].filter((dato) => dato != obj)),
        (xclude[index] = arrayTemp))
      : xclude[index].push(obj);
    //----filter brand----
    cars.map((objCar) => {
      xclude[0].includes(objCar.brand) ? null : filt1.push(objCar);
    });
    //----filter category----
    filt1.map((objCar) => {
      xclude[1].includes(objCar.category) ? null : filt2.push(objCar);
    });
    //----filter typeOfBox----
    filt2.map((objCar) => {
      xclude[2].includes(objCar.typeOfBox) ? null : filt3.push(objCar);
    });
    //----filter fuelType----
    filt3.map((objCar) => {
      xclude[3].includes(objCar.fuelType) ? null : filt4.push(objCar);
    });
    //----filter discount----
    filt4.map((objCar) => {
      xclude[4].includes(objCar.discount) ? null : filt5.push(objCar);
    });
    setarCar(filt5);
  }

  //----------------------------------------------
  var until = pag * 6;
  var since = until - 6;

  let carPag = arCar.slice(since, until);
  return (
    <React.Fragment>
      <SearchBar />
      <Filter
        cars={cars}
        filterInHome={uddateForFilter}
        paginate={paginate}
        xclude={xclude}
      />
      <div className="Filteredout">Filtered out</div>
      <NavBar />
      <div className="homen">
        <Cards cars={carPag} ttFilt={arCar.length} />
        <Pagination total={arCar.length} paginate={paginate} />
      </div>
      <Footer />
    </React.Fragment>
  );
}
