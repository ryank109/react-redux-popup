import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closePopup } from './actions';
import PopupComponent from './popup-component';
import { getPortalElement } from './portal';
import TransitionWrapper from './transition-wrapper';

export const popupSelector = state => state.popup;

export class Popup extends PureComponent {
    constructor(props) {
        super(props);
        this.closePopupHandler = () => {
            if (props.closePopup) {
                props.closePopup(props.id);
                return;
            }
            props.dispatch(closePopup(props.id));
        };
    }

    render() {
        return (
            <TransitionWrapper
                getPortalElement={this.props.getPortalElement}
                isOpen={!!this.props[this.props.id]}
                isPortalReady={this.props.isPortalReady}
                render={() => (
                    <PopupComponent
                        anchor={this.props.anchor}
                        className={this.props.className}
                        closePopup={this.closePopupHandler}
                        getRect={this.props.getRect}
                        offset={this.props.offset}
                        refreshPosition={this.props.refreshPosition}
                        render={this.props.render}
                        style={this.props.style}
                    />
                )}
                transitionEnterTimeout={this.props.transitionEnterTimeout}
                transitionExitTimeout={this.props.transitionExitTimeout}
                transitionName={this.props.transitionName}
            />
        );
    }
}

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
