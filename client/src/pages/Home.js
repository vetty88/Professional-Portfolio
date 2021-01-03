import React from "react";
import Header from "../components/Header";
import RepoList from "../components/RepoList";
import Footer from "../components/Footer";
import "../App.css"; 

function Home() {
  return (
  <div>
  <Header />
  <RepoList />
  <Footer />
  </div>

  );
}

export default Home;
