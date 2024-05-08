import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThingsToDo from "./components/ThingsToDo";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Things-to-do" element={<ThingsToDo />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          {/* More routes can be added here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
