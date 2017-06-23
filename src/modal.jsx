import { Component } from 'react';
import PropTypes from 'prop-types';
import HigherOrderPopupComponent from 'rrp/higher-order-popup-component';
import { TYPE_MODAL } from 'rrp/popup-collection';

const PROP_TYPES = {
    id: PropTypes.string.isRequired,
    layoverClassName: PropTypes.string,
    popupClassName: PropTypes.string,
    style: PropTypes.object
};

export const HOCModal = ComposedComponent => {
    class Modal extends Component {
        constructor(props) {
            super(props);
            this.resizeHandler =
                () => window.requestAnimationFrame(() => this.updatePosition());
            this.state = { style: {} };
        }

        componentDidMount() {
            this.updatePosition();
            window.addEventListener('resize', this.resizeHandler);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.resizeHandler);
        }

        updatePosition() {
            const { clientHeight, clientWidth } = this.modal;
            this.setState({
                style: {
                    left: (window.innerWidth - clientWidth) / 2,
                    top: (window.innerHeight - clientHeight) / 2
                }
            });
        }

        render() {
            const className = `${this.props.popupClassName ? this.props.popupClassName : ''}`;
            const style = {
                ...this.state.style,
                ...this.props.style
            };

            return (
                <div id={this.props.id}>
                    <div className={this.props.layoverClassName} />
                    <div className={className} ref={e => { this.modal = e; }} style={style}>
                        <ComposedComponent {...this.props} />
                    </div>
                </div>
            );
        }
    }

    Modal.displayName = 'Modal';
    Modal.propTypes = PROP_TYPES;
    return Modal;
};

export default ComposedComponent => HigherOrderPopupComponent(
    HOCModal(ComposedComponent), TYPE_MODAL);
