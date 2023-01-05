import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <FooterContainer>&copy;GoMyamMii</FooterContainer>;
};

const FooterContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  height: 60px;

  background-color: #333;
  color: #eee;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 0;
`;

export default Footer;
