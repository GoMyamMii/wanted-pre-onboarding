import React from "react";
import styled from "styled-components";

const TodoDetail = () => {
  const handleOnClickUpdate = () => {};
  return (
    <>
      <div>Title</div>
      <div>Content</div>
      <div>TodoId</div>
      <StyledBtn
        onClick={() => {
          handleOnClickUpdate();
        }}
      >
        Update
      </StyledBtn>
      <div>GoBack</div>
    </>
  );
};

const StyledBtn = styled.button`
  background-color: #333;
  color: #eee;
  width: 100px;
  height: 30px;
  margin: 10px;
  border-radius: 5px;
  border: none;
`;

export default TodoDetail;
