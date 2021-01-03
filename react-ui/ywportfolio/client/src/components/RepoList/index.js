import React from "react";
import RepoData from "../RepoDatas.js";
import "./style.css";

export default class RepoList extends React.Component {
  
    render() {
      return (
                <container>
        <ul className="list-group">
          {RepoData.map(item => {
          return <div className="list-overflow-container" key={item.id}> 
          <p><strong>{item.name}</strong></p>
          <p><a href={item.url}>Project Link</a></p>
          <p>{item.description}</p>
          </div>;
          })}
        </ul>
        </container>
    
      );
      
    }
  }
