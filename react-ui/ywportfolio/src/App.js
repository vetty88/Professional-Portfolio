import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { StoreProvider } from "./utils/GlobalState";


function App() {
  return (
    <Router>
      <div>
      <Header />
        <StoreProvider>
           <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/projects/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
          
        </StoreProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
