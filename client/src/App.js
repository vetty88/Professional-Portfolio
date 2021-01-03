import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import "./App.css"; 

function App() {
  return (
    <Router>
      <div>
          <Header />
          <br></br>
          <Jumbotron>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route component={NoMatch} />
          </Switch>
          </Jumbotron>
          <br></br>
          < Footer />
      </div>
    </Router>
  );
}

export default App;