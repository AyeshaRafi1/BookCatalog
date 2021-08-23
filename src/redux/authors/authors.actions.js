import AuthorActionTypes from "./authors.types";
import { firestore, getAllAuthors } from "../../firebase/firebase.utils";

export const fetchAuthorsStart = () => ({
  type: AuthorActionTypes.FETCH_AUTHOR_START,
});

export const fetchAuthorsSuccess = (author) => ({
  type: AuthorActionTypes.FETCH_AUTHOR_SUCCESS,
  payload: author,
});

export const fetchAUthorsFailure = (errorMessage) => ({
  type: AuthorActionTypes.FETCH_AUTHOR_FAILURE,
  payload: errorMessage,
});

export const fetchAuthorStartAsync = () => {
  return (dispatch) => {
    try {
      const AuthorRef = firestore.collection("Authors");
      dispatch(fetchAuthorsStart(AuthorRef));

      const allAuthorsDetails = getAllAuthors(AuthorRef);
      console.log(allAuthorsDetails);

      dispatch(fetchAuthorsSuccess(allAuthorsDetails));
    } catch (error) {
      dispatch(fetchAUthorsFailure(error.message));
    }
  };
};
