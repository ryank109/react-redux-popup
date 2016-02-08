import _ from 'lodash';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from 'rrp/app';
import popup from 'rrp/popup/reducer';

// require style to generate one css file
require('../styles/main.scss');

const reducers = combineReducers({ popup });
const store = createStore(reducers);

const mainApp = document.getElementById('mainApp');
render(<Provider store={store}><App /></Provider>, mainApp);
