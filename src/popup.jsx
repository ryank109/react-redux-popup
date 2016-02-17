import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import * as popupActions from 'rrp/actions';

const PROP_TYPES = {
    id: PropTypes.string.isRequired
};

const popupSelector = state => state.popup;

export default function(ComposedComponent) {
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

                setTimeout(() => window.addEventListener('mouseup', this.closePopup), 0);
            } else {
                unmountComponentAtNode(this.popup);
                setTimeout(() => window.removeEventListener('mouseup', this.closePopup), 0);
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
