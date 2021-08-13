import BookActionTypes from "./books.types";
import { firestore } from "../../firebase/firebase.utils";



export const toggleBookHidden = () => ({
    type: BookActionTypes.TOGGLE_BOOK_HIDDEN
});

export const initalizeBookState = () => ({
  type: BookActionTypes.INITIALIZE_BOOK_STATE
})

export const fetchBookStart = () => ({
  type: BookActionTypes.FETCH_BOOK_START
});

export const fetchBookSuccess = book => ({
  type: BookActionTypes.FETCH_BOOK_SUCCESS,
  payload: book
});

export const fetchBookFailure = errorMessage => ({
  type: BookActionTypes.FETCH_BOOK_FAILURE,
  payload: errorMessage
});

export const fetchBookStartAsync = (id) => {
  return dispatch => {
    const BookRef = firestore.collection("books").doc(id);
    dispatch(fetchBookStart());

    BookRef.get().then(snapshot => 
    {
      const book= snapshot.data();
      dispatch(fetchBookSuccess(book));
    })
        .catch(error => dispatch(fetchBookFailure(error.message)));
  };
};
