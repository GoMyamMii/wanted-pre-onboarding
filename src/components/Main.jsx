import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

const Main = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  const token = localStorage.getItem("token");

  const getTodo = async () => {
    const response = await axios.get("http://localhost:8080/todos", {
      headers: { Authorization: token },
    });
    setTodos(response.data.data);
  };

  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
    }

    try {
      getTodo();
    } catch (error) {
      console.log(error);
    }
  }, [todos]);

  return (
    <MainContainer>
      <InputTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0;
`;

export default Main;
