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
      currentPROJECT: action.PROJECT,
      loading: false
    };

  case UPDATE_PROJECTS:
    return {
      ...state,
      Projects: [...action.Projects],
      loading: false
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    Projects: [],
    currentPROJECT: {
      _id: 0,
      title: "",
      description: "",
      author: ""
    },

    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
