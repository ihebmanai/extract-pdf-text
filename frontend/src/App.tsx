import React from "react";
import "./App.css";
import Header from "./components/layout/header/Header";
import PdfContentExtractor from "./components/pdf-content-extractor/PdfContentExtractor";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <PdfContentExtractor />
      <Footer />
    </div>
  );
}

export default App;
