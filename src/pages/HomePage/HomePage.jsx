import React from "react";
import HeroSection from "./HeroSection";
import AssociatedBrandsCarousel from "../../components/AssociatedBrandsCarousel";
import Content from "./Content";
import ServicesCarousel from "./ServicesCarousel";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AssociatedBrandsCarousel />
      <ServicesCarousel />
      <Content />
    </>
  );
};

export default HomePage;
