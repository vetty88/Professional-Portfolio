import React from 'react';
import RepoData from "../RepoDatas.js";

export default class RepoList extends React.Component {

  
    render() {
      return (
        <ul>
          {RepoData.map(item => {
          return <div key={item.id}> 

          <h2>Project Name: {item.name}</h2>
          <a href={item.url}>Link: {item.url}</a>
          <p><em>Description: {item.description}</em></p>
          
           </div>;
          })}
        </ul>
      );
      
    }
  }
