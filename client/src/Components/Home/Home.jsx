import React, { useState } from "react";
import "./Home.css";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import { Filter } from "../filtro/Filter";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
/*temporary*/import {cars} from '../../Borrador'

export default function Home() {

  const [pag, setPag] = useState(1);
  function paginate(e, num) {
    e.preventDefault();
    setPag(num);
  }
  var until = pag * 6;
  var since = until - 6;

  let carPag = cars.slice(since, until);
  return (
    <React.Fragment>
    <Filter cars = {cars} />
    <div className="Filteredout">Filtered out</div>
      <NavBar />
      <div className="homen">
        <Cards cars={carPag} />
        <Pagination total={cars.length} paginate={paginate} />
      </div>
      <Footer />
    </React.Fragment>
  );
}
