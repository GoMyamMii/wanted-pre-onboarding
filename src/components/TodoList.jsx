import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

const TodoList = () => {
  return (
    <TodoListContainer>
      <h1>Todo</h1>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
    </TodoListContainer>
  );
};

const TodoListContainer = styled.div`
  width: 1200px;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

export default TodoList;
