import { UserActionTypes } from './user.types';
import { firestore } from "../../firebase/firebase.utils";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const toggleAddBook = () => ({
  type: UserActionTypes.TOGGLE_ADD_BOOK
});


export const updateBooks = user => {

  return dispatch => {
    dispatch(setCurrentUser(user));

    firestore.collection("user").doc(user.id).update({bookList: user.bookList, bookIDs: user.bookIDs});
    
  }
}
