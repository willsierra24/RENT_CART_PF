import React from "react";
import styled from "styled-components";
import { NavLink, Outlet, Link } from "react-router-dom";
import { LoginButton } from "../Auth/Login";
import { LogoutButton } from "../Auth/Logout";
import { Profile } from "../Auth/Profile";

function NavBar() {
  const { isAuthenticated } = useAuth0();
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ContainerStyled>
        <a >RENT CAR</a>
        <NavStyled>
        
          <ListStyled to="/home">HOME</ListStyled>
          <ListStyled to="/about">ABOUT US</ListStyled>
          <ListStyled to="/contact">CONTACT</ListStyled>
          {isAuthenticated ? (
            <Link to={`/profile`} className="link">
              PROFILE
            </Link>
          ) : (
            ""
          )}
        </NavStyled>
        {isAuthenticated ? (
          <>
            {" "}
            <LogoutButton></LogoutButton>
          </>
        ) : (
          <LoginButton></LoginButton>
        )}
        </NavStyled>
        <button>LOGIN</button>
          <ListStyled to="/shoping"><img src={"https://i.ibb.co/R9JyHsd/carrito.png"} alt="car" height="32px" /></ListStyled>
      </ContainerStyled>
      <Outlet />
    </>
  );
}

export const ContainerStyled = styled.div`
  width: 100%;
  height: 64px;
  background: #023047;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const NavStyled = styled.nav`
  height: 100%;
  padding-right: 40px;
  padding-left: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ListStyled = styled(NavLink)`
  padding-left: 15px;
  padding-right: 20px;
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #ffb703;
  }
`;

export default NavBar;
