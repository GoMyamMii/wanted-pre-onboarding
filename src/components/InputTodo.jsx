import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const InputTodo = ({ todos, setTodos }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");

  const handleOnChangeTodoTitle = (e) => {
    setTodoTitle(e.target.value);
  };
  const handleOnChangeTodoContent = (e) => {
    setTodoContent(e.target.value);
  };

  const handleOnClickAddTodo = async (event) => {
    event.preventDefault();
    const newTodo = { title: todoTitle, content: todoContent };

    const token = localStorage.getItem("token");
    const response = await axios.post("http://localhost:8080/todos", newTodo, {
      headers: { Authorization: token },
    });

    setTodos([...todos, response.data.data]);

    setTodoTitle("");
    setTodoContent("");
  };

  return (
    <InputTodoContainer>
      <StyledInput
        placeholder="제목을 입력하세요"
        value={todoTitle}
        onChange={(e) => {
          handleOnChangeTodoTitle(e);
        }}
      />
      <StyledInput
        placeholder="내용을 입력하세요"
        value={todoContent}
        onChange={(e) => {
          handleOnChangeTodoContent(e);
        }}
      />
      <StyledButton
        onClick={(event) => {
          handleOnClickAddTodo(event);
        }}
      >
        Add Todo
      </StyledButton>
    </InputTodoContainer>
  );
};

const InputTodoContainer = styled.div`
  width: 800px;
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
  margin-right: 10px;
  padding: 0 10px;
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
