import React from "react";
import { Link, Outlet } from "react-router";
import Navbar from "../../components/Header/Navbar";
import CoffeeList from "../../components/coffeeList/CoffeeList";

function RootLayout() {
  return (
    <>
      <Navbar />
      <CoffeeList/>
      <Outlet></Outlet>
    </>
  );
}

export default RootLayout;
