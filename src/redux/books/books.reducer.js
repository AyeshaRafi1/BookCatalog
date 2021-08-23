import BookActionTypes from "./books.types";

const INITAL_STATE = {
  hidden: true,
  currentBook: null,
  isFetching: false,
  isFetchingA: false,
  errorMessage: null,
  otherBooksByAuthor: null,
  deleteBook: false,
};

const bookReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case BookActionTypes.deleteBook:
      return {
        hidden: true,
        currentBook: null,
        isFetching: false,
        isFetchingA: false,
        errorMessage: null,
        otherBooksByAuthor: null,
        deleteBook: false,
      };
    case BookActionTypes.TOGGLE_DELETE_BOOK:
      return {
        ...state,
        deleteBook: !state.deleteBook,
      };
    case BookActionTypes.FETCH_AUTHOR_START:
      return {
        ...state,
        isFetchingA: true,
        errorMessage: null,
      };
    case BookActionTypes.FETCH_AUTHOR_SUCCESS:
      return {
        ...state,
        isFetchingA: false,
        otherBooksByAuthor: action.payload,
      };
    case BookActionTypes.FETCH_AUTHOR_FAILURE:
      return {
        ...state,
        currentAuthor: null,
        isFetchingA: false,
        errorMessage: action.payload,
      };
    case BookActionTypes.TOGGLE_BOOK_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
        deleteBook: false,
      };
    case BookActionTypes.FETCH_BOOK_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
        deleteBook: false,
      };
    case BookActionTypes.FETCH_BOOK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentBook: action.payload,
      };
    case BookActionTypes.FETCH_BOOK_FAILURE:
      return {
        ...state,
        currentBook: null,
        isFetching: false,
        errorMessage: action.payload,
      };
    case BookActionTypes.INITIALIZE_BOOK_STATE:
      return {
        hidden: true,
        currentBook: null,
        isFetching: false,
        isFetchingA: false,
        errorMessage: null,
        otherBooksByAuthor: null,
      };
    default:
      return state;
  }
};

export default bookReducer;
