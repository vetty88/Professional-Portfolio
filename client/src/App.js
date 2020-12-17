import React from "react";
import './App.css'; 
import Header from "./components/Header";
import RepoList from "./components/RepoList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App"> 
      <Footer />
      <Header />
      <RepoList />
    </div>
  );
}

export default App;
