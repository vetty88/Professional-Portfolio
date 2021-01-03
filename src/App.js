import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch";
import "./App.css"; 

function App() {
  return (
    <Router>
      <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route component={NoMatch} />
          </Switch>
          < Footer />
      </div>
    </Router>
  );
}

export default App;