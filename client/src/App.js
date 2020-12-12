import React, { Component } from "react";
import Header from "./components/Header";
import Repos from "./components/Repos";
import RepoData from "./RepoData.json";
import Footer from "./components/Footer";
import "./App.css";

const name = RepoData.name;
const url = RepoData.url;
const description = RepoData.description;


class App extends Component {
  render() {
      return (
          <div className="App">
            <Header></Header>
            <Repos></Repos>
            {
              RepoData.names.map((name, i) => {
                return (
                  <div key={i}>
                    <div>
                      <a href={name.url}>
                      </a>
                      <div>
                        <div>
                          <a href={name.url}>{name.description}</a>
                        </div>
                          {name.map(function (description, i) { 
                            return <div key={i}>
                              <h5>{name}</h5>
                              <span>{url}</span>
                              <p>{description}</p>
                            </div>
                          })}
                      </div>
                    </div>
                  </div>
                );
              })
				}
            <Footer></Footer>
          </div>
      );
  }
}

export default App;
