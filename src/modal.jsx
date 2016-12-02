import { Component, PropTypes } from 'react';
import HigherOrderPopupComponent from 'rrp/higher-order-popup-component';
import { TYPE_MODAL } from 'rrp/popup-collection';

const PROP_TYPES = {
    id: PropTypes.string.isRequired,
    layoverClassName: PropTypes.string,
    popupClassName: PropTypes.string,
    style: PropTypes.object
};

export default function(ComposedComponent) {
    class Modal extends Component {
        constructor(props) {
            super(props);
            this.state = { style: {} };
            this.setModalRef = el => {
                this.modal = el;
            };
        }

        componentDidMount() {
            const { clientHeight, clientWidth } = this.modal;
            // eslint-disable-next-line react/no-did-mount-set-state
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
                    <div className={className} ref={this.setModalRef} style={style}>
                        <ComposedComponent {...this.props} />
                    </div>
                </div>
            );
        }
    }

    Modal.propTypes = PROP_TYPES;

    return HigherOrderPopupComponent(Modal, TYPE_MODAL);
}
