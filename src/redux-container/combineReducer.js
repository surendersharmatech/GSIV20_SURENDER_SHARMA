import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import movieReducer from './movie/reducer';

const createRootReducer = (history) => combineReducers({
    movie:movieReducer,
  
    router: connectRouter(history),
  
})
export default createRootReducer
