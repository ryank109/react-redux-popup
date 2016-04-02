import { combineReducers, compose, createStore } from 'redux';
import { popupReducer } from 'react-redux-popup';

const reducers = combineReducers({ popup: popupReducer });
const createStoreWithMiddleware = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
export default createStoreWithMiddleware(reducers);
