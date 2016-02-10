import _ from 'lodash';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import * as popupActions from 'rrp/actions';
import popupReducer from 'rrp/reducer';

const PROP_TYPES = {
    id: PropTypes.string.isRequired
};

const popupSelector = state => state.popup;

const Popup = function(ComposedComponent) {
    class HigherOrderedPopupComponent extends Component {
        constructor(props) {
            super(props);
            this.closePopup = (event) => {
                props.dispatch(popupActions.closePopup(props.id));
            };
        }

        componentWillMount() {
            this.popup = document.createElement('div');
            document.body.appendChild(this.popup);
            this.popup.addEventListener('mouseup', this.stopEvent);
            this.renderPopup();
        }

        componentWillUnmount() {
            unmountComponentAtNode(this.popup);
            document.removeChild(this.popup);
            this.popup.removeEventListener('mouseup', this.stopEvent);
            this.popup = null;
        }

        componentDidUpdate() {
            this.renderPopup();
        }

        renderPopup() {
            if (!this.popup) { return; }
            if (this.props[this.props.id]) {

                // TODO: do a better calculation for the position
                const { bottom, left } = this.props[`${this.props.id}.rect`];
                this.popup.style.position = 'absolute';
                this.popup.style.top = `${bottom}px`;
                this.popup.style.left = `${left}px`;
                render(<ComposedComponent {...this.props} />, this.popup);

                _.defer(() => window.addEventListener('mouseup', this.closePopup));
            } else {
                unmountComponentAtNode(this.popup);
                _.defer(() => window.removeEventListener('mouseup', this.closePopup));
            }
        }

        render() {
            return null;
        }

        stopEvent(event) {
            event.stopPropagation();
        }
    }

    HigherOrderedPopupComponent.propTypes = PROP_TYPES;

    return connect(popupSelector)(HigherOrderedPopupComponent);
}

export {
    Popup,
    popupActions,
    popupReducer
};
