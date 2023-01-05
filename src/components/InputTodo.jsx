import React from "react";
import styled from "styled-components";

const InputTodo = () => {
  const handleOnClickAddTodo = () => {};
  return (
    <InputTodoContainer>
      <StyledInput />
      <StyledButton
        onClick={() => {
          handleOnClickAddTodo();
        }}
      >
        추가하기
      </StyledButton>
    </InputTodoContainer>
  );
};

const InputTodoContainer = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 400px;
  height: 30px;
  outline: none;
  border: 1px solid #333;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  width: 120px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #eee;
`;

export default InputTodo;
