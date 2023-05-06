import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Logo from "../Components/Logo/Logo";
import style from "./Style.module.css";

function Layout() {
  return (
    <>
      <Link to={"./"}>
        <Logo />
      </Link>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
