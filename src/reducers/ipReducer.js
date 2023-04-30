import {
    FETCH_IP_REQUEST,
    FETCH_IP_SUCCESS,
    FETCH_IP_FAILURE,
  } from "../actions/ipActions";

  const initialState = {
    loading: false,
    ip: "",
    error: "",
  };

  const ipReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_IP_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_IP_SUCCESS:
        return {
          loading: false,
          ip: action.payload,
          error: "",
        };
      case FETCH_IP_FAILURE:
        return {
          loading: false,
          ip: "",
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export default ipReducer;