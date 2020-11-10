import React, { useEffect } from "react";
import { ListItem, List } from "../List";

import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PROJECTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function ProjectsList() {
  const [state, dispatch] = useStoreContext();

  

  const getProjects = () => {
    dispatch({ type: LOADING });
    API.getProjects()
      .then(results => {
        dispatch({
          type: UPDATE_PROJECTS,
          Projects: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <h1>All Blog Projects</h1>
      <h3 className="mb-5 mt-5">Click on a PROJECT to view</h3>
      {state.Projects.length ? (
        <List>
          {state.Projects.map(PROJECT => (
            <ListItem key={PROJECT._id}>
              <Link to={"/Projects/" + PROJECT._id}>
                <strong>
                  {PROJECT.title} by {PROJECT.author}
                </strong>
              </Link>
              
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any Projects yet!</h3>
      )}
      <div className="mt-5">
        <Link to="">View </Link>
      </div>
    </div>
  );
}

export default ProjectsList;
