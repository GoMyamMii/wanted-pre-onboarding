import React from "react";
import styled from "styled-components";

const SignUp = () => {
  const handleOnClickSignUp = (e) => {
    e.preventDeafault();
  };
  return (
    <>
      <SignUpForm
        onSubmit={(e) => {
          handleOnClickSignUp(e);
        }}
      >
        <input placeholder="이메일을 입력해주세요" />
        <input placeholder="비밀번호를 입력해주세요" />
        <button type="submit">SignUp</button>
      </SignUpForm>
    </>
  );
};

const SignUpForm = styled.form`
  margin: 80px 0;
`;

export default SignUp;
