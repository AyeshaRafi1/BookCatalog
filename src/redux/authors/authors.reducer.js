import AuthorActionTypes from "./authors.types";

const INITAL_STATE = {
  allAuthors: null,
  isFetching: false,
  errorMessage: undefined,
};

const authorReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case AuthorActionTypes.FETCH_AUTHOR_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: undefined,
      };
    case AuthorActionTypes.FETCH_AUTHOR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        allAuthors: action.payload,
      };
    case AuthorActionTypes.FETCH_AUTHOR_FAILURE:
      return {
        ...state,
        allAuthors: null,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default authorReducer;
