import React, { useState, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./screens/landingPage";
import AboutUs from "./sections/consultancy/aboutUs";
import NavBar from "./sections/navbar";
import HomePage from "./sections/homePage/index";
import PrivacyPolicy from "./sections/privacy-policy/index";
import TermsAndCondition from "./sections/privacy-policy/terms-of-use";
import "./App.css";

const FabIconComponent = lazy(() => import("./component/fabButton"));

function App() {
  const [isScroll, setScroll] = useState(false);

  return (
    <div>
      <NavBar setScroll={() => setScroll()} isScroll={isScroll} />
      <Suspense fallback={<div />}>
        <FabIconComponent />
      </Suspense>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsAndCondition />} />
      </Routes>
    </div>
  );
}

export default App;
