import React from 'react';
import HeaderExample from '../pages/EnvironmentAndSustainability/HeaderExample';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Header from '../components/Header'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-18">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
