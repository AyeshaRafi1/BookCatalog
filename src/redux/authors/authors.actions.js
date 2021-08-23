import AuthorActionTypes from "./authors.types";
import { firestore, getAllAuthors } from "../../firebase/firebase.utils";

export const fetchAuthorsStart = () => ({
  type: AuthorActionTypes.FETCH_ALL_AUTHORS_START,
});

export const fetchAuthorsSuccess = (author) => ({
  type: AuthorActionTypes.FETCH_ALL_AUTHORS_SUCCESS,
  payload: author,
});

export const fetchAUthorsFailure = (errorMessage) => ({
  type: AuthorActionTypes.FETCH_ALL_AUTHORS_FAILURE,
  payload: errorMessage,
});

export const fetchAuthorStartAsync = () => {
  return (dispatch) => {
    const AuthorRef = firestore.collection("Authors");
    dispatch(fetchAuthorsStart(AuthorRef));

    AuthorRef.get()
      .then((snapShot) => {
        const allAuthorDetails = getAllAuthors(snapShot);
        console.log(allAuthorDetails);

        dispatch(fetchAuthorsSuccess(allAuthorDetails));
      })
      .catch((error) => dispatch(fetchAUthorsFailure(error.message)));
  };
};
