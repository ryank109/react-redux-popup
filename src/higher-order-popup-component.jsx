import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updatePopupProps, closePopup } from 'rrp/actions';
import collection from 'rrp/popup-collection';

const PROP_TYPES = {
    id: PropTypes.string.isRequired
};

export default function(ComposedComponent, type) {
    class HigherOrderPopupComponent extends Component {
        componentWillMount() {
            collection.push([ type, ComposedComponent, this.props ]);
        }

        componentWillUnmount() {
            collection.remove(this.props.id);
            this.props.closePopup(this.props.id);
        }

        componentWillReceiveProps(nextProps) {
            collection.update(nextProps.id, nextProps);
            this.props.updatePopupProps(nextProps.id, nextProps);
        }

        render() {
            return null;
        }
    }

    HigherOrderPopupComponent.propTypes = PROP_TYPES;
    return connect(null, { updatePopupProps, closePopup })(HigherOrderPopupComponent);
}
