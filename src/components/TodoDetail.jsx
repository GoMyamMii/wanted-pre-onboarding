import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const TodoDetail = () => {
  const navigate = useNavigate();

  const param = useParams().id;
  const [todo, setTodo] = useState({});

  const token = localStorage.getItem("token");

  const getTodo = async () => {
    const response = await axios.get(`http://localhost:8080/todos/${param}`, {
      headers: { Authorization: token },
    });
    setTodo(response.data.data);
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <TodoDetailContainer>
      <Title>{todo.title}</Title>
      <span>{todo.content}</span>
      <span>ID : {todo.id}</span>
      <StyledBtn
        onClick={() => {
          navigate("/");
        }}
      >
        GoBack
      </StyledBtn>
    </TodoDetailContainer>
  );
};

const TodoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border: 1px solid black;
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

const Title = styled.h3``;

export default TodoDetail;
