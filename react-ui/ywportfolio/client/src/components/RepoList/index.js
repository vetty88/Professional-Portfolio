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
