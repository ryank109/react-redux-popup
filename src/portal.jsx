import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { portalInitialized } from './actions';

let PORTAL_ELEMENT;

export function setPortalElement(elem) {
    PORTAL_ELEMENT = elem;
}

export function getPortalElement() {
    return PORTAL_ELEMENT;
}

export class Portal extends Component {
    componentDidMount() {
        this.props.portalInitialized();
    }

    shouldComponentUpdate() {
        // nothing to update... EVER
        return false;
    }

    render() {
        return <div ref={setPortalElement} />;
    }
}

Portal.propTypes = {
    portalInitialized: PropTypes.func.isRequired,
};

export default connect(null, { portalInitialized })(Portal);
