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

export const fetchBookStartAsync = (name) => {
  return dispatch => {
    const BookRef = firestore.collection("books").doc(name.toLowerCase());
    dispatch(fetchBookStart());

    BookRef.get().then(snapshot => 
        {
            let book= snapshot.data();
            book["name"] = name;
            dispatch(fetchBookSuccess(book));
        })
        .catch(error => dispatch(fetchBookFailure(error.message)));
  };
};
