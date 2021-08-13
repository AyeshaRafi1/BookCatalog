import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  addBook:false,
  deleteBook: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case UserActionTypes.TOGGLE_ADD_BOOK:
      return {
        ...state,
        addBook:!state.addBook
      }
    case UserActionTypes.TOGGLE_DELETE_BOOK:
      return {
        ...state,
        deleteBook:!state.deleteBook
      }
    default:
      return state;
  }
};

export default userReducer;
