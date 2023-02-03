import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

function FaqSection() {
  return (
    <ContainerStyled>
      <NavBar />
      <h1>Frequently asked questions about our car rentals</h1>
      <Footer />
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

export default FaqSection;
