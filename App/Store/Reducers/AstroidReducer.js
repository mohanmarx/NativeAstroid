import * as types from "../Actions/constants";

const initialState = {
  astroid: {
    name: "",
    is_potentially_hazardous_asteroid: "",
    nasa_jpl_url: "",
  },
  isFetching: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_ASTROID:
      return {
        ...state,
        isFetching: action.value,
      }
    case types.SET_ASTROID:
      return {
        ...state,
        astroid: action.payload,
        isFetching: false
      };
    case types.RESET:
      return {
        ...state,
        astroid: initialState.astroid,
        isFetching: true
      };
    default: return state
  }

};
