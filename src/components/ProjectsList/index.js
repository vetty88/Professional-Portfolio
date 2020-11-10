import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_PROJECT, UPDATE_PROJECTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function ProjectsList() {
  const [state, dispatch] = useStoreContext();

  const removePROJECT = id => {
    API.deletePROJECT(id)
      .then(() => {
        dispatch({
          type: REMOVE_PROJECT,
          _id: id
        });
      })
      .catch(err => console.log(err));
  };

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
              <DeleteBtn onClick={() => removePROJECT(PROJECT._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any Projects yet!</h3>
      )}
      <div className="mt-5">
        <Link to="favorites">View favorites</Link>
      </div>
    </div>
  );
}

export default ProjectsList;
