import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closePopup } from 'rrp/actions';
import HigherOrderPopupComponent from 'rrp/higher-order-popup-component';
import { TYPE_POPUP } from 'rrp/popup-collection';
import { popupSelector } from 'rrp/portal';
import { getPopupPosition } from 'rrp/utils';

const PROP_TYPES = {
    anchor: PropTypes.oneOf(['bottom', 'left', 'right', 'top']),
    closePopup: PropTypes.func.isRequired,
    getRect: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    popupClassName: PropTypes.string,
    refreshPosition: PropTypes.bool,
    offset: PropTypes.number.isRequired
};

export const HOCPopup = ComposedComponent => {
    class Popup extends Component {
        constructor(props) {
            super(props);
            this.state = {};

            this.closePopup = () => {
                props.closePopup(props.id);
            };
            this.refreshPositionHandler = () => this.refreshPosition();
        }

        componentDidMount() {
            this.setPopupPosition();
            window.addEventListener('mouseup', this.closePopup);
            window.addEventListener('resize', this.refreshPositionHandler);
        }

        componentWillReceiveProps(nextProps) {
            if (this.props.refreshPosition !== nextProps.refreshPosition) {
                this.refreshPosition();
            }
        }

        componentWillUnmount() {
            window.removeEventListener('mouseup', this.closePopup);
            window.removeEventListener('resize', this.refreshPositionHandler);
        }

        setPopupPosition() {
            const style = getPopupPosition(
                this.props.anchor,
                this.props.getRect(),
                this.popup.clientWidth,
                this.popup.clientHeight,
                window.innerWidth,
                window.innerHeight,
                this.props.offset);
            this.setState({ style });
        }

        refreshPosition() {
            window.requestAnimationFrame(() => this.setPopupPosition());
        }

        stopEvent(event) {
            event.stopPropagation();
        }

        render() {
            return (
                <div
                    className={this.props.popupClassName}
                    onMouseUp={this.stopEvent}
                    ref={e => { this.popup = e; }}
                    style={this.state.style}
                >
                    <ComposedComponent {...this.props} />
                </div>
            );
        }
    }

    Popup.defaultProps = {
        anchor: 'bottom',
        offset: 0
    };

    Popup.propTypes = PROP_TYPES;
    return Popup;
};

export default ComposedComponent => HigherOrderPopupComponent(
    connect(popupSelector, { closePopup })(HOCPopup(ComposedComponent)), TYPE_POPUP);
