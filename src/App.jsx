import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/whoWeAre/AboutUs";
import Partner from "./pages/whoWeAre/Partner";
import ContactUs from "./pages/whoWeAre/ContactUs";
import PressRelease from "./pages/PressRelease/PressRelease";
import Career from "./pages/whoWeAre/Career";
import LifeAtCorpseed from "./pages/whoWeAre/LifeAtCorpseed";
import ServicePage from "./pages/services/ServicePage";
import Layout from "./Layout/Layout";
import FAQ from "./pages/FAQ";
import AllServices from "./pages/services/AllServices";
import NotFound from "./pages/NotFound";
import BookMeeting from "./pages/BookMeeting";
import IndustryPage from "./pages/Industries/IndustryPage";
import IndusPage from "./pages/Industries/IndusPage";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import KnowledgeCenterPage from "./pages/KnowledgeCenter/KnowledgeCenterPage";
import Consulation from "./pages/KnowledgeCenter/components/Consulation";
import BottomMobileBar from "./components/BottomMobileBar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/press-release" element={<PressRelease />} />
        <Route path="/join-our-team" element={<Career />} />
        <Route path="/life-at-corpseed" element={<LifeAtCorpseed />} />   
        <Route path="/service/:slug" element={<ServicePage/>} />
        <Route path="faq" element={<FAQ />} />
        <Route path="/category/all" element={<AllServices/>} />
        <Route path="/book-meeting" element={<BookMeeting/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/industries/:slug" element={<IndustryPage/>} />
        <Route path="/knowledge-centre/:slug" element={<KnowledgeCenterPage/>} />
        <Route path="/industries" element={<IndusPage />} />
        <Route path = "/pages/terms-of-use" element = {<TermsOfUse/>}/>
        <Route path = "/pages/privacy-policy" element = {<PrivacyPolicy/>}/>
        <Route path="/demo" element={<BottomMobileBar />} />
      </Route>
    </Routes>
  );
}

export default App;
