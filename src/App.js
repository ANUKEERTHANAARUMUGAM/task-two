import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FormPage from "./FormPage";
import DetailsDisplayPage from "./DetailsDisplayPage";

function App() {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/DetailsDisplayPage" element={<DetailsDisplayPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
