import React from "react";
import styled from "styled-components";
import NavBar  from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function OurTeam() {
  return (
    <ContainerStyled>
        <NavBar/>
      <h1>Meet our team</h1>
      <Footer/>
    </ContainerStyled>
  );
}

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: #023047;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export default OurTeam;
