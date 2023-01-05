import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  const handleOnChangeEmail = (e) => {
    setLoginEmail(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setLoginPassword(e.target.value);
  };

  useEffect(() => {
    if (
      loginEmail.includes("@") &&
      loginEmail.includes(".") &&
      loginPassword.length > 8
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [loginEmail, loginPassword]);

  const handleOnLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const loginUser = {
        email: loginEmail,
        password: loginPassword,
      };
      const res = await axios.post(
        "http://localhost:8080/users/login",
        loginUser
      );

      alert(res.data.message);
      localStorage.setItem("token", res.data.token);

      setLoginEmail("");
      setLoginPassword("");
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <LoginForm
        onSubmit={(event) => {
          handleOnLoginSubmit(event);
        }}
      >
        <StyledInput
          value={loginEmail}
          onChange={(e) => handleOnChangeEmail(e)}
          placeholder="이메일을 입력해주세요"
        />
        <StyledInput
          value={loginPassword}
          onChange={(e) => handleOnChangePassword(e)}
          placeholder="비밀번호를 입력해주세요"
        />
        <StyledBtn type="submit" disabled={!isValid}>
          Login
        </StyledBtn>
      </LoginForm>

      <Link to="/auth/signup">
        <StyledBtn>Go Sign Up</StyledBtn>
      </Link>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginForm = styled.form`
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

export default Login;
