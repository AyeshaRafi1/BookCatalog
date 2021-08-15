import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  addBook:false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.REMOVE_BOOK:
    return {
      ...state,
      currentUser:action.payload
    }
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
    default:
      return state;
  }
};

export default userReducer;
