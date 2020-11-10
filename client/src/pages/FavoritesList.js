import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";

import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { , LOADING, S } from "../utils/actions";

const List = () => {
  const [state, dispatch] = useStoreContext();

  const get = () => {
    dispatch({ type: LOADING });
    dispatch({ type: S });
  };

  const removeFrom = id => {
    dispatch({
      
      _id: id
    });
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here's All of Your  Projects</h1>
      {state..length ? (
        <List>
          <h3 className="mb-5 mt-5">Click on a PROJECT to view in detail</h3>
          {state..map(PROJECT => (
            <ListItem key={PROJECT._id}>
              <Link to={"/Projects/" + PROJECT._id}>
                <strong>
                  {PROJECT.title} by {PROJECT.author}
                </strong>
              </Link>
              < onClick={() => removeFrom(PROJECT._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any  yet!</h3>
      )}
      <div className="mt-5">
        <Link to="home">Back to home</Link>
      </div>
    </div>
  );
};

export default List;
