import { GET_MOVIE_LIST_REQUEST,GET_MOVIE_DETAIL_REQUEST,  REQUEST_FAILURE, FETCH_REQUEST } from './type'
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
        case GET_MOVIE_DETAIL_REQUEST :
            return{
                ...state,
                movieDetail:action.payload
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