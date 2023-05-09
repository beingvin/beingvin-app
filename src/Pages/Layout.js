import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Components/Page/Home/Footer/Footer";
import Logo from "../Components/Page/Home/Logo/Logo";

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
