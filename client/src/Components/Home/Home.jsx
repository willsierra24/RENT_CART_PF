import React, { useState } from "react";
import "./Home.css";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import { Filter } from "../filtro/Filter";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  var cars = [
    {
      id_license_plare: "FJR374",
      name: "Chevrolet Sail 1200",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQWjjlMTibcTWRyZBCpc-4a-Q87TzZ4-f4n3UXvXAh6TLq5Bgi_",
      price: 120000,
    },
    {
      id_license_plare: "JGJ854",
      name: "Sandero  Sail 1200",
      image:
        "https://content.r9cdn.net/rimg/carimages/generic/02_economy_red.png?height=116",
      price: 120000,
    },
    {
      id_license_plare: "FJG730",
      name: "Alazcan  1200",
      image:
        "https://content.r9cdn.net/rimg/carimages/generic/01_mini_darkblue.png?height=116",
      price: 120000,
    },
    {
      id_license_plare: "GUF845",
      name: "Toyota prado 2400",
      image:
        "https://content.r9cdn.net/rimg/carimages/generic/01_mini_beige.png?height=116",
      price: 120000,
    },
    {
      id_license_plare: "DLF834",
      name: "Chevrolet N200",
      image:
        "https://content.r9cdn.net/rimg/carimages/generic/03_standard_black.png?height=116",
      price: 120000,
    },
    {
      id_license_plare: "FJR374",
      name: "Chevrolet Sail 1200",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQWjjlMTibcTWRyZBCpc-4a-Q87TzZ4-f4n3UXvXAh6TLq5Bgi_",
      price: 120000,
    },
    {
      id_license_plare: "JGJ854",
      name: "Sandero  Sail 1200",
      image:
        "https://content.r9cdn.net/rimg/carimages/generic/02_economy_red.png?height=116",
      price: 120000,
    },
    {
      id_license_plare: "FJG730",
      name: "Alazcan  1200",
      image:
        "https://content.r9cdn.net/rimg/carimages/generic/01_mini_darkblue.png?height=116",
      price: 120000,
    },
    {
      id_license_plare: "GUF845",
      name: "Toyota prado 2400",
      image:
        "https://content.r9cdn.net/rimg/carimages/generic/01_mini_beige.png?height=116",
      price: 120000,
    },
    {
      id_license_plare: "DLF834",
      name: "Chevrolet N200",
      image:
        "https://content.r9cdn.net/rimg/carimages/generic/03_standard_black.png?height=116",
      price: 120000,
    },
    {
      id_license_plare: "FJR374",
      name: "Chevrolet Sail 1200",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQWjjlMTibcTWRyZBCpc-4a-Q87TzZ4-f4n3UXvXAh6TLq5Bgi_",
      price: 120000,
    },
    {
      id_license_plare: "JGJ854",
      name: "Sandero  Sail 1200",
      image:
        "https://content.r9cdn.net/rimg/carimages/generic/02_economy_red.png?height=116",
      price: 120000,
    },
    {
      id_license_plare: "FJG730",
      name: "Alazcan  1200",
      image:
        "https://content.r9cdn.net/rimg/carimages/generic/01_mini_darkblue.png?height=116",
      price: 120000,
    },
    {
      id_license_plare: "GUF845",
      name: "Toyota prado 2400",
      image:
        "https://content.r9cdn.net/rimg/carimages/generic/01_mini_beige.png?height=116",
      price: 120000,
    },
    {
      id_license_plare: "DLF834",
      name: "Chevrolet N200",
      image:
        "https://content.r9cdn.net/rimg/carimages/generic/03_standard_black.png?height=116",
      price: 120000,
    },
  ];

  const [pag, setPag] = useState(1);
  function paginate(e, num) {
    e.preventDefault();
    setPag(num);
  }
  var until = pag * 12;
  var since = until - 12;

  let carPag = cars.slice(since, until);
  return (
    <React.Fragment>
      <NavBar />
      <div className="home">
        <Cards cars={carPag} />
        <Pagination total={cars.length} paginate={paginate} />
        <Filter />
      </div>
      <Footer />
    </React.Fragment>
  );
}
