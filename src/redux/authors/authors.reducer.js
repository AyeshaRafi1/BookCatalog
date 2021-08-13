import AuthorActionTypes from "./authors.types";

const INITAL_STATE = {
    currentAuthor: null,
    isFetching: false,
    errorMessage: undefined
};

const authorReducer = (state = INITAL_STATE, action) => {
    switch(action.type){
        case AuthorActionTypes.FETCH_AUTHOR_START:
            return {
                ...state,
                isFetching: true,
                errorMessage: undefined
            };
        case AuthorActionTypes.FETCH_AUTHOR_SUCCESS:
            return{
                ...state,
                isFetching: false,
                currentAuthor: action.payload
            }
        case AuthorActionTypes.FETCH_AUTHOR_FAILURE:
            return {
                ...state,
                currentAuthor: null,
                isFetching: false,
                errorMessage: action.payload
            }
        case AuthorActionTypes.INITIALIZE_AUTHOR_STATE:
            return {
                currentAuthor: null,
                isFetching: false,
                errorMessage: undefined
            }
        default:
            return state;
    }
}

export default authorReducer;

