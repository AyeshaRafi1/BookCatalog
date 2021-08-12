import BookActionTypes from "./books.types";

const INITAL_STATE = {
    hidden: true,
    currentBook: null,
    isFetching: false,
    errorMessage: undefined
};

const bookReducer = (state = INITAL_STATE, action) => {
    switch(action.type){
        case BookActionTypes.TOGGLE_BOOK_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case BookActionTypes.FETCH_BOOK_START:
            return {
                ...state,
                isFetching: true
            };
        case BookActionTypes.FETCH_BOOK_SUCCESS:
            return{
                ...state,
                isFetching: false,
                currentBook: action.payload
            }
        case BookActionTypes.FETCH_BOOK_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default bookReducer;

