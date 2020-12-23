import React from "react";
import Header from "./components/Header";
import RepoList from "./components/RepoList";
import Footer from "./components/Footer";
import './App.css'; 

function App() {
  return (
    <div className="App"> 

      <div>
      <Header />
      </div> 

      <div>
      <RepoList />
      </div>

      <div>
      <Footer />
      </div>

    </div>
  );
}

export default App;
