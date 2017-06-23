import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import collection, { TYPE_MODAL, TYPE_POPUP } from 'rrp/popup-collection';

export const popupSelector = state => state.popup;

function renderPopups(popupType, props) {
    return collection
        .filter(popup => popup[0] === popupType && props[popup[2].id])
        // eslint-disable-next-line no-unused-vars
        .map(([type, Popup, popupProps]) => <Popup key={popupProps.id} {...popupProps} />);
}

export const Portal = props => (
    <div>
        <CSSTransitionGroup
            transitionName={props.modalTransitionName}
            transitionEnterTimeout={props.modalTransitionEnterTimeout}
            transitionLeaveTimeout={props.modalTransitionLeaveTimeout}
        >
            {renderPopups(TYPE_MODAL, props)}
        </CSSTransitionGroup>
        <CSSTransitionGroup
            transitionName={props.popupTransitionName}
            transitionEnterTimeout={props.popupTransitionEnterTimeout}
            transitionLeaveTimeout={props.popupTransitionLeaveTimeout}
        >
            {renderPopups(TYPE_POPUP, props)}
        </CSSTransitionGroup>
    </div>
);

Portal.displayName = 'Portal';

Portal.propTypes = {
    modalTransitionName: PropTypes.string.isRequired,
    modalTransitionEnterTimeout: PropTypes.number.isRequired,
    modalTransitionLeaveTimeout: PropTypes.number.isRequired,
    popupTransitionName: PropTypes.string.isRequired,
    popupTransitionEnterTimeout: PropTypes.number.isRequired,
    popupTransitionLeaveTimeout: PropTypes.number.isRequired
};

Portal.defaultProps = {
    modalTransitionName: 'modal',
    modalTransitionEnterTimeout: 0,
    modalTransitionLeaveTimeout: 0,
    popupTransitionName: 'popup',
    popupTransitionEnterTimeout: 0,
    popupTransitionLeaveTimeout: 0
};

export default connect(popupSelector)(Portal);
