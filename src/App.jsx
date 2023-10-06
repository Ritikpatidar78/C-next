import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </>
      <Footer />
    </Router>
  );
};

export default App;
