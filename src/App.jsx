import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/whoWeAre/AboutUs";
import Partner from "./pages/whoWeAre/Partner";
import ContactUs from "./pages/whoWeAre/ContactUs";
import PressRelease from "./pages/whoWeAre/PressRelease";
import Career from "./pages/whoWeAre/Career";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path = "/partner" element= {<Partner/>}/>
      <Route path="/contact" element= {<ContactUs/>}/>
      <Route path="/press-release" element= {<PressRelease/>}/>
      <Route path="/join-our-team" element= {<Career/>}/>
    </Routes>
  );
}

export default App;
