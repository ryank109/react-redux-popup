import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shallowEqual from 'fbjs/lib/shallowEqual';
import { updatePopupProps, closePopup } from 'rrp/actions';
import { add, remove, update } from 'rrp/popup-collection';

export const HigherOrderPopupComponent = (ComposedComponent, type) => {
    class PopupComponent extends Component {
        componentWillMount() {
            add(type, ComposedComponent, this.props);
        }

        shouldComponentUpdate(nextProps) {
            if (!shallowEqual(nextProps, this.props)) {
                update(nextProps.id, nextProps);
                this.props.updatePopupProps(nextProps.id, nextProps);
            }

            // this is empty component, so don't need to update
            return false;
        }

        componentWillUnmount() {
            remove(this.props.id);
            if (this.props.closePopup) {
                this.props.closePopup(this.props.id);
                return;
            }
            this.props.dispatch(closePopup(this.props.id));
        }

        render() {
            return null;
        }
    }

    PopupComponent.displayName = 'HigherOrderPopupComponent';
    PopupComponent.propTypes = {
        closePopup: PropTypes.func,
        dispatch: PropTypes.func,
        id: PropTypes.string.isRequired,
        updatePopupProps: PropTypes.func.isRequired
    };

    return PopupComponent;
};

export default (ComposedComponent, type) => connect(
    null,
    { updatePopupProps }
)(HigherOrderPopupComponent(ComposedComponent, type));
