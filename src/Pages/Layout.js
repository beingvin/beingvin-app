import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Logo from "../Components/Logo/Logo";


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
