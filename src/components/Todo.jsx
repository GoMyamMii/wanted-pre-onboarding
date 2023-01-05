import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Todo = ({ todo, setTodos }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [isEdit, setIsEdit] = useState(false);
  const [editTitleValue, setEditTitleValue] = useState("");
  const [editContentValue, setEditContentValue] = useState("");

  const handleOnChangeEditTitle = (e) => {
    setEditTitleValue(e.target.value);
  };
  const handleOnChangeEditContent = (e) => {
    setEditContentValue(e.target.value);
  };

  const handleOnClickEdit = async () => {
    if (!isEdit) {
      setIsEdit(true);
    }

    if (isEdit) {
      const newTodo = { title: editTitleValue, content: editContentValue };
      const res = await axios.put(
        `http://localhost:8080/todos/${todo.id}`,
        newTodo,
        { headers: { Authorization: token } }
      );
      setTodos((prev) => {
        const newTodos = [...prev];
        const idx = newTodos.findIndex((item) => item.id === todo.id);
        newTodos[idx] = res.data.data;

        setTodos(newTodos);
      });
      setIsEdit(false);
    }
  };

  const handleOnClickCancel = () => {
    setIsEdit(false);
  };

  const handleOnClickDelete = async () => {
    await axios.delete(`http://localhost:8080/todos/${todo.id}`, {
      headers: { Authorization: token },
    });
  };
  return (
    <TodoContainer>
      <InputTodoContainer>
        {isEdit ? (
          <>
            <StyledInput
              placeholder="제목을 입력하세요"
              value={editTitleValue}
              onChange={(e) => {
                handleOnChangeEditTitle(e);
              }}
            />
            <StyledInput
              placeholder="내용을 입력하세요"
              value={editContentValue}
              onChange={(e) => {
                handleOnChangeEditContent(e);
              }}
            />
          </>
        ) : (
          <TitleContentContainer>
            <TitleBox onClick={() => navigate(`/${todo.id}`)}>
              {todo.title}
            </TitleBox>
            <ContentBox>{todo.content}</ContentBox>
          </TitleContentContainer>
        )}
      </InputTodoContainer>

      {isEdit ? (
        <>
          <StyledBtn
            onClick={() => {
              handleOnClickEdit();
            }}
          >
            Done
          </StyledBtn>
          <StyledBtn
            onClick={() => {
              handleOnClickCancel();
            }}
          >
            Cancel
          </StyledBtn>
        </>
      ) : (
        <>
          <StyledBtn
            onClick={() => {
              handleOnClickEdit();
            }}
          >
            Edit
          </StyledBtn>
          <StyledBtn
            onClick={() => {
              handleOnClickDelete();
            }}
          >
            Delete
          </StyledBtn>
        </>
      )}
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  width: 800px;
  background-color: #ddd;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 20px;
  display: flex;
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

const TitleContentContainer = styled.div`
  width: 550px;
  margin-left: 10px;
`;

const TitleBox = styled.h3`
  margin: 10px auto;

  cursor: pointer;
`;

const ContentBox = styled.p`
  margin: 10px 0;
`;

const InputTodoContainer = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  margin: 10px 10px;
  width: 500px;
  height: 30px;
  outline: none;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 0 10px;
`;

export default Todo;
