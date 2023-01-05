import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import TodoDetail from "../TodoDetail";
import Layout from "../Layout/Layout";
import Main from "../Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<TodoDetail />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/sign_up" element={<SignUp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
