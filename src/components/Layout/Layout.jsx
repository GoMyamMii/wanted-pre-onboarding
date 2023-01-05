import React from "react";
import GlobalStyle from "./GlobalStyle";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
