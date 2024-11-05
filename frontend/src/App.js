import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/products";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
