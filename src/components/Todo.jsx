import React from "react";
import styled from "styled-components";

const Todo = () => {
  const handleOnClickDelete = () => {};
  return (
    <TodoContainer>
      <TitleContentContainer>
        <TitleBox>Title</TitleBox>
        <ContentBox>Content</ContentBox>
      </TitleContentContainer>
      <StyledBtn
        onClick={() => {
          handleOnClickDelete();
        }}
      >
        Delete
      </StyledBtn>
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
  width: 670px;
  margin-left: 10px;
`;

const TitleBox = styled.h3`
  margin: 10px auto;
`;

const ContentBox = styled.p`
  margin: 10px 0;
`;

export default Todo;
