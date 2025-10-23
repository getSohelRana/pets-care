import React from "react";

import { Outlet } from "react-router";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header >
        <Navbar></Navbar>
      </header>
      <main className="flex-1 bg-base-100 container mx-auto py-10">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
