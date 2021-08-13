import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const toggleAddBook = () => ({
  type: UserActionTypes.TOGGLE_ADD_BOOK
});

