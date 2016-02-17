import { Component } from 'react';
import { connect } from 'react-redux';
import { popupActions } from 'react-redux-popup';
import { bindActionCreators } from 'redux';
import Menus from 'app/menus';
import ModalPopup from 'app/components/modal-popup';

class App extends Component {
    render() {
        const actions = bindActionCreators(popupActions, this.props.dispatch);
        return (
            <div>
                <Menus />
                <button onClick={this.openModal.bind(this)}>Open Modal</button>
                <ModalPopup id="modal1" layoverClassName="modal-layover" closePopup={actions.closePopup}/>
            </div>
        );
    }

    openModal() {
        this.props.dispatch(popupActions.openPopup('modal1'));
    }
}

export default connect(null)(App);
