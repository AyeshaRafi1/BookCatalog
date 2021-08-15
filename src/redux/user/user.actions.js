import { UserActionTypes } from './user.types';
import { firestore } from "../../firebase/firebase.utils";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const toggleAddBook = () => ({
  type: UserActionTypes.TOGGLE_ADD_BOOK
});


export const removeBook = user => {

  return dispatch => {
    firestore.collection("user").doc(user.id).update({bookList: user.bookList, bookIDs: user.bookIDs});
    
    dispatch(setCurrentUser(user));
  }
}