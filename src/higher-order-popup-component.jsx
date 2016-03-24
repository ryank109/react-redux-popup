import { Component, PropTypes } from 'react';
import { connect, Provider } from 'react-redux';
import { findDOMNode, render, unmountComponentAtNode } from 'react-dom';
import * as popupActions from 'rrp/actions';

const PROP_TYPES = {
    id: PropTypes.string.isRequired,
    popupClassName: PropTypes.string
};

export const popupSelector = state => state.popup;

export default function(ComposedComponent, store) {
    class HigherOrderPopupComponent extends Component {
        componentWillMount() {
            this.popup = document.createElement('div');
            if (this.props.popupClassName) {
                this.popup.className = this.props.popupClassName;
            }
            document.body.appendChild(this.popup);
            this.renderPopup();
        }

        componentWillUnmount() {
            unmountComponentAtNode(this.popup);
            document.body.removeChild(this.popup);
            this.popup = null;
        }

        componentDidUpdate() {
            this.renderPopup();
        }

        calculatePosition(popup) {
            // TODO: do a better calculation for the position
            const { bottom, left } = this.props[`${this.props.id}.rect`];
            popup.style.top = `${bottom}px`;
            popup.style.left = `${left}px`;
        }

        renderPopup() {
            if (!this.popup) { return; }
            if (this.props[this.props.id]) {
                this.popup.style.position = 'absolute';
                this.popup.style.display = 'block';
                if (store) {
                    render(<Provider store={store}><ComposedComponent {...this.props} /></Provider>, this.popup);
                } else {
                    render(<ComposedComponent {...this.props} />, this.popup);
                }

                this.calculatePosition(this.popup);
            } else {
                this.popup.style.display = 'none';
                unmountComponentAtNode(this.popup);
            }
        }

        render() {
            return null;
        }
    }

    HigherOrderPopupComponent.propTypes = PROP_TYPES;
    return HigherOrderPopupComponent;
}
