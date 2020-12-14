import React, { Component } from "react";
import Header from "./components/Header";
import RepoList from "./components/RepoList";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    RepoList: true,
    names: [{
      urls: '',
      descriptions: 0,
  }]
}
}

render() {
  return (
    <div>
    {
      (this.state.RepoList) ?
      <div id="wrapper">
        <Header newScreen={()=>this.setState({RepoList: false, List: true})}></Header>
      </div> : (this.state.List) ? <div id="wrapper">
        <RepoList names={this.state.names} start={(names)=>this.setState({names: names})}></RepoList>
      </div> : <div id="wrapper"><Footer></Footer></div>
    }
    </div>
    );
  }
}


export default App;
