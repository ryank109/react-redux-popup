import { Component, PropTypes } from 'react';
import HigherOrderPopupComponent from 'rrp/higher-order-popup-component';

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
        }

        componentDidMount() {
            const modal = document.getElementsByClassName(`js-modal-${this.props.id}`)[0];
            this.setState({
                style: {
                    left: (window.innerWidth - modal.clientWidth) / 2,
                    top: (window.innerHeight - modal.clientHeight) / 2
                }
            });
        }

        render() {
            const className = `js-modal-${this.props.id} ${this.props.popupClassName ? this.props.popupClassName : ''}`;
            const style = {
                ...this.state.style,
                ...this.props.style
            };

            return (
                <div id={this.props.id}>
                    <div className={this.props.layoverClassName} />
                    <div className={className} style={style}>
                        <ComposedComponent {...this.props} />
                    </div>
                </div>
            );
        }
    }

    Modal.propTypes = PROP_TYPES;

    return HigherOrderPopupComponent(Modal);
}
