import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import BloodRequest from "./pages/BloodRequest";
import Contact from "./pages/Contact";
import DonorFinder from "./pages/DonorFinder";
import DonorRegistration from "./pages/DonorRegistration";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import { ThemeProvider } from './styles/ThemeContext';
import BloodHavenNavbar from "./components/BloodHavenNavbar";
import Footer from "./components/Footer";
import "./styles/design.css";

const App = () => {
  return (
    <ThemeProvider>
      <BloodHavenNavbar />
      
      <main style={{ minHeight: 'calc(100vh - 160px)' }}>
        <Routes>
          <Route index={true} path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donor-registration" element={<DonorRegistration />} />
          <Route path="/donor-finder" element={<DonorFinder />} />
          <Route path="/blood-request" element={<BloodRequest />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <Footer />
    </ThemeProvider>
  );
};

export default App;