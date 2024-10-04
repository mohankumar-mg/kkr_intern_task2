import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Face from "./components/Face";
import CustomSlider from "./components/CustomSlider";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Face />
      <CustomSlider />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
