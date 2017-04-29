import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updatePopupProps, closePopup } from 'rrp/actions';
import { add, remove, update } from 'rrp/popup-collection';

export const HigherOrderPopupComponent = (ComposedComponent, type) => {
    class PopupComponent extends Component {
        componentWillMount() {
            add(type, ComposedComponent, this.props);
        }

        componentWillReceiveProps(nextProps) {
            update(nextProps.id, nextProps);
            this.props.updatePopupProps(nextProps.id, nextProps);
        }

        componentWillUnmount() {
            remove(this.props.id);
            this.props.closePopup(this.props.id);
        }

        render() {
            return null;
        }
    }

    PopupComponent.propTypes = {
        closePopup: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired,
        updatePopupProps: PropTypes.func.isRequired
    };

    return PopupComponent;
};

export default (ComposedComponent, type) => connect(
    null,
    { updatePopupProps, closePopup }
)(HigherOrderPopupComponent(ComposedComponent, type));
