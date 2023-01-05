import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <TodoListContainer>
      <h1>TodoList</h1>
      {todos.map((todo) => {
        return <Todo todo={todo} setTodos={setTodos} key={todo.id} />;
      })}
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
