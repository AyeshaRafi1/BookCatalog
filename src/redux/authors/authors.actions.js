import AuthorActionTypes from "./authors.types";
import { firestore } from "../../firebase/firebase.utils";


export const initalizeAuthorState = () => ({
  type: AuthorActionTypes.INITIALIZE_AUTHOR_STATE
})

export const fetchAuthorStart = () => ({
  type: AuthorActionTypes.FETCH_AUTHOR_START
});

export const fetchAuthorSuccess = author => ({
  type: AuthorActionTypes.FETCH_AUTHOR_SUCCESS,
  payload: author
});

export const fetchAUthorFailure = errorMessage => ({
  type: AuthorActionTypes.FETCH_AUTHOR_FAILURE,
  payload: errorMessage
});

export const fetchAuthorStartAsync = async (id) => {
  return dispatch => {
    const AuthorRef = firestore.collection("Authors").doc(id);
    dispatch(fetchAuthorStart());

    AuthorRef.get().then(snapshot => 
        {
            const author= snapshot.data();
            dispatch(fetchAuthorSuccess(author));
        })
        .catch(error => dispatch(fetchAUthorFailure(error.message)));
  };
};

