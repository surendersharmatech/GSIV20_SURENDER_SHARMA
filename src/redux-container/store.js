
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './combineReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const history = createBrowserHistory();
console.log(history);
export default createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(reduxThunk, routerMiddleware(history),
    ))
)
