import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as popupActions from 'rrp/actions';
import HigherOrderPopupComponent from 'rrp/higher-order-popup-component';
import { TYPE_POPUP } from 'rrp/popup-collection';
import { popupSelector } from 'rrp/portal';

const PROP_TYPES = {
    closePopup: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    popupClassName: PropTypes.string
};

export default function(ComposedComponent) {
    class Popup extends Component {
        constructor(props) {
            super(props);
            this.closePopup = () => {
                props.closePopup(props.id);
            };
            this.setPopupRef = el => {
                this.popup = el;
            };
        }

        componentDidMount() {
            window.addEventListener('mouseup', this.closePopup);
        }

        componentWillUnmount() {
            window.removeEventListener('mouseup', this.closePopup);
        }

        stopEvent(event) {
            event.stopPropagation();
        }

        render() {
            const className = this.props.popupClassName ? this.props.popupClassName : '';
            let style;
            const rectId = `${this.props.id}_rect`;
            if (this.props[rectId]) {
                const { offsetX, offsetY } = this.props;
                style = {
                    ...this.props[rectId]
                };
                style.left -= (offsetX ? offsetX : 0); // eslint-disable-line no-unneeded-ternary
                style.top -= (offsetY ? offsetY : 0); // eslint-disable-line no-unneeded-ternary
            }

            return (
                <div
                    className={className}
                    onMouseUp={this.stopEvent}
                    ref={this.setPopupRef}
                    style={style}
                >
                    <ComposedComponent {...this.props} />
                </div>
            );
        }
    }

    Popup.propTypes = PROP_TYPES;

    return HigherOrderPopupComponent(connect(popupSelector, popupActions)(Popup), TYPE_POPUP);
}
