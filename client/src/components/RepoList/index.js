import React from 'react';
import {repoDatas} from "./repoDatas.js";

export default class RepoList extends React.Component{
    render() {
      const repoData = repoDatas[0]
      return(
        <div>
          <RepoList 
          name = {repoData.name}
          url = {repoData.url}
          description = {repoData.description}
          />
        </div>
      );
    }
  }
