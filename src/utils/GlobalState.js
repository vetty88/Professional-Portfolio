import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_PROJECT,
  REMOVE_PROJECT,
  UPDATE_PROJECTS,
  ADD_PROJECT,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
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

  case ADD_PROJECT:
    return {
      ...state,
      Projects: [action.PROJECT, ...state.Projects],
      loading: false
    };

  case REMOVE_PROJECT:
    return {
      ...state,
      Projects: state.Projects.filter((PROJECT) => {
        return PROJECT._id !== action._id; 
      })
    };

  case ADD_FAVORITE:
    return {
      ...state,
      favorites: [action.PROJECT, ...state.favorites],
      loading: false
    };

  case UPDATE_FAVORITES:
    return {
      ...state,
      favorites: [...state.favorites],
      loading: false
    };

  case REMOVE_FAVORITE:
    return {
      ...state,
      favorites: state.favorites.filter((PROJECT) => {
        return PROJECT._id !== action._id; 
      })
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
    Projects: [],
    currentPROJECT: {
      _id: 0,
      title: "",
      body: "",
      author: ""
    },
    favorites: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
