import { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, popupActions } from 'react-redux-popup';
import Menus from 'app/menus2';
import store from 'app/store';

const selector = state => state.modal;

class ModalPopup extends Component {
    render() {
        return (
            <div>
                <label>This is modal popup</label>
                <label>Open menu from the modal</label>
                <Menus />
                <button onClick={this.activate.bind(this)}>Activate</button>
                <button onClick={() => this.props.dispatch(popupActions.closePopup(this.props.id))}>OK</button>
                {this.props.isActivated && <label>Activated!</label>}
            </div>
        );
    }

    activate() {
        this.props.dispatch({
            type: 'DO_SOMETHING'
        });
    }
}

export default Modal(connect(selector)(ModalPopup));
