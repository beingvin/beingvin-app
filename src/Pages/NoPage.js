import React from "react";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div
      style={{
        height: "90vh",
        color: "#fff",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "10rem" }}>404</h1>
      <p style={{ fontSize: "2rem" }}>Page Not Found</p> <br/>
      <p>
        <Link style={{ textDecoration: "none", color: "#fe005d" }} to="/">
          {" "}
          Back To Home
        </Link>
      </p>
    </div>
  );
}

export default NoPage;
