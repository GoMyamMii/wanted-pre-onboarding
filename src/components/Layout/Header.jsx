import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <span>Hello Wanted!</span>
      <StyledBtn
        onClick={() => {
          localStorage.removeItem("token");
        }}
      >
        LogOut
      </StyledBtn>
    </HeaderContainer>
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

const StyledBtn = styled.button`
  background-color: #eee;
  color: #333;
  width: 120px;
  height: 30px;
  margin: 10px;
  border-radius: 5px;
  border: none;
`;

export default Header;
