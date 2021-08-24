import BookActionTypes from "./books.types";
import { firestore } from "../../firebase/firebase.utils";

export const deleteBook = () => ({
  type: BookActionTypes.DELETE_BOOK,
});

export const toggleDeleteBook = () => ({
  type: BookActionTypes.TOGGLE_DELETE_BOOK,
});

export const toggleBookHidden = () => ({
  type: BookActionTypes.TOGGLE_BOOK_HIDDEN,
});

export const initalizeBookState = () => ({
  type: BookActionTypes.INITIALIZE_BOOK_STATE,
});

export const fetchBookStart = () => ({
  type: BookActionTypes.FETCH_BOOK_START,
});

export const fetchBookSuccess = (book) => ({
  type: BookActionTypes.FETCH_BOOK_SUCCESS,
  payload: book,
});

export const fetchBookFailure = (errorMessage) => ({
  type: BookActionTypes.FETCH_BOOK_FAILURE,
  payload: errorMessage,
});

export const fetchAuthorStart = () => ({
  type: BookActionTypes.FETCH_AUTHOR_START,
});

export const fetchAuthorSuccess = (author) => ({
  type: BookActionTypes.FETCH_AUTHOR_SUCCESS,
  payload: author,
});

export const fetchAUthorFailure = (errorMessage) => ({
  type: BookActionTypes.FETCH_AUTHOR_FAILURE,
  payload: errorMessage,
});

export const fetchBookStartAsync = (id) => {
  return (dispatch) => {
    const BookRef = firestore.collection("books").doc(id);
    dispatch(fetchBookStart());

    BookRef.get()
      .then((snapshot) => {
        const book = snapshot.data();
        dispatch(fetchBookSuccess(book));

        const AuthorRef = firestore.collection("Authors").doc(book.AuthorID);
        dispatch(fetchAuthorStart());

        AuthorRef.get()
          .then((snapshot) => {
            const author = snapshot.data();
            dispatch(fetchAuthorSuccess(author.Books));
          })
          .catch((error) => dispatch(fetchAUthorFailure(error.message)));
      })
      .catch((error) => dispatch(fetchBookFailure(error.message)));
  };
};

export const fetchBookAndAuthorAndToggleDetails = (
  name,
  currentBook,
  hidden,
  bookind,
  error
) => {
  return (dispatch) => {
    if (currentBook) {
      //if the name of current book matches the book that we want to fetch then no need to fetch
      if (currentBook.Name === name) {
        dispatch(toggleBookHidden());
      }
      // if name does not match and the details bar is hidden then we need to fetch book and toggle hidden
      else if (hidden) {
        dispatch(fetchBookStartAsync(bookind));
        dispatch(toggleBookHidden());
      }
      // if the name does not match and the details are not hidden, simply fetch new book, no need to close
      else {
        dispatch(fetchBookStartAsync(bookind));
      }
    } else {
      // if there is no current book and there is an error then only fetch new book and do not close details
      if (error) {
        dispatch(fetchBookStartAsync(bookind));
      }
      // if none of the above cases then simply fetch book and toggle hidden
      else {
        dispatch(fetchBookStartAsync(bookind));
        dispatch(toggleBookHidden());
      }
    }
  };
};
