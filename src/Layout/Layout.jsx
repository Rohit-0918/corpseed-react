import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Header from '../components/Header'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
