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
          <h3 className="table-row" color="black">{item.name}</h3>
          <a href={item.url}></a>
          <p>{item.description}</p>
          </div>;
          })}
        </ul>
        </container>
    
      );
      
    }
  }
