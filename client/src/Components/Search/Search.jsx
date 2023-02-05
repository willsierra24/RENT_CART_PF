import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function Search() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

  const API_URL = `http://localhost:3001/cars?q=${location}`;
  const infoApi = async () => {
    try {
      const data = await axios.get(API_URL);
      console.log(data);
      setCars(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    infoApi();
  }, []);

  function handleLocation(e) {
    setSearch(e.target.value);
    console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSearch(search);
  }

  return (
    <React.Fragment>
      <ContainerStyled>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputStyled
            type="text"
            value={search}
            placeholder="¿Donde necesitas tu auto?"
            onChange={(e) => handleLocation(e)}
          ></InputStyled>
          {/* <input type="date"></input>
          <input type="time"></input>
          <input type="text" placeholder="¿Dónde termina tu viaje?"></input>
          <input type="date"></input>
          <input type="time"></input> */}
          <button>Buscar</button>
        </form>
      </ContainerStyled>
    </React.Fragment>
  );
}

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

export const InputStyled = styled.input`
  background-color: white;
  width: 300px;
  border: 2px solid #fb8500;
  border-radius: 8px;
  margin-right: 3px;
  padding: 5px;
  outline: none;
  color: black;
`;
export default Search;
