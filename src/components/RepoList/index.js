import React from "react";
import RepoData from "../RepoDatas.js";
import "./style.css";

export default class RepoList extends React.Component {
  
    render() {
      return (
        <ul className="list-group">>
          {RepoData.map(item => {
          return <div className="list-overflow-container" key={item.id}> 
          <h2 className="list-item">{item.name}</h2>
          <a>{item.url}</a>
          <p>{item.description}</p>
          </div>;
          })}
        </ul>
      );
      
    }
  }
