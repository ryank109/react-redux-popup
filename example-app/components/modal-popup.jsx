import { Component } from 'react';
import { Modal } from 'react-redux-popup';

class ModalPopup extends Component {
    render() {
        return (
            <div className="modal-container">
                <label>This is modal popup</label>
                <button onClick={() => this.props.closePopup(this.props.id)}>OK</button>
            </div>
        );
    }
}

export default Modal(ModalPopup);
