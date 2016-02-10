import _ from 'lodash';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { popupReducer } from 'react-redux-popup';

import App from 'app/app';

// require style to generate one css file
require('../styles/main.scss');

const reducers = combineReducers({ popup: popupReducer });
const store = createStore(reducers);

const mainApp = document.getElementById('mainApp');
render(<Provider store={store}><App /></Provider>, mainApp);
