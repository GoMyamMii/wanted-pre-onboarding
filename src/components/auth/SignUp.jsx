import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleOnChangeEmail = (e) => {
    setSignUpEmail(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setSignUpPassword(e.target.value);
  };

  useEffect(() => {
    if (
      signUpEmail.includes("@") &&
      signUpEmail.includes(".") &&
      signUpPassword.length > 8
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [signUpEmail, signUpPassword]);

  const handleOnClickSignUp = async (event) => {
    event.preventDefault();
    try {
      const newUser = {
        email: signUpEmail,
        password: signUpPassword,
      };
      const res = await axios.post(
        "http://localhost:8080/users/create",
        newUser
      );

      const signUpData = res.data;

      localStorage.setItem("token", signUpData.token);
      alert(signUpData.message);

      setSignUpEmail("");
      setSignUpPassword("");
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SignUpContainer>
      <h2>SignUp</h2>
      <SignUpForm
        onSubmit={(event) => {
          handleOnClickSignUp(event);
        }}
      >
        <StyledInput
          placeholder="이메일을 입력해주세요"
          value={signUpEmail}
          onChange={(e) => handleOnChangeEmail(e)}
        />
        <StyledInput
          placeholder="비밀번호를 입력해주세요"
          value={signUpPassword}
          onChange={(e) => handleOnChangePassword(e)}
        />
        <StyledBtn type="submit" disabled={!isValid}>
          SignUp
        </StyledBtn>
      </SignUpForm>

      <Link to="/auth/login">
        <StyledBtn>Go Login</StyledBtn>
      </Link>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBtn = styled.button`
  background-color: #333;
  color: #eee;
  width: 420px;
  height: 50px;
  margin: 10px;
  border-radius: 5px;
  border: none;
`;

const StyledInput = styled.input`
  width: 400px;
  height: 40px;
  outline: none;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export default SignUp;
