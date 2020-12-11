import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Repos } from "./Repos";


function App() {
  return (
    <Router>
      <div>
      <Header />

           <div className="App">
              <Repos />
          </div>
          
        <Footer />
      </div>
    </Router>
  );
}

export default App;
