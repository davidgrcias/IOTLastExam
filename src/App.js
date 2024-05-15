import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThingsToDo from "./components/ThingsToDo";
import About from "./components/About";
import Game from "./components/Game";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CategoryDetails from "./components/CategoryDetails"; // Import the new component
import Information from "./components/Information";
<<<<<<< HEAD
import FloatButton from "./components/FloatButton";
=======
import cursor from "./components/cursor.js"
>>>>>>> bf4007f6724f76db720d5a5f349db569f5602aab

function App() {
  return (
    <Router>
      <div className="App">
        <FloatButton />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Things-to-do" element={<ThingsToDo />} />
          <Route path="/About" element={<About />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/tour/:category" element={<CategoryDetails />} />{" "}
          <Route path="/Information" element={<Information />} />
          {/* More routes can be added here */}
        </Routes>
        <Footer />
        <cursor />
      </div>
    </Router>
  );
}

export default App;
