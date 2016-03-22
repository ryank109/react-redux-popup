import { combineReducers, createStore } from 'redux';
import { popupReducer } from 'react-redux-popup';

const reducers = combineReducers({ popup: popupReducer });
export default createStore(reducers);
