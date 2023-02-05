import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <ContainerStyled>
      <FooterStyled>
        <div>
          <h3>COMPANY</h3>
          <Link to={"/about"}>
            <p>About us</p>
          </Link>
          <Link to={"#"}>
            <p>Our Team</p>
          </Link>
        </div>
        <div>
          <h3>SUPPORT</h3>
          <Link to={"/faq"}>
            <p>FAQ section</p>
          </Link>
          <Link to={"/contact"}>
            <p>Contact</p>
          </Link>
        </div>
        <div>
          <h3>CONTACT</h3>
          <p>
            <FaPhone /> +52 998 492 1643
          </p>
          <p>
            <MdEmail /> contact@rentcar.com.ar
          </p>
          <p>
            <FaMapMarkerAlt /> Buenos Aires, Argentina
          </p>
        </div>
      </FooterStyled>
      <CopyrightStyled>
        <p className="footer">Copyright © 2023 Rent Car. All rights reserved</p>
      </CopyrightStyled>
    </ContainerStyled>
  );
}
export const ContainerStyled = styled.div`
  background-color: #56859a;
  color: #023047;
  position: absolute;
  width: 100%;
  top: 100vw;
  left: 0;
  align-items: center;
  font-size: 20px;
  align-content: center;
  justify-content: center;
`;

export const FooterStyled = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-around;
  background-color: #56859a;
`;

export const CopyrightStyled = styled.div`
  color: white;
  padding-left: 15px;
  border-top: 1px solid white;
`;
export default Footer;
