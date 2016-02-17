import { PropTypes } from 'react';
import { connect } from 'react-redux';
import HigherOrderPopupComponent, { popupSelector } from 'rrp/higher-order-popup-component';
import * as popupActions from 'rrp/actions';

const PROP_TYPES = {
    id: PropTypes.string.isRequired,
    layoverClassName: PropTypes.string
};

export default function(ComposedComponent) {
    class Modal extends HigherOrderPopupComponent(ComposedComponent) {
        constructor(props) {
            super(props);
            this.closePopup = (event) => {
                props.dispatch(popupActions.closePopup(props.id));
            };
        }

        componentWillMount() {
            this.layover = document.createElement('div');
            if (this.props.layoverClassName) {
                this.layover.className = this.props.layoverClassName;
            }
            document.body.appendChild(this.layover);
            super.componentWillMount();
        }

        componentWillUnmount() {
            document.removeChild(this.layover);
            this.layover = null;
            super.componentWillUnmount();
        }

        calculatePosition(popup) {
            popup.style.left = `${(window.innerWidth - popup.clientWidth) / 2}px`;
            popup.style.top = `${(window.innerHeight - popup.clientHeight) / 2}px`;
        }

        renderPopup() {
            if (!this.popup) { return; }
            super.renderPopup();

            if (this.props[this.props.id]) {
                this.layover.style.display = 'block';
            } else {
                this.layover.style.display = 'none';
            }
        }
    }

    Modal.propTypes = PROP_TYPES;

    return connect(popupSelector)(Modal);
}
