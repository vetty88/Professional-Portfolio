import React from "react";
import Header from "./components/Header";
import RepoList from "./components/RepoList";
import Footer from "./components/Footer";
import './App.css'; 

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
