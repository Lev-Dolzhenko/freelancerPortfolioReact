import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Projects from "./pages/projects";
import Home from "./pages/home";
import Project from "./pages/project";
import Contacts from "./pages/contacts";

import ScrollToTop from "./utils/ScrollToTop";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./reset.css";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
