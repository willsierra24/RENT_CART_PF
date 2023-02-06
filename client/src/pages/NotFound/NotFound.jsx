import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
function NotFound() {
  return (
    <React.Fragment>
      <NavBar />
      <ContainerStyled>
        <ErrorStyled>
          <p>404 ERROR</p>
        </ErrorStyled>

        <p>¡OOPS! PAGE NOT FOUND</p>
        <Link to="/home">
          <button>BACK TO HOME</button>
        </Link>
      </ContainerStyled>
      <Footer />
    </React.Fragment>
  );
}

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  font-size: 40px;
  align-items: center;
  justify-content: center;
  align-content: center;
  color: #023047;
`;

export const ErrorStyled = styled.div`
  font-size: 70px;
`;

export default NotFound;
