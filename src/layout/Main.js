import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/common/Footer/Footer";
import Header from "../pages/common/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
