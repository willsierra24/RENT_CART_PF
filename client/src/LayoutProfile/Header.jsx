import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    isAuthenticated && (
      <HeaderStyled>
        <NavStyled>
          <ButtonStyled>
            <ImageStyled src={user.picture} alt={user.name} />
            <p>Hello!</p>
            <SpanStyled>{user.name}</SpanStyled>
            {/* <RiArrowDownSLine /> */}
          </ButtonStyled>
        </NavStyled>
      </HeaderStyled>
    )
  );
}
export const HeaderStyled = styled.header`
  display: flex;
  height: 7vh;
  border-bottom: 2px solid;
  padding: 2rem /* 32px */;
  justify-content: flex-end;
  align-items: center;
  border-color: #1e1f25;
  align-content: center;
`;

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  background: none; ;
`;

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  margin-top: 40px;
  column-gap: 0.5rem;
  background-color: none;
  background: none;
  font-size: 20px;
  color: white;
  &:hover {
    background: none;
    color: none;
  }
`;

export const ImageStyled = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  object-fit: cover;
  border-radius: 9999px;
  align-items: center;
`;

export const SpanStyled = styled.span`
  align-items: center;
  font-size: 20px;
  color: #ffb703;
`;
export default Header;
