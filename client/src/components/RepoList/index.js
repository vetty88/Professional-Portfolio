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
          <strong>{item.name}</strong>
          <br></br>
          <a href={item.url}>Project Link</a>
          <br></br>
          <p>{item.description}</p>
          </div>;
          })}
        </ul>
        </container>
    
      );
      
    }
  }
