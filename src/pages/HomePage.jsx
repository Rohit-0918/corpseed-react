import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ServicesCarousel from "../components/ServicesCarousel";
import AssociatedBrandsCarousel from "../components/AssociatedBrandsCarousel";
import Content from "../components/Content";
import AboutUs from "./whoWeAre/AboutUs";

const HomePage = () => {
  return (
    <>
      <Header />
      <div>
        <HeroSection />
        <AssociatedBrandsCarousel/>
      </div>
      <ServicesCarousel/>
      <Content/>
      <Footer />
     
    </>
  );
};

export default HomePage;
