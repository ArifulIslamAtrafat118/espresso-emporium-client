import React from "react";
import { Link, Outlet } from "react-router";
import Navbar from "../../components/Header/Navbar";

function RootLayout() {
  return (
    <>
      <Navbar />
      <h1 className="text-5xl text-yellow-400">Root Layout</h1>
      <Outlet></Outlet>
    </>
  );
}

export default RootLayout;
