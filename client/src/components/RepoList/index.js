import React from 'react';
import {RepoDatas} from "../RepoDatas.js";

export default class RepoList extends React.Component {
    render() {
      const repoData = RepoDatas[0];
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
