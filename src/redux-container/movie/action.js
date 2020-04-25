import baseURL from '../../helper/baseURL';
import {APIKEY} from '../../helper/const'
import {  GET_MOVIE_LIST_REQUEST, GET_MOVIE_DETAIL_REQUEST, REQUEST_FAILURE, FETCH_REQUEST } from './type'


export const getMovieList = () => async (dispatch) => {
    dispatch({ type: FETCH_REQUEST})
    await baseURL.get(`3/list/1?api_key=${APIKEY}` )
    .then(response=>
        {
            console.log(response)
            if(response.status===200)
            {
                dispatch({ type: GET_MOVIE_LIST_REQUEST, payload: response.data.items });
            }
        })
        .catch(error=>
            {
                console.log(error.response.data['message'])
             dispatch({type:REQUEST_FAILURE,payload:error.response.data['message']});
            })
}

export const getMovieListBySearching = (name) => async (dispatch) => {
    dispatch({ type: FETCH_REQUEST})
    await baseURL.get(`3/search/movie?api_key=${APIKEY}&language=en-US&query=${name}` )
    .then(response=>
        {
            console.log(response)
            if(response.status===200)
            {
                dispatch({ type: GET_MOVIE_LIST_REQUEST, payload: response.data.results });
            }
        })
        .catch(error=>
            {
                console.log(error.response.data['message'])
             dispatch({type:REQUEST_FAILURE,payload:error.response.data['message']});
            })
}
export const getMovieDetailById = (id) => async (dispatch) => {
    dispatch({ type: FETCH_REQUEST})
    await baseURL.get(`3/movie/${id}?api_key=${APIKEY}&language=en-US` )
    .then(response=>
        {
            console.log(response)
            if(response.status===200)
            {
                dispatch({ type: GET_MOVIE_DETAIL_REQUEST, payload: response.data });
            }
        })
        .catch(error=>
            {
                console.log(error.response.data['message'])
             dispatch({type:REQUEST_FAILURE,payload:error.response.data['message']});
            })
}
