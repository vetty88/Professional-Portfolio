import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PROJECTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function ProjectsList() {
  const [state, dispatch] = useStoreContext();

  // const removeProject = id => {
  //   API.deleteProject(id)
  //     .then(() => {
  //       dispatch({
  //         type: REMOVE_PROJECT,
  //         _id: id
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  const getProjects = () => {
    dispatch({ type: LOADING });
    API.getProjects()
      .then(results => {
        dispatch({
          type: UPDATE_PROJECTS,
          projects: results.data
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
      <h3 className="mb-5 mt-5">Click on a project to view</h3>
      {state.projects.length ? (
        <List>
          {state.projects.map(project => (
            <ListItem key={project._id}>
              <Link to={"/projects/" + project._id}>
                <strong>
                  {project.title} by {project.author}
                </strong>
              </Link>
            
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any projects yet!</h3>
      )}
      <div className="mt-5">
     
      </div>
    </div>
  );
}

export default ProjectsList;
