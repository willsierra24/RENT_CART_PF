import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import styled from "styled-components";

function LayoutProfile() {
  //overflow-y-scroll
  return (
    <>
      <NavBar />
      <ContainerStyled>
        <Sidebar />
        <ContenedorStyled>
          <Header />
          <OutletStyled>
            <Outlet />
          </OutletStyled>
        </ContenedorStyled>
      </ContainerStyled>
      <Footer />
    </>
  );
}
export const ContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-columns: repeat(6, minmax(0, 1fr));
  background-color: #131517;
`;

export const ContenedorStyled = styled.div`
  grid-column: span 5 / span 5;
`;

export const OutletStyled = styled.div`
  height: 90vh;
  padding: 32px;
`;
export default LayoutProfile;
