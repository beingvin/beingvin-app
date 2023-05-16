import React from "react";
import { Outlet} from "react-router-dom";
import Footer from "../Components/Page/Home/Footer/Footer";
// import Logo from "../Components/Page/Home/Logo/Logo";

function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
