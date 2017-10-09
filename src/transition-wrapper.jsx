import CSSTransition from 'react-transition-group/CSSTransition';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import { getPortalElement } from './portal';

export default class TransitionWrapper extends PureComponent {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        const portal = this.props.getPortalElement();
        if (portal) {
            portal.appendChild(this.el);
        }
    }

    componentWillUpdate(nextProps) {
        if (this.props.isPortalReady !== nextProps.isPortalReady && nextProps.isPortalReady) {
            // this should really happen only once
            this.props.getPortalElement().appendChild(this.el);
        }
    }

    componentWillUnmount() {
        const portal = this.props.getPortalElement();
        if (portal) {
            portal.removeChild(this.el);
        }
        this.el = null;
    }

    render() {
        return createPortal((
            <CSSTransition
                classNames={this.props.transitionName}
                in={this.props.isOpen}
                timeout={{
                    enter: this.props.transitionEnterTimeout,
                    exit: this.props.transitionExitTimeout,
                }}
                unmountOnExit
            >
                {this.props.render()}
            </CSSTransition>
        ), this.el);
    }
}

TransitionWrapper.propTypes = {
    getPortalElement: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    isPortalReady: PropTypes.bool.isRequired,
    render: PropTypes.func.isRequired,
    transitionEnterTimeout: PropTypes.number.isRequired,
    transitionExitTimeout: PropTypes.number.isRequired,
    transitionName: PropTypes.string.isRequired,
};

TransitionWrapper.defaultProps = {
    getPortalElement,
    isOpen: false,
    isPortalReady: false,
};
