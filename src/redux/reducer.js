import { ADD_TODO, ALL_CHECKED, DELETE_TODO, EDIT_TODO, TOGGLE_STATUS,FILTER_DATA } from "./actionTypes";

let initialState = {
  allUserData:[]
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {...state,allUserData:payload};
    case DELETE_TODO:
      return {...state,allUserData:payload};
    case EDIT_TODO:
      return {...state,allUserData:payload};
    case TOGGLE_STATUS:
      return {...state,allUserData:payload};
    case ALL_CHECKED:
      return {...state,allUserData:payload};
    case FILTER_DATA:
      return {...state,allUserData:payload};
    default:
      return state
  }
};


