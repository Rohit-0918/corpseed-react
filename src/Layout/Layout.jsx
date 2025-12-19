import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Header from "../components/Header";
import BottomMobileBar from "../components/BottomMobileBar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 mb-10">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <BottomMobileBar  />
    </div>
  );
};

export default Layout;
