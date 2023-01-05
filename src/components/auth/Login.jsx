import React from "react";
import styled from "styled-components";

const Login = () => {
  const handleOnLoginSubmit = (e) => {
    e.preventDeafault();
  };
  return (
    <>
      <LoginForm
        onSubmit={(e) => {
          handleOnLoginSubmit(e);
        }}
      >
        <input placeholder="이메일을 입력해주세요" />
        <input placeholder="비밀번호를 입력해주세요" />
        <button type="submit">Login</button>
      </LoginForm>
    </>
  );
};

const LoginForm = styled.form`
  margin: 80px 0;
`;

export default Login;
