import React, { useState } from "react";
import styled from "styled-components";
import {
  RiLogoutCircleRLine,
  RiMenu3Line,
  RiCloseLine,
  RiCarFill,
  RiHome7Fill,
} from "react-icons/ri";
import { GiCarSeat } from "react-icons/gi";
import { FaUsers, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  //overflow-y-scroll

  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <ContainerStyled>
        <div>
          <TitleStyled>
            <h1>
              Rent <SpanStyled>Car</SpanStyled>
            </h1>
          </TitleStyled>
          <ul>
            <ListStyled>
              <ImagenStyled>
                <FaShoppingCart />
              </ImagenStyled>
              <Link to="my-dates">MY DATES</Link>
            </ListStyled>

            <ListStyled>
              <ImagenStyled>
                <FaShoppingCart />
              </ImagenStyled>
              <Link to="my-dates">BOOKINGS</Link>
            </ListStyled>

            <ListStyled>
              <ImagenStyled>
                <FaShoppingCart />
              </ImagenStyled>
              <Link to="my-dates">FAVORITES</Link>
            </ListStyled>

            <ListStyled>
              <ImagenStyled>
                <FaShoppingCart />
              </ImagenStyled>
              <Link to="my-dates">SETTINGS</Link>
            </ListStyled>
            <ListStyled>
              <ImagenStyled>
                <FaShoppingCart />
              </ImagenStyled>
              <Link to="my-dates">OTHERS</Link>
            </ListStyled>
          </ul>
        </div>
        <nav>
          <LogOutStyled>
            <ImagenLogStyled>
              <RiLogoutCircleRLine />
            </ImagenLogStyled>
            <Link to="my-dates"> LOG OUT</Link>
          </LogOutStyled>
        </nav>
      </ContainerStyled>
    </>
  );
}

export const ContainerStyled = styled.div`
  background-color: rgb(30 31 37);
  margin-top: 41px;
  position: static;
  width: auto;
  height: 100%;
  top: 0px;
  padding: 1rem /* 16px */;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  z-index: 50;
  background-color: #1e1f25;
`;
export const TitleStyled = styled.div`
  text-align: center;
  font-weight: 700;
  margin-bottom: 2.5rem /* 40px */;
  color: white;
`;
export const SpanStyled = styled.span`
  text-align: center;
  font-weight: 700;
  margin-bottom: 2.5rem /* 40px */;
  color: #ffb703;
`;

export const ListStyled = styled.div`
  display: flex;
  font-size: 1.2rem /* 24px */;
  line-height: 2rem /* 32px */;
  align-items: center;
  padding-top: 0.5rem /* 8px */;
  padding-bottom: 0.5rem /* 8px */;
  padding-left: 1.2rem /* 16px */;
  padding-right: 1rem /* 16px */;
  border-radius: 0.5rem /* 8px */;

  &:hover {
    --tw-bg-opacity: 1;
    background-color: #131517;
    color: white;
  }
`;

export const ImagenStyled = styled.div`
  display: flex;
  color: #ffb703;
  margin-right: 7px;
  align-items: center;
`;

export const LogOutStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding-top: 0.75rem;
  padding-left: 2.25rem;
  padding-right: 2.25rem;
  color: white;

  &:hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(19 21 23 / var(--tw-bg-opacity));
    color: white;
    border-radius: 0.5rem; /* 8px */
  }
`;
export const ImagenLogStyled = styled.div`
  display: flex;
  color: #ffb703;
  align-items: center;
`;
export default Sidebar;
