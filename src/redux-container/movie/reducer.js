import { GET_MOVIE_LIST_REQUEST,  REQUEST_FAILURE, FETCH_REQUEST } from './type'
const movieReducer = (state = { isLoader: true }, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                isLoader: true,
            }
      
        case GET_MOVIE_LIST_REQUEST:
            return {
                ...state,
                movieList: action.payload,
                isLoader: false,
            }
        case REQUEST_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoader: false,

            }
        default: return state;
    }

}
export default movieReducer;