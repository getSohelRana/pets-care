import React from "react";

import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import Loading from "../pages/Loading";

const Layout = () => {
  const { state } = useNavigation();
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-1 bg-base-100 container mx-auto py-10">
        {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
