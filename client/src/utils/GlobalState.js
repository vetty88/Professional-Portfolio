import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_PROJECT,
  UPDATE_PROJECTS,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_PROJECT:
    return {
      ...state,
      currentProject: action.project,
      loading: false
    };

  case UPDATE_PROJECTS:
    return {
      ...state,
      projects: [...action.projects],
      loading: false
    };

  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    projects: [],
    currentProject: {
      name: 0,
      url: "",
      description: "",
      },

    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
