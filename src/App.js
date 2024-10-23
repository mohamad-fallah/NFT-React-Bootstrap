import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/custom.css";

export default function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}
