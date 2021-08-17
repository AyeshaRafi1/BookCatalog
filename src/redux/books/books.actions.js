import BookActionTypes from "./books.types";
import { firestore } from "../../firebase/firebase.utils";

export const toggleDeleteBook = () => ({
  type: BookActionTypes.TOGGLE_DELETE_BOOK
});

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

export const fetchAuthorStart = () => ({
  type: BookActionTypes.FETCH_AUTHOR_START
});

export const fetchAuthorSuccess = author => ({
  type: BookActionTypes.FETCH_AUTHOR_SUCCESS,
  payload: author
});

export const fetchAUthorFailure = errorMessage => ({
  type: BookActionTypes.FETCH_AUTHOR_FAILURE,
  payload: errorMessage
});


export const fetchBookStartAsync = async(id) => {
  return async dispatch => {
    const bookRef = firestore.collection("books").doc(id);

    bookRef
    .get()
    .then(snapshot => 
    {
      const book= snapshot.data();
      dispatch(fetchBookSuccess(book));
    
      const authorRef= firestore.collection("Authors").doc(book.AuthorID);
      dispatch(fetchAuthorStart());

      authorRef
      .get()
      .then( snapshot => 
      {
        const author = snapshot.data();
        dispatch(fetchAuthorSuccess(author.Books))
      })
      .catch(error => dispatch(fetchAUthorFailure(error.message)))
      
    }).catch(error => dispatch(fetchBookFailure(error.message)));

  
  };
};
