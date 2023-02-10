import React from "react";
import styled from "styled-components";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdOutlineFavorite, MdReviews } from "react-icons/md";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Sidebar() {
  //overflow-y-scroll
  const { logout } = useAuth0();

  return (
    <>
      <ContainerStyled>
        <div>
          <TitleStyled>
            <h1>
              MY <SpanStyled>PROFILE</SpanStyled>
            </h1>
          </TitleStyled>
          <ul>
            <ListStyled>
              <ImagenStyled>
                <FaUserAlt />
              </ImagenStyled>
              <Link to="my-dates">My dates</Link>
            </ListStyled>

            <ListStyled>
              <ImagenStyled>
                <FaShoppingCart />
              </ImagenStyled>
              <Link to="my-dates">Bookings</Link>
            </ListStyled>

            <ListStyled>
              <ImagenStyled>
                <MdOutlineFavorite />
              </ImagenStyled>
              <Link to="my-dates">Favorites</Link>
            </ListStyled>

            <ListStyled>
              <ImagenStyled>
                <MdReviews />
              </ImagenStyled>
              <Link to="my-dates">Reviews</Link>
            </ListStyled>
            <ListStyled>
              <ImagenStyled>
                <IoTicketSharp />
              </ImagenStyled>
              <Link to="my-dates">Bills</Link>
            </ListStyled>
          </ul>
        </div>
        <nav>
          <LogOutStyled>
            <ImagenLogStyled>
              <RiLogoutCircleRLine />
            </ImagenLogStyled>
            <Link
              to="#"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              {" "}
              LOG OUT
            </Link>
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
