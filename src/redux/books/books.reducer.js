import BookActionTypes from "./books.types";

const INITAL_STATE = {
    hidden: true,
    currentBook: null
}

const bookReducer = (state = INITAL_STATE, action) => {
    switch(action.type){
        case BookActionTypes.TOGGLE_BOOK_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case BookActionTypes.SET_CURRENT_BOOK:
            return{
                ...state,
                currentBook: action.payload
            }
        default:
            return state;
    }
}

export default bookReducer;