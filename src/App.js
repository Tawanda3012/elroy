import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from './pages/Homepage'
import NotFoundPage from "./pages/NotFoundPage";
import AboutUsPage from "./pages/AboutUsPage";
import SocialMediaBar from "./Components/SocialMediaBar";
import Header from "./Components/header";
import ContactPage from "./pages/ContactPage";
import AdmissionPage from "./pages/AdmissionPage";
// import InstructionPage from "./pages/InstructionPage";
// import ResourcesPage from "./pages/ResourcesPage";
import NewsEventsPage from "./pages/NewsEventsPage";
// import Footer from "./components/Footer";

// Layout component to wrap pages
const Layout = ({ children }) => {
  return (
    <div>
      <SocialMediaBar />
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Homepage /></Layout>} />
        <Route path="/about" element={<Layout><AboutUsPage /></Layout>} />
        <Route path="/admissions" element={<Layout><AdmissionPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        {/* <Route path="/instruction" element={<Layout><InstructionPage /></Layout>} /> */}
        <Route path="/news" element={<Layout><NewsEventsPage /></Layout>} />
        {/* <Route path="/resources" element={<Layout><ResourcesPage /></Layout>} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;