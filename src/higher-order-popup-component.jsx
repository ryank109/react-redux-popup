import { Component, PropTypes } from 'react';
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
        }

        render() {
            return null;
        }
    }

    HigherOrderPopupComponent.propTypes = PROP_TYPES;
    return HigherOrderPopupComponent;
}
