import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from 'app/app';
import store from 'app/store';

// require style to generate one css file
require('styles/main.scss');

const mainApp = document.getElementById('mainApp');
render(<Provider store={store}><App /></Provider>, mainApp);
