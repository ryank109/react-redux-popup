import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalComponent from './modal-component';
import { popupSelector } from './popup';
import { getPortalElement } from './portal';
import TransitionWrapper from './transition-wrapper';

export const Modal = props => (
    <TransitionWrapper
        getPortalElement={props.getPortalElement}
        isOpen={!!props[props.id]}
        isPortalReady={props.isPortalReady}
        render={() => (
            <ModalComponent
                className={props.className}
                layoverClassName={props.layoverClassName}
                render={props.render}
                style={props.style}
            />
        )}
        transitionEnterTimeout={props.transitionEnterTimeout}
        transitionExitTimeout={props.transitionExitTimeout}
        transitionName={props.transitionName}
    />
);

Modal.propTypes = {
    className: PropTypes.string,
    getPortalElement: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    isPortalReady: PropTypes.bool.isRequired,
    layoverClassName: PropTypes.string,
    render: PropTypes.func.isRequired,
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    transitionEnterTimeout: PropTypes.number.isRequired,
    transitionExitTimeout: PropTypes.number.isRequired,
    transitionName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            appear: PropTypes.string,
            appearActive: PropTypes.string,
            enter: PropTypes.string,
            enterActive: PropTypes.string,
            exit: PropTypes.string,
            exitActive: PropTypes.string,
        }),
    ]).isRequired,
};

Modal.defaultProps = {
    getPortalElement,
    className: 'modal-container',
    layoverClassName: 'modal-layover',
    isPortalReady: false,
    transitionEnterTimeout: 300,
    transitionExitTimeout: 300,
    transitionName: 'modal',
};

export default connect(popupSelector)(Modal);
