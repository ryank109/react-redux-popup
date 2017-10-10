import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

window.React = require('react');

// Monkey patch RAF until jest does
window.requestAnimationFrame = callback => window.setTimeout(callback, 0);
