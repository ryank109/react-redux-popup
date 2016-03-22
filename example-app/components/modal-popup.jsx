import { Component } from 'react';
import { Modal } from 'react-redux-popup';
import Menus from 'app/menus2';
import store from 'app/store';

class ModalPopup extends Component {
    render() {
        return (
            <div className="modal-container">
                <label>This is modal popup</label>
                <label>Open menu from the modal</label>
                <Menus />
                <button onClick={() => this.props.closePopup(this.props.id)}>OK</button>
            </div>
        );
    }
}

export default Modal(ModalPopup, store);
