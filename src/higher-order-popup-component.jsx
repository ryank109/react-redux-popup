import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updatePopupProps, closePopup } from 'rrp/actions';
import collection from 'rrp/popup-collection';

const PROP_TYPES = {
    closePopup: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    updatePopupProps: PropTypes.func.isRequired
};

export default function(ComposedComponent, type) {
    class HigherOrderPopupComponent extends Component {
        componentWillMount() {
            collection.push([type, ComposedComponent, this.props]);
        }

        componentWillReceiveProps(nextProps) {
            collection.update(nextProps.id, nextProps);
            this.props.updatePopupProps(nextProps.id, nextProps);
        }

        componentWillUnmount() {
            collection.remove(this.props.id);
            this.props.closePopup(this.props.id);
        }

        render() {
            return null;
        }
    }

    HigherOrderPopupComponent.propTypes = PROP_TYPES;
    return connect(null, { updatePopupProps, closePopup })(HigherOrderPopupComponent);
}
