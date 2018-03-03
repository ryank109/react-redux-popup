import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, compose, createStore } from 'redux';
import { Popup, Portal, popupReducer, openPopup, refreshPopupPosition } from 'react-redux-popup';

const reducers = combineReducers({
    popup: popupReducer
});

const store = createStore(reducers);

const el = document.getElementById('example');
window.addEventListener('scroll', () => {
    console.log('scroll');
    store.dispatch(refreshPopupPosition());
});

const PopupContent = () => (
    <ul>
        <li>Menu1</li>
        <li>Menu2</li>
        <li>Menu3</li>
        <li>Menu4</li>
    </ul>
);

class Example extends Component {
    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <Fragment>
                <a
                    className="btn"
                    onClick={() => store.dispatch(openPopup('popup1'))}
                    ref={el => { this.buttonEl = el; }}
                    style={{ width: 155, backgroundColor: 'cadetblue' }}
                >
                    Show Popup Menu
                </a>
                <Popup
                    className="popup-menu"
                    getRect={() => { console.log(this.buttonEl.getBoundingClientRect()); return this.buttonEl.getBoundingClientRect(); }}
                    id="popup1"
                    render={() => <PopupContent />}
                />
                <Portal />
            </Fragment>
        );
    }
}

render(<Provider store={store}><Example /></Provider>, el);
