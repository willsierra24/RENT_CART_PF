import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function Search() {
  // const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

  // const API_URL = "http://localhost:3001/cars";
  // const infoApi = async () => {
  //   try {
  //     const data = await axios.get(API_URL);
  //     console.log(data);
  //     setCars(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // React.useEffect(() => {
  //   infoApi();
  // }, []);

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
            type="search"
            value={location}
            placeholder="Where do you need your car?"
            onChange={(e) => handleLocation(e)}
          />

          <ButtonStyled type="submit">SEARCH</ButtonStyled>
            type="text"
            value={search}
            placeholder="¿Donde necesitas tu auto?"
            onChange={(e) => handleLocation(e)}
          />

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
  padding: 8px;
  outline: none;
  color: black;
`;

export const ButtonStyled = styled.button`
  background-color: #ffb703;
  border-radius: 7px;
  padding: 10px;
  border: none;
  color: #023047;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #219ebc;
    color: #fff;
  }
`;
export default Search;
