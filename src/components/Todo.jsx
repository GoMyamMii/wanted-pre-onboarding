import React from "react";
import styled from "styled-components";

const Todo = () => {
  const handleOnClickUpdate = () => {};
  const handleOnClickDelete = () => {};
  return (
    <TodoContainer>
      <H3>Title</H3>
      <BtnContainer>
        <StyledBtn
          onClick={() => {
            handleOnClickUpdate();
          }}
        >
          Update
        </StyledBtn>
        <StyledBtn
          onClick={() => {
            handleOnClickDelete();
          }}
        >
          Delete
        </StyledBtn>
      </BtnContainer>
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  width: 400px;
  background-color: #ddd;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 20px;
`;

const StyledBtn = styled.button`
  background-color: #333;
  color: #eee;
  width: 100px;
  height: 30px;
  margin: 10px;
  border-radius: 5px;
  border: none;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const H3 = styled.h3`
  display: flex;
  justify-content: center;
  margin: 10px auto;
`;

export default Todo;
