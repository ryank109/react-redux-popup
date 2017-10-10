import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closePopup } from './actions';
import PopupComponent from './popup-component';
import { getPortalElement } from './portal';
import TransitionWrapper from './transition-wrapper';

export const popupSelector = state => state.popup;

export function closePopupHandler(id, callback, dispatch) {
    return () => {
        if (callback) {
            callback(id);
            return;
        }
        dispatch(closePopup(id));
    };
}

export const Popup = props => (
    <TransitionWrapper
        getPortalElement={props.getPortalElement}
        isOpen={!!props[props.id]}
        isPortalReady={props.isPortalReady}
        render={() => (
            <PopupComponent
                anchor={props.anchor}
                className={props.className}
                closePopup={closePopupHandler(props.id, props.closePopup, props.dispatch)}
                getRect={props.getRect}
                offset={props.offset}
                refreshPosition={props.refreshPosition}
                render={props.render}
                style={props.style}
            />
        )}
        transitionEnterTimeout={props.transitionEnterTimeout}
        transitionExitTimeout={props.transitionExitTimeout}
        transitionName={props.transitionName}
    />
);

Popup.propTypes = {
    anchor: PropTypes.oneOf(['bottom', 'left', 'right', 'top']).isRequired,
    className: PropTypes.string,
    closePopup: PropTypes.func,
    dispatch: PropTypes.func.isRequired,
    getPortalElement: PropTypes.func.isRequired,
    getRect: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    isPortalReady: PropTypes.bool.isRequired,
    offset: PropTypes.number.isRequired,
    refreshPosition: PropTypes.bool.isRequired,
    render: PropTypes.func.isRequired,
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    transitionEnterTimeout: PropTypes.number.isRequired,
    transitionExitTimeout: PropTypes.number.isRequired,
    transitionName: PropTypes.string.isRequired,
};

Popup.defaultProps = {
    anchor: 'bottom',
    getPortalElement,
    isPortalReady: false,
    offset: 0,
    refreshPosition: false,
    transitionEnterTimeout: 100,
    transitionExitTimeout: 100,
    transitionName: 'popup',
};

export default connect(popupSelector)(Popup);
