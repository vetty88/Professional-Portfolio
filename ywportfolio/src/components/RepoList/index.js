import React from 'react';
import RepoData from "../RepoDatas.js";

export default class RepoList extends React.Component {
  
    render() {
      return (
        <ul>
          {RepoData.map(item => {
          return <div key={item.id}> 
          <h2>{item.name}</h2>
          <a>{item.url}</a>
          <p>{item.description}</p>
          
           </div>;
          })}
        </ul>
      );
      
    }
  }


// import ReactList from 'react-list';


// export default class RepoList extends React.Component {
//   state = {
//     RepoDatas: []
//   };

//   componentWillMount() {
//     RepoDatas(this.handleRepoDatas);
//   }
 
//   handleRepoDatas(RepoDatas) {
//     this.setState({RepoDatas});
//   }
 
//   renderName(index, url) {
//     return 
//       <div url={url}>
//         {this.state.RepoDatas[index].name}
//       </div>;
//   };
 
//   render() {
//     return (
//       <div>
//         <h1>RepoDatas</h1>
//         <div style={{overflow: 'auto', maxHeight: 400}}>
//           <ReactList
//             nameRenderer={this.renderName}
//             length={this.state.RepoDatas.length}
//           />
//         </div>
//       </div>
//     );
//   }
