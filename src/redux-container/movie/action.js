import {baseUrl} from '../../helper/baseURL';
import {  GET_MOVIE_LIST_REQUEST,  REQUEST_FAILURE, FETCH_REQUEST } from './type'


export const getLibraryList = () => async (dispatch) => {
    dispatch({ type: FETCH_REQUEST})
    await baseUrl.get('/getlist' )
    .then(response=>
        {
            if(response.data.status===200)
            {
                dispatch({ type: GET_MOVIE_LIST_REQUEST, payload: response });
            }
        })
        .catch(error=>
            {
                console.log(error.response.data['message'])
             dispatch({type:REQUEST_FAILURE,payload:error.response.data['message']});
            })
}
