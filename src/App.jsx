import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HomePage />
      </main>
    </div>
  );
};

export default App;
