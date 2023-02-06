import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function SearchBar() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

  const API_URL = `http://localhost:3001/cars`;
  const infoApi = async () => {
    try {
      const { data } = await axios.get(API_URL);
      const result = data?.filter((c) => c.location.includes(search));
      console.log(result);
      setCars((prevState) => [...prevState, result]);
    } catch (e) {
      console.log(e);
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
            placeholder="Where do you need your car?"
            onChange={(e) => handleLocation(e)}
          />

          <button>Search</button>
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
export default SearchBar;
