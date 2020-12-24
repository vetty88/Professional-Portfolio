import React from 'react';
import ReactList from 'react-list';
import RepoDatas from "../RepoDatas.js";

export default class RepoList extends React.Component {
  state = {
    repoDatas: []
  };

  componentWillMount() {
    RepoDatas(this.handleRepoDatas);
  }
 
  handleRepoDatas(repoDatas) {
    this.setState({repoDatas});
  }
 
  // renderName(index, url) {
  //   return 
  //     <div url={url}>
  //       {this.state.repoDatas[index].name}
  //     </div>;
  // };
 
  render() {
    return (
      <div>
        <h1>RepoDatas</h1>
        <div style={{overflow: 'auto', maxHeight: 400}}>
          <ReactList
            nameRenderer={this.renderName}
            length={this.state.repoDatas.length}
          />
        </div>
      </div>
    );
  }
}

  // render() {
  //   const repoData = RepoDatas[0];
  //   return(
  //     <div className = "container">

  //         <div className="col-md-4">
  //         Project Name: {repoData.name}
  //         </div>

  //         <div className="col-md-4">
  //         Project URL: {repoData.url}
  //         </div>

  //         <div className="col-md-4">
  //         Project Description = {repoData.description}
  //         </div>
    
  //     </div>
  //   );
  // }
