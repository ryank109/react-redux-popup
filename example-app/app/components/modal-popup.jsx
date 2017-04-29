import { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, closePopup } from 'react-redux-popup';
import Menus from 'app/menus2';
import store from 'app/store';

const doSomethingAction = () => ({ type: 'DO_SOMETHING' });
const selector = state => state.modal;

class ModalPopup extends Component {
    render() {
        return (
            <div>
                <label>This is modal popup</label>
                <label>Open menu from the modal</label>
                <Menus />
                <button onClick={this.props.doSomethingAction}>Activate</button>
                <button onClick={() => this.props.closePopup(this.props.id)}>OK</button>
                {this.props.isActivated && <label>Activated!</label>}
            </div>
        );
    }
}

export default Modal(connect(selector, { closePopup, doSomethingAction })(ModalPopup));
