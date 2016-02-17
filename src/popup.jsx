import { connect } from 'react-redux';
import HigherOrderPopupComponent, { popupSelector } from 'rrp/higher-order-popup-component';
import * as popupActions from 'rrp/actions';

export default function(ComposedComponent) {
    class Popup extends HigherOrderPopupComponent(ComposedComponent) {
        constructor(props) {
            super(props);
            this.closePopup = (event) => {
                props.dispatch(popupActions.closePopup(props.id));
            };
        }

        componentWillMount() {
            super.componentWillMount();
            this.popup.addEventListener('mouseup', this.stopEvent);
        }

        componentWillUnmount() {
            this.popup.removeEventListener('mouseup', this.stopEvent);
            super.componentWillUnmount();
        }

        renderPopup() {
            if (!this.popup) { return; }
            super.renderPopup();

            if (this.props[this.props.id]) {
                setTimeout(() => window.addEventListener('mouseup', this.closePopup), 0);
            } else {
                setTimeout(() => window.removeEventListener('mouseup', this.closePopup), 0);
            }
        }

        stopEvent(event) {
            event.stopPropagation();
        }
    }

    return connect(popupSelector)(Popup);
}
