import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderContainer>Hello Wanted!</HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  max-width: 1140px;

  background-color: #333;
  color: #eee;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
`;

export default Header;
